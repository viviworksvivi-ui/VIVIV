"use client"

"use client"
import React from "react"
import { useI18n } from "@/lib/i18n"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MaquettesUXUIPage() {
  const { t } = useI18n()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">{t('nav.dropdown.ux')}</h1>
          <p className="text-lg text-muted-foreground/90 text-pretty max-w-3xl mx-auto">
            Les design UX UI de Viviworks transforment vos idées en interfaces digitales intuitives et attrayantes. Nos UX UI designers combinent ergonomie et créativité pour rendre chaque application facile à utiliser et performante. Chaque interface améliore l’expérience utilisateur et valorise votre image de marque.
          </p>
        </div>
      </section>

      {/* Maquette UX */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Maquette UX et parcours utilisateur</h2>
            <p className="text-muted-foreground text-pretty">
              Pour créer des maquettes UX efficaces, il faut comprendre vos utilisateurs. L’analyse des besoins et comportements permet de simplifier la navigation et de guider vos visiteurs vers vos objectifs commerciaux. Chaque élément est pensé pour faciliter l’expérience et augmenter l’engagement.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Navigation intuitive</h3>
              <p className="text-muted-foreground text-pretty">
                Les parcours sont conçus pour anticiper les attentes de vos clients et rendre leurs actions simples et naturelles.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Engagement renforcé</h3>
              <p className="text-muted-foreground text-pretty">
                Des maquettes UX réfléchies favorisent la fidélisation et améliorent la satisfaction de vos utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conception UI */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Conception UI et design interactif</h2>
            <p className="text-muted-foreground text-pretty">
              La conception UI transforme vos interfaces en expériences harmonieuses et cohérentes avec votre identité visuelle. Typographie, couleurs, animations et hiérarchie visuelle sont étudiées pour rendre chaque page attractive et facile à utiliser. Les UX UI designers veillent à ce que vos clients profitent d’une interface fluide et agréable.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Interfaces harmonieuses</h3>
              <p className="text-muted-foreground text-pretty">
                Chaque composant est pensé pour que vos utilisateurs comprennent rapidement la navigation et trouvent ce qu’ils cherchent.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Design interactif</h3>
              <p className="text-muted-foreground text-pretty">
                Les animations et éléments interactifs rendent l’expérience dynamique et captivante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tests & optimisation */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Tests et optimisation UX/UI</h2>
          <p className="text-muted-foreground text-pretty">
            Des tests réguliers et l’analyse des données permettent d’ajuster vos interfaces et de les améliorer en continu. L’expérience utilisateur devient plus fluide et engageante, renforçant la satisfaction et la fidélité de vos clients.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Créez votre maquette UX/UI
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Offrez des interfaces à la fois belles, efficaces et centrées sur vos utilisateurs.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:opacity-90 hover:scale-105 transition-all duration-200">
                <Link href="/contact">Démarrer votre projet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
