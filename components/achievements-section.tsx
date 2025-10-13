"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, TrendingUp, Users, Award } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Globe,
      title: "Présence Internationale",
      description:
        "Nous avons accompagné des entreprises aux quatre coins du monde (Dubaï, Canada, USA, Australie, Maroc, Ghana...)",
      color: "text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Croissance Garantie",
      description:
        "Grâce à nos compétences techniques, nous garantissons une présence en ligne optimale et une forte croissance.",
      color: "text-amber-600",
    },
    {
      icon: Users,
      title: "Clients Satisfaits",
      description:
        "Des PME aux grandes entreprises, nous avons aidé de nombreuses organisations à atteindre leurs objectifs digitaux.",
      color: "text-rust-600",
    },
    {
      icon: Award,
      title: "Expertise Reconnue",
      description: "Notre approche innovante et centrée sur le client nous a permis de bâtir une réputation solide.",
      color: "text-blue-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-balance">
            Nous aidons les entreprises à <span className="text-blue-600">décoller</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
            Voyez comment nous avons propulsé des entreprises issues de divers domaines vers une forte croissance et un
            succès digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-amber-50 mb-4`}
                  >
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{achievement.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Voir nos réalisations
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
