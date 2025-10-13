import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, TrendingUp, Zap, Target } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-mesh py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 animate-slide-in-up">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 glass border border-primary/30 text-primary px-5 py-2.5 rounded-full text-sm font-semibold animate-fade-in-scale shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <TrendingUp className="h-4 w-4" />
                Agence digitale innovante
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-balance animate-slide-in-up [animation-delay:0.2s] text-shadow-soft">
                Votre croissance digitale{" "}
                <span className="text-gradient-vibrant relative inline-block">
                  commence ici
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10 animate-pulse-subtle"></div>
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty animate-slide-in-up [animation-delay:0.4s]">
                Viviworks, l'agence digitale qui propulse vos projets web et marketing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 animate-slide-in-up [animation-delay:0.6s]">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 px-10 py-6 text-lg font-semibold group overflow-hidden"
                asChild
              >
                <Link href="/contact">
                  <span className="relative z-10">Démarrer mon projet</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 glass border-primary/30 hover:border-primary/50 hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-semibold group relative overflow-hidden"
                asChild
              >
                <Link href="/realisations">
                  <span className="relative z-10">Voir nos réalisations</span>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 animate-slide-in-up [animation-delay:0.8s]">
              <div className="flex items-center gap-4 p-5 glass rounded-xl hover-lift-glow group cursor-pointer">
                <div className="p-3 bg-gradient-to-br from-primary to-primary/50 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Solutions créatives</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 glass rounded-xl hover-lift-glow group cursor-pointer">
                <div className="p-3 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-secondary transition-colors">Performance</h3>
                  <p className="text-sm text-muted-foreground">Résultats mesurables</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 glass rounded-xl hover-lift-glow group cursor-pointer">
                <div className="p-3 bg-gradient-to-br from-primary to-primary/50 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Partenariat durable</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-scale [animation-delay:0.4s]">
            <div className="relative group">
              {/* Main image with enhanced effects */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20 bg-gradient-viviworks-card relative">
                <img
                  src="/modern-digital-workspace-with-people-working-on-we.jpg"
                  alt="Équipe Viviworks travaillant sur des projets digitaux innovants"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 mix-blend-overlay"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary via-primary/50 to-transparent rounded-full opacity-30 blur-2xl animate-blob"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-secondary via-secondary/50 to-transparent rounded-full opacity-20 blur-2xl animate-blob" style={{ animationDelay: "2s" }}></div>
              
              {/* Floating accent shapes */}
              <div className="absolute top-10 -left-6 w-16 h-16 bg-primary/20 rounded-xl backdrop-blur-sm glass animate-float rotate-12"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full backdrop-blur-sm glass animate-float" style={{ animationDelay: "1.5s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
