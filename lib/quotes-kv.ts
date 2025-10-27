// Gestion des devis avec Redis (Upstash)
import { kv } from '@vercel/kv'

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

const QUOTES_KEY = 'quotes:all'

// Récupérer tous les devis
export async function getAllQuotes(): Promise<Quote[]> {
  try {
    const quotes = await kv.get<Quote[]>(QUOTES_KEY)
    return quotes || []
  } catch (error) {
    console.error('❌ Erreur lecture devis:', error)
    return []
  }
}

// Récupérer les devis d'un client par email
export async function getQuotesByEmailKV(email: string): Promise<Quote[]> {
  try {
    const allQuotes = await getAllQuotes()
    return allQuotes.filter(q => q.clientEmail.toLowerCase() === email.toLowerCase())
  } catch (error) {
    console.error('❌ Erreur filtrage devis:', error)
    return []
  }
}

// Ajouter un nouveau devis
export async function addQuoteKV(quote: Omit<Quote, 'id' | 'createdAt' | 'paid'>): Promise<Quote> {
  try {
    const newQuote: Quote = {
      ...quote,
      id: `quote_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      paid: false,
    }

    const allQuotes = await getAllQuotes()
    allQuotes.push(newQuote)
    await kv.set(QUOTES_KEY, allQuotes)

    console.log('✅ Devis créé:', newQuote.id)
    return newQuote
  } catch (error) {
    console.error('❌ Erreur création devis:', error)
    throw error
  }
}

// Mettre à jour un devis
export async function updateQuoteKV(id: string, updates: Partial<Quote>): Promise<Quote | null> {
  try {
    const allQuotes = await getAllQuotes()
    const index = allQuotes.findIndex(q => q.id === id)
    
    if (index === -1) {
      return null
    }

    allQuotes[index] = { ...allQuotes[index], ...updates }
    await kv.set(QUOTES_KEY, allQuotes)

    console.log('✅ Devis mis à jour:', id)
    return allQuotes[index]
  } catch (error) {
    console.error('❌ Erreur mise à jour devis:', error)
    throw error
  }
}

// Supprimer un devis
export async function deleteQuoteKV(id: string): Promise<boolean> {
  try {
    const allQuotes = await getAllQuotes()
    const filteredQuotes = allQuotes.filter(q => q.id !== id)
    
    if (filteredQuotes.length === allQuotes.length) {
      return false // Aucun devis supprimé
    }

    await kv.set(QUOTES_KEY, filteredQuotes)
    console.log('✅ Devis supprimé:', id)
    return true
  } catch (error) {
    console.error('❌ Erreur suppression devis:', error)
    throw error
  }
}

// Marquer un devis comme payé
export async function markQuoteAsPaidKV(id: string): Promise<Quote | null> {
  try {
    return await updateQuoteKV(id, { paid: true })
  } catch (error) {
    console.error('❌ Erreur marquage payé:', error)
    throw error
  }
}

// Récupérer un devis par ID
export async function getQuoteByIdKV(id: string): Promise<Quote | null> {
  try {
    const allQuotes = await getAllQuotes()
    return allQuotes.find(q => q.id === id) || null
  } catch (error) {
    console.error('❌ Erreur récupération devis:', error)
    return null
  }
}

