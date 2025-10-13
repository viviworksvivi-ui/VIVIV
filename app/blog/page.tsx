"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, BookOpen, Newspaper, Lightbulb, Mail, Star, TrendingUp, Target } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

const blogArticles = [
  {
    title: "Les Tendances Web Design 2024 : Ce Qui Va Marquer l'Année",
    excerpt: "Découvrez les dernières tendances en matière de design web qui vont dominer 2024 : minimalisme, animations micro-interactions, et bien plus.",
    category: "Design",
    author: "Thomas Laurent",
    date: "15 Mars 2024",
    readTime: "5 min",
    slug: "tendances-web-design-2024",
  },
  {
    title: "SEO en 2024 : Guide Complet pour Dominer Google",
    excerpt: "Stratégies SEO avancées, Core Web Vitals, et les dernières mises à jour de l'algorithme Google pour booster votre référencement naturel.",
    category: "SEO",
    author: "Sophie Martin",
    date: "12 Mars 2024",
    readTime: "8 min",
    slug: "seo-guide-complet-2024",
  },
  {
    title: "Google Ads : 10 Stratégies pour Maximiser votre ROI",
    excerpt: "Techniques avancées pour optimiser vos campagnes Google Ads : ciblage, enchères automatiques, extensions d'annonces et analyse des performances.",
    category: "Marketing",
    author: "Sophie Martin",
    date: "5 Mars 2024",
    readTime: "7 min",
    slug: "google-ads-strategies-roi",
  },
  {
    title: "UX Design : Comment Créer des Interfaces Intuitives",
    excerpt: "Principes fondamentaux de l'UX design, recherche utilisateur, wireframing et tests d'utilisabilité pour des interfaces qui convertissent.",
    category: "Design",
    author: "Thomas Laurent",
    date: "2 Mars 2024",
    readTime: "6 min",
    slug: "ux-design-interfaces-intuitives",
  },
  {
    title: "React vs Vue.js : Quel Framework Choisir en 2024 ?",
    excerpt: "Comparaison détaillée entre React et Vue.js : performance, écosystème, courbe d'apprentissage et cas d'usage pour faire le bon choix.",
    category: "Développement",
    author: "Marie Rousseau",
    date: "8 Mars 2024",
    readTime: "10 min",
    slug: "react-vs-vue-comparaison-2024",
  },
  {
    title: "DevOps : Automatiser vos Déploiements avec GitHub Actions",
    excerpt: "Tutoriel complet pour mettre en place une pipeline CI/CD efficace avec GitHub Actions, Docker et les meilleures pratiques DevOps.",
    category: "DevOps",
    author: "Alexandre Dubois",
    date: "10 Mars 2024",
    readTime: "12 min",
    slug: "devops-github-actions-tutorial",
  }
]

const newsItems = [
  {
    title: "Google annonce de nouvelles mises à jour SEO pour 2024",
    excerpt: "Les dernières évolutions de l'algorithme Google et leur impact sur le référencement naturel.",
    date: "20 Mars 2024",
    category: "SEO"
  },
  {
    title: "Meta lance de nouveaux outils publicitaires",
    excerpt: "Découvrez les nouvelles fonctionnalités Facebook et Instagram Ads pour optimiser vos campagnes.",
    date: "18 Mars 2024",
    category: "SEA"
  },
  {
    title: "Tendances TikTok Marketing 2024",
    excerpt: "Comment adapter votre stratégie marketing aux dernières tendances TikTok et courtes vidéos.",
    date: "16 Mars 2024",
    category: "Social Media"
  }
]

const guides = [
  {
    title: "Guide Complet : Optimiser votre Site Web pour le SEO",
    description: "Toutes les étapes pour améliorer votre référencement naturel et augmenter votre visibilité en ligne.",
    category: "SEO",
    icon: Target
  },
  {
    title: "Créer des Campagnes Google Ads Efficaces",
    description: "Apprenez à concevoir et optimiser vos campagnes publicitaires pour maximiser votre ROI.",
    category: "SEA",
    icon: TrendingUp
  },
  {
    title: "Stratégie Social Media : De A à Z",
    description: "Développez une présence sociale forte et engagez votre audience sur toutes les plateformes.",
    category: "Social Media",
    icon: Star
  }
]

export default function BlogPage() {
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
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                {t('blog.hero.title')}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-4xl mx-auto">
                {t('blog.hero.subtitle')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Articles Section */}
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
              <BookOpen className="h-4 w-4 mr-2" />
              {t('blog.articles.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">
              {t('blog.articles.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              {t('blog.articles.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <Link href={`/blog/${article.slug}`}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                      >
                        Lire l'article
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* News Section */}
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
              <Newspaper className="h-4 w-4 mr-2" />
              Actualités digitales
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">
              Restez informé des dernières nouveautés du web et du marketing digital.
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Avec Viviworks, vous trouverez toutes les actualités SEO et SEA.
            </p>
            <p className="text-lg text-muted-foreground mt-6">
              Nous partageons les grandes tendances digitales, innovations technologiques et évolutions des plateformes sociales et publicitaires.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs">
                        {news.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {news.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {news.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Guides Section */}
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
              <Lightbulb className="h-4 w-4 mr-2" />
              {t('blog.guides.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">
              {t('blog.guides.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              {t('blog.guides.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground mt-6 font-medium">
              {t('blog.guides.p2')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => {
              const Icon = guide.icon
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
                          {guide.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        {guide.description}
                      </p>
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

      {/* Newsletter Section */}
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
              {t('blog.newsletter.title')}
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              {t('blog.newsletter.subtitle')}
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <Input 
                placeholder={t('blog.newsletter.placeholder')} 
                className="bg-background text-foreground" 
              />
              <Button
                variant="secondary"
                className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap"
              >
                <Mail className="mr-2 h-4 w-4" />
                {t('blog.newsletter.button')}
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70">{t('blog.newsletter.disclaimer')}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
