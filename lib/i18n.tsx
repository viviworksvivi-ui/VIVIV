"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

type Messages = Record<string, any>

type I18nContextType = {
  lang: "fr" | "en"
  t: (key: string) => string
  setLang: (l: "fr" | "en") => void
}

const I18nContext = createContext<I18nContextType | null>(null)

function getByPath(obj: any, path: string): string {
  return path.split(".").reduce((acc, part) => (acc && acc[part] != null ? acc[part] : undefined), obj) ?? path
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"fr" | "en">("fr")
  const [messages, setMessages] = useState<{ fr: Messages; en: Messages }>({ fr: {}, en: {} })

  useEffect(() => {
    import("@/locales/fr.json").then((m) => setMessages((prev) => ({ ...prev, fr: m.default })))
    import("@/locales/en.json").then((m) => setMessages((prev) => ({ ...prev, en: m.default })))
  }, [])

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vw_lang")
      if (saved === "FR" || saved === "EN") setLang(saved.toLowerCase() as "fr" | "en")
    } catch {}
  }, [])

  const t = useMemo(() => {
    return (key: string) => {
      const dict = lang === "fr" ? messages.fr : messages.en
      return getByPath(dict, key)
    }
  }, [lang, messages])

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}




