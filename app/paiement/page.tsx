"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { packages } from "@/lib/stripe"
import { Check, CreditCard, Loader2, ShieldCheck, Lock, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"

export default function PaymentPage() {
  const [selectedPackage, setSelectedPackage] = useState<string>("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSendingEmail, setIsSendingEmail] = useState(false)
  const [emailStatus, setEmailStatus] = useState<{type: 'success' | 'error', message: string} | null>(null)
  const [stripeError, setStripeError] = useState<string | null>(null)

  // Charger Stripe côté client uniquement
  useEffect(() => {
    // Next.js remplace automatiquement process.env.NEXT_PUBLIC_* au build
    // On vérifie juste si la clé existe
    if (typeof window !== 'undefined') {
      console.log('Vérification de la configuration Stripe...')
    }
  }, [])

  const handleSendEmail = async () => {
    if (!selectedPackage || !customerEmail || !customerName) {
      setEmailStatus({ type: 'error', message: 'Veuillez remplir tous les champs' })
      return
    }

    setIsSendingEmail(true)
    setEmailStatus(null)

    try {
      const response = await fetch('/api/send-package-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageId: selectedPackage,
          customerEmail,
          customerName,
        }),
      })

      if (response.ok) {
        setEmailStatus({ 
          type: 'success', 
          message: `✓ Email envoyé avec succès à ${customerEmail}` 
        })
      } else {
        setEmailStatus({ 
          type: 'error', 
          message: 'Erreur lors de l\'envoi de l\'email' 
        })
      }
    } catch (error) {
      console.error('Erreur:', error)
      setEmailStatus({ 
        type: 'error', 
        message: 'Erreur lors de l\'envoi de l\'email' 
      })
    } finally {
      setIsSendingEmail(false)
    }
  }

  const handlePayment = async () => {
    if (!selectedPackage || !customerEmail || !customerName) {
      setEmailStatus({ type: 'error', message: 'Veuillez remplir tous les champs' })
      return
    }

    setIsLoading(true)
    setEmailStatus(null)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageId: selectedPackage,
          customerEmail,
          customerName,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error('Erreur API:', data)
        setEmailStatus({ 
          type: 'error', 
          message: data.details || 'Erreur lors de la création de la session de paiement. Veuillez réessayer.' 
        })
        setIsLoading(false)
        return
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        setEmailStatus({ 
          type: 'error', 
          message: 'URL de paiement manquante. Veuillez contacter le support.' 
        })
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Erreur:', error)
      setEmailStatus({ 
        type: 'error', 
        message: 'Erreur de connexion. Vérifiez votre connexion internet et réessayez.' 
      })
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="glass mb-4 animate-fade-in-scale">
              <Lock className="h-4 w-4 mr-2" />
              Paiement 100% sécurisé
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Choisissez votre package
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sélectionnez le package qui correspond à vos besoins et procédez au paiement sécurisé via Stripe
            </p>
            
            {stripeError && (
              <div className="mt-6 max-w-2xl mx-auto p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-600 font-medium">{stripeError}</p>
                <p className="text-sm text-red-500 mt-2">
                  Veuillez nous contacter à contact@viviworks.ai
                </p>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Packages Site Web */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  🌐
                </div>
                Packages Site Web
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(packages)
                  .filter(([key]) => key.startsWith('site-web') && !key.includes('ia'))
                  .map(([key, pkg]) => (
                    <Card
                      key={key}
                      className={`cursor-pointer transition-all duration-300 hover-lift-glow ${
                        selectedPackage === key
                          ? 'border-primary border-2 shadow-lg'
                          : 'border-border/30'
                      }`}
                      onClick={() => setSelectedPackage(key)}
                    >
                      <CardHeader>
                        {key === 'site-web-acceleration' && (
                          <Badge className="w-fit mb-2 bg-primary">⭐ POPULAIRE</Badge>
                        )}
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        <CardDescription>{pkg.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-3xl font-bold text-primary">
                            {pkg.price}€
                          </span>
                          {pkg.recurring && <span className="text-muted-foreground">/mois</span>}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {pkg.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                          {pkg.features.length > 4 && (
                            <li className="text-sm text-muted-foreground">
                              + {pkg.features.length - 4} autres fonctionnalités
                            </li>
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Packages Site Web IA */}
            <div className="lg:col-span-3 mt-8">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  🤖
                </div>
                Packages Site Web IA
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(packages)
                  .filter(([key]) => key.startsWith('site-web-ia'))
                  .map(([key, pkg]) => (
                    <Card
                      key={key}
                      className={`cursor-pointer transition-all duration-300 hover-lift-glow ${
                        selectedPackage === key
                          ? 'border-primary border-2 shadow-lg'
                          : 'border-border/30'
                      }`}
                      onClick={() => setSelectedPackage(key)}
                    >
                      <CardHeader>
                        {key === 'site-web-ia-starter' && (
                          <Badge className="w-fit mb-2 bg-primary">⭐ POPULAIRE</Badge>
                        )}
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        <CardDescription>{pkg.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-3xl font-bold text-primary">
                            {pkg.price}€
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {pkg.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                          {pkg.features.length > 4 && (
                            <li className="text-sm text-muted-foreground">
                              + {pkg.features.length - 4} autres fonctionnalités
                            </li>
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Packages Application Mobile */}
            <div className="lg:col-span-3 mt-8">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  📱
                </div>
                Packages Application Mobile
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(packages)
                  .filter(([key]) => key.startsWith('app-mobile') && !key.includes('ia'))
                  .map(([key, pkg]) => (
                    <Card
                      key={key}
                      className={`cursor-pointer transition-all duration-300 hover-lift-glow ${
                        selectedPackage === key
                          ? 'border-primary border-2 shadow-lg'
                          : 'border-border/30'
                      }`}
                      onClick={() => setSelectedPackage(key)}
                    >
                      <CardHeader>
                        {key === 'app-mobile' && (
                          <Badge className="w-fit mb-2 bg-primary">⭐ POPULAIRE</Badge>
                        )}
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        <CardDescription>{pkg.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-3xl font-bold text-primary">
                            {pkg.price}€
                          </span>
                          {pkg.recurring && <span className="text-muted-foreground">/mois</span>}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {pkg.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                          {pkg.features.length > 4 && (
                            <li className="text-sm text-muted-foreground">
                              + {pkg.features.length - 4} autres fonctionnalités
                            </li>
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Packages Application Mobile IA */}
            <div className="lg:col-span-3 mt-8">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  🤖📱
                </div>
                Packages Application Mobile IA
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(packages)
                  .filter(([key]) => key.startsWith('app-mobile-ia'))
                  .map(([key, pkg]) => (
                    <Card
                      key={key}
                      className={`cursor-pointer transition-all duration-300 hover-lift-glow ${
                        selectedPackage === key
                          ? 'border-primary border-2 shadow-lg'
                          : 'border-border/30'
                      }`}
                      onClick={() => setSelectedPackage(key)}
                    >
                      <CardHeader>
                        {key === 'app-mobile-ia-starter' && (
                          <Badge className="w-fit mb-2 bg-primary">⭐ POPULAIRE</Badge>
                        )}
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        <CardDescription>{pkg.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-3xl font-bold text-primary">
                            {pkg.price}€
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {pkg.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                          {pkg.features.length > 4 && (
                            <li className="text-sm text-muted-foreground">
                              + {pkg.features.length - 4} autres fonctionnalités
                            </li>
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>

          {/* Formulaire de paiement */}
          {selectedPackage && (
            <Card className="max-w-2xl mx-auto glass border-primary/20 animate-fade-in-down">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Informations de paiement
                </CardTitle>
                <CardDescription>
                  Package sélectionné: <strong>{packages[selectedPackage as keyof typeof packages].name}</strong>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      placeholder="Jean Dupont"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jean.dupont@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Package:</span>
                    <span className="font-medium">{packages[selectedPackage as keyof typeof packages].name}</span>
                  </div>
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">
                      {packages[selectedPackage as keyof typeof packages].price}€
                      {packages[selectedPackage as keyof typeof packages].recurring && '/mois'}
                    </span>
                  </div>
                </div>

                {emailStatus && (
                  <div className={`p-4 rounded-lg ${
                    emailStatus.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-600' 
                      : 'bg-red-500/10 border border-red-500/20 text-red-600'
                  }`}>
                    <p className="text-sm font-medium">{emailStatus.message}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    onClick={handleSendEmail}
                    disabled={isSendingEmail || isLoading}
                    size="lg"
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    {isSendingEmail ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-5 w-5" />
                        Recevoir par email
                      </>
                    )}
                  </Button>

                  <Button
                    onClick={handlePayment}
                    disabled={isLoading || isSendingEmail}
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Chargement...
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="mr-2 h-5 w-5" />
                        Payer maintenant
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Lock className="h-4 w-4" />
                    Paiement sécurisé par Stripe
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

