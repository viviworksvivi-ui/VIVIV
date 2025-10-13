"use client"

"use client"
import React from "react"
import { useI18n } from "@/lib/i18n"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DevOpsPage() {
  const { t } = useI18n()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">{t('nav.dropdown.devops')}</h1>
          <p className="text-lg text-muted-foreground/90 text-pretty max-w-3xl mx-auto">
            Les services DevOps de Viviworks rendent vos applications plus rapides et fiables. L’automatisation cloud simplifie la gestion des infrastructures et réduit les interventions manuelles. Nos ingénieurs DevOps créent des solutions qui permettent à vos équipes de se concentrer sur leur cœur de métier. Vos systèmes restent stables, performants et sécurisés.
          </p>
        </div>
      </section>

      {/* Automatisation et CI/CD */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Automatisation et pipelines CI/CD</h2>
            <p className="text-muted-foreground text-pretty">
              L’automatisation cloud optimise vos déploiements et réduit les erreurs humaines. Nos ingénieurs DevOps mettent en place des pipelines CI/CD pour tester et déployer vos projets de manière fiable et rapide. Chaque projet est traité pour garantir efficacité et qualité.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Pipelines CI/CD efficaces</h3>
              <p className="text-muted-foreground text-pretty">
                Les tests sont automatisés et les déploiements simplifiés pour limiter les erreurs. Vos applications gagnent en fiabilité et performance.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Déploiements rapides et sécurisés</h3>
              <p className="text-muted-foreground text-pretty">
                Les mises à jour se font sans interruption, pour que vos utilisateurs profitent d’un service continu et fluide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gestion & optimisation continue */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Gestion, sécurité et optimisation continue</h2>
          <p className="text-muted-foreground text-pretty">
            Vos environnements cloud sont sécurisés, performants et évolutifs. La surveillance proactive détecte rapidement les anomalies et optimise les performances. Les services DevOps de Viviworks garantissent des systèmes stables, prêts à évoluer avec vos besoins.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Optimisez vos processus DevOps
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Mettez en place des pipelines fiables et des infrastructures performantes avec nos experts.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:opacity-90 hover:scale-105 transition-all duration-200">
                <Link href="/contact">Parler à un ingénieur DevOps</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
