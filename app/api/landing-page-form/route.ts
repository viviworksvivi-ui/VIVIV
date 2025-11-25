import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      pack, 
      fullname, 
      email, 
      website, 
      company, 
      address, 
      phone, 
      description 
    } = body

    // Validation des champs requis
    if (!fullname || !email || !description) {
      return NextResponse.json(
        { 
          error: 'Les champs nom complet, email et description sont requis',
          success: false 
        },
        { status: 400 }
      )
    }

    // Configuration du transporteur avec Gmail (identique à l'API contact)
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

    // Mapping des packs
    const packNames: { [key: string]: string } = {
      'decouverte': 'Pack Découverte - Gratuit',
      'performance': 'Pack Performance - Sur devis',
      'growth': 'Pack Growth - À partir de 499€'
    }

    const packName = packNames[pack] || pack

    // Email pour Viviworks (notification)
    const mailOptionsToAdmin = {
      from: {
        name: 'Viviworks Landing Page Form',
        address: process.env.EMAIL_USER || 'viviworksvivi@gmail.com'
      },
      replyTo: email,
      to: process.env.EMAIL_USER || 'viviworksvivi@gmail.com',
      subject: `Nouvelle demande de landing page - ${packName}`,
      headers: {
        'X-Priority': '1',
        'X-Mailer': 'Viviworks Landing Page System',
        'Importance': 'High'
      },
      text: `
Nouvelle demande de landing page gratuite

Informations du client:
------------------------
Pack sélectionné: ${packName}
Nom complet: ${fullname}
Email: ${email}
${phone ? `Téléphone: ${phone}` : ''}
${company ? `Société: ${company}` : ''}
${website ? `Site web actuel: ${website}` : ''}
${address ? `Adresse: ${address}` : ''}

Description du besoin:
----------------------
${description}

Reçu le ${new Date().toLocaleDateString('fr-FR', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: '2-digit', 
  minute: '2-digit' 
})}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background: linear-gradient(135deg, #60A5FA 0%, #FF9500 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🎨 Nouvelle demande de landing page</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #60A5FA; border-bottom: 2px solid #60A5FA; padding-bottom: 10px;">Informations du client</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; width: 40%; border: 1px solid #e0e0e0;">📦 Pack sélectionné:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0; color: #FF9500; font-weight: bold;">${packName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; border: 1px solid #e0e0e0;">👤 Nom complet:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0;">${fullname}</td>
              </tr>
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; border: 1px solid #e0e0e0;">📧 Email:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0;"><a href="mailto:${email}" style="color: #60A5FA; text-decoration: none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; border: 1px solid #e0e0e0;">📱 Téléphone:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0;">${phone}</td>
              </tr>
              ` : ''}
              ${company ? `
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; border: 1px solid #e0e0e0;">🏢 Société:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0;">${company}</td>
              </tr>
              ` : ''}
              ${website ? `
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; border: 1px solid #e0e0e0;">🌐 Site web actuel:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0;"><a href="${website}" target="_blank" style="color: #60A5FA; text-decoration: none;">${website}</a></td>
              </tr>
              ` : ''}
              ${address ? `
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; border: 1px solid #e0e0e0;">📍 Adresse:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0;">${address}</td>
              </tr>
              ` : ''}
            </table>

            <div style="margin-top: 30px; padding: 20px; background-color: #f0f8ff; border-left: 4px solid #60A5FA; border-radius: 5px;">
              <h3 style="color: #60A5FA; margin-top: 0;">💬 Description du besoin:</h3>
              <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${description}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #999; font-size: 12px;">
              <p>Reçu le ${new Date().toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit' 
              })}</p>
            </div>
          </div>
        </div>
      `,
    }

    // Email de confirmation automatique au client
    const mailOptionsToClient = {
      from: {
        name: 'Viviworks',
        address: process.env.EMAIL_USER || 'viviworksvivi@gmail.com'
      },
      replyTo: process.env.EMAIL_USER || 'viviworksvivi@gmail.com',
      to: email,
      subject: 'Votre maquette de landing page sera prête dans 48h ! 🎨',
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Viviworks Landing Page System',
        'Importance': 'Normal',
        'X-MSMail-Priority': 'Normal',
        'List-Unsubscribe': `<mailto:${process.env.EMAIL_USER || 'viviworksvivi@gmail.com'}?subject=unsubscribe>`,
        'Precedence': 'bulk'
      },
      text: `
Bonjour ${fullname},

Merci pour votre demande de landing page gratuite !

Nous avons bien reçu votre demande pour le ${packName} et notre équipe va commencer à travailler sur votre maquette personnalisée.

⏰ Délai de livraison : 48 heures maximum

Vous recevrez votre maquette de landing page dans les 48 heures à l'adresse email suivante : ${email}

En attendant, n'hésitez pas à :
- Consulter nos réalisations : https://viviworks.fr/realisations
- Découvrir notre blog : https://viviworks.fr/blog
- Nous contacter si vous avez des questions : contact@viviworks.fr

Cordialement,
L'équipe Viviworks

📧 contact@viviworks.fr
📱 +33 6 65 75 85 83
🌐 www.viviworks.fr

