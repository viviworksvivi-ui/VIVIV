"use client"

"use client"
import React from "react"
import { useI18n } from "@/lib/i18n"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DeveloppementBackendPage() {
  const { t } = useI18n()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">{t('nav.dropdown.be')}</h1>
          <p className="text-lg text-muted-foreground/90 text-pretty max-w-3xl mx-auto">
            Chez Viviworks, vos applications web et mobiles deviennent stables, rapides et sécurisées grâce à des systèmes côté serveur fiables. Les développeurs back-end maîtrisent les langages et bases de données pour concevoir des solutions solides, adaptées à votre activité.
          </p>
        </div>
      </section>

      {/* Programmation serveur & logique métier */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Programmation serveur et logique métier</h2>
            <p className="text-muted-foreground text-pretty">
              Toutes les opérations derrière votre site ou application sont gérées avec précision. La programmation serveur et la logique métier sont développées pour que vos services fonctionnent exactement comme vous le souhaitez. La gestion des bases de données et l’intégration d’API garantissent rapidité et sécurité.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Gestion des bases de données</h3>
              <p className="text-muted-foreground text-pretty">
                Les bases de données sont organisées et optimisées pour que vos informations soient accessibles rapidement et traitées sans erreur.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Intégration d’API et services web</h3>
              <p className="text-muted-foreground text-pretty">
                Les applications sont connectées à des services externes pour simplifier les échanges de données et enrichir vos fonctionnalités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services back-end */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Services back-end adaptés à votre activité</h2>
          <p className="text-muted-foreground text-pretty">
            Chaque projet bénéficie d’une architecture pensée pour la performance et l’évolutivité. La sécurité est renforcée, les applications sont plus rapides et fiables. Les utilisateurs profitent d’une expérience fluide et agréable grâce aux services back-end sur mesure.
          </p>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Pourquoi choisir notre back-end ?</h2>
          <p className="text-muted-foreground text-pretty">
            Que ce soit pour un site e-commerce, une plateforme SaaS ou une application mobile, les solutions de Viviworks maximisent la performance. Les bugs sont limités et l’expérience utilisateur reste rapide, cohérente et sécurisée.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Découvrez le Back-end avec Viviworks
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Construisons ensemble une base serveur robuste, sécurisée et performante pour vos applications.
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
