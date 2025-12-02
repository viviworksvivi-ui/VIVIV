"use client"

import React from "react"
import { useI18n } from "@/lib/i18n"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function CreationSiteWebPage() {
  const { t } = useI18n()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero amélioré: texte + visuel */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Colonne texte */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">{t('nav.dropdown.creation')}</h1>
              <p className="text-xl text-muted-foreground text-pretty">Créez une présence en ligne à la hauteur de vos ambitions.</p>
              <p className="text-lg text-muted-foreground/90 text-pretty">
                Chez Viviworks, nous concevons des sites web sur mesure, performants, esthétiques et pensés pour offrir la meilleure expérience possible à vos visiteurs. Chaque projet repose sur une architecture solide, un design moderne et un code propre entre le front-end et le back-end.
              </p>

              <div className="pt-2">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-200">
                  <Link href="/contact">Discutons de votre projet</Link>
                </Button>
              </div>
            </div>

            {/* Colonne visuel */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden ring-1 ring-border/60 shadow-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/creation.webp"
                    alt="Atelier de conception web moderne chez Viviworks"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Front-end */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">Front-end</h2>
              <p className="text-muted-foreground text-pretty">
                Le front-end est la partie du site que vos visiteurs voient et avec laquelle ils interagissent. C’est ici que l’expérience utilisateur prend vie, à travers un design soigné, des animations fluides et une navigation intuitive. Notre équipe front-end s'assure que chaque détail compte, pour un rendu visuel à la hauteur de votre image.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Nos expertises front-end :</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Design responsive</span> : Une navigation fluide sur mobile, tablette et ordinateur.
                </li>
                <li>
                  <span className="font-medium text-foreground">Technologies modernes</span> : HTML5, CSS3, JavaScript, React, Vue.js, Tailwind CSS, etc.
                </li>
                <li>
                  <span className="font-medium text-foreground">Performance & accessibilité</span> : Optimisation des temps de chargement et respect des standards d’accessibilité (WCAG).
                </li>
                <li>
                  <span className="font-medium text-foreground">Intégration de maquettes</span> : À partir de Figma, Adobe XD ou Sketch.
                </li>
                <li>
                  <span className="font-medium text-foreground">Animation & interactions</span> : Création d’effets visuels et d’interfaces dynamiques pour une expérience engageante.
                </li>
              </ul>
              <p className="text-muted-foreground text-pretty">
                Notre mission est d’offrir à vos utilisateurs une interface rapide, agréable et intuitive, fidèle à votre identité visuelle.
              </p>
            </div>
          </div>

          {/* Visuel section */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden ring-1 ring-border/60 shadow-xl">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/frontend.webp"
                  alt="Interface et graphiques illustrant la performance front-end"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back-end */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          {/* Visuel section */}
          <div className="order-last lg:order-first relative">
            <div className="rounded-3xl overflow-hidden ring-1 ring-border/60 shadow-xl">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/backend.webp"
                  alt="Architecture applicative côté serveur"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">Back-end</h2>
              <p className="text-muted-foreground text-pretty">
                Le back-end est la partie cachée de votre site web. C’est là que se passent le traitement des données, la gestion des utilisateurs, les connexions aux bases de données, la sécurité… Chez Viviworks, nous concevons des systèmes robustes, évolutifs et sécurisés.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Nos expertises back-end :</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Langages et frameworks</span> : Node.js, PHP (Laravel), Python (Django/Flask), Ruby on Rails…
                </li>
                <li>
                  <span className="font-medium text-foreground">APIs & intégrations</span> : Développement d’API REST/GraphQL, intégration de services tiers (paiement, CRM, ERP, etc.).
                </li>
                <li>
                  <span className="font-medium text-foreground">Gestion des bases de données</span> : MySQL, PostgreSQL, MongoDB…
                </li>
                <li>
                  <span className="font-medium text-foreground">Sécurité des applications</span> : Authentification, gestion des rôles, chiffrement, protection contre les failles (XSS, CSRF, injection SQL…)
                </li>
                <li>
                  <span className="font-medium text-foreground">Infrastructure cloud & DevOps</span> : Hébergement, CI/CD, conteneurisation (Docker), monitoring.
                </li>
              </ul>
              <p className="text-muted-foreground text-pretty">
                Notre but est de construire une base technique solide et évolutive, qui permet à votre site de fonctionner parfaitement aujourd’hui et de grandir demain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Synergie */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Front-end & Back-end : un duo complémentaire</h2>
          <p className="text-muted-foreground text-pretty">
            Chez Viviworks, nous croyons que la réussite d’un site web repose sur une parfaite synergie entre le front-end et le back-end. C’est cette collaboration qui garantit :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Un design fidèle à vos attentes</li>
            <li>Des performances optimales</li>
            <li>Une expérience utilisateur fluide</li>
            <li>Une architecture stable, sécurisée et scalable</li>
          </ul>
        </div>
      </section>

      {/* Galerie d’images */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Réalisations en images</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <figure className="group overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
                  alt="Atelier de conception et prototypage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="p-3 text-sm text-muted-foreground">Design et prototypage</figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop"
                  alt="Performance et tableaux de bord analytics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="p-3 text-sm text-muted-foreground">Performance & SEO technique</figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
                  alt="Intégration responsive multi-écrans"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="p-3 text-sm text-muted-foreground">Responsive & accessibilité</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Types de sites */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Types de sites que nous réalisons</h2>
          <p className="text-muted-foreground text-pretty">
            Nos spécialistes en développement web réalisent tous les types de sites web :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Sites vitrines professionnels</li>
            <li>Portfolios & blogs</li>
            <li>Sites institutionnels</li>
            <li>Sites e-commerce (WooCommerce, Shopify, sur-mesure…)</li>
            <li>Web apps sur mesure (CRM, tableaux de bord, outils internes)</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Prêt à créer votre site web avec Viviworks ?
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Du design à la mise en ligne, nous vous accompagnons à chaque étape. Confiez-nous votre projet, et bénéficiez d’un site à la fois beau, rapide, intelligent… et qui convertit.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:opacity-90 hover:scale-105 transition-all duration-200">
                <Link href="/contact">Discutons de votre projet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
