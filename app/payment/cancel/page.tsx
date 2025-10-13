"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"
import Link from "next/link"

export default function PaymentCancelPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass border-orange-200">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center">
                <XCircle className="h-10 w-10 text-orange-600" />
              </div>
              <CardTitle className="text-3xl text-orange-600">
                Paiement annulé
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <p className="text-lg text-muted-foreground">
                Votre paiement a été annulé. Aucun montant n'a été débité.
              </p>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Si vous avez rencontré un problème ou si vous avez des questions, n'hésitez pas à nous contacter.
                </p>
                <p className="text-sm text-muted-foreground">
                  Notre équipe est là pour vous aider à choisir le package qui vous convient le mieux.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link href="/paiement">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                    Réessayer
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
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

