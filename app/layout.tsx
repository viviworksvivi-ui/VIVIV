import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
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
  icons: {
    icon: [
      { url: '/icooo.ico', sizes: 'any' },
      { url: '/images/vivi-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/vivi-logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/vivi-logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/images/vivi-logo.png',
    shortcut: '/images/vivi-logo.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        {/* Favicon and icons - High quality PNG for better visibility */}
        <link rel="icon" type="image/x-icon" href="/icooo.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/vivi-logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/vivi-logo.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/vivi-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/vivi-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4a9fd9" />
        <meta name="msapplication-TileColor" content="#4a9fd9" />
        <meta name="msapplication-TileImage" content="/images/vivi-logo.png" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DJFMTH69DS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DJFMTH69DS');
            `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <I18nProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <WhatsAppButton />
          <LanguageSelector />
        </I18nProvider>
      </body>
    </html>
  )
}
