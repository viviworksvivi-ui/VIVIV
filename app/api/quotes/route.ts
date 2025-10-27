import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get("email")

    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 })
    }

    // Les devis sont stockés côté client dans localStorage
    // Cette route sert juste à valider/sécuriser l'accès
    return NextResponse.json({
      success: true,
      message: "Récupérez les devis depuis le localStorage",
    })
  } catch (error) {
    console.error("Error fetching quotes:", error)
    return NextResponse.json(
      { error: "Erreur lors de la récupération des devis" },
      { status: 500 }
    )
  }
}

