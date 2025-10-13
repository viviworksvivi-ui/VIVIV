export type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
}

export const defaultTestimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    role: "PDG @ Skyline Enterprises",
    company: "Skyline Enterprises",
    quote:
      "Viviworks a livré au-delà de nos attentes. L'expertise de leur équipe en conception et en stratégie marketing nous a donné un avantage concurrentiel dans notre industrie.",
  },
  {
    name: "Alicia Rodriguez",
    role: "Directrice E-commerce @ Global Retail",
    company: "Global Retail",
    quote:
      "La solution e-commerce de Viviworks a augmenté notre taux de conversion de 35%. Leur support continu et leurs améliorations ont été inestimables.",
  },
  {
    name: "David Thompson",
    role: "Fondateur de Startup @ Innovate Tech",
    company: "Innovate Tech",
    quote:
      "En tant que startup, nous avions besoin d'un partenaire qui comprenne notre vision et puisse exécuter dans notre budget. Viviworks a livré des résultats exceptionnels qui nous ont aidés à sécuriser des financements supplémentaires.",
  },
  {
    name: "Sarah Johnson",
    role: "Directrice Marketing @ Tech Innovations",
    company: "Tech Innovations",
    quote:
      "Travailler avec Viviworks a complètement transformé notre présence numérique. Leur approche stratégique et leur attention aux détails ont conduit à une augmentation de 40% des prospects en ligne.",
  },
]

export function loadTestimonialsFromStorage(): Testimonial[] | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem("vw_testimonials")
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed as Testimonial[]
  } catch {}
  return null
}

export function saveTestimonialsToStorage(testimonials: Testimonial[]) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem("vw_testimonials", JSON.stringify(testimonials))
  } catch {}
}




