"use client"

"use client"
import React, { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Target, BarChart3, FileText, Link as LinkIcon, CheckCircle, ArrowRight, MessageCircle, Zap, Eye, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const seoServices = [
  {
    icon: Search,
    title: "Analyse complète de votre site",
    subtitle: "Diagnostic approfondi de votre présence en ligne",
    description: "Chaque analyse site web vérifie la structure, le contenu et les performances. Cela vous permet de détecter ce qui freine votre référencement. Nos recommandations sont adaptées à votre site.",
    features: [
      "Évaluation technique - La vitesse et l'architecture sont examinées. Nous corrigeons les points bloquants pour améliorer l'expérience des visiteurs.",
      "Analyse éditoriale et structurelle - Le contenu et la navigation sont optimisés. Nous proposons des ajustements pour renforcer votre classement sur Google."
    ],
    iconColor: "text-blue-500",
    bgGradient: "from-blue-500/10 via-cyan-500/5 to-blue-500/10"
  },
  {
    icon: TrendingUp,
    title: "Optimisation SEO et suivi",
    subtitle: "Stratégie personnalisée pour améliorer votre visibilité",
    description: "Un plan clair d'optimisation SEO est défini. Cela vous permet d'attirer un trafic qualifié et de voir rapidement des résultats. Nous guidons la mise en œuvre de chaque recommandation.",
    features: [
      "Référencement naturel amélioré - Le site est mieux positionné et attire davantage de visiteurs grâce à nos actions ciblées.",
      "Suivi des performances - Monitoring continu des indicateurs clés pour mesurer l'efficacité de nos actions."
    ],
    iconColor: "text-green-500",
    bgGradient: "from-green-500/10 via-emerald-500/5 to-green-500/10"
  },
  {
    icon: BarChart3,
    title: "Suivi et accompagnement",
    subtitle: "Transformation du diagnostic en levier concret",
    description: "Nous assurons le suivi et analysons les performances. Cela vous permet de transformer le diagnostic référencement en un levier concret pour votre activité.",
    features: [
      "Analyse des performances - Suivi régulier des indicateurs clés et ajustements stratégiques pour maximiser vos résultats.",
      "Accompagnement personnalisé - Support continu pour optimiser votre stratégie SEO selon l'évolution de votre marché."
    ],
    iconColor: "text-orange-500",
    bgGradient: "from-orange-500/10 via-red-500/5 to-orange-500/10"
  }
]

export default function SEOPage() {
  const { t } = useI18n()
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % seoServices.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + seoServices.length) % seoServices.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-7xl font-bold text-foreground leading-tight text-balance">{t('nav.dropdown.seo')}</h1>

              <motion.p 
                className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Un audit SEO de Viviworks identifie les points faibles de votre site. Cela vous permet d'attirer plus de visiteurs qualifiés. Nous accompagnons chaque étape pour que nos actions soient efficaces.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Services Slider Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Search className="h-4 w-4 mr-2" />
              Nos services SEO
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 text-balance">
              Découvrez nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Une approche complète pour améliorer votre référencement et augmenter votre visibilité en ligne.
            </p>
          </motion.div>

          <div className="relative">
            {/* Navigation Arrows */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Slide Container */}
            <div className="relative h-[600px] overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Card className="h-full border-0 shadow-2xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${seoServices[currentSlide].bgGradient}`}></div>
                    <CardContent className="h-full p-0 relative">
                      <div className="flex flex-col lg:flex-row h-full">
                        {/* Content */}
                        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4"
                          >
                            <div className="flex items-center space-x-4">
                              <motion.div
                                className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center"
                                whileHover={{ rotate: 5, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              >
                                {React.createElement(seoServices[currentSlide].icon, {
                                  className: `w-6 h-6 ${seoServices[currentSlide].iconColor}`
                                })}
                              </motion.div>
                              <Badge className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                                Service {currentSlide + 1} de {seoServices.length}
                              </Badge>
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                              {seoServices[currentSlide].title}
                            </h3>

                            <h4 className="text-lg text-secondary font-semibold">
                              {seoServices[currentSlide].subtitle}
                            </h4>

                            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                              {seoServices[currentSlide].description}
                            </p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-3"
                          >
                            <h5 className="text-base font-semibold text-foreground">Nos engagements :</h5>
                            <div className="space-y-2 max-w-2xl">
                              {seoServices[currentSlide].features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  className="flex items-start space-x-3 group/feature"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0 group-hover/feature:scale-110 transition-transform" />
                                  <span className="text-sm text-muted-foreground group-hover/feature:text-foreground transition-colors">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="pt-3"
                          >
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-300 px-6 py-3 text-sm font-semibold group"
                              asChild
                            >
                              <Link href="/contact">
                                Découvrir ce service
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          </motion.div>
                        </div>

                        {/* Visual */}
                        <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center relative">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative"
                          >
                            <div className="w-64 h-64 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-48 h-48 border-2 border-primary/30 rounded-full flex items-center justify-center"
                              >
                                <motion.div
                                  animate={{ rotate: -360 }}
                                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                  className="w-32 h-32 border-2 border-secondary/30 rounded-full flex items-center justify-center"
                                >
                                  <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-20 h-20 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full flex items-center justify-center"
                                  >
                                    {React.createElement(seoServices[currentSlide].icon, {
                                      className: `w-12 h-12 ${seoServices[currentSlide].iconColor}`
                                    })}
                                  </motion.div>
                                </motion.div>
                              </motion.div>
                            </div>
                            
                            <motion.div
                              animate={{ y: [-10, 10, -10] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="absolute -top-4 -right-4 w-6 h-6 bg-primary/20 rounded-full"
                            />
                            <motion.div
                              animate={{ y: [10, -10, 10] }}
                              transition={{ duration: 4, repeat: Infinity }}
                              className="absolute -bottom-4 -left-4 w-4 h-4 bg-secondary/20 rounded-full"
                            />
                            <motion.div
                              animate={{ y: [-5, 15, -5] }}
                              transition={{ duration: 5, repeat: Infinity }}
                              className="absolute top-1/2 -left-6 w-3 h-3 bg-primary/20 rounded-full"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {seoServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary scale-125'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Demandez votre audit SEO
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto text-pretty">
              Découvrez le potentiel de votre site et obtenez un plan d'action personnalisé pour améliorer votre visibilité sur Google.
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
                  Demander votre audit SEO
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
