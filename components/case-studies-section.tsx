"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Études de cas",
      description:
        "Depuis notre création, nous avons accompagné de nombreuses entreprises de tailles et de secteurs variés dans leur transformation digitale.",
      details:
        "Nos études de cas montrent comment nous aidons les clients à améliorer leur e-visibilité, développer leur croissance et renforcer leur présence digitale.",
      link: "/etudes-de-cas",
    },
    {
      title: "Portfolio projets",
      description:
        "Notre portfolio reflète la diversité et la qualité de nos réalisations digitales. Chaque projet est le fruit d'une collaboration étroite avec nos clients.",
      details:
        "Ces projets mettent en avant notre savoir-faire, notre créativité et notre capacité à répondre aux besoins uniques de chaque entreprise.",
      link: "/portfolio",
    },
  ]

  return (
  <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-balance">
            Ces réussites illustrent notre <span className="text-blue-600">mission</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
            Transformer les défis numériques en opportunités de succès
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 group">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{study.description}</p>
                  <p className="text-slate-600 mb-6 leading-relaxed">{study.details}</p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 bg-transparent"
                  >
                    Découvrir
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
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
          <p className="text-lg text-slate-600 mb-6">Vous souhaitez rejoindre nos prochaines réussites ?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contactez-nous pour discuter de votre projet
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
