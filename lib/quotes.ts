// Système de gestion des devis personnalisés

export type Quote = {
  id: string
  packageName: string
  price: number
  clientEmail: string
  description: string
  features: string[]
  createdAt: string
  paid: boolean
}

const STORAGE_KEY = "viviworks_quotes"

// Côté client : récupérer les devis depuis localStorage
export function getQuotesFromStorage(): Quote[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

// Côté client : sauvegarder les devis dans localStorage
export function saveQuotesToStorage(quotes: Quote[]) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(quotes))
  } catch (error) {
    console.error("Error saving quotes:", error)
  }
}

// Côté client : ajouter un nouveau devis
export function addQuote(quote: Omit<Quote, "id" | "createdAt" | "paid">): Quote {
  const newQuote: Quote = {
    ...quote,
    id: `quote_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    paid: false,
  }
  
  const quotes = getQuotesFromStorage()
  quotes.push(newQuote)
  saveQuotesToStorage(quotes)
  
  return newQuote
}

// Côté client : récupérer un devis par email
export function getQuotesByEmail(email: string): Quote[] {
  const quotes = getQuotesFromStorage()
  return quotes.filter((q) => q.clientEmail.toLowerCase() === email.toLowerCase() && !q.paid)
}

// Côté client : récupérer un devis par ID
export function getQuoteById(id: string): Quote | null {
  const quotes = getQuotesFromStorage()
  return quotes.find((q) => q.id === id) || null
}

// Côté client : marquer un devis comme payé
export function markQuoteAsPaid(id: string) {
  const quotes = getQuotesFromStorage()
  const index = quotes.findIndex((q) => q.id === id)
  if (index !== -1) {
    quotes[index].paid = true
    saveQuotesToStorage(quotes)
  }
}

// Côté client : supprimer un devis
export function deleteQuote(id: string) {
  const quotes = getQuotesFromStorage()
  const filtered = quotes.filter((q) => q.id !== id)
  saveQuotesToStorage(filtered)
}

// Côté client : mettre à jour un devis
export function updateQuote(id: string, updates: Partial<Omit<Quote, "id" | "createdAt">>) {
  const quotes = getQuotesFromStorage()
  const index = quotes.findIndex((q) => q.id === id)
  if (index !== -1) {
    quotes[index] = {
      ...quotes[index],
      ...updates,
    }
    saveQuotesToStorage(quotes)
    return quotes[index]
  }
  return null
}

// Devis par défaut pour exemple
export const defaultQuotes: Quote[] = []

