"use client"

"use client"
import React from "react"
import { useI18n } from "@/lib/i18n"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SEAPage() {
  const { t } = useI18n()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">{t('nav.dropdown.sea')}</h1>
          <p className="text-lg text-muted-foreground/90 text-pretty max-w-3xl mx-auto">
            Les campagnes sponsorisées de Viviworks boostent votre présence sur le web et attirent des clients qualifiés. En tant qu’agence SEA, nos solutions optimisent vos Google Ads et Meta Ads pour générer un meilleur retour sur investissement.
          </p>
        </div>
      </section>

      {/* Google Ads */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Campagnes Google Ads performantes</h2>
            <p className="text-muted-foreground text-pretty">
              Une Google Ads bien ciblée permet d’atteindre vos clients potentiels rapidement. Les campagnes sont conçues et pilotées pour augmenter les clics, prospects et ventes.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Ciblage précis</h3>
              <p className="text-muted-foreground text-pretty">
                Chaque annonce est optimisée pour toucher exactement votre audience et maximiser l’efficacité de vos campagnes sponsorisées.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Optimisation continue</h3>
              <p className="text-muted-foreground text-pretty">
                Les performances sont analysées en permanence pour ajuster vos Google Ads et améliorer le retour sur investissement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Ads */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Publicité Meta ciblée</h2>
            <p className="text-muted-foreground text-pretty">
              Les Meta Ads sur Facebook et Instagram permettent de renforcer votre notoriété et stimuler l’engagement. Nos experts créent des campagnes adaptées à votre audience et vos objectifs.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Audience ciblée</h3>
              <p className="text-muted-foreground text-pretty">
                Chaque campagne est pensée pour toucher les bonnes personnes et générer plus d’interactions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Engagement et visibilité</h3>
              <p className="text-muted-foreground text-pretty">
                Les annonces renforcent votre image et incitent les utilisateurs à interagir avec votre marque.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suivi & analyse */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Suivi et analyse des performances</h2>
          <p className="text-muted-foreground text-pretty">
            Les KPI sont suivis pour ajuster vos campagnes et maximiser votre budget publicitaire. Nos solutions permettent d’améliorer constamment les résultats de vos campagnes sponsorisées et de votre publicité en ligne.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Lancez votre campagne SEA
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Générons ensemble des résultats mesurables sur Google Ads et Meta Ads.
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
