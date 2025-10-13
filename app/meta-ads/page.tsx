"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, BarChart3, TrendingUp, CheckCircle, Star, Award, MessageCircle, Camera, FileText, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

const metaAdsServices = [
  {
    icon: Users,
    title: "Publicités Facebook & Instagram",
    description: "Les publicités Facebook & Instagram sont parmi les plus performantes pour générer de l'engagement, du trafic et des conversions. Grâce à un ciblage précis et des formats publicitaires variés, nous maximisons votre impact.",
    features: [
      "Ciblage ultra-précis : Cibler selon des critères géographiques, démographiques, comportementaux ou même psychographiques",
      "Formats adaptés : Carrousels, vidéos, photos, stories, et plus encore",
      "Publicités dynamiques : Adaptez vos publicités en fonction des comportements des utilisateurs pour maximiser la pertinence des annonces"
    ]
  },
  {
    icon: Camera,
    title: "Stories Ads",
    description: "Les Stories Ads sont un format visuel qui s'affiche en plein écran entre les stories des utilisateurs sur Instagram et Facebook. Ce format immersif permet d'attirer l'attention rapidement.",
    features: [
      "Création de contenu attractif : Développement de visuels captivants et de messages clairs pour maximiser l'engagement",
      "Suivi des conversions : Mesure de l'impact des publicités via des actions précises comme les clics, les inscriptions ou les achats"
    ]
  },
  {
    icon: FileText,
    title: "Lead Ads",
    description: "Les Lead Ads sont idéales pour capturer des informations directement sur les plateformes de Meta, sans avoir à rediriger l'utilisateur vers une page externe. Ce format est parfait pour générer des prospects qualifiés.",
    features: [
      "Formulaires intégrés : Collecte de données (nom, email, téléphone) sans quitter Facebook ou Instagram",
      "Optimisation pour la conversion : Création de formulaires simples et attrayants, avec des champs pré-remplis pour une expérience utilisateur fluide"
    ]
  },
  {
    icon: MessageCircle,
    title: "Publicité Messenger",
    description: "Les publicités Messenger vous permettent de démarrer une conversation directe avec les utilisateurs via Facebook Messenger. C'est un moyen efficace pour offrir une assistance client instantanée ou des promotions personnalisées.",
    features: [
      "Engagement direct : Convertissez les visiteurs en clients potentiels avec un dialogue en temps réel",
      "Réponses automatisées : Mise en place de chatbots pour gérer les interactions en dehors des heures de travail"
    ]
  }
]

const whyChooseUs = [
  {
    icon: Target,
    title: "Stratégie multicanal",
    description: "Nous développons des campagnes adaptées à chaque plateforme (Facebook, Instagram, Messenger), maximisant ainsi votre portée et votre impact"
  },
  {
    icon: Zap,
    title: "Création de contenu sur mesure",
    description: "Des visuels créatifs et des messages convaincants qui captent l'attention de votre audience"
  },
  {
    icon: BarChart3,
    title: "Ciblage intelligent",
    description: "Grâce à l'algorithme Meta, nous ciblons les utilisateurs qui ont le plus de chances d'être intéressés par vos produits ou services"
  },
  {
    icon: TrendingUp,
    title: "Suivi des performances",
    description: "Des analyses et rapports détaillés pour mesurer l'efficacité de chaque campagne et l'ajuster pour un meilleur retour sur investissement"
  }
]

export default function MetaAdsPage() {
  const { t } = useI18n()
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Badge className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-pink-500 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                <Users className="h-4 w-4 mr-2" />
                Meta Ads
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                {t('marketing.metaAds.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                {t('marketing.metaAds.hero.subtitle')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Démarrer votre campagne
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/realisations">
                  Voir nos réalisations
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              {t('marketing.metaAds.intro.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('marketing.metaAds.intro.p1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('marketing.metaAds.intro.p2')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl animate-float [animation-delay:1s]"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float [animation-delay:3s]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-16">
            {metaAdsServices.map((service, index) => {
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
                    <CardHeader className="relative">
                      <div className="flex items-start space-x-6">
                        <motion.div 
                          className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                          whileHover={{ rotate: 5 }}
                        >
                          <Icon className="w-10 h-10 text-pink-500" />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl lg:text-3xl text-foreground group-hover:text-pink-500 transition-colors mb-3">
                            {service.title}
                          </CardTitle>
                          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                            {service.description}
                          </p>
                          <div className="space-y-3">
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
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                {t('marketing.metaAds.why.title')}
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">
              {t('marketing.metaAds.cta.title')}
            </h2>
            <p className="text-xl text-white/90 text-balance">
              {t('marketing.metaAds.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  {t('marketing.metaAds.cta.button1')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-pink-500">
                <Link href="/realisations">
                  {t('marketing.metaAds.cta.button2')}
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
