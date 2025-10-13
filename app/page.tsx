"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ArrowRight, Globe, Code, Settings, Palette, Monitor, Server, TrendingUp, Users, Target, Star, MessageCircle, CheckCircle, Search, ChevronDown, Plus, Minus, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
 
import { useEffect, useState } from "react"
import { defaultTestimonials, loadTestimonialsFromStorage, type Testimonial } from "@/lib/testimonials"
import { useI18n } from "@/lib/i18n"

export default function HomePage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials)
  const [openCases, setOpenCases] = useState(false)
  const [openPortfolio, setOpenPortfolio] = useState(false)
  const { t } = useI18n()

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  useEffect(() => {
    const stored = loadTestimonialsFromStorage()
    if (stored) setTestimonials(stored)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/pexels-kindelmedia-6774944.webp"
            alt="Équipe en réunion autour d'un ordinateur"
            fill
            className="object-cover"
            priority
          />
          {/* Multi-layer overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 mix-blend-overlay"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10"></div>
        <div className="aurora-bg z-10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob z-10" style={{ animationDelay: "2s" }}></div>


        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-down">
          <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
            <span className="text-xs font-medium">Découvrir</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              ✨ Nos Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary text-balance">
              Découvrez nos prestations en{" "}
              <span className="text-secondary relative">
                marketing digital
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent animate-shimmer opacity-20"></div>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Boostez votre visibilité en ligne avec nos solutions digitales innovantes, spécialement conçues pour favoriser la croissance et dynamiser l'engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Développement web */}
            <Card className="border-border/50 bg-gradient-viviworks-card hover-lift group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Développement web</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Vous avez besoin d'une agence web pour la création de sites web ? Nos développeurs sont capables de réaliser des sites vitrines, des catalogues en ligne ainsi que des plateformes e-commerce. Nous vous offrons également un accompagnement pour la création des applications mobiles.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/services/creation-site-web" className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Création site internet</span>
                  </Link>
                  <Link href="/services/devops" className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors">
                    <Settings className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">DevOps</span>
                  </Link>
                  <Link href="/services/maquettes-ux-ui" className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors">
                    <Palette className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Maquettes UX/UI</span>
                  </Link>
                  <Link href="/services/logiciels-sur-mesure" className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors">
                    <Monitor className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Logiciels sur mesure</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Marketing digital */}
            <Card className="border-border/50 bg-gradient-viviworks-card hover-lift group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-secondary">Marketing digital</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Notre agence vous guide dans la mise en place de vos stratégies digitales. Nous plaçons l'ergonomie, la qualité et la performance au cœur de chacun de nos projets. Construisez votre identité numérique et surpassez vos concurrents grâce à nos différentes prestations en marketing digital !
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/services/sea" className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-secondary/10 transition-colors">
                    <Target className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium">SEA (Google Ads, Meta Ads…)</span>
                  </Link>
                  <Link href="/marketing-digital" className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-secondary/10 transition-colors">
                    <Users className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium">Social Media</span>
                  </Link>
                  <Link href="/services/seo" className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-secondary/10 transition-colors">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium">Audit SEO</span>
                  </Link>
                  <Link href="/services/seo" className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-secondary/10 transition-colors">
                    <Star className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium">Référencement naturel SEO</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Réalisations Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary text-balance">
              Nous aidons les entreprises à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                décoller
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Voyez comment nous avons propulsé des entreprises issues de divers domaines vers une forte croissance et un succès digital.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Nous avons accompagné des entreprises aux quatre coins du monde dans l'atteinte de leurs objectifs (Dubaï, Canada, USA, Australie, Maroc, Ghana...).
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Grâce à nos compétences techniques, nous garantissons une présence en ligne optimale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50 bg-gradient-viviworks-card hover-lift overflow-hidden">
              <Collapsible open={openCases} onOpenChange={setOpenCases}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      {t('home.cards.cases.title')}
                    </CardTitle>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="icon" aria-label="Toggle études de cas">
                        {openCases ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </CardHeader>
                <CollapsibleContent className="data-[state=closed]:hidden">
                  <CardContent className="space-y-4 pt-0">
                    <p className="text-muted-foreground leading-relaxed">{t('home.cards.cases.p1')}</p>
                    <p className="text-muted-foreground leading-relaxed">{t('home.cards.cases.p2')}</p>
                    <p className="text-muted-foreground leading-relaxed">{t('home.cards.cases.p3')}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/realisations">{t('home.cards.cases.cta')}</Link>
                    </Button>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            <Card className="border-border/50 bg-gradient-viviworks-card hover-lift overflow-hidden">
              <Collapsible open={openPortfolio} onOpenChange={setOpenPortfolio}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      {t('home.cards.portfolio.title')}
                    </CardTitle>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="icon" aria-label="Toggle portfolio projets">
                        {openPortfolio ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </CardHeader>
                <CollapsibleContent className="data-[state=closed]:hidden">
                  <CardContent className="space-y-4 pt-0">
                    <p className="text-muted-foreground leading-relaxed">{t('home.cards.portfolio.p1')}</p>
                    <p className="text-muted-foreground leading-relaxed">{t('home.cards.portfolio.p2')}</p>
                    <p className="text-muted-foreground leading-relaxed">{t('home.cards.portfolio.p3')}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/realisations">{t('home.cards.portfolio.cta')}</Link>
                    </Button>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary text-balance">
              Gardez une longueur d'avance sur les{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                tendances numériques
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50 bg-gradient-viviworks-card hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Articles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  À travers notre blog, nous partageons régulièrement des articles dédiés au digital, au marketing en ligne et aux nouvelles tendances du web. Notre objectif est d'offrir à nos lecteurs des contenus utiles, pratiques et inspirants.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/blog">Lire nos articles</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-viviworks-card hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Guides pratiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Explorez nos guides pratiques pour maîtriser le digital, améliorer vos compétences en ligne et développer votre présence sur le web. Découvrez nos conseils, analyses et bonnes pratiques pour rester à la pointe du digital.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/blog">Consulter nos guides</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-24 bg-gradient-mesh relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 mb-20">
            <div className="inline-flex items-center gap-2 glass border border-primary/30 text-primary px-6 py-3 rounded-full text-sm font-semibold animate-fade-in-scale shadow-lg">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              ⭐ Témoignages Clients
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-balance">
              Ils ont fait confiance à{" "}
              <span className="text-gradient-vibrant relative inline-block">
                Viviworks
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10 animate-pulse-subtle"></div>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprenez pourquoi notre expertise inspire confiance et génère des résultats de haut niveau
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group border-2 border-border/30 hover:border-primary/50 glass hover-lift-glow card-shine relative overflow-hidden animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="space-y-5">
                    {/* Stars with animation */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-5 w-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" 
                          style={{ transitionDelay: `${i * 0.05}s` }}
                        />
                      ))}
                    </div>
                    
                    {/* Quote with elegant styling */}
                    <blockquote className="text-sm text-muted-foreground leading-relaxed italic group-hover:text-foreground transition-colors min-h-[4rem]">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Author info with enhanced layout */}
                    <div className="pt-4 border-t border-border/50 space-y-2">
                      <p className="font-bold text-foreground group-hover:text-primary transition-colors">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <p className="text-xs text-primary font-semibold">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary text-balance">
              FAQ : nous répondons à toutes vos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Pourquoi choisir une agence digitale comme Viviworks pour votre site web et votre stratégie marketing ?",
                answer: "Chez Viviworks, le conseil en création de site Internet est au cœur de notre expertise. Nos équipes mettent leur expérience à votre service pour concevoir des sites web sur mesure. Aujourd'hui, le potentiel d'un site web performant pour votre entreprise n'est plus à démontrer. Dans un contexte digital, créer un site et avoir une stratégie marketing ne relève plus d'un simple choix. C'est une étape essentielle pour toute entreprise ambitieuse. L'objectif est de mettre en place un dispositif efficace, orienté vers la conversion. Une agence digitale vous conseille sur la stratégie la plus adaptée à votre activité, afin de maximiser vos résultats et votre présence."
              },
              {
                question: "Comment notre agence web, Viviworks, vous accompagne dans la création de votre site Internet ?",
                answer: "La création d'un site Internet implique des enjeux clés et des exigences spécifiques. L'expertise d'une agence de communication interactive comme Viviworks est un atout précieux pour mener à bien ce projet. Agence digitale internationale spécialisée dans la création de sites web, Viviworks réunit tous les métiers du digital au service des entreprises. Faire appel à une agence digitale créative vous permet de bénéficier d'une expertise complète pour le lancement de votre site web. De la définition de votre stratégie digitale à la conception graphique et au développement technique, Viviworks vous accompagne à chaque étape."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-border/50 bg-gradient-viviworks-card hover:shadow-md transition-all duration-300">
                <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-foreground text-left pr-4">
                          {faq.question}
                        </CardTitle>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                            openItems.includes(index) ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed text-pretty">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Découvrons comment nous pouvons faire grandir votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Prenez contact
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/realisations">
                  Découvrez nos réalisations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
