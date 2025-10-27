import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { packages } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { packageId, customerEmail, customerName } = body

    if (!packageId || !customerEmail || !customerName) {
      return NextResponse.json(
        { error: 'Informations manquantes' },
        { status: 400 }
      )
    }

    const selectedPackage = packages[packageId as keyof typeof packages]
    
    if (!selectedPackage) {
      return NextResponse.json(
        { error: 'Package non trouvé' },
        { status: 404 }
      )
    }

    // Configuration du transporteur avec Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Créer le lien de paiement avec le package pré-sélectionné
    const paymentLink = `https://viviworks.fr/paiement?package=${packageId}&email=${encodeURIComponent(customerEmail)}&name=${encodeURIComponent(customerName)}`

    // Email au client
    const mailOptionsToClient = {
      from: {
        name: 'Viviworks',
        address: 'viviworksvivi@gmail.com'
      },
      replyTo: 'viviworksvivi@gmail.com',
      to: customerEmail,
      subject: `Viviworks - Détails de votre package ${selectedPackage.name}`,
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Viviworks Package System',
        'Importance': 'Normal',
        'X-MSMail-Priority': 'Normal'
      },
      text: `
Bonjour ${customerName},

Merci de votre intérêt pour Viviworks !

Voici les détails du package que vous avez sélectionné :

Package : ${selectedPackage.name}
Prix : ${selectedPackage.price}€${selectedPackage.recurring ? '/mois' : ''}
Description : ${selectedPackage.description}

Fonctionnalités incluses :
${selectedPackage.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}

Pour procéder au paiement sécurisé, cliquez sur le lien ci-dessous :
${paymentLink}

Vous avez des questions ? Notre équipe est à votre disposition.

Cordialement,
L'équipe Viviworks

Email : contact@viviworks.fr
Téléphone : +33 6 65 75 85 83
Site web : www.viviworks.fr
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background: linear-gradient(135deg, #4a9fd9 0%, #8b5a3c 100%); padding: 40px 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Votre Package Viviworks</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Merci de votre intérêt !</p>
          </div>
          
          <div style="background-color: white; padding: 40px 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #333; line-height: 1.8; font-size: 16px;">Bonjour <strong>${customerName}</strong>,</p>
            
            <p style="color: #333; line-height: 1.8; font-size: 16px;">
              Voici les détails du package que vous avez sélectionné :
            </p>

            <div style="background: linear-gradient(135deg, #4a9fd9 0%, #8b5a3c 100%); padding: 30px; border-radius: 10px; margin: 30px 0;">
              <h2 style="color: white; margin: 0 0 10px 0; font-size: 24px;">${selectedPackage.name}</h2>
              <p style="color: rgba(255,255,255,0.9); margin: 0 0 20px 0; font-size: 16px;">${selectedPackage.description}</p>
              <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; text-align: center;">
                <p style="color: white; font-size: 36px; font-weight: bold; margin: 0;">
                  ${selectedPackage.price}€${selectedPackage.recurring ? '/mois' : ''}
                </p>
              </div>
            </div>

            <div style="background-color: #f0f8ff; padding: 25px; border-radius: 10px; margin: 30px 0;">
              <h3 style="color: #4a9fd9; margin: 0 0 20px 0; font-size: 20px;">✨ Fonctionnalités incluses :</h3>
              <ul style="list-style: none; padding: 0; margin: 0;">
                ${selectedPackage.features.map(feature => `
                  <li style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333; font-size: 15px;">
                    <span style="color: #4a9fd9; font-weight: bold; margin-right: 8px;">✓</span>
                    ${feature}
                  </li>
                `).join('')}
              </ul>
            </div>

            <div style="background: linear-gradient(135deg, #4a9fd9 0%, #8b5a3c 100%); padding: 30px; border-radius: 10px; margin: 30px 0; text-align: center;">
              <h3 style="color: white; margin: 0 0 15px 0; font-size: 22px;">💳 Prêt à démarrer ?</h3>
              <p style="color: rgba(255,255,255,0.9); margin: 0 0 25px 0; font-size: 16px;">Procédez au paiement sécurisé pour réserver votre package</p>
              <a href="${paymentLink}" style="display: inline-block; background: white; color: #4a9fd9; padding: 15px 40px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">Procéder au paiement</a>
              <p style="color: rgba(255,255,255,0.8); margin: 20px 0 0 0; font-size: 13px;">Paiement 100% sécurisé par Stripe • SSL Crypté</p>
            </div>

            <div style="background: #f0f8ff; padding: 25px; border-radius: 10px; margin: 30px 0; text-align: center; border-left: 4px solid #4a9fd9;">
              <h3 style="color: #4a9fd9; margin: 0 0 15px 0; font-size: 18px;">🎯 Des questions ?</h3>
              <p style="color: #333; margin: 0 0 20px 0; font-size: 14px;">Notre équipe d'experts est là pour vous conseiller</p>
              <a href="https://viviworks.fr/contact" style="display: inline-block; background: linear-gradient(135deg, #4a9fd9 0%, #8b5a3c 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 14px;">Nous contacter</a>
            </div>

            <div style="border-top: 1px solid #e0e0e0; margin-top: 30px; padding-top: 20px;">
              <p style="color: #666; line-height: 1.6; font-size: 14px; margin: 0;">
                <strong>L'équipe Viviworks</strong><br>
                📧 contact@viviworks.fr<br>
                📱 +33 6 65 75 85 83<br>
                🌐 <a href="https://viviworks.fr" style="color: #4a9fd9; text-decoration: none;">www.viviworks.fr</a>
              </p>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
            <p style="margin: 0;">© 2024 Viviworks. Tous droits réservés.</p>
          </div>
        </div>
      `,
    }

    // Envoyer l'email
    await transporter.sendMail(mailOptionsToClient)

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    )
  }
}

