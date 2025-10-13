"use client"

"use client"
import React from "react"
import { useI18n } from "@/lib/i18n"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DeveloppementFrontendPage() {
  const { t } = useI18n()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">{t('nav.dropdown.fe')}</h1>
          <p className="text-lg text-muted-foreground/90 text-pretty max-w-3xl mx-auto">
            Chez Viviworks, vos idées prennent vie en interfaces interactives et faciles à utiliser. Nos spécialistes du développement front-end conçoivent des solutions qui améliorent l’expérience de vos utilisateurs et renforcent l’impact de votre site ou application.
          </p>
        </div>
      </section>

      {/* Interface utilisateur moderne */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Interface utilisateur moderne</h2>
            <p className="text-muted-foreground text-pretty">
              Chaque interface doit séduire et faciliter la navigation. Nos solutions garantissent que vos visiteurs comprennent immédiatement comment interagir avec votre site ou application. L’interface utilisateur est fluide, intuitive et adaptée à tous les appareils.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Design intuitif et attractif</h3>
              <p className="text-muted-foreground text-pretty">
                Les pages et composants captent l’attention et rendent la navigation simple et agréable.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Responsive et accessible</h3>
              <p className="text-muted-foreground text-pretty">
                Les interfaces s’adaptent automatiquement aux ordinateurs, tablettes et smartphones pour que tous vos utilisateurs bénéficient de la même expérience de qualité.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Intégration web performante</h3>
              <p className="text-muted-foreground text-pretty">
                Chaque élément bénéficie d’une intégration web optimisée. Vos pages se chargent rapidement et les interactions sont fluides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Développement front-end et back-end */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Développement front-end et back-end</h2>
          <p className="text-muted-foreground text-pretty">
            Les applications doivent être fiables et rapides. Chez Viviworks, le développement front-end et back-end est coordonné pour que vos fonctionnalités fonctionnent parfaitement et que vos utilisateurs profitent d’une expérience sans interruption.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Améliorez votre Front-end avec Viviworks
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Offrez des interfaces modernes, rapides et accessibles à vos utilisateurs.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:opacity-90 hover:scale-105 transition-all duration-200">
                <Link href="/contact">Discuter de votre projet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