© 2025 Viviworks. Tous droits réservés.
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header -->
            <div style="background: linear-gradient(90deg, #60A5FA 0%, #FF9500 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">🎨 Merci ${fullname.split(' ')[0]} !</h1>
              <p style="color: rgba(255,255,255,0.95); margin: 15px 0 0 0; font-size: 18px;">Votre demande a été reçue avec succès</p>
            </div>
            
            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <p style="color: #333; line-height: 1.8; font-size: 16px; margin: 0 0 20px 0;">
                Bonjour <strong>${fullname}</strong>,
              </p>
              
              <p style="color: #333; line-height: 1.8; font-size: 16px; margin: 0 0 20px 0;">
                Merci pour votre demande de <strong>landing page gratuite</strong> ! Nous avons bien reçu votre demande pour le <strong style="color: #FF9500;">${packName}</strong>.
              </p>

              <!-- Info Box -->
              <div style="background: linear-gradient(135deg, #60A5FA 0%, #FF9500 100%); padding: 30px; border-radius: 12px; margin: 30px 0; text-align: center; color: white;">
                <div style="font-size: 48px; margin-bottom: 15px;">⏰</div>
                <h2 style="color: white; margin: 0 0 10px 0; font-size: 24px; font-weight: 700;">Délai de livraison : 48 heures</h2>
                <p style="color: rgba(255,255,255,0.95); margin: 0; font-size: 16px; line-height: 1.6;">
                  Notre équipe va commencer à travailler sur votre maquette personnalisée dès maintenant. 
                  Vous recevrez votre maquette dans les <strong>48 heures maximum</strong> à l'adresse email suivante :
                </p>
                <p style="color: white; margin: 15px 0 0 0; font-size: 18px; font-weight: 600;">
                  ${email}
                </p>
              </div>

              <!-- What's Next -->
              <div style="background-color: #f0f8ff; padding: 25px; border-radius: 10px; margin: 30px 0; border-left: 4px solid #60A5FA;">
                <h3 style="color: #60A5FA; margin: 0 0 15px 0; font-size: 20px;">📋 Prochaines étapes :</h3>
                <ul style="color: #333; line-height: 1.8; margin: 0; padding-left: 20px; font-size: 15px;">
                  <li style="margin-bottom: 10px;">Notre équipe analyse votre demande et votre secteur d'activité</li>
                  <li style="margin-bottom: 10px;">Création d'une maquette personnalisée adaptée à vos besoins</li>
                  <li style="margin-bottom: 10px;">Envoi de votre maquette dans les <strong>48 heures maximum</strong></li>
                  <li>Si la maquette vous plaît, vous pourrez choisir votre pack et continuer le projet</li>
                </ul>
              </div>

              <!-- Resources -->
              <div style="background-color: #fff9e6; padding: 25px; border-radius: 10px; margin: 30px 0; border-left: 4px solid #FF9500;">
                <h3 style="color: #FF9500; margin: 0 0 15px 0; font-size: 18px;">💡 En attendant :</h3>
                <p style="color: #333; margin: 0 0 15px 0; font-size: 15px; line-height: 1.6;">
                  Découvrez nos réalisations et nos conseils pour préparer votre projet :
                </p>
                <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                  <a href="https://viviworks.fr/realisations" style="display: inline-block; background: #60A5FA; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">Voir nos réalisations</a>
                  <a href="https://viviworks.fr/blog" style="display: inline-block; background: #FF9500; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">Lire notre blog</a>
                </div>
              </div>

              <!-- Contact Info -->
              <div style="border-top: 1px solid #e0e0e0; margin-top: 30px; padding-top: 20px;">
                <p style="color: #666; line-height: 1.6; font-size: 14px; margin: 0 0 10px 0;">
                  <strong style="color: #333;">Des questions ?</strong> Notre équipe est là pour vous aider :
                </p>
                <p style="color: #666; line-height: 1.6; font-size: 14px; margin: 0;">
                  📧 <a href="mailto:contact@viviworks.fr" style="color: #60A5FA; text-decoration: none;">contact@viviworks.fr</a><br>
                  📱 <a href="tel:+33665758583" style="color: #60A5FA; text-decoration: none;">+33 6 65 75 85 83</a><br>
                  🌐 <a href="https://viviworks.fr" style="color: #60A5FA; text-decoration: none;">www.viviworks.fr</a>
                </p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #020304; padding: 30px; text-align: center;">
              <p style="color: rgba(255,255,255,0.8); margin: 0 0 10px 0; font-size: 14px;">
                <strong style="color: white;">L'équipe Viviworks</strong>
              </p>
              <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">
                © 2025 Viviworks. Tous droits réservés.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Envoyer les deux emails (identique à l'API contact)
    await transporter.sendMail(mailOptionsToAdmin)
    await transporter.sendMail(mailOptionsToClient)

    return NextResponse.json(
      { 
        message: 'Formulaire soumis avec succès. Vous allez recevoir un email de confirmation dans quelques instants.',
        success: true 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails:', error)
    return NextResponse.json(
      { 
        error: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.',
        success: false 
      },
      { status: 500 }
    )
  }
}

