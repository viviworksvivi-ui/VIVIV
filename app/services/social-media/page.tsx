"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Développez votre marque avec nos services Social Media
          </h1>
          <p className="text-lg text-muted-foreground/90 text-pretty max-w-3xl mx-auto">
            Les services de gestion réseaux sociaux de Viviworks dynamisent votre présence en ligne et engagent vos communautés. Nos solutions incluent community management, stratégie social media et social ads pour valoriser votre marque et générer des leads qualifiés.
          </p>
        </div>
      </section>

      {/* Stratégie social media sur mesure */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Stratégie social media sur mesure</h2>
            <p className="text-muted-foreground text-pretty">
              Chaque plateforme nécessite une approche spécifique. La stratégie social media est adaptée à vos objectifs pour renforcer votre image, accroître l’engagement et toucher vos clients potentiels.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Planification ciblée</h3>
              <p className="text-muted-foreground text-pretty">
                Nous analysons vos audiences et définissons le contenu le plus efficace pour chaque réseau.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Objectifs mesurables</h3>
              <p className="text-muted-foreground text-pretty">
                Les résultats sont suivis pour maximiser l’impact de votre stratégie social media et de vos social ads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animation de communautés */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Animation de communautés et contenu interactif</h2>
            <p className="text-muted-foreground text-pretty">
              Le community management fait vivre vos réseaux sociaux. Nos équipes publient du contenu engageant, répondent aux interactions et lancent des campagnes publicitaires pour stimuler votre audience.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Contenu attractif</h3>
              <p className="text-muted-foreground text-pretty">
                Chaque publication est pensée pour capter l’attention et encourager l’interaction.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Interaction et fidélisation</h3>
              <p className="text-muted-foreground text-pretty">
                Les communautés sont animées pour renforcer la proximité avec vos clients et prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suivi des résultats */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Suivi des résultats et reporting</h2>
          <p className="text-muted-foreground text-pretty">
            L’analyse des performances permet d’ajuster les actions et de maximiser l’impact de vos services de gestion réseaux sociaux. Les données orientent les décisions pour améliorer vos social ads et vos publications.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Optimisez vos réseaux sociaux
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Bâtissons une présence social media durable et performante.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:opacity-90 hover:scale-105 transition-all duration-200">
                <Link href="/contact">Parler à un spécialiste</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 