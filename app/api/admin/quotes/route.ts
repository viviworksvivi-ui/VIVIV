import { NextRequest, NextResponse } from "next/server"
import { getAllQuotes, deleteQuoteKV, updateQuoteKV, markQuoteAsPaidKV } from "@/lib/quotes-kv"

// GET - Récupérer tous les devis (admin)
export async function GET(req: NextRequest) {
  try {
    // Vérifier l'authentification admin
    const session = req.cookies.get("vw_admin")?.value
    if (session !== "ok") {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const quotes = await getAllQuotes()
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

// DELETE - Supprimer un devis
export async function DELETE(req: NextRequest) {
  try {
    // Vérifier l'authentification admin
    const session = req.cookies.get("vw_admin")?.value
    if (session !== "ok") {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "ID du devis requis" }, { status: 400 })
    }

    await deleteQuoteKV(id)
    return NextResponse.json({
      success: true,
      message: "Devis supprimé avec succès",
    })
  } catch (error) {
    console.error("Error deleting quote:", error)
    return NextResponse.json(
      { error: "Erreur lors de la suppression du devis" },
      { status: 500 }
    )
  }
}

// PUT - Mettre à jour un devis
export async function PUT(req: NextRequest) {
  try {
    // Vérifier l'authentification admin
    const session = req.cookies.get("vw_admin")?.value
    if (session !== "ok") {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const body = await req.json()
    const { id, updates } = body

    if (!id) {
      return NextResponse.json({ error: "ID du devis requis" }, { status: 400 })
    }

    const updatedQuote = await updateQuoteKV(id, updates)
    if (!updatedQuote) {
      return NextResponse.json({ error: "Devis non trouvé" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      quote: updatedQuote,
    })
  } catch (error) {
    console.error("Error updating quote:", error)
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour du devis" },
      { status: 500 }
    )
  }
}

// PATCH - Marquer comme payé
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json()
    const { id } = body

    if (!id) {
      return NextResponse.json({ error: "ID du devis requis" }, { status: 400 })
    }

    const success = await markQuoteAsPaidKV(id)
    if (!success) {
      return NextResponse.json({ error: "Devis non trouvé" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: "Devis marqué comme payé",
    })
  } catch (error) {
    console.error("Error marking quote as paid:", error)
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour du statut" },
      { status: 500 }
    )
  }
}

