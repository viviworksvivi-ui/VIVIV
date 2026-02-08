import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité – ViviTool | Viviworks",
  description:
    "Politique de confidentialité de ViviTool. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.",
}

export default function ConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
