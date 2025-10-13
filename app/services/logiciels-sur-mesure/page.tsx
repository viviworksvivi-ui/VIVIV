"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LogicielsSurMesurePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Boostez votre entreprise avec un logiciel sur mesure
          </h1>
          <p className="text-lg text-muted-foreground/90 text-pretty max-w-3xl mx-auto">
            Les logiciels sur mesure de Viviworks s’adaptent à votre entreprise pour automatiser vos processus et simplifier la gestion de vos activités. Nos solutions améliorent la productivité et facilitent le quotidien de vos équipes.
          </p>
        </div>
      </section>

      {/* Développement d’applications personnalisées */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Développement d’applications personnalisées</h2>
            <p className="text-muted-foreground text-pretty">
              Concevoir une application personnalisée répond exactement à vos besoins métiers. Les développeurs intègrent vos contraintes techniques et fonctionnelles. Chaque logiciel est pensé pour gagner du temps et optimiser vos performances.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Applications adaptées à votre entreprise</h3>
              <p className="text-muted-foreground text-pretty">
                Nous veillons à ce que votre application personnalisée corresponde parfaitement à vos méthodes de travail.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Efficacité et productivité</h3>
              <p className="text-muted-foreground text-pretty">
                Nos solutions simplifient vos processus et augmentent la performance de vos équipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions SaaS */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Solutions SaaS évolutives</h2>
            <p className="text-muted-foreground text-pretty">
              Accéder à une solution SaaS sécurisée permet à vos équipes d’utiliser vos applications depuis n’importe quel appareil. Nos solutions évolutives suivent la croissance de votre entreprise tout en garantissant fiabilité et sécurité.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Accessibilité partout et tout le temps</h3>
              <p className="text-muted-foreground text-pretty">
                Vos équipes peuvent utiliser vos logiciels sur ordinateur, tablette ou smartphone, à tout moment.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Fiabilité et sécurité</h3>
              <p className="text-muted-foreground text-pretty">
                Nous nous assurons que les solutions SaaS protègent vos données et fonctionnent de manière stable et continue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support & maintenance */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Support et maintenance continue</h2>
          <p className="text-muted-foreground text-pretty">
            Des mises à jour régulières et un suivi constant garantissent la pérennité de vos logiciels sur mesure. Nos solutions maintiennent l’expérience utilisateur fluide et agréable grâce à un support réactif.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Demandez votre logiciel sur mesure avec Viviworks
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Bénéficiez d’une solution parfaitement adaptée à vos besoins et à votre croissance.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:opacity-90 hover:scale-105 transition-all duration-200">
                <Link href="/contact">Parler à un expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
