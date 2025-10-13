"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question:
        "Pourquoi choisir une agence digitale comme Viviworks pour votre site web et votre stratégie marketing ?",
      answer:
        "Chez Viviworks, le conseil en création de site Internet est au cœur de notre expertise. Nos équipes mettent leur expérience à votre service pour concevoir des sites web sur mesure. Aujourd'hui, le potentiel d'un site web performant pour votre entreprise n'est plus à démontrer. Dans un contexte digital, créer un site et avoir une stratégie marketing ne relève plus d'un simple choix. C'est une étape essentielle pour toute entreprise ambitieuse. L'objectif est de mettre en place un dispositif efficace, orienté vers la conversion. Une agence digitale vous conseille sur la stratégie la plus adaptée à votre activité, afin de maximiser vos résultats et votre présence.",
    },
    {
      question: "Comment notre agence web, Viviworks, vous accompagne dans la création de votre site Internet ?",
      answer:
        "La création d'un site Internet implique des enjeux clés et des exigences spécifiques. L'expertise d'une agence de communication interactive comme Viviworks est un atout précieux pour mener à bien ce projet. Agence digitale internationale spécialisée dans la création de sites web, Viviworks réunit tous les métiers du digital au service des entreprises. Faire appel à une agence digitale créative vous permet de bénéficier d'une expertise complète pour le lancement de votre site web. De la définition de votre stratégie digitale à la conception graphique et au développement technique, Viviworks vous accompagne à chaque étape.",
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
            FAQ : nous répondons à toutes vos <span className="text-blue-600">questions</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-0 bg-background/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                      <h3 className="text-lg font-semibold text-slate-900 text-left text-balance">{faq.question}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                          openItems.includes(index) ? "rotate-180" : ""
                        }`}
                      />
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-slate-600 leading-relaxed text-pretty">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
