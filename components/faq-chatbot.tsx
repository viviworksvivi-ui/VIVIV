"use client"

import { useEffect, useMemo, useState } from "react"
import { MessageCircle, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type ChatMessage = { role: "user" | "assistant"; content: string }

const FAQ_DATA: Array<{ q: string; a: string; keywords: string[] }> = [
  {
    q: "Quel est le délai moyen pour un projet ?",
    a:
      "Les délais varient selon la complexité : 2-4 semaines pour un site vitrine, 2-3 mois pour un e-commerce, 3-6 mois pour une application web complexe.",
    keywords: ["delai", "délai", "temps", "combien", "semaine", "mois", "projet"],
  },
  {
    q: "Proposez-vous un suivi après livraison ?",
    a:
      "Oui, nous offrons 3 mois de support gratuit après livraison, puis des contrats de maintenance adaptés à vos besoins.",
    keywords: ["suivi", "après", "livraison", "support", "maintenance", "garantie"],
  },
  {
    q: "Travaillez-vous avec des entreprises de toutes tailles ?",
    a:
      "Absolument ! Nous accompagnons aussi bien les startups que les grandes entreprises, en adaptant nos solutions à votre budget et vos objectifs.",
    keywords: ["entreprise", "taille", "startup", "grande", "pmE", "budget", "objectifs"],
  },
  {
    q: "Comment se déroule un projet type ?",
    a:
      "Analyse des besoins → Devis détaillé → Conception/Design → Développement → Tests → Formation → Livraison → Suivi.",
    keywords: ["déroule", "deroule", "process", "processus", "etapes", "étapes", "projet type"],
  },
]

function findBestAnswer(userText: string): string {
  const text = userText.toLowerCase()
  let bestScore = 0
  let best = "Je n'ai pas bien compris. Voici des questions possibles:\n- Délai moyen pour un projet\n- Suivi après livraison\n- Entreprises de toutes tailles\n- Déroulement d'un projet type"

  for (const item of FAQ_DATA) {
    const score = item.keywords.reduce((acc, kw) => (text.includes(kw) ? acc + 1 : acc), 0)
    if (score > bestScore) {
      bestScore = score
      best = `${item.q}\n${item.a}`
    }
  }
  return best
}

function findMatchedQuestion(userText: string): string | null {
  const text = userText.toLowerCase()
  let bestScore = 0
  let bestQ: string | null = null
  for (const item of FAQ_DATA) {
    const score = item.keywords.reduce((acc, kw) => (text.includes(kw) ? acc + 1 : acc), 0)
    if (score > bestScore) {
      bestScore = score
      bestQ = item.q
    }
  }
  return bestScore > 0 ? bestQ : null
}

export function FaqChatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([{
    role: "assistant",
    content: "Bonjour! Posez-moi une question (ex: 'Quel est le délai pour un site vitrine ?').",
  }])
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)

  const allSuggestions = useMemo(() => FAQ_DATA.map((f) => f.q), [])
  const [remainingSuggestions, setRemainingSuggestions] = useState<string[]>(allSuggestions)

  // Show suggestions 5s after initial greeting
  useEffect(() => {
    setShowSuggestions(false)
    const t = window.setTimeout(() => setShowSuggestions(true), 5000)
    return () => clearTimeout(t)
  }, [])

  const send = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    const userMsg: ChatMessage = { role: "user", content: trimmed }
    setMessages((m) => [...m, userMsg])
    setInput("")
    setIsTyping(true)
    setShowSuggestions(false)
    const matchedQ = findMatchedQuestion(trimmed)
    if (matchedQ) {
      setRemainingSuggestions((prev) => prev.filter((q) => q !== matchedQ))
    }
    const answer = findBestAnswer(trimmed)
    setTimeout(() => {
      setIsTyping(false)
      setMessages((m) => [...m, { role: "assistant", content: answer }])
      window.setTimeout(() => setShowSuggestions(true), 5000)
    }, 5000)
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
      {open ? (
        <div className="w-80 sm:w-96 rounded-xl border bg-background shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="flex items-center gap-2 text-foreground">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="font-semibold">Assistant FAQ</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)} aria-label="Fermer le chatbot">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="max-h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <div className={`inline-block rounded-lg px-3 py-2 text-sm leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-left">
                <div className="inline-block rounded-lg px-3 py-2 text-sm leading-relaxed bg-muted text-foreground">
                  <span className="typing" aria-label="En train d'écrire"></span>
                </div>
              </div>
            )}
            {showSuggestions && remainingSuggestions.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {remainingSuggestions.map((s, i) => (
                <button
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 hover:bg-primary/20 text-foreground transition-colors"
                  onClick={() => {
                    setInput("")
                    const userMsg: ChatMessage = { role: "user", content: s }
                    setMessages((m) => [...m, userMsg])
                    setIsTyping(true)
                    setShowSuggestions(false)
                    setRemainingSuggestions((prev) => prev.filter((q) => q !== s))
                    const answer = findBestAnswer(s)
                    setTimeout(() => {
                      setIsTyping(false)
                      setMessages((m) => [...m, { role: "assistant", content: answer }])
                      window.setTimeout(() => setShowSuggestions(true), 5000)
                    }, 5000)
                  }}
                  type="button"
                >
                  {s}
                </button>
              ))}
            </div>
            )}
          </div>
          <div className="p-3 border-t">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Posez votre question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") send()
                }}
              />
              <Button onClick={send} aria-label="Envoyer">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button
          className="h-12 px-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le chatbot FAQ"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-medium">FAQ</span>
        </Button>
      )}
    </div>
  )
}


