"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { defaultTestimonials, loadTestimonialsFromStorage, saveTestimonialsToStorage, type Testimonial } from "@/lib/testimonials"
 

export default function AdminPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials)
 

  useEffect(() => {
    const stored = loadTestimonialsFromStorage()
    if (stored) setTestimonials(stored)
    
  }, [])

  const updateField = (index: number, field: keyof Testimonial, value: string) => {
    setTestimonials((prev) => {
      const copy = [...prev]
      copy[index] = { ...copy[index], [field]: value }
      return copy
    })
  }

  const addTestimonial = () => {
    setTestimonials((prev) => [...prev, { name: "", role: "", company: "", quote: "" }])
  }

  const removeTestimonial = (index: number) => {
    setTestimonials((prev) => prev.filter((_, i) => i !== index))
  }

  const save = () => {
    saveTestimonialsToStorage(testimonials)
    alert("Témoignages enregistrés")
  }

  const resetDefaults = () => {
    setTestimonials(defaultTestimonials)
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Administration - Témoignages</CardTitle>
                <Button
                  variant="outline"
                  onClick={async () => {
                    await fetch('/api/admin/logout', { method: 'POST' })
                    window.location.href = '/admin/login'
                  }}
                >
                  Se déconnecter
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3">
                <Button onClick={addTestimonial}>Ajouter</Button>
                <Button variant="outline" onClick={resetDefaults}>Réinitialiser par défaut</Button>
                <Button className="ml-auto" onClick={save}>Enregistrer</Button>
              </div>
              <div className="space-y-6">
                {testimonials.map((t, i) => (
                  <Card key={i} className="border-border/50">
                    <CardContent className="p-4 space-y-3">
                      <div className="grid md:grid-cols-2 gap-3">
                        <div>
                          <label className="text-sm text-muted-foreground">Nom</label>
                          <Input value={t.name} onChange={(e) => updateField(i, "name", e.target.value)} />
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground">Rôle</label>
                          <Input value={t.role} onChange={(e) => updateField(i, "role", e.target.value)} />
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground">Entreprise</label>
                          <Input value={t.company} onChange={(e) => updateField(i, "company", e.target.value)} />
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-sm text-muted-foreground">Citation</label>
                          <Textarea rows={3} value={t.quote} onChange={(e) => updateField(i, "quote", e.target.value)} />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="destructive" onClick={() => removeTestimonial(i)}>Supprimer</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          
        </div>
      </section>
      <Footer />
    </main>
  )
}


