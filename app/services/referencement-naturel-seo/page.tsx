"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ReferencementNaturelSEOPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Boostez votre visibilité avec le référencement naturel
          </h1>
          <p className="text-lg text-muted-foreground/90 text-pretty max-w-3xl mx-auto">
            Un référencement naturel efficace améliore votre position sur Google et attire un trafic qualifié. Cela vous permet de générer plus de prospects et de développer votre activité. Nous accompagnons chaque étape pour que nos actions soient concrètes et efficaces.
          </p>
        </div>
      </section>

      {/* Optimisation technique et contenu */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Optimisation technique et contenu</h2>
            <p className="text-muted-foreground text-pretty">
              La vitesse, l’architecture et la qualité des contenus sont analysées et améliorées. Cela vous permet de renforcer votre référencement naturel et d’augmenter la visibilité de votre site. Nos actions ciblent les points qui impactent le plus votre positionnement.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Performances techniques</h3>
              <p className="text-muted-foreground text-pretty">
                Nous corrigeons les problèmes de vitesse, d’architecture et d’indexation pour améliorer l’expérience utilisateur.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Contenu optimisé</h3>
              <p className="text-muted-foreground text-pretty">
                Chaque contenu est travaillé pour être pertinent, attractif et aligné avec les bonnes pratiques SEO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stratégie SEO et suivi */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Stratégie SEO et suivi</h2>
            <p className="text-muted-foreground text-pretty">
              Une stratégie SEO complète est définie selon vos objectifs et l’analyse de vos concurrents. Cela vous permet d’attirer des prospects qualifiés et de rester devant vos concurrents. Nous suivons vos KPIs pour ajuster les actions et maximiser les résultats.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Analyse concurrentielle</h3>
              <p className="text-muted-foreground text-pretty">
                Nous identifions les opportunités et construisons une stratégie adaptée à votre marché.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Suivi et reporting</h3>
              <p className="text-muted-foreground text-pretty">
                Le positionnement et les performances sont surveillés pour optimiser vos résultats sur Google grâce à nos recommandations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Améliorez votre référencement naturel
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Gagnez en visibilité durable et attirez un trafic qualifié grâce à notre expertise SEO.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:opacity-90 hover:scale-105 transition-all duration-200">
                <Link href="/contact">Demander un audit SEO</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 