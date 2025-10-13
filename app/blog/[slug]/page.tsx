import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from "lucide-react"
import Link from "next/link"

// This would typically come from a CMS or database
const blogPost = {
  title: "Les Tendances Web Design 2024 : Ce Qui Va Marquer l'Année",
  excerpt:
    "Découvrez les dernières tendances en matière de design web qui vont dominer 2024 : minimalisme, animations micro-interactions, et bien plus.",
  content: `
    <p>Le monde du web design évolue constamment, et 2024 ne fait pas exception. Cette année marque un tournant vers des expériences utilisateur plus raffinées et des interfaces plus intuitives.</p>
    
    <h2>1. Le Minimalisme Fonctionnel</h2>
    <p>Le minimalisme continue de dominer, mais avec une approche plus fonctionnelle. Les designers privilégient désormais la simplicité qui améliore réellement l'expérience utilisateur plutôt que la simplicité pour elle-même.</p>
    
    <h2>2. Les Micro-Interactions</h2>
    <p>Les micro-interactions deviennent de plus en plus sophistiquées. Elles guident l'utilisateur de manière subtile et créent une expérience plus engageante.</p>
    
    <h2>3. La Typographie Expressive</h2>
    <p>2024 voit l'émergence de typographies plus audacieuses et expressives, utilisées comme élément de design principal plutôt que simple support de contenu.</p>
    
    <h2>4. Les Couleurs Vibrantes</h2>
    <p>Après des années de palettes neutres, les couleurs vibrantes font leur retour, utilisées avec parcimonie pour créer des points focaux efficaces.</p>
    
    <h2>Conclusion</h2>
    <p>Ces tendances reflètent une maturité croissante du web design, où l'esthétique sert toujours la fonctionnalité. L'année 2024 s'annonce passionnante pour les créatifs du web.</p>
  `,
  image: "/blog-web-design-trends-2024.jpg",
  category: "Design",
  author: "Thomas Laurent",
  date: "15 Mars 2024",
  readTime: "5 min",
  slug: "tendances-web-design-2024",
}

const relatedPosts = [
  {
    title: "UX Design : Comment Créer des Interfaces Intuitives",
    slug: "ux-design-interfaces-intuitives",
    image: "/blog-ux-design-interfaces.jpg",
    category: "Design",
  },
  {
    title: "React vs Vue.js : Quel Framework Choisir en 2024 ?",
    slug: "react-vs-vue-comparaison-2024",
    image: "/blog-react-vs-vue-comparison.jpg",
    category: "Développement",
  },
]

export default function BlogPostPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Back Button */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge className="mb-4 bg-accent text-accent-foreground">{blogPost.category}</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight text-balance">
              {blogPost.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">{blogPost.excerpt}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {blogPost.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {blogPost.readTime}
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Article
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pb-8 border-b border-border">
              <span className="text-sm font-medium text-foreground">Partager :</span>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Partager
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <img
                  src="/team-designer-thomas.jpg"
                  alt={blogPost.author}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{blogPost.author}</h3>
                  <p className="text-secondary font-medium mb-3">Lead Designer UX/UI</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Thomas est un designer passionné par l'expérience utilisateur et les interfaces modernes. Avec plus
                    de 6 ans d'expérience, il aide les entreprises à créer des produits digitaux qui marquent les
                    esprits.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 text-balance">Articles Similaires</h2>
            <p className="text-muted-foreground">Découvrez d'autres articles qui pourraient vous intéresser</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary/90 text-secondary-foreground">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Lire l'article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
