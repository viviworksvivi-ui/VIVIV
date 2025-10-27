import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { addQuoteServer } from "@/lib/quotes-server"

export async function POST(req: NextRequest) {
  try {
    // Vérifier l'authentification admin
    const session = req.cookies.get("vw_admin")?.value
    if (session !== "ok") {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const body = await req.json()
    const { packageName, price, clientEmail, description, features } = body

    // Validation
    if (!packageName || !price || !clientEmail) {
      return NextResponse.json(
        { error: "Le nom du package, le prix et l'email sont obligatoires" },
        { status: 400 }
      )
    }

    // Si pas de description, en générer une automatique
    const finalDescription = description?.trim() || `Package ${packageName} personnalisé pour vous`

    // Créer le devis côté serveur
    const quote = addQuoteServer({
      packageName,
      price: Number(price),
      clientEmail: clientEmail.toLowerCase().trim(),
      description: finalDescription,
      features: features || [],
    })

    // Créer le lien de paiement
    const paymentLink = `${process.env.NEXT_PUBLIC_SITE_URL || "https://viviworks.fr"}/paiement-sur-devis?email=${encodeURIComponent(clientEmail)}`

    // Configurer l'envoi d'email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Préparer l'email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4a9fd9 0%, #6b5dd3 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .quote-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .feature { padding: 8px 0; border-bottom: 1px solid #eee; }
            .feature:last-child { border-bottom: none; }
            .price { font-size: 32px; font-weight: bold; color: #4a9fd9; text-align: center; margin: 20px 0; }
            .button { display: inline-block; background: linear-gradient(135deg, #4a9fd9 0%, #6b5dd3 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 Votre Devis Personnalisé Viviworks</h1>
            </div>
            <div class="content">
              <p>Bonjour,</p>
              <p>Nous sommes ravis de vous présenter votre devis personnalisé pour votre projet digital.</p>
              
              <div class="quote-details">
                <h2 style="color: #4a9fd9; margin-top: 0;">${packageName}</h2>
                <p><strong>Description :</strong></p>
                <p>${finalDescription}</p>
                
                ${features && features.length > 0 ? `
                  <p style="margin-top: 20px;"><strong>Fonctionnalités incluses :</strong></p>
                  <div style="margin-top: 10px;">
                    ${features.map((f: string) => `<div class="feature">✓ ${f}</div>`).join("")}
                  </div>
                ` : ""}
                
                <div class="price">${price}€</div>
              </div>

              <div style="text-align: center;">
                <p><strong>Prêt à démarrer votre projet ?</strong></p>
                <a href="${paymentLink}" class="button">💳 Procéder au paiement</a>
              </div>

              <p style="margin-top: 30px; font-size: 14px; color: #666;">
                Ce devis est valable pendant 30 jours. Si vous avez des questions, n'hésitez pas à nous contacter.
              </p>
            </div>
            <div class="footer">
              <p><strong>Viviworks - Agence Digitale</strong></p>
              <p>24-26 Arcadia Avenue, Londres, N3 2JU</p>
              <p>📧 viviworksvivi@gmail.com | 📞 +33 6 65 75 85 83</p>
            </div>
          </div>
        </body>
      </html>
    `

    const emailText = `
Votre Devis Personnalisé Viviworks

${packageName}

Description : ${finalDescription}

${features && features.length > 0 ? `Fonctionnalités incluses :\n${features.map((f: string) => `- ${f}`).join("\n")}` : ""}

Prix : ${price}€

Pour procéder au paiement, veuillez cliquer sur le lien ci-dessous :
${paymentLink}

Ce devis est valable pendant 30 jours.

Cordialement,
L'équipe Viviworks
    `

    // Envoyer l'email
    await transporter.sendMail({
      from: {
        name: "Viviworks",
        address: process.env.EMAIL_USER || "viviworksvivi@gmail.com",
      },
      to: clientEmail,
      replyTo: process.env.EMAIL_USER || "viviworksvivi@gmail.com",
      subject: `💼 Votre devis personnalisé - ${packageName}`,
      text: emailText,
      html: emailHtml,
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        Importance: "high",
      },
    })

    return NextResponse.json({
      success: true,
      quote,
      message: "Devis créé et email envoyé avec succès",
      paymentLink,
    })
  } catch (error) {
    console.error("Error creating quote:", error)
    return NextResponse.json(
      { error: "Erreur lors de la création du devis", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

