"use client"

import { useEffect, useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function LanguageSelector({ isMobile = false }: { isMobile?: boolean }) {
  const [currentLanguage, setCurrentLanguage] = useState("FR")
  const [menuOpen, setMenuOpen] = useState(false)
  const { setLang } = useI18n()

  const languages = [
    { code: "FR", name: "Français" },
    { code: "EN", name: "English" },
  ]

  const FlagIcon = ({ code, className = "" }: { code: string; className?: string }) => {
    if (code === "FR") {
      return (
        <svg width="20" height="14" viewBox="0 0 3 2" className={className} aria-hidden>
          <rect width="1" height="2" x="0" y="0" fill="#0055A4" />
          <rect width="1" height="2" x="1" y="0" fill="#ffffff" />
          <rect width="1" height="2" x="2" y="0" fill="#EF4135" />
        </svg>
      )
    }
    // United Kingdom flag (Union Jack)
    return (
      <svg width="20" height="14" viewBox="0 0 30 20" className={className} aria-hidden>
        <clipPath id="a"><path d="M0 0h30v20H0z"/></clipPath>
        <g clipPath="url(#a)">
          <path fill="#012169" d="M0 0h30v20H0z"/>
          <path stroke="#fff" strokeWidth="4" d="M0 0l30 20M30 0L0 20"/>
          <path stroke="#C8102E" strokeWidth="2.6" d="M0 0l30 20M30 0L0 20"/>
          <path fill="#fff" d="M12 0h6v20h-6zM0 7h30v6H0z"/>
          <path fill="#C8102E" d="M13 0h4v20h-4zM0 8h30v4H0z"/>
        </g>
      </svg>
    )
  }

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode)
    try {
      localStorage.setItem("vw_lang", languageCode)
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = languageCode.toLowerCase()
    }
    console.log(`Langue changée vers: ${languageCode}`)
    setMenuOpen(false)
    setLang(languageCode.toLowerCase() as "fr" | "en")
  }

  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vw_lang")
      if (saved === "FR" || saved === "EN") {
        setCurrentLanguage(saved)
        if (typeof document !== "undefined") {
          document.documentElement.lang = saved.toLowerCase()
        }
      }
    } catch {}
  }, [])

  if (isMobile) {
    return (
      <div className="px-3 py-2">
        <div className="text-sm text-muted-foreground mb-2">Langue</div>
        <div className="space-y-1">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={currentLanguage === lang.code ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => handleLanguageChange(lang.code)}
            >
              <FlagIcon code={lang.code} className="mr-2" />
              {lang.name}
            </Button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <DropdownMenu modal={false} open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            className="h-12 px-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            <FlagIcon code={currentLang.code} />
            <span className="font-medium">{currentLang.name}</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="top" sideOffset={8} className="mb-2 z-50" collisionPadding={8}>
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onSelect={() => handleLanguageChange(lang.code)}
              className="flex items-center space-x-2"
            >
              <FlagIcon code={lang.code} />
              <span>{lang.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
