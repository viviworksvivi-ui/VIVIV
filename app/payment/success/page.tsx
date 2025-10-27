"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect } from "react"
import { markQuoteAsPaid } from "@/lib/quotes"

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const isCustomQuote = searchParams.get('custom_quote')
  const quoteId = searchParams.get('quote_id')

  useEffect(() => {
    // Si c'est un paiement de devis personnalisé, marquer le devis comme payé
    if (isCustomQuote === 'true' && quoteId) {
      markQuoteAsPaid(quoteId)
    }
  }, [isCustomQuote, quoteId])

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass border-green-200">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-3xl text-green-600">
                Paiement réussi !
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <p className="text-lg text-muted-foreground">
                Merci pour votre confiance ! Votre paiement a été traité avec succès.
              </p>

              {sessionId && (
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">ID de transaction</p>
                  <p className="font-mono text-sm break-all">{sessionId}</p>
                </div>
              )}

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  📧 Un email de confirmation vous a été envoyé avec tous les détails de votre {isCustomQuote === 'true' ? 'devis' : 'commande'}.
                </p>
                <p className="text-sm text-muted-foreground">
                  Notre équipe vous contactera dans les <strong>24 heures</strong> pour démarrer votre projet.
                </p>
                {isCustomQuote === 'true' && (
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-primary">
                      ✨ Paiement de votre devis personnalisé confirmé
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link href="/">
                  <Button variant="outline" size="lg">
                    Retour à l'accueil
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Chargement...</p>
        </div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  )
}

