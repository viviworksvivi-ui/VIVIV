import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Code, Settings, Palette, ArrowRight, Monitor, Server } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Création de site web",
    description: "Sites vitrines, e-commerce et web apps sur mesure.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverBg: "group-hover:bg-primary/20",
    href: "/services/creation-site-web",
  },
  {
    icon: Monitor,
    title: "Développement Front-end",
    description: "Interfaces modernes, responsives et rapides.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    hoverBg: "group-hover:bg-secondary/20",
    href: "/services/developpement-frontend",
  },
  {
    icon: Server,
    title: "Développement Back-end",
    description: "Bases solides, sécurité et évolutivité.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverBg: "group-hover:bg-primary/20",
    href: "/services/developpement-backend",
  },
  {
    icon: Code,
    title: "Logiciels sur mesure",
    description: "CRM, ERP et solutions SaaS adaptées à vos besoins.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    hoverBg: "group-hover:bg-secondary/20",
    href: "/services/logiciels-sur-mesure",
  },
  {
    icon: Palette,
    title: "Maquettes UX/UI",
    description: "Wireframes, prototypes et tests utilisateurs.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverBg: "group-hover:bg-primary/20",
    href: "/services/maquettes-ux-ui",
  },
  {
    icon: Settings,
    title: "DevOps",
    description: "Automatisation, CI/CD et monitoring en continu.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    hoverBg: "group-hover:bg-secondary/20",
    href: "/services/devops",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 bg-gradient-mesh relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 mb-20 animate-slide-in-up">
          <div className="inline-flex items-center gap-2 glass border border-primary/30 text-primary px-6 py-3 rounded-full text-sm font-semibold animate-fade-in-scale shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            ✨ Nos Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-balance animate-slide-in-up [animation-delay:0.2s]">
            Nos Services{" "}
            <span className="text-gradient-vibrant relative inline-block">
              d'Excellence
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10 animate-pulse-subtle"></div>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions digitales sur mesure pour transformer votre vision en réalité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={service.href} className="block focus:outline-none">
                <Card
                  className={`group hover-lift-glow transition-all duration-500 border-2 border-border/30 hover:border-primary/50 glass card-shine animate-fade-in-scale overflow-hidden relative h-full`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="text-center pb-6 relative z-10 space-y-4">
                    <div className="flex justify-center">
                      <div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${service.bgColor} ${service.hoverBg} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl relative`}
                      >
                        <Icon
                          className={`h-10 w-10 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0 relative z-10 space-y-4">
                    <CardDescription className="text-center text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 min-h-[3rem]">
                      {service.description}
                    </CardDescription>

                    <div className="flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-primary font-medium">
                      <span className="text-sm">En savoir plus</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-20 animate-slide-in-up [animation-delay:0.8s]">
          <Button
            size="lg"
            className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(74,159,217,0.4)] group px-10 py-7 text-lg font-semibold overflow-hidden"
            asChild
          >
            <Link href="/services">
              <span className="relative z-10">Voir tous nos services</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
