"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { defaultTestimonials, loadTestimonialsFromStorage, saveTestimonialsToStorage, type Testimonial } from "@/lib/testimonials"
import { type Quote } from "@/lib/quotes"
import { toast } from "sonner"
import { Mail, Send, CheckCircle, Loader2, Package, Plus, X, FileText, Edit2, Trash2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
 

export default function AdminPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials)
  const [quotes, setQuotes] = useState<Quote[]>([])
  
  // État pour le formulaire de devis
  const [quoteForm, setQuoteForm] = useState({
    packageName: "",
    price: "",
    clientEmail: "",
    description: "",
    features: [""],
  })
  const [creatingQuote, setCreatingQuote] = useState(false)
  const [paymentLink, setPaymentLink] = useState("")
  
  // État pour la modification
  const [editingQuote, setEditingQuote] = useState<Quote | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editForm, setEditForm] = useState({
    packageName: "",
    price: "",
    clientEmail: "",
    description: "",
    features: [""],
  })

  useEffect(() => {
    const stored = loadTestimonialsFromStorage()
    if (stored) setTestimonials(stored)
    
    // Charger les devis depuis le serveur
    refreshQuotes()
  }, [])
  
  // Rafraîchir les devis depuis le serveur
  const refreshQuotes = async () => {
    try {
      const response = await fetch("/api/admin/quotes")
      const data = await response.json()
      if (data.success) {
        setQuotes(data.quotes)
      }
    } catch (error) {
      console.error("Error loading quotes:", error)
    }
  }

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

  // Gestion du formulaire de devis
  const updateQuoteField = (field: keyof typeof quoteForm, value: string) => {
    setQuoteForm((prev) => ({ ...prev, [field]: value }))
  }

  const addFeature = () => {
    setQuoteForm((prev) => ({ ...prev, features: [...prev.features, ""] }))
  }

  const updateFeature = (index: number, value: string) => {
    setQuoteForm((prev) => {
      const features = [...prev.features]
      features[index] = value
      return { ...prev, features }
    })
  }

  const removeFeature = (index: number) => {
    setQuoteForm((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }))
  }

  const resetQuoteForm = () => {
    setQuoteForm({
      packageName: "",
      price: "",
      clientEmail: "",
      description: "",
      features: [""],
    })
    setPaymentLink("")
  }

  const createQuote = async (keepFormData: boolean = false) => {
    // Validation
    if (!quoteForm.packageName.trim()) {
      toast.error("Le nom du package est requis")
      return
    }
    if (!quoteForm.price || Number(quoteForm.price) <= 0) {
      toast.error("Le prix doit être supérieur à 0")
      return
    }
    if (!quoteForm.clientEmail.trim()) {
      toast.error("L'email du client est requis")
      return
    }

    setCreatingQuote(true)

    try {
      // Filtrer les features vides
      const filteredFeatures = quoteForm.features.filter((f) => f.trim() !== "")

      // Envoyer à l'API pour créer et envoyer l'email
      const response = await fetch("/api/admin/create-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageName: quoteForm.packageName,
          price: Number(quoteForm.price),
          clientEmail: quoteForm.clientEmail,
          description: quoteForm.description.trim() || `Package ${quoteForm.packageName} pour ${quoteForm.clientEmail}`,
          features: filteredFeatures,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de la création du devis")
      }

      // Rafraîchir la liste des devis
      await refreshQuotes()

      // Afficher le lien de paiement
      setPaymentLink(data.paymentLink)

      toast.success("✅ Devis créé et email envoyé avec succès !")
      
      // Si on veut créer un autre devis, ne garder que certains champs
      if (keepFormData) {
        setQuoteForm({
          packageName: quoteForm.packageName, // Garder le nom du package
          price: quoteForm.price, // Garder le prix
          clientEmail: "", // Effacer l'email
          description: "", // Effacer la description
          features: quoteForm.features, // Garder les features
        })
        setPaymentLink("")
        toast.info("➕ Prêt à créer un autre devis !")
      }
    } catch (error) {
      console.error("Error creating quote:", error)
      toast.error(error instanceof Error ? error.message : "Erreur lors de la création du devis")
    } finally {
      setCreatingQuote(false)
    }
  }

  const copyPaymentLink = () => {
    if (paymentLink) {
      navigator.clipboard.writeText(paymentLink)
      toast.success("Lien copié dans le presse-papiers !")
    }
  }

  // Ouvrir la modale de modification
  const openEditDialog = (quote: Quote) => {
    setEditingQuote(quote)
    setEditForm({
      packageName: quote.packageName,
      price: quote.price.toString(),
      clientEmail: quote.clientEmail,
      description: quote.description,
      features: quote.features.length > 0 ? quote.features : [""],
    })
    setIsEditDialogOpen(true)
  }

  // Gestion du formulaire de modification
  const updateEditField = (field: keyof typeof editForm, value: string) => {
    setEditForm((prev) => ({ ...prev, [field]: value }))
  }

  const addEditFeature = () => {
    setEditForm((prev) => ({ ...prev, features: [...prev.features, ""] }))
  }

  const updateEditFeature = (index: number, value: string) => {
    setEditForm((prev) => {
      const features = [...prev.features]
      features[index] = value
      return { ...prev, features }
    })
  }

  const removeEditFeature = (index: number) => {
    setEditForm((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }))
  }

  // Sauvegarder les modifications
  const saveEditQuote = async () => {
    if (!editingQuote) return

    // Validation
    if (!editForm.packageName.trim()) {
      toast.error("Le nom du package est requis")
      return
    }
    if (!editForm.price || Number(editForm.price) <= 0) {
      toast.error("Le prix doit être supérieur à 0")
      return
    }
    if (!editForm.clientEmail.trim()) {
      toast.error("L'email du client est requis")
      return
    }

    try {
      // Filtrer les features vides
      const filteredFeatures = editForm.features.filter((f) => f.trim() !== "")

      // Mettre à jour le devis via API
      const response = await fetch("/api/admin/quotes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingQuote.id,
          updates: {
            packageName: editForm.packageName,
            price: Number(editForm.price),
            clientEmail: editForm.clientEmail,
            description: editForm.description.trim() || `Package ${editForm.packageName} pour ${editForm.clientEmail}`,
            features: filteredFeatures,
          },
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Devis modifié avec succès !")
        setIsEditDialogOpen(false)
        setEditingQuote(null)
        await refreshQuotes()
      } else {
        toast.error("Erreur lors de la modification du devis")
      }
    } catch (error) {
      console.error("Error updating quote:", error)
      toast.error("Erreur lors de la modification du devis")
    }
  }

  // Supprimer un devis
  const handleDeleteQuote = async (quoteId: string) => {
    try {
      const response = await fetch(`/api/admin/quotes?id=${quoteId}`, {
        method: "DELETE",
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Devis supprimé avec succès")
        await refreshQuotes()
      } else {
        toast.error("Erreur lors de la suppression")
      }
    } catch (error) {
      console.error("Error deleting quote:", error)
      toast.error("Erreur lors de la suppression")
    }
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

          {/* Section Devis Personnalisés */}
          <Card className="border-border/50 mt-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Package className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Devis Personnalisés</CardTitle>
                  <CardDescription>
                    Créez des devis sur mesure pour vos clients et envoyez-leur automatiquement le lien de paiement
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Formulaire de création */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Créer un nouveau devis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="packageName">
                        Nom du package *
                      </Label>
                      <Input
                        id="packageName"
                        placeholder="Ex: Site Web sur mesure"
                        value={quoteForm.packageName}
                        onChange={(e) => updateQuoteField("packageName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">
                        Prix (€) *
                      </Label>
                      <Input
                        id="price"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Ex: 2500"
                        value={quoteForm.price}
                        onChange={(e) => updateQuoteField("price", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clientEmail">
                      Email du client *
                    </Label>
                    <Input
                      id="clientEmail"
                      type="email"
                      placeholder="client@exemple.com"
                      value={quoteForm.clientEmail}
                      onChange={(e) => updateQuoteField("clientEmail", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">
                      Description <span className="text-muted-foreground text-sm">(optionnel)</span>
                    </Label>
                    <Textarea
                      id="description"
                      rows={4}
                      placeholder="Décrivez le projet et ce qui est inclus dans ce devis... (Si vide, une description automatique sera générée)"
                      value={quoteForm.description}
                      onChange={(e) => updateQuoteField("description", e.target.value)}
                    />
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Fonctionnalités incluses (optionnel)</Label>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addFeature}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Ajouter
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {quoteForm.features.map((feature, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            placeholder="Ex: Design responsive"
                            value={feature}
                            onChange={(e) => updateFeature(index, e.target.value)}
                          />
                          {quoteForm.features.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFeature(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Button
                        onClick={() => createQuote(false)}
                        disabled={creatingQuote}
                        className="flex-1 bg-gradient-to-r from-primary to-secondary"
                      >
                        {creatingQuote ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Création en cours...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Créer et envoyer
                          </>
                        )}
                      </Button>
                      <Button
                        onClick={() => createQuote(true)}
                        disabled={creatingQuote}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        {creatingQuote ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Création...
                          </>
                        ) : (
                          <>
                            <Plus className="mr-2 h-4 w-4" />
                            Créer + Nouveau
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={resetQuoteForm}
                        disabled={creatingQuote}
                        className="text-muted-foreground"
                      >
                        <X className="mr-1 h-3 w-3" />
                        Réinitialiser tout
                      </Button>
                    </div>
                  </div>

                  {/* Afficher le lien de paiement après création */}
                  {paymentLink && (
                    <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-500 rounded-lg p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <p className="font-semibold text-green-700 dark:text-green-400">
                          Devis créé avec succès !
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label>Lien de paiement (envoyé par email au client) :</Label>
                        <div className="flex gap-2">
                          <Input
                            value={paymentLink}
                            readOnly
                            className="bg-white dark:bg-gray-900"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={copyPaymentLink}
                          >
                            Copier
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Un email contenant ce lien a été envoyé à <strong>{quoteForm.clientEmail}</strong>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Liste des devis créés */}
              {quotes.length > 0 && (
                <div className="space-y-4">
                  <Separator />
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Devis récents ({quotes.length})</h3>
                    <Badge variant="secondary">
                      {quotes.filter((q) => !q.paid).length} en attente
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    {quotes.slice(0, 10).map((quote) => (
                      <Card key={quote.id} className={`border ${quote.paid ? "border-green-500/50 bg-green-50/50 dark:bg-green-950/20" : "border-border/50"}`}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1 flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold">{quote.packageName}</h4>
                                {quote.paid ? (
                                  <Badge className="bg-green-500">Payé</Badge>
                                ) : (
                                  <Badge variant="outline">En attente</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Client: {quote.clientEmail}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Créé le {new Date(quote.createdAt).toLocaleDateString("fr-FR")}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <div className="text-xl font-bold text-primary">
                                  {quote.price.toLocaleString("fr-FR")}€
                                </div>
                              </div>
                              {!quote.paid && (
                                <div className="flex gap-2">
                                  <Dialog open={isEditDialogOpen && editingQuote?.id === quote.id} onOpenChange={(open) => {
                                    setIsEditDialogOpen(open)
                                    if (!open) setEditingQuote(null)
                                  }}>
                                    <DialogTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => openEditDialog(quote)}
                                      >
                                        <Edit2 className="h-4 w-4" />
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                                      <DialogHeader>
                                        <DialogTitle>Modifier le devis</DialogTitle>
                                        <DialogDescription>
                                          Modifiez les informations du devis pour {quote.clientEmail}
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="space-y-4 py-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                          <div className="space-y-2">
                                            <Label htmlFor="edit-packageName">Nom du package *</Label>
                                            <Input
                                              id="edit-packageName"
                                              value={editForm.packageName}
                                              onChange={(e) => updateEditField("packageName", e.target.value)}
                                            />
                                          </div>
                                          <div className="space-y-2">
                                            <Label htmlFor="edit-price">Prix (€) *</Label>
                                            <Input
                                              id="edit-price"
                                              type="number"
                                              value={editForm.price}
                                              onChange={(e) => updateEditField("price", e.target.value)}
                                            />
                                          </div>
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor="edit-clientEmail">Email du client *</Label>
                                          <Input
                                            id="edit-clientEmail"
                                            type="email"
                                            value={editForm.clientEmail}
                                            onChange={(e) => updateEditField("clientEmail", e.target.value)}
                                          />
                                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="edit-description">
                            Description <span className="text-muted-foreground text-sm">(optionnel)</span>
                          </Label>
                          <Textarea
                            id="edit-description"
                            rows={4}
                            placeholder="Si vide, une description automatique sera générée"
                            value={editForm.description}
                            onChange={(e) => updateEditField("description", e.target.value)}
                          />
                        </div>
                                        <Separator />
                                        <div className="space-y-3">
                                          <div className="flex items-center justify-between">
                                            <Label>Fonctionnalités incluses</Label>
                                            <Button
                                              type="button"
                                              variant="outline"
                                              size="sm"
                                              onClick={addEditFeature}
                                            >
                                              <Plus className="h-4 w-4 mr-1" />
                                              Ajouter
                                            </Button>
                                          </div>
                                          <div className="space-y-2">
                                            {editForm.features.map((feature, index) => (
                                              <div key={index} className="flex gap-2">
                                                <Input
                                                  value={feature}
                                                  onChange={(e) => updateEditFeature(index, e.target.value)}
                                                  placeholder="Ex: Design responsive"
                                                />
                                                {editForm.features.length > 1 && (
                                                  <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => removeEditFeature(index)}
                                                  >
                                                    <X className="h-4 w-4" />
                                                  </Button>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex justify-end gap-3">
                                        <Button
                                          variant="outline"
                                          onClick={() => {
                                            setIsEditDialogOpen(false)
                                            setEditingQuote(null)
                                          }}
                                        >
                                          Annuler
                                        </Button>
                                        <Button onClick={saveEditQuote}>
                                          <CheckCircle className="mr-2 h-4 w-4" />
                                          Enregistrer
                                        </Button>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                  
                                  <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <Button variant="destructive" size="icon">
                                        <Trash2 className="h-4 w-4" />
                                      </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>Supprimer le devis</AlertDialogTitle>
                                        <AlertDialogDescription>
                                          Êtes-vous sûr de vouloir supprimer ce devis ?
                                          <br />
                                          <strong>{quote.packageName}</strong> - {quote.clientEmail}
                                          <br />
                                          <br />
                                          Cette action est irréversible.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                                        <AlertDialogAction
                                          onClick={() => handleDeleteQuote(quote.id)}
                                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                        >
                                          Supprimer
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}


