"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Settings, Users } from "lucide-react"
import Link from "next/link"

export default function SaaSPage() {
  const { t } = useI18n()
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6">
            <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">Service</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">{t('nav.dropdown.saas')}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">{t('services.saas.hero.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-10">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50 bg-gradient-viviworks-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">{t('services.saas.power.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                {t('services.saas.power.text')}
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-viviworks-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Settings className="h-6 w-6 text-secondary" />
                  <CardTitle className="text-2xl">{t('services.saas.costs.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                {t('services.saas.costs.text')}
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50 bg-gradient-viviworks-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">{t('services.saas.productivity.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                {t('services.saas.productivity.text')}
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-viviworks-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <CardTitle className="text-2xl">{t('services.saas.why.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed space-y-2">
                <p>{t('services.saas.why.p')}</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{t('services.saas.why.li1')}</li>
                  <li>{t('services.saas.why.li2')}</li>
                  <li>{t('services.saas.why.li3')}</li>
                  <li>{t('services.saas.why.li4')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-dashed border-2 border-primary/30 bg-gradient-viviworks-card">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-semibold text-primary">{t('services.saas.cta.title')}</h3>
              <Link href="/contact" className="inline-block px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">{t('services.saas.cta.button')}</Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}


