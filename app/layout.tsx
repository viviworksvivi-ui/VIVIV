import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { LanguageSelector } from "@/components/language-selector"
import { I18nProvider } from "@/lib/i18n"
import "./globals.css"

export const metadata: Metadata = {
  title: "Viviworks - Agence Digitale | Développement Web & Marketing Digital",
  description:
    "Viviworks, votre agence digitale experte en développement web, DevOps, UX/UI, SEO, SEA et Social Media. Boostez votre croissance avec nos solutions sur mesure.",
  generator: "v0.app",
  keywords: "agence digitale, développement web, SEO, SEA, DevOps, UX/UI, marketing digital",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <I18nProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <WhatsAppButton />
          <LanguageSelector />
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  )
}
