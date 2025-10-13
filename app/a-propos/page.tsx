"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Ear, CheckCircle, Target, Zap, Users, Globe, TrendingUp, MessageCircle, ArrowRight, Star, Award, Lightbulb, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
 
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

const missions = [
  "Booster votre visibilité et générer plus de trafic",
  "Attirer et convertir des leads qualifiés",
  "Augmenter vos ventes et votre chiffre d'affaires",
  "Optimiser en continu l'expérience de vos clients",
  "Renforcer votre notoriété digitale",
  "Gagner de nouvelles parts de marché",
  "Vous accompagner dans la montée en compétences"
]

const approaches = [
  {
    step: "1",
    title: "Compréhension et planification",
    description: "Analyser votre brief, échanger avec vous et élaborer une feuille de route sur-mesure.",
    icon: Lightbulb
  },
  {
    step: "2", 
    title: "Mise en œuvre et performance",
    description: "Déployer le plan d'action pour maximiser vos résultats et booster votre performance digitale.",
    icon: TrendingUp
  },
  {
    step: "3",
    title: "Mesure et pilotage", 
    description: "Suivre les KPI définis dès le départ pour optimiser et piloter votre activité digitale efficacement.",
    icon: Target
  }
]

const values = [
  {
    icon: Heart,
    title: "L'humain",
    description: "Nous privilégions une relation de long terme avec nos clients, fondée sur la confiance, la collaboration et la transparence.",
    color: "from-red-500/20 to-pink-500/20"
  },
  {
    icon: Ear,
    title: "L'écoute",
    description: "Des échanges réguliers qui vont au-delà du projet, pour mieux comprendre vos enjeux et votre marché.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: CheckCircle,
    title: "La cohérence",
    description: "Des dispositifs publicitaires conçus sur-mesure, alignés avec vos objectifs, grâce à notre expertise reconnue.",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Target,
    title: "La preuve",
    description: "Chaque action est mesurée et analysée : trafic, conversions, abonnés… pour des résultats concrets et transparents.",
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    icon: Zap,
    title: "Le challenge",
    description: "Toujours en veille, nos experts innovent en permanence pour vous aider à vous démarquer et à dépasser vos concurrents.",
    color: "from-purple-500/20 to-violet-500/20"
  }
]

const teamMembers = [
  { name: "AIMAN BELLARA", role: "CEO • Fondateur Viviworks", photo: "/AIMAN BELLARA.webp" },
  { name: "Alice", role: "Productrice VSL • Closer", photo: "/Alice .webp" },
  { name: "Assil", role: "Designer", photo: "/Assil .webp" },
  { name: "Harry Sanjy", role: "Closer", photo: "/Harry-Sanjy.webp", objectPosition: "center 20%" },
  { name: "Hedi", role: "Copywriter", photo: "/Hedi .webp", objectPosition: "center 20%" },
  { name: "Sylvio", role: "Créateur de vidéo réseaux sociaux", photo: "/Sylvio.webp" },
  { name: "Junior", role: "Développeur IA web et application", photo: "/Junior .webp" },
  { name: "Mickaëlio", role: "Développeur application et web", photo: "/Mickaëlio.webp" },
  { name: "Mohamed Habib", role: "Développeur applications mobiles et web", photo: "/Mohamed habib .webp" },
  { name: "Nahyl", role: "Développeur web et application", photo: "/Nahyl.webp" },
  { name: "Tino", role: "Designer UX/UI", photo: "/Tino.webp" },
  { name: "Tatiana", role: "Community manager", photo: "/Tatiana.webp" }
]

