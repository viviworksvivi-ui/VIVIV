import { NextRequest, NextResponse } from "next/server"
import { getQuotesByEmailServer, getAllQuotes } from "@/lib/quotes-server"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get("email")
    const isAdmin = req.cookies.get("vw_admin")?.value === "ok"

    // Si admin, retourner tous les devis
    if (isAdmin) {
      const allQuotes = getAllQuotes()
      return NextResponse.json({
        success: true,
        quotes: allQuotes,
      })
    }

    // Si client, retourner uniquement ses devis
    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 })
    }

    const quotes = getQuotesByEmailServer(email)
    return NextResponse.json({
      success: true,
      quotes,
    })
  } catch (error) {
    console.error("Error fetching quotes:", error)
    return NextResponse.json(
      { error: "Erreur lors de la récupération des devis" },
      { status: 500 }
    )
  }
}

