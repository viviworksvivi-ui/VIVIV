import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PortfolioPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-balance">Réalisations (Aperçu)</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Découvrez comment nous avons propulsé des entreprises à travers le monde vers une forte croissance et un
            succès digital.
          </p>
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group px-8 py-6 text-lg"
            >
              Voir nos réalisations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
