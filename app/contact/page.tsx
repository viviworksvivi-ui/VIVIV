"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Globe, CheckCircle, AlertCircle } from "lucide-react"
import { FaqChatbot } from "@/components/faq-chatbot"
import { useI18n } from "@/lib/i18n"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const countries = [
  "France",
  "Belgique",
  "Suisse",
  "Canada",
  "Luxembourg",
  "Monaco",
  "Maroc",
  "Algérie",
  "Tunisie",
  "Sénégal",
  "Côte d'Ivoire",
  "Cameroun",
  "États-Unis",
  "Royaume-Uni",
  "Allemagne",
  "Espagne",
  "Italie",
  "Pays-Bas",
  "Dubaï (EAU)",
  "Australie",
  "Autre",
]

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "contact@viviworks.ai",
    description: "Réponse sous 24h",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+33665758583",
    description: "Lun-Ven 9h-18h",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "24-26 Arcadia Avenue, Fin0000, Londres, Royaume-Uni, N3 2JU",
    description: "Rendez-vous sur RDV",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lundi - Vendredi\n9h00 - 18h00",
    description: "Fermé le weekend",
  },
]

const services = [
  "Site Web",
  "Site Web IA",
  "Application Mobile",
  "Application Mobile IA",
]

export default function ContactPage() {
  const { t } = useI18n()
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Succès
        setSubmitStatus('success')
        // Réinitialiser le formulaire
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          service: '',
          message: ''
        })
        // Masquer le message après 10 secondes
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 10000)
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitStatus('error')
      // Masquer le message d'erreur après 10 secondes
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 10000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">{t('contact.hero.title')}</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">{t('contact.hero.subtitle')}</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Parlez-nous de votre projet
                </CardTitle>
                <p className="text-muted-foreground">
                  Remplissez ce formulaire et nous vous recontacterons dans les 24h.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t('contact.form.firstName')}</Label>
                        <Input 
                          id="firstName" 
                          placeholder={t('contact.form.firstNamePlaceholder')} 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t('contact.form.lastName')}</Label>
                        <Input 
                          id="lastName" 
                          placeholder={t('contact.form.lastNamePlaceholder')} 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.form.email')}</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder={t('contact.form.emailPlaceholder')} 
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder={t('contact.form.phonePlaceholder')} 
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">{t('contact.form.company')}</Label>
                        <Input 
                          id="company" 
                          placeholder={t('contact.form.companyPlaceholder')} 
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">
                          <Globe className="inline h-4 w-4 mr-2" />
                          Pays
                        </Label>
                        <Select value={formData.country} onValueChange={(value) => handleSelectChange('country', value)}>
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Sélectionnez votre pays" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">{t('contact.form.service')}</Label>
                      <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('contact.form.servicePlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.form.message')}</Label>
                      <Textarea
                        id="message"
                        placeholder={t('contact.form.messagePlaceholder')}
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 hover:scale-105 transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          {t('contact.form.submit')}
                        </>
                      )}
                    </Button>

                    {/* Message de confirmation/erreur */}
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-fade-in-down">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-green-800 font-semibold">Message envoyé avec succès !</p>
                          <p className="text-green-700 text-sm mt-1">
                            Nous vous recontacterons sous 24h. Consultez votre email pour découvrir nos packages.
                          </p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-fade-in-down">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-red-800 font-semibold">Erreur lors de l'envoi</p>
                          <p className="text-red-700 text-sm mt-1">
                            Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </form>

                <p className="text-sm text-muted-foreground text-center">
                  {t('contact.form.privacy')}
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">{t('contact.info.title')}</h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <Card key={index} className="border-border/50">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                              <p className="text-foreground whitespace-pre-line">{info.content}</p>
                              <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Besoin d'une réponse rapide ?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Pour une consultation urgente ou des questions techniques, contactez-nous directement.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Phone className="mr-2 h-4 w-4" />
                      {t('contact.info.call')}
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Mail className="mr-2 h-4 w-4" />
                      {t('contact.info.email')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">{t('contact.map.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {t('contact.map.subtitle')}
            </p>
          </div>

          <Card className="border-border/50 overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground">{t('contact.map.cardTitle')}</p>
                <p className="text-muted-foreground">{t('contact.map.address')}</p>
                <Button className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('contact.map.button')}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">{t('contact.faq.title')}</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: t('contact.faq.q1.question'),
                answer: t('contact.faq.q1.answer'),
              },
              {
                question: t('contact.faq.q2.question'),
                answer: t('contact.faq.q2.answer'),
              },
              {
                question: t('contact.faq.q3.question'),
                answer: t('contact.faq.q3.answer'),
              },
              {
                question: t('contact.faq.q4.question'),
                answer: t('contact.faq.q4.answer'),
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FaqChatbot />
    </main>
  )
}
