"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Target, BarChart3, Users, TrendingUp, Zap, Globe, Mail, MessageCircle, CheckCircle, Star, Award, Lightbulb, Sparkles, Rocket, Shield, Brain, Eye, MousePointer } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"
import Image from "next/image"

const marketingServices = [
  {
    icon: Target,
    title: "Google Ads",
    subtitle: "Touchez vos clients au bon moment, au bon endroit",
    description: "Optimisez votre visibilité avec Google Ads : captez l'attention de vos clients au moment où ils en ont le plus besoin.",
    features: [
      "Search Ads : Captation de prospects via les résultats de recherche",
      "Display Ads : Publicités visuelles diffusées sur des millions de sites",
      "Shopping Ads : Pour les e-commerçants, des annonces directement dans les résultats",
      "Remarketing & Retargeting : Récupération des visiteurs"
    ],
    href: "/google-ads",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500"
  },
  {
    icon: Users,
    title: "Meta Ads",
    subtitle: "Captez l'attention de vos clients là où ils passent le plus de temps",
    description: "Boostez votre notoriété et générez des conversions avec des publicités ciblées sur Facebook, Instagram et Messenger.",
    features: [
      "Publicités Facebook & Instagram : Ciblage ultra-précis",
      "Stories Ads : Formats immersifs en plein écran",
      "Lead Ads : Capturez des informations directement sur la plateforme",
      "Publicité Messenger : Engagement direct avec vos clients"
    ],
    href: "/meta-ads",
    color: "from-pink-500/20 to-purple-500/20",
    iconColor: "text-pink-500"
  },
  {
    icon: Globe,
    title: "Campagnes Publicitaires",
    subtitle: "Multipliez votre visibilité avec des campagnes ciblées",
    description: "Au-delà du SEA, nous créons des campagnes digitales sur mesure, adaptées à vos cibles et vos canaux préférés.",
    features: [
      "Stratégie multicanal",
      "Campagnes display & vidéo",
      "Retargeting & audiences similaires",
      "Création de visuels publicitaires performants"
    ],
    href: "/campagnes-publicitaires",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500"
  },
  {
    icon: Users,
    title: "Social Media",
    subtitle: "Créez du lien, engagez votre communauté",
    description: "Nous développons votre présence sur les réseaux sociaux avec des contenus authentiques, engageants et alignés avec votre image de marque. Que ce soit pour gagner en visibilité ou renforcer votre relation client, nous créons des stratégies sur mesure.",
    features: [
      "Stratégie éditoriale & calendrier de publication",
      "Création de contenus visuels & vidéos",
      "Community management",
      "Analyse de performance & ajustements"
    ],
    color: "from-pink-500/20 to-purple-500/20",
    iconColor: "text-pink-500"
  },
  {
    icon: Search,
    title: "Audit SEO",
    subtitle: "Identifiez les freins à votre visibilité",
    description: "Avant d'optimiser, il faut comprendre. Nous réalisons un audit SEO complet pour analyser la structure technique de votre site, la qualité de votre contenu, les performances et la stratégie de vos concurrents.",
    features: [
      "Analyse technique (vitesse, indexation, erreurs)",
      "Analyse sémantique & des mots-clés",
      "Audit de backlinks & autorité de domaine",
      "Recommandations d'optimisation concrètes"
    ],
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Référencement naturel (SEO)",
    subtitle: "Apparaître là où vos clients vous cherchent",
    description: "Nous vous aidons à améliorer votre positionnement sur Google de façon durable grâce à une stratégie SEO adaptée à votre secteur, votre audience et vos objectifs. Résultat : plus de trafic qualifié et plus de clients.",
    features: [
      "Optimisation technique (balises, structure, performances)",
      "Rédaction de contenus optimisés",
      "Netlinking & stratégie de backlinks",
      "Suivi de positionnement et reporting SEO"
    ],
    color: "from-green-500/20 to-teal-500/20",
    iconColor: "text-green-500"
  }
]

const stats = [
  { icon: TrendingUp, number: "150+", label: "Projets réalisés" },
  { icon: Users, number: "5+", label: "Années d'expérience" },
  { icon: Globe, number: "20+", label: "Pays desservis" },
  { icon: Star, number: "98%", label: "Clients satisfaits" }
]

export default function MarketingDigitalPage() {
  const { t } = useI18n()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float [animation-delay:1s]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-float [animation-delay:3s]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-7xl font-bold text-foreground leading-tight text-balance">{t('marketing.hero.title')}</h1>

              <motion.p 
                className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('marketing.hero.subtitle')}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Marketing Services Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Brain className="h-4 w-4 mr-2" />
              {t('marketing.services.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 text-balance">
              {t('marketing.services.title')}
            </h2>
          </motion.div>

          <div className="space-y-16">
            {marketingServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-border/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group bg-background/90 backdrop-blur-sm overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <CardHeader className="relative">
                      <div className="flex items-start space-x-6">
                        <motion.div 
                          className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                          whileHover={{ rotate: 5 }}
                        >
                          <Icon className={`w-10 h-10 ${service.iconColor}`} />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors mb-3">
                            {service.title}
                          </CardTitle>
                          <h3 className="text-xl text-secondary font-semibold mb-4">
                            {service.subtitle}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                            {service.description}
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            {service.features.map((feature, featureIndex) => (
                              <motion.div 
                                key={featureIndex} 
                                className="flex items-start space-x-3 group/feature"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 group-hover/feature:scale-110 transition-transform" />
                                <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    {service.href && (
                      <CardContent className="relative pt-0">
                        <Link href={service.href}>
                          <Button 
                            variant="outline" 
                            className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 hover:scale-105"
                          >
                            En savoir plus
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              {t('marketing.cta.title')}
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto text-pretty">
              {t('marketing.cta.subtitle')}
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
                  {t('marketing.cta.button1')}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/realisations">
                  {t('marketing.cta.button2')}
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
