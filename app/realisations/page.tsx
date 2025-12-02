"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp, Users, ShoppingCart, Globe, Target, Award, MessageCircle, ArrowRight, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

const caseStudies = [
  {
    title: "Transformation digitale d'une PME industrielle",
    description: "Mise en place d'une stratégie digitale complète pour une entreprise manufacturière, incluant site web, SEO et campagnes Google Ads.",
    results: "+400% de leads qualifiés",
    category: "Stratégie digitale",
    icon: Target
  },
  {
    title: "Optimisation e-commerce mode",
    description: "Refonte complète d'une boutique en ligne avec amélioration de l'UX, optimisation du tunnel de conversion et mise en place d'un programme de fidélisation.",
    results: "+250% de ventes en ligne",
    category: "E-commerce",
    icon: ShoppingCart
  },
  {
    title: "Lancement d'une application mobile SaaS",
    description: "Développement et lancement d'une application mobile B2B avec tableau de bord analytique et système de notifications push.",
    results: "15k+ utilisateurs actifs",
    category: "Application mobile",
    icon: TrendingUp
  }
]

const portfolioProjects = [
  {
    title: "WakeUp Academy",
    description: "Site vitrine avec mise en avant des formations et système de prise de contact.",
    image: "/wakeupacademy.png",
    tags: ["WordPress", "SEO", "Performance"],
    category: "Site vitrine",
    icon: Globe,
    url: "https://wakeupacademy.fr/"
  },
  {
    title: "Ecoclimatic",
    description: "Site vitrine services climatisation avec formulaires et suivi des demandes.",
    image: "/ecoclimatic.png",
    tags: ["Next.js", "SEO Local", "Contacts"],
    category: "Site vitrine",
    icon: Globe,
    url: "https://ecoclimatic.fr/"
  },
  {
    title: "Stratelink",
    description: "Site corporate moderne avec présentation des services et génération de leads.",
    image: "/stratelink.png",
    tags: ["Next.js", "Leadgen", "SEO"],
    category: "Corporate",
    icon: Award,
    url: "https://stratelink-global.ae/"
  },
  {
    title: "Ribbaclim",
    description: "Site vitrine services climatisation avec présentation des solutions et prise de contact.",
    image: "/ribbaclim.png",
    tags: ["Next.js", "SEO Local", "Contacts"],
    category: "Site vitrine",
    icon: Globe,
    url: "https://www.ribbaclim.com/"
  },
  {
    title: "Hikaya",
    description: "Site web moderne avec interface utilisateur intuitive et expérience optimisée.",
    image: "/hikaya.png",
    tags: ["Next.js", "SEO", "Performance"],
    category: "Site vitrine",
    icon: Globe,
    url: "https://www.hikaya.com/"
  }
]

export default function PortfolioPage() {
  const { t } = useI18n()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">{t('realisations.hero.title')}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-4xl mx-auto">{t('realisations.hero.subtitle')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Target className="h-4 w-4 mr-2" />
              {t('realisations.caseStudies.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">{t('realisations.caseStudies.headline')}</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">{t('realisations.caseStudies.desc')}</p>
            <p className="text-lg text-muted-foreground mt-6 font-medium">{t('realisations.caseStudies.cta')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group bg-background/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs">
                          {study.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {study.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        {study.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-semibold text-green-600">{study.results}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Portfolio Projects Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float [animation-delay:1s]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Globe className="h-4 w-4 mr-2" />
              {t('realisations.portfolio.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">{t('realisations.portfolio.headline')}</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">{t('realisations.portfolio.desc1')}</p>
            <p className="text-lg text-muted-foreground mt-6 font-medium">{t('realisations.portfolio.desc2')}</p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="marquee gap-4 px-1">
              {[...portfolioProjects, ...portfolioProjects].map((project, index) => {
                const Icon = project.icon
                return (
                  <Link
                    key={`${project.title}-${index}`}
                    href={project.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block shrink-0 w-[360px]"
                  >
                    <Card className="h-full border-2 border-border/30 hover:border-primary/50 glass hover-lift-glow card-shine overflow-hidden group relative">
                      {/* Decorative gradient corner */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      
                      {/* Image container with enhanced effects */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Multi-layer gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        {/* Floating badge */}
                        <div className="absolute top-4 left-4 z-20">
                          <Badge className="glass border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                            {project.category}
                          </Badge>
                        </div>
                        
                        {/* Icon with glow */}
                        <div className="absolute top-4 right-4 z-20">
                          <div className="relative w-12 h-12 glass border border-white/20 rounded-full flex items-center justify-center group-hover:border-primary/50 transition-all duration-300 shadow-lg backdrop-blur-md">
                            <Icon className="w-6 h-6 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                            {/* Icon glow effect */}
                            <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                          </div>
                        </div>
                        
                        {/* External link indicator */}
                        <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <div className="flex items-center gap-2 glass border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                            <ExternalLink className="w-4 h-4 text-white" />
                            <span className="text-xs text-white font-medium">Voir le site</span>
                          </div>
                        </div>
                      </div>
                      <CardHeader className="relative z-10 pb-3">
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 relative z-10">
                        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 min-h-[3rem]">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag, idx) => (
                            <span 
                              key={tag} 
                              className="px-3 py-1.5 glass border border-primary/20 text-primary text-xs font-medium rounded-full hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                              style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              {t('realisations.cta.title')}
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              {t('realisations.cta.subtitle')}
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
                  {t('realisations.cta.button1')}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/services">
                  {t('realisations.cta.button2')}
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
