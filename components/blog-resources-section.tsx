"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, TrendingUp, FileText } from "lucide-react"

export function BlogResourcesSection() {
  const resources = [
    {
      icon: FileText,
      title: "Articles",
      description:
        "À travers notre blog, nous partageons régulièrement des articles dédiés au digital, au marketing en ligne et aux nouvelles tendances du web.",
      details: "Notre objectif est d'offrir à nos lecteurs des contenus utiles, pratiques et inspirants.",
    },
    {
      icon: TrendingUp,
      title: "Actualités digitales",
      description:
        "Restez informé des dernières nouveautés du web et du marketing digital. Avec Viviworks, vous trouverez toutes les actualités SEO et SEA.",
      details:
        "Nous partageons les grandes tendances digitales, innovations technologiques et évolutions des plateformes.",
    },
    {
      icon: BookOpen,
      title: "Guides pratiques",
      description:
        "Besoin de conseils concrets et actionnables ? Nos guides pratiques vous accompagnent pas à pas pour optimiser vos campagnes digitales.",
      details: "Explorez nos contenus et transformez votre vision digitale en actions concrètes.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Gardez une longueur d'avance sur les <span className="text-amber-400">tendances numériques</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-blue-400/20 mb-4">
                    <resource.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{resource.description}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{resource.details}</p>
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
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
          >
            Découvrir notre blog
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
