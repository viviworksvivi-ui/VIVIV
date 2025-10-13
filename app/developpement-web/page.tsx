"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Settings, Palette, Globe, CheckCircle, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useI18n } from "@/lib/i18n"

const webDevServices = [
  {
    icon: Globe,
    title: "Création de site web",
    subtitle: "Des sites performants, évolutifs et adaptés à votre image",
    description: "Chez Viviworks, nous concevons des sites web modernes, responsives et optimisés pour le référencement. Que vous souhaitiez un site vitrine, un blog ou une plateforme e-commerce, nous vous accompagnons de la conception à la mise en ligne.",
    features: [
      "Design responsive (mobile/tablette/desktop)",
      "Optimisation SEO dès la conception",
      "Développement avec les dernières technologies (HTML5, CSS3, JavaScript, CMS comme WordPress ou frameworks comme Next.js)"
    ],
    iconColor: "text-blue-500",
    bgGradient: "from-blue-500/10 via-cyan-500/5 to-blue-500/10"
  },
  {
    icon: Settings,
    title: "DevOps",
    subtitle: "Automatiser, déployer, maintenir",
    description: "Nous intégrons une approche DevOps à chaque étape de vos projets pour garantir une livraison rapide, fiable et continue. Cela comprend la mise en place d'environnements de développement, l'automatisation des tests et des déploiements, ainsi que la surveillance continue.",
    features: [
      "Intégration et déploiement continus (CI/CD)",
      "Conteneurisation avec Docker",
      "Orchestration avec Kubernetes",
      "Surveillance & alertes (Grafana, Prometheus…)"
    ],
    iconColor: "text-green-500",
    bgGradient: "from-green-500/10 via-emerald-500/5 to-green-500/10"
  },
  {
    icon: Palette,
    title: "Maquettes UX / UI",
    subtitle: "Un design centré sur l'utilisateur",
    description: "Nous pensons que l'expérience utilisateur est au cœur de tout projet digital réussi. Nos designers travaillent main dans la main avec vous pour créer des interfaces ergonomiques, esthétiques et intuitives.",
    features: [
      "Ateliers de co-création & wireframes",
      "Prototypes interactifs (Figma / Adobe XD)",
      "Identité visuelle & charte graphique",
      "Tests utilisateurs & itérations"
    ],
    iconColor: "text-purple-500",
    bgGradient: "from-purple-500/10 via-pink-500/5 to-purple-500/10"
  },
  {
    icon: Code,
    title: "Logiciels sur mesure",
    subtitle: "Des solutions personnalisées pour des besoins uniques",
    description: "Chaque entreprise est différente. C'est pourquoi nous développons des logiciels sur mesure qui s'intègrent parfaitement à vos processus métiers. Que ce soit un CRM, un outil de gestion interne ou une plateforme SaaS, nous construisons des applications robustes, sécurisées et évolutives.",
    features: [
      "Applications web sur-mesure (Node.js, Python, Laravel…)",
      "API REST / GraphQL",
      "Sécurité & conformité",
      "Maintenance & évolution"
    ],
    iconColor: "text-orange-500",
    bgGradient: "from-orange-500/10 via-red-500/5 to-orange-500/10"
  }
]

export default function DeveloppementWebPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useI18n()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % webDevServices.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + webDevServices.length) % webDevServices.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <main className="min-h-screen">
      <Navigation />

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
              <h1 className="text-4xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                {t('webdev.hero.title')}
              </h1>

              <motion.p 
                className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('webdev.hero.subtitle')}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Code className="h-4 w-4 mr-2" />
              {t('webdev.services.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 text-balance">
              {t('webdev.services.title')}
            </h2>
          </motion.div>

          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

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
                    <div className={`absolute inset-0 bg-gradient-to-br ${webDevServices[currentSlide].bgGradient}`}></div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    
                    <CardContent className="h-full p-0 relative">
                      <div className="h-full flex flex-col lg:flex-row">
                        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4"
                          >
                            <div className="flex items-center space-x-3">
                              <motion.div 
                                className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center"
                                whileHover={{ rotate: 5, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              >
                                {React.createElement(webDevServices[currentSlide].icon, {
                                  className: `w-6 h-6 ${webDevServices[currentSlide].iconColor}`
                                })}
                              </motion.div>
                              <Badge className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                                Service {currentSlide + 1} de {webDevServices.length}
                              </Badge>
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                              {webDevServices[currentSlide].title}
                            </h3>
                            
                            <h4 className="text-lg text-secondary font-semibold">
                              {webDevServices[currentSlide].subtitle}
                            </h4>
                            
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {webDevServices[currentSlide].description}
                            </p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-3"
                          >
                            <h5 className="text-base font-semibold text-foreground">{t('webdev.service.commitments')}</h5>
                            <div className="space-y-2">
                              {webDevServices[currentSlide].features.map((feature, featureIndex) => (
                                <motion.div 
                                  key={featureIndex} 
                                  className="flex items-start space-x-2 group/feature"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 group-hover/feature:scale-110 transition-transform" />
                                  <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors text-sm">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="pt-2"
                          >
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-300 px-6 py-2 text-sm font-semibold group"
                              asChild
                            >
                              <Link href="/contact">
                                {t('webdev.service.discover')}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          </motion.div>
                        </div>

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
                                  className="w-36 h-36 border-2 border-secondary/30 rounded-full flex items-center justify-center"
                                >
                                  <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-24 h-24 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full flex items-center justify-center"
                                  >
                                    {React.createElement(webDevServices[currentSlide].icon, {
                                      className: `w-12 h-12 ${webDevServices[currentSlide].iconColor}`
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

            <div className="flex justify-center space-x-3 mt-8">
              {webDevServices.map((_, index) => (
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

      <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              {t('webdev.cta.title')}
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto text-pretty">
              {t('webdev.cta.subtitle')}
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
                  {t('webdev.cta.button1')}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/realisations">
                  {t('webdev.cta.button2')}
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
