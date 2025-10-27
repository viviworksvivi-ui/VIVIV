"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Mail, CreditCard, AlertCircle, Loader2, Package } from "lucide-react"
import { getQuotesByEmail, type Quote } from "@/lib/quotes"
import { toast } from "sonner"

export default function PaiementSurDevisPage() {
  const searchParams = useSearchParams()
  const emailFromUrl = searchParams.get("email")

  const [email, setEmail] = useState(emailFromUrl || "")
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(false)
  const [processingPayment, setProcessingPayment] = useState<string | null>(null)
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    if (emailFromUrl) {
      handleSearch()
    }
  }, [emailFromUrl])

  const handleSearch = () => {
    if (!email.trim()) {
      toast.error("Veuillez entrer votre adresse email")
      return
    }

    setLoading(true)
    setSearched(true)

    setTimeout(() => {
      const foundQuotes = getQuotesByEmail(email.trim())
      setQuotes(foundQuotes)
      setLoading(false)

      if (foundQuotes.length === 0) {
        toast.info("Aucun devis trouvé pour cette adresse email")
      } else {
        toast.success(`${foundQuotes.length} devis trouvé(s)`)
      }
    }, 500)
  }

  const handlePayment = async (quote: Quote) => {
    try {
      setProcessingPayment(quote.id)

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageName: quote.packageName,
          price: quote.price,
          type: "one-time",
          isCustomQuote: true,
          quoteId: quote.id,
          clientEmail: quote.clientEmail,
          description: quote.description,
          features: quote.features,
        }),
      })

      const data = await response.json()

      if (data.error) {
        toast.error(data.error)
        setProcessingPayment(null)
        return
      }

      // Nouvelle méthode : redirection directe vers l'URL de la session
      if (data.url) {
        window.location.href = data.url
      } else {
        toast.error("Erreur : URL de paiement non disponible")
        setProcessingPayment(null)
      }
    } catch (error) {
      console.error("Payment error:", error)
      toast.error("Une erreur est survenue lors du paiement")
      setProcessingPayment(null)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 mb-12">
            <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              💳 Paiement Sécurisé
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">
              Paiement sur Devis Personnalisé
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Accédez à votre devis personnalisé et procédez au paiement en toute sécurité via Stripe.
            </p>
          </div>

          {/* Formulaire de recherche */}
          <Card className="border-border/50 bg-gradient-viviworks-card hover-lift mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Rechercher mon devis
              </CardTitle>
              <CardDescription>
                Entrez votre adresse email pour retrouver votre devis personnalisé
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Label htmlFor="email" className="sr-only">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    disabled={loading}
                  />
                </div>
                <Button onClick={handleSearch} disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Recherche...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Rechercher
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Résultats */}
          {searched && !loading && (
            <>
              {quotes.length === 0 ? (
                <Card className="border-border/50 bg-gradient-viviworks-card">
                  <CardContent className="p-12 text-center">
                    <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Aucun devis trouvé</h3>
                    <p className="text-muted-foreground">
                      Aucun devis actif n'a été trouvé pour l'adresse email{" "}
                      <strong>{email}</strong>
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Vérifiez votre adresse email ou contactez-nous pour plus d'informations.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-bold text-primary">
                      Vos devis ({quotes.length})
                    </h2>
                  </div>

                  {quotes.map((quote) => (
                    <Card
                      key={quote.id}
                      className="border-2 border-primary/20 bg-gradient-viviworks-card hover-lift"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-2xl text-primary">
                              {quote.packageName}
                            </CardTitle>
                            <CardDescription>
                              Créé le {new Date(quote.createdAt).toLocaleDateString("fr-FR")}
                            </CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-primary">
                              {quote.price.toLocaleString("fr-FR")}€
                            </div>
                            <Badge variant="secondary" className="mt-2">
                              Paiement unique
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Description</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {quote.description}
                          </p>
                        </div>

                        {quote.features && quote.features.length > 0 && (
                          <>
                            <Separator />
                            <div>
                              <h4 className="font-semibold mb-3 text-foreground">
                                Fonctionnalités incluses
                              </h4>
                              <div className="grid gap-2">
                                {quote.features.map((feature, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        )}

                        <Separator />

                        <div className="bg-primary/5 p-4 rounded-lg">
                          <div className="flex items-start gap-3">
                            <CreditCard className="h-5 w-5 text-primary mt-0.5" />
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1 text-foreground">
                                Paiement sécurisé via Stripe
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Votre paiement est sécurisé et protégé par Stripe. Toutes les
                                transactions sont cryptées.
                              </p>
                            </div>
                          </div>
                        </div>

                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                          onClick={() => handlePayment(quote)}
                          disabled={processingPayment === quote.id}
                        >
                          {processingPayment === quote.id ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Redirection vers le paiement...
                            </>
                          ) : (
                            <>
                              <CreditCard className="mr-2 h-5 w-5" />
                              Procéder au paiement - {quote.price.toLocaleString("fr-FR")}€
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Section d'aide */}
          {!searched && (
            <Card className="border-border/50 bg-gradient-viviworks-card mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Besoin d'aide ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Si vous avez reçu un email de notre part avec un lien vers cette page, cliquez
                  simplement sur le lien. Votre devis s'affichera automatiquement.
                </p>
                <p className="text-muted-foreground">
                  Si vous n'avez pas reçu d'email ou si vous rencontrez des difficultés,
                  n'hésitez pas à nous contacter :
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" asChild>
                    <a href="mailto:viviworksvivi@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Nous contacter
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="tel:+33665758583">
                      📞 +33 6 65 75 85 83
                    </a>
                  </Button>
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

