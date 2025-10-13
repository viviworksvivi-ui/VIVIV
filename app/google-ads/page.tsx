"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Target, BarChart3, Users, TrendingUp, CheckCircle, Star, Award, ShoppingCart, RefreshCw, Globe } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

const googleAdsServices = [
  {
    icon: Search,
    title: "Google Search Ads",
    description: "Les Google Search Ads vous permettent de vous afficher en tête des résultats de recherche sur Google pour des mots-clés précis. Cela permet de capter l'attention des utilisateurs dès qu'ils cherchent des informations, des produits ou des services en lien avec votre activité.",
    features: [
      "Ciblage précis : Choisissez des mots-clés stratégiques qui correspondent à l'intention de recherche de vos clients",
      "Texte d'annonce optimisé : Rédaction d'annonces percutantes qui incitent au clic",
      "Page de destination optimisée : Création de pages de destination adaptées à chaque annonce pour améliorer le taux de conversion"
    ]
  },
  {
    icon: Globe,
    title: "Google Display Ads",
    description: "Les Google Display Ads permettent de diffuser des bannières publicitaires visuelles sur un réseau de millions de sites partenaires de Google (YouTube, Gmail, etc.). Cette forme de publicité est idéale pour accroître la notoriété de votre marque et toucher un large public.",
    features: [
      "Ciblage par intérêts et comportements : Atteignez les utilisateurs en fonction de leur historique de navigation ou de leurs préférences",
      "Formats visuels variés : Bannière statique, animation, publicité vidéo, etc.",
      "Remarketing : Reciblez les visiteurs ayant déjà interagi avec votre site web pour les inciter à revenir"
    ]
  },
  {
    icon: ShoppingCart,
    title: "Google Shopping Ads",
    description: "Pour les e-commerçants, Google Shopping Ads est un excellent moyen de promouvoir vos produits de manière visuelle directement dans les résultats de recherche Google. Ces annonces comprennent une photo de votre produit, son prix, et le nom de votre entreprise.",
    features: [
      "Visibilité immédiate : Les produits sont affichés en haut des résultats de recherche, juste sous les annonces sponsorisées",
      "Optimisation des annonces produit : Nous nous occupons de la gestion des flux de produits et de l'optimisation des titres, descriptions et images"
    ]
  },
  {
    icon: RefreshCw,
    title: "Google Remarketing",
    description: "Le remarketing permet de cibler les utilisateurs qui ont déjà visité votre site mais qui n'ont pas effectué de conversion (achat, inscription…). C'est une méthode efficace pour les amener à finaliser leur achat ou action.",
    features: [
      "Reciblage personnalisé : Diffusez des annonces spécifiques aux utilisateurs ayant visité des pages précises de votre site",
      "Optimisation des conversions : Nous optimisons vos annonces pour les rendre plus convaincantes et améliorer votre taux de conversion"
    ]
  }
]

const whyChooseUs = [
  {
    icon: Target,
    title: "Stratégie sur mesure",
    description: "Nous élaborons une stratégie publicitaire personnalisée en fonction de vos objectifs : notoriété, trafic, conversions"
  },
  {
    icon: TrendingUp,
    title: "Optimisation constante",
    description: "Nos experts analysent en permanence les performances de vos campagnes et ajustent les enchères, annonces, et mots-clés pour garantir un meilleur retour sur investissement"
  },
  {
    icon: BarChart3,
    title: "Suivi détaillé",
    description: "Des rapports réguliers qui vous permettent de suivre l'efficacité de chaque campagne et l'évolution de vos résultats"
  },
  {
    icon: Award,
    title: "Gestion experte",
    description: "Notre équipe certifiée Google Ads met en œuvre les meilleures pratiques pour garantir des résultats tangibles"
  }
]

export default function GoogleAdsPage() {
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
              <Badge className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-500 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                <Search className="h-4 w-4 mr-2" />
                Google Ads
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                {t('marketing.googleAds.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                {t('marketing.googleAds.hero.subtitle')}
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
                  {t('marketing.googleAds.hero.button1')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/realisations">
                  {t('marketing.googleAds.hero.button2')}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              {t('marketing.googleAds.intro.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('marketing.googleAds.intro.p1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('marketing.googleAds.intro.p2')}
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
            {googleAdsServices.map((service, index) => {
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
                          className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                          whileHover={{ rotate: 5 }}
                        >
                          <Icon className="w-10 h-10 text-blue-500" />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl lg:text-3xl text-foreground group-hover:text-blue-500 transition-colors mb-3">
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
                {t('marketing.googleAds.why.title')}
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
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
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
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">
              {t('marketing.googleAds.cta.title')}
            </h2>
            <p className="text-xl text-white/90 text-balance">
              {t('marketing.googleAds.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  {t('marketing.googleAds.cta.button1')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-500">
                <Link href="/realisations">
                  {t('marketing.googleAds.cta.button2')}
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
