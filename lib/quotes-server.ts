// Gestion des devis côté serveur
import fs from 'fs'
import path from 'path'

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

const QUOTES_FILE = path.join(process.cwd(), 'data', 'quotes.json')

// Assurer que le dossier data existe
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(QUOTES_FILE)) {
    fs.writeFileSync(QUOTES_FILE, JSON.stringify([]), 'utf8')
  }
}

// Lire tous les devis
export function getAllQuotes(): Quote[] {
  try {
    ensureDataDir()
    const data = fs.readFileSync(QUOTES_FILE, 'utf8')
    return JSON.parse(data) || []
  } catch (error) {
    console.error('Error reading quotes:', error)
    return []
  }
}

// Sauvegarder les devis
function saveQuotes(quotes: Quote[]) {
  try {
    ensureDataDir()
    fs.writeFileSync(QUOTES_FILE, JSON.stringify(quotes, null, 2), 'utf8')
  } catch (error) {
    console.error('Error saving quotes:', error)
    throw error
  }
}

// Ajouter un nouveau devis
export function addQuoteServer(quote: Omit<Quote, 'id' | 'createdAt' | 'paid'>): Quote {
  const quotes = getAllQuotes()
  const newQuote: Quote = {
    ...quote,
    id: `quote_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    paid: false,
  }
  quotes.push(newQuote)
  saveQuotes(quotes)
  return newQuote
}

// Récupérer les devis par email
export function getQuotesByEmailServer(email: string): Quote[] {
  const quotes = getAllQuotes()
  return quotes.filter((q) => q.clientEmail.toLowerCase() === email.toLowerCase() && !q.paid)
}

// Récupérer un devis par ID
export function getQuoteByIdServer(id: string): Quote | null {
  const quotes = getAllQuotes()
  return quotes.find((q) => q.id === id) || null
}

// Marquer un devis comme payé
export function markQuoteAsPaidServer(id: string) {
  const quotes = getAllQuotes()
  const index = quotes.findIndex((q) => q.id === id)
  if (index !== -1) {
    quotes[index].paid = true
    saveQuotes(quotes)
    return true
  }
  return false
}

// Supprimer un devis
export function deleteQuoteServer(id: string) {
  const quotes = getAllQuotes()
  const filtered = quotes.filter((q) => q.id !== id)
  saveQuotes(filtered)
  return true
}

// Mettre à jour un devis
export function updateQuoteServer(id: string, updates: Partial<Omit<Quote, 'id' | 'createdAt'>>) {
  const quotes = getAllQuotes()
  const index = quotes.findIndex((q) => q.id === id)
  if (index !== -1) {
    quotes[index] = {
      ...quotes[index],
      ...updates,
    }
    saveQuotes(quotes)
    return quotes[index]
  }
  return null
}

