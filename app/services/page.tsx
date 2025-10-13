import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesGrid } from "@/components/services-grid"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">Nos Services Digitaux</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Une expertise complète pour accompagner votre transformation digitale. De la création de sites web au
            marketing digital, nous avons les solutions pour votre succès.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Discutons de votre projet
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <ServicesGrid />

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
              Notre Processus de Travail
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Une méthodologie éprouvée pour garantir le succès de vos projets digitaux.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analyse", description: "Audit complet de vos besoins et objectifs" },
              { step: "02", title: "Stratégie", description: "Élaboration d'une stratégie sur mesure" },
              { step: "03", title: "Réalisation", description: "Développement et mise en œuvre des solutions" },
              { step: "04", title: "Optimisation", description: "Suivi, analyse et amélioration continue" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground border-2 border-primary/20 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg hover:bg-primary/90 hover:border-primary/30 transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
