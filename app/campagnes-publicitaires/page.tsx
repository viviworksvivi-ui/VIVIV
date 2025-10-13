"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Target, BarChart3, Users, TrendingUp, CheckCircle, Star, Award, Lightbulb, Rocket, Shield, Brain, Eye, MousePointer, ShoppingCart, RefreshCw, Camera, FileText, MessageCircle, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

const googleAdsServices = [
  "Search Ads : Captation de prospects via les résultats de recherche",
  "Display Ads : Publicités visuelles diffusées sur des millions de sites partenaires",
  "Shopping Ads : Pour les e-commerçants, des annonces directement dans les résultats de recherche de Google",
  "Remarketing & Retargeting : Récupération des visiteurs n'ayant pas finalisé une action",
  "A/B Testing : Optimisation continue des annonces pour un ROI maximal",
  "Suivi de conversion : Analyse détaillée des actions générées par chaque campagne"
]

const metaAdsServices = [
  "Publicités Facebook & Instagram : Ciblage démographique, géographique, et comportemental",
  "Stories Ads : Créez des formats immersifs qui captent l'attention de votre audience en plein écran",
  "Carousel Ads : Présentez plusieurs produits ou services dans une seule annonce",
  "Lead Ads : Capturez des informations directement dans la plateforme",
  "Remarketing : Reciblez les utilisateurs ayant déjà interagi avec vos pages ou contenus",
  "Analyse et Optimisation : Ajustement des campagnes en fonction des performances en temps réel"
]

const googleAdsWhy = [
  "Stratégie basée sur des données précises et un ciblage affiné",
  "Création d'annonces impactantes et de landing pages optimisées",
  "Suivi régulier et rapports détaillés pour mesurer les performances"
]

const metaAdsWhy = [
  "Création de visuels adaptés et optimisés pour chaque format (image, vidéo, carrousel, etc.)",
  "Mise en place de campagnes dynamiques basées sur l'analyse du comportement utilisateur",
  "Gestion continue et suivi des KPIs pour garantir un meilleur retour sur investissement"
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Expertise",
    description: "Une équipe de spécialistes certifiés Google Ads et Meta Ads pour une gestion optimale"
  },
  {
    icon: Target,
    title: "Stratégies personnalisées",
    description: "Des campagnes pensées sur mesure selon vos objectifs (trafic, conversions, notoriété…)"
  },
  {
    icon: BarChart3,
    title: "Suivi et Reporting",
    description: "Des rapports détaillés pour mesurer l'impact de vos campagnes et ajuster les leviers"
  }
]

export default function CampagnesPublicitairesPage() {
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
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                {t('marketing.campaigns.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                {t('marketing.campaigns.hero.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-balance">
                {t('marketing.campaigns.hero.p2')}
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
                  {t('marketing.campaigns.hero.button1')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/realisations">
                  {t('marketing.campaigns.hero.button2')}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Ads Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {t('marketing.campaigns.googleAds.title')}
                </h2>
              </div>
              <h3 className="text-2xl font-semibold text-primary">
                {t('marketing.campaigns.googleAds.subtitle')}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                {t('marketing.campaigns.googleAds.p1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                {t('marketing.campaigns.googleAds.p2')}
              </p>
            </div>

            <Card className="bg-background/90 backdrop-blur-sm border-2 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground mb-4">
                  Nos services Google Ads :
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {googleAdsServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 group"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground mb-4">
                  Pourquoi choisir Google Ads avec Viviworks ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {googleAdsWhy.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 group"
                    >
                      <Star className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Meta Ads Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl animate-float [animation-delay:1s]"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-float [animation-delay:3s]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {t('marketing.campaigns.metaAds.title')}
                </h2>
              </div>
              <h3 className="text-2xl font-semibold text-primary">
                {t('marketing.campaigns.metaAds.subtitle')}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                {t('marketing.campaigns.metaAds.p1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                {t('marketing.campaigns.metaAds.p2')}
              </p>
            </div>

            <Card className="bg-background/90 backdrop-blur-sm border-2 border-pink-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground mb-4">
                  Nos services Meta Ads :
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {metaAdsServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 group"
                    >
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-pink-500/5 to-purple-500/5 border border-pink-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground mb-4">
                  Pourquoi choisir Meta Ads avec Viviworks ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {metaAdsWhy.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 group"
                    >
                      <Star className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
                {t('marketing.campaigns.why.title')}
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              {t('marketing.campaigns.cta.title')}
            </h2>
            <p className="text-xl text-primary-foreground/90 text-balance">
              {t('marketing.campaigns.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  {t('marketing.campaigns.cta.button1')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/realisations">
                  {t('marketing.campaigns.cta.button2')}
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
