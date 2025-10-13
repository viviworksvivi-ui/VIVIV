import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
            Prêt à booster votre visibilité ?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Discutons de votre projet et découvrons ensemble comment nous pouvons transformer vos idées en résultats
            concrets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactez-nous
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href="/realisations">
                Découvrez nos réalisations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 text-sm">
              Ou appelez-nous directement : <span className="font-semibold">+33665758583</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