export default function AboutPage() {
  const { t } = useI18n()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image with parallax effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/modern-digital-workspace-with-people-working-on-we.jpg"
            alt="Équipe Viviworks au travail"
            fill
            className="object-cover scale-110"
            priority
          />
          {/* Multi-layer overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 mix-blend-overlay"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-blob z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob z-10" style={{ animationDelay: "2s" }}></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20">
          <motion.div 
            className="text-center space-y-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="glass border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl backdrop-blur-md">
                <Users className="h-4 w-4 mr-2" />
                À propos de Viviworks
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold leading-tight text-balance text-white drop-shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t('realisations.hero.title')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl lg:text-2xl leading-relaxed text-pretty text-white/90 drop-shadow-lg max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('realisations.hero.subtitle')}
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="glass border border-white/20 rounded-xl p-6 backdrop-blur-md hover-lift-glow">
                <div className="text-4xl font-bold text-white mb-2">12+</div>
                <div className="text-white/80 text-sm">Experts passionnés</div>
              </div>
              <div className="glass border border-white/20 rounded-xl p-6 backdrop-blur-md hover-lift-glow">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80 text-sm">Projets réalisés</div>
              </div>
              <div className="glass border border-white/20 rounded-xl p-6 backdrop-blur-md hover-lift-glow">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Satisfaction client</div>
            </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-down">
          <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
            <span className="text-xs font-medium">Découvrir</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Expertise Section */}
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
              <Award className="h-4 w-4 mr-2" />
              Notre Expertise
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">
              L'expertise digitale française qui fait la différence
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Avec Viviworks, vous collaborez avec une agence de marketing digital d'excellence, qui vous guide vers le succès. 
              Forte d'une réputation solide, notre agence web est fière de collaborer avec des partenaires prestigieux.
            </p>
            <p className="text-lg text-muted-foreground mt-6 font-medium">
              Pour transformer vos idées en succès, n'hésitez pas à nous contacter !
            </p>
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Missions Section */}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">
              Les missions qui animent notre agence de communication
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Notre agence web en France vous propose ses prestations en marketing digital pour :
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-border/30 hover:border-primary/50 glass hover-lift-glow card-shine group relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-primary/50 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors font-medium pt-1.5">{mission}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Approach Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">Notre approche</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Nous vous accompagnons de la définition de votre stratégie à la mise en œuvre et au pilotage de votre performance digitale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => {
              const Icon = approach.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center border-2 border-border/30 hover:border-primary/50 glass hover-lift-glow card-shine group relative overflow-hidden h-full">
                    {/* Decorative gradient corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    
                    {/* Step number badge */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary to-secondary/50 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-xl z-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        {approach.step}
                      </div>

                    <CardHeader className="relative z-10 pt-10">
                      <div className="relative mx-auto mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl relative">
                          <Icon className="w-8 h-8 text-white" />
                          {/* Icon glow */}
                          <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        </div>
                        {/* Pulse ring */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{approach.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{approach.description}</p>
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

      {/* Values Section */}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">Nos valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Confier votre stratégie de communication digitale à Viviworks, c'est choisir :
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 border-border/30 hover:border-primary/50 glass hover-lift-glow card-shine group relative overflow-hidden h-full">
                    {/* Decorative corner */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.color} rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="relative mx-auto mb-6 w-fit">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl relative`}>
                          <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                          {/* Icon glow effect */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10`}></div>
                        </div>
                        {/* Pulse ring */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors text-center">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors text-center">{value.description}</p>
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

      {/* History Section */}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">Notre histoire</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 h-full flex items-center">
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    Depuis sa création, Viviworks s'est donnée pour mission d'accompagner les entreprises dans leur transformation digitale et leur croissance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-secondary/5 to-primary/5 border border-secondary/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 h-full flex items-center">
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    Des passionnés de technologie et de communication ont rapidement su se démarquer grâce à leur approche innovante et centrée sur le client.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 h-full flex items-center">
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    De nos premiers projets réalisés pour des PME locales jusqu'à nos collaborations actuelles avec des marques nationales et internationales, nous avons construit une expertise solide et une réputation fondée sur la confiance, la créativité et la performance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-secondary/5 to-primary/5 border border-secondary/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 h-full flex items-center">
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    Aujourd'hui, Viviworks continue d'évoluer, portée par une équipe engagée et déterminée à anticiper les tendances digitales pour offrir à chaque client des solutions adaptées et durables.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Team Section */}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">
              Notre équipe : les forces vives de Viviworks
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Notre équipe réunit des experts passionnés du digital, chacun apportant son savoir-faire et sa créativité pour répondre à vos besoins.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Ensemble, nous combinons stratégie, innovation et performance pour propulser votre identité visuelle et vos projets en ligne.
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="marquee gap-4 px-1">
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div key={`${member.name}-${index}`} className="shrink-0 w-[280px]">
                  <Card className="h-full border-2 border-border/30 hover:border-primary/50 glass hover-lift-glow card-shine group relative overflow-hidden">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="flex flex-col items-center text-center space-y-4">
                        {/* Avatar with enhanced styling */}
                        <div className="relative">
                          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300 shadow-xl relative">
                        <Image
                          src={member.photo}
                            alt={member.name}
                              width={112}
                              height={112}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            style={{ objectPosition: (member as any).objectPosition || "center" }}
                            onError={(e) => {
                              const img = e.currentTarget as HTMLImageElement
                              if (img.src.indexOf("placeholder-user.jpg") === -1) {
                                img.src = "/placeholder-user.jpg"
                              }
                            }}
                          />
                        </div>
                          
                          {/* Floating glow effect */}
                          <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 scale-110"></div>
                          
                          {/* Pulse ring */}
                          <div className="absolute inset-0 rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
                        </div>
                        
                        {/* Member info */}
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {member.name}
                          </h3>
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                            <p className="text-sm text-secondary font-semibold">{member.role}</p>
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
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
              Prêt à transformer vos idées en succès ?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Contactez Viviworks et découvrez comment nous pouvons booster votre croissance digitale.
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
                  Nous contacter
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/services">
                  Découvrir nos services
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
