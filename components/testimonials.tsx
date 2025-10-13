import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Chen",
    company: "PDG @ Skyline Enterprises",
    content: "Viviworks a livré au-delà de nos attentes. Leur expertise nous a donné un avantage concurrentiel.",
    rating: 5,
    avatar: "/professional-man-portrait.png",
  },
  {
    name: "Alicia Rodriguez",
    company: "Directrice E-commerce @ Global Retail",
    content: "La solution e-commerce de Viviworks a augmenté notre taux de conversion de 35 %.",
    rating: 5,
    avatar: "/professional-woman-portrait.png",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-balance">Témoignages Clients</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  « {testimonial.content} »
                </blockquote>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-border"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
