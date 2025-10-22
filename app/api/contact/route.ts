import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, country, service, message } = body

    // Configuration du transporteur avec Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'viviworksvivi@gmail.com',
        pass: 'bsat plwy zqnt qgyl', // App password
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Email pour Viviworks
    const mailOptionsToAdmin = {
      from: {
        name: 'Viviworks Contact Form',
        address: 'viviworksvivi@gmail.com'
      },
      replyTo: email,
      to: 'viviworksvivi@gmail.com',
      subject: `Nouveau message de contact - ${firstName} ${lastName}`,
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Viviworks Contact System'
      },
      text: `
Nouveau message de contact

Informations du contact:
------------------------
Nom complet: ${firstName} ${lastName}
Email: ${email}
${phone ? `Téléphone: ${phone}` : ''}
${company ? `Entreprise: ${company}` : ''}
${country ? `Pays: ${country}` : ''}
${service ? `Service: ${service}` : ''}

Message:
--------
${message}

Reçu le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background: linear-gradient(135deg, #4a9fd9 0%, #8b5a3c 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📧 Nouveau message de contact</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #4a9fd9; border-bottom: 2px solid #4a9fd9; padding-bottom: 10px;">Informations du contact</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; width: 40%; border: 1px solid #e0e0e0;">👤 Nom complet:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; border: 1px solid #e0e0e0;">📧 Email:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0;"><a href="mailto:${email}" style="color: #4a9fd9; text-decoration: none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; border: 1px solid #e0e0e0;">📱 Téléphone:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0;">${phone}</td>
              </tr>
              ` : ''}
              ${company ? `
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; border: 1px solid #e0e0e0;">🏢 Entreprise:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0;">${company}</td>
              </tr>
              ` : ''}
              ${country ? `
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; border: 1px solid #e0e0e0;">🌍 Pays:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0;">${country}</td>
              </tr>
              ` : ''}
              ${service ? `
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9; font-weight: bold; border: 1px solid #e0e0e0;">🎯 Service:</td>
                <td style="padding: 12px; border: 1px solid #e0e0e0;">${service}</td>
              </tr>
              ` : ''}
            </table>

            <div style="margin-top: 30px; padding: 20px; background-color: #f0f8ff; border-left: 4px solid #4a9fd9; border-radius: 5px;">
              <h3 style="color: #4a9fd9; margin-top: 0;">💬 Message:</h3>
              <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #999; font-size: 12px;">
              <p>Reçu le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
            </div>
          </div>
        </div>
      `,
    }

    // Générer le contenu des packages selon le service choisi
    const getPackagesHTML = (serviceType: string) => {
      if (serviceType === 'Site Web') {
        return `
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 10px; margin: 30px 0;">
            <h2 style="color: #4a9fd9; text-align: center; margin-bottom: 30px; font-size: 24px;">📦 Nos Packages Site Web</h2>
            
            <div style="display: grid; gap: 20px;">
              <!-- Package 1 -->
              <div style="background: white; border: 2px solid #4a9fd9; border-radius: 12px; padding: 25px; position: relative;">
                <h3 style="color: #8b5a3c; margin: 0 0 15px 0; font-size: 20px;">DÉMARRAGE DIGITAL</h3>
                <p style="color: #4a9fd9; font-size: 28px; font-weight: bold; margin: 10px 0;">À partir de 890€</p>
                <ul style="list-style: none; padding: 0; margin: 15px 0; color: #333;">
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Site web vitrine responsive (valeur 2500€)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Référencement local (SEO) optimisé</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Fiche Google My Business optimisée</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Visuels créés sur mesure</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Newsletter mensuelle (jusqu'à 500 contacts)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Reporting mensuel simplifié</li>
                  <li style="padding: 8px 0;">✓ Formation initiale (2h) aux outils digitaux</li>
                </ul>
              </div>

              <!-- Package 2 -->
              <div style="background: white; border: 3px solid #4a9fd9; border-radius: 12px; padding: 25px; position: relative; box-shadow: 0 4px 12px rgba(74, 159, 217, 0.2);">
                <div style="background: #4a9fd9; color: white; padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom: 10px; font-size: 12px; font-weight: bold;">⭐ POPULAIRE</div>
                <h3 style="color: #8b5a3c; margin: 0 0 15px 0; font-size: 20px;">ACCÉLÉRATION BUSINESS</h3>
                <p style="color: #4a9fd9; font-size: 28px; font-weight: bold; margin: 10px 0;">À partir de 1690€</p>
                <ul style="list-style: none; padding: 0; margin: 15px 0; color: #333;">
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Tout du package Démarrage +</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Site web avancé avec blog intégré</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Stratégie de contenu (4 articles/mois)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intégration WhatsApp Business</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Campagnes Google Ads (budget pub non inclus)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Gestion et optimisation</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Email automation (séquences de bienvenue, relance)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Analyse concurrentielle trimestrielle</li>
                  <li style="padding: 8px 0;">✓ Rendez-vous stratégique mensuel (1h)</li>
                </ul>
              </div>

              <!-- Package 3 -->
              <div style="background: white; border: 2px solid #4a9fd9; border-radius: 12px; padding: 25px; position: relative;">
                <h3 style="color: #8b5a3c; margin: 0 0 15px 0; font-size: 20px;">DOMINATION MARCHÉ</h3>
                <p style="color: #4a9fd9; font-size: 28px; font-weight: bold; margin: 10px 0;">À partir de 2990€</p>
                <ul style="list-style: none; padding: 0; margin: 15px 0; color: #333;">
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Tout du package Accélération +</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Stratégie digitale complète (audit initial + roadmap)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ E-commerce ou fonctionnalités avancées</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Marketing automation complet</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intégration chatbot multilingue</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Influenceur marketing (1 collaboration/trimestre)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Formation équipe (4h/trimestre)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Consultant dédié (rendez-vous bi-mensuel)</li>
                  <li style="padding: 8px 0;">✓ Reporting avancé avec KPIs business</li>
                </ul>
              </div>
            </div>
          </div>
        `;
      } else if (serviceType === 'Site Web IA') {
        return `
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 10px; margin: 30px 0;">
            <h2 style="color: #4a9fd9; text-align: center; margin-bottom: 30px; font-size: 24px;">🤖 Nos Packages Site Web IA</h2>
            
            <div style="display: grid; gap: 20px;">
              <!-- Package 1 -->
              <div style="background: white; border: 3px solid #4a9fd9; border-radius: 12px; padding: 25px; position: relative; box-shadow: 0 4px 12px rgba(74, 159, 217, 0.2);">
                <div style="background: #4a9fd9; color: white; padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom: 10px; font-size: 12px; font-weight: bold;">⭐ POPULAIRE</div>
                <h3 style="color: #8b5a3c; margin: 0 0 15px 0; font-size: 20px;">SITE WEB IA - STARTER</h3>
                <p style="color: #4a9fd9; font-size: 28px; font-weight: bold; margin: 10px 0;">À partir de 3990€</p>
                <ul style="list-style: none; padding: 0; margin: 15px 0; color: #333;">
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Site web sur mesure avec intégration IA</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Chatbot intelligent personnalisé (ChatGPT/Claude)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Génération automatique de contenu</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Assistant virtuel pour les visiteurs</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Automatisation SEO avec Semrush</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Analyse concurrentielle automatisée</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Interface responsive et moderne</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Gestion administrative</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Formation à l'utilisation de l'IA</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Support technique dédié</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Mises à jour mensuelles de l'IA</li>
                  <li style="padding: 8px 0;">✓ Reporting des interactions IA</li>
                </ul>
              </div>

              <!-- Package 2 -->
              <div style="background: white; border: 2px solid #4a9fd9; border-radius: 12px; padding: 25px; position: relative;">
                <h3 style="color: #8b5a3c; margin: 0 0 15px 0; font-size: 20px;">SITE WEB IA - PROFESSIONNEL</h3>
                <p style="color: #4a9fd9; font-size: 28px; font-weight: bold; margin: 10px 0;">À partir de 5490€</p>
                <ul style="list-style: none; padding: 0; margin: 15px 0; color: #333;">
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Tout du package Starter +</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Site web sur mesure avec IA avancée</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Automatisation complète avec n8n</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Scraping automatisé de données</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intégration Semrush + Ahrefs</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Automatisation des processus métier</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Analyse prédictive des ventes</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Optimisation automatique du contenu</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Multi-langues avec traduction IA</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intégration WhatsApp Business</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Gestion administrative</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ API IA personnalisée</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Consultant IA dédié (2h/mois)</li>
                  <li style="padding: 8px 0;">✓ Formation équipe aux outils IA</li>
                </ul>
              </div>

              <!-- Package 3 -->
              <div style="background: white; border: 2px solid #4a9fd9; border-radius: 12px; padding: 25px; position: relative;">
                <h3 style="color: #8b5a3c; margin: 0 0 15px 0; font-size: 20px;">SITE WEB IA - ENTERPRISE</h3>
                <p style="color: #4a9fd9; font-size: 28px; font-weight: bold; margin: 10px 0;">À partir de 8490€</p>
                <ul style="list-style: none; padding: 0; margin: 15px 0; color: #333;">
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Tout du package Professionnel +</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Site web sur mesure avec IA développée spécifiquement</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Automatisation complète des workflows avec n8n</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Scraping avancé et traitement de données</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intégration complète Semrush + Ahrefs + outils SEO</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ IA multi-modale sur mesure</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Automatisation complète des processus</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intégration avec tous vos outils existants</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intégration bouton WhatsApp</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Chatbot multilingue</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Gestion administrative</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ IA auto-apprenante et évolutive</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Sécurité et conformité RGPD</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Consultant IA senior (4h/mois)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Formation complète de l'équipe</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Support 24/7 prioritaire</li>
                  <li style="padding: 8px 0;">✓ SLA garantie 99.9%</li>
                </ul>
              </div>
            </div>
          </div>
        `;
      } else if (serviceType === 'Application Mobile') {
        return `
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 10px; margin: 30px 0;">
            <h2 style="color: #4a9fd9; text-align: center; margin-bottom: 30px; font-size: 24px;">📱 Nos Packages Application Mobile</h2>
            
            <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin-bottom: 25px; border-radius: 5px;">
              <p style="margin: 0; color: #856404;"><strong>⚠️ Note importante :</strong> L'hébergement et les services cloud ne sont pas inclus dans ce package. Le client devra gérer l'hébergement de ses propres serveurs et bases de données.</p>
            </div>

            <div style="display: grid; gap: 20px;">
              <!-- Package 1 -->
              <div style="background: white; border: 3px solid #4a9fd9; border-radius: 12px; padding: 25px; position: relative; box-shadow: 0 4px 12px rgba(74, 159, 217, 0.2);">
                <div style="background: #4a9fd9; color: white; padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom: 10px; font-size: 12px; font-weight: bold;">⭐ POPULAIRE</div>
                <h3 style="color: #8b5a3c; margin: 0 0 15px 0; font-size: 20px;">APPLICATION MOBILE</h3>
                <p style="color: #4a9fd9; font-size: 28px; font-weight: bold; margin: 10px 0;">À partir de 5000€</p>
                <ul style="list-style: none; padding: 0; margin: 15px 0; color: #333;">
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Application mobile native (iOS et Android)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Développement Flutter/Dart</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Interface utilisateur moderne et intuitive</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Fonctionnalités personnalisées selon vos besoins</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intégration API et base de données</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Tests et débogage complets</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Maintenance et mises à jour (6 mois inclus)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Support technique dédié</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Formation à l'utilisation de l'application</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Documentation technique complète</li>
                  <li style="padding: 8px 0;">✓ Hébergement non inclus (gestion par le client)</li>
                </ul>
              </div>

              <!-- Package 2 -->
              <div style="background: white; border: 2px solid #4a9fd9; border-radius: 12px; padding: 25px; position: relative;">
                <h3 style="color: #8b5a3c; margin: 0 0 15px 0; font-size: 20px;">GESTION D'APPLICATION</h3>
                <p style="color: #4a9fd9; font-size: 28px; font-weight: bold; margin: 10px 0;">300€/mois</p>
                <p style="color: #666; font-size: 14px; margin: 5px 0 15px 0;">(engagement 12 mois)</p>
                <ul style="list-style: none; padding: 0; margin: 15px 0; color: #333;">
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Maintenance continue de l'application</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Mises à jour de sécurité régulières</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Support technique prioritaire</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Monitoring des performances</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Gestion des bugs et corrections</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Optimisation des performances</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Mises à jour des dépendances</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Support utilisateur</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Rapports de performance mensuels</li>
                  <li style="padding: 8px 0;">✓ Hébergement non inclus (gestion par le client)</li>
                </ul>
              </div>
            </div>
          </div>
        `;
      } else if (serviceType === 'Application Mobile IA') {
        return `
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 10px; margin: 30px 0;">
            <h2 style="color: #4a9fd9; text-align: center; margin-bottom: 30px; font-size: 24px;">🤖📱 Nos Packages Application Mobile IA</h2>
            
            <div style="display: grid; gap: 20px;">
              <!-- Package 1 -->
              <div style="background: white; border: 3px solid #4a9fd9; border-radius: 12px; padding: 25px; position: relative; box-shadow: 0 4px 12px rgba(74, 159, 217, 0.2);">
                <div style="background: #4a9fd9; color: white; padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom: 10px; font-size: 12px; font-weight: bold;">⭐ POPULAIRE</div>
                <h3 style="color: #8b5a3c; margin: 0 0 15px 0; font-size: 20px;">APP MOBILE IA - STARTER</h3>
                <p style="color: #4a9fd9; font-size: 28px; font-weight: bold; margin: 10px 0;">À partir de 9990€</p>
                <ul style="list-style: none; padding: 0; margin: 15px 0; color: #333;">
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Application mobile native avec IA intégrée</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Reconnaissance vocale et traitement du langage</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Recommandations personnalisées basées sur l'IA</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Interface adaptative selon l'utilisateur</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Génération automatique de contenu</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Analyse comportementale des utilisateurs</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Notifications intelligentes</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Support technique dédié</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Mises à jour mensuelles de l'IA</li>
                  <li style="padding: 8px 0;">✓ Reporting des interactions IA</li>
                </ul>
              </div>

              <!-- Package 2 -->
              <div style="background: white; border: 2px solid #4a9fd9; border-radius: 12px; padding: 25px; position: relative;">
                <h3 style="color: #8b5a3c; margin: 0 0 15px 0; font-size: 20px;">APP MOBILE IA - PROFESSIONNEL</h3>
                <p style="color: #4a9fd9; font-size: 28px; font-weight: bold; margin: 10px 0;">À partir de 11990€</p>
                <ul style="list-style: none; padding: 0; margin: 15px 0; color: #333;">
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Tout du package Starter +</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Chatbot intelligent dans l'app (ChatGPT/Claude)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ IA avancée avec machine learning</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Vision par ordinateur intégrée</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Reconnaissance d'images et objets</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Automatisation des processus métier</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intégration CRM avec IA</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Analyse prédictive des ventes</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Optimisation automatique de l'expérience</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Multi-langues avec traduction IA</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ API IA personnalisée</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Consultant IA dédié (2h/mois)</li>
                  <li style="padding: 8px 0;">✓ Formation équipe aux outils IA</li>
                </ul>
              </div>

              <!-- Package 3 -->
              <div style="background: white; border: 2px solid #4a9fd9; border-radius: 12px; padding: 25px; position: relative;">
                <h3 style="color: #8b5a3c; margin: 0 0 15px 0; font-size: 20px;">APP MOBILE IA - ENTERPRISE</h3>
                <p style="color: #4a9fd9; font-size: 28px; font-weight: bold; margin: 10px 0;">À partir de 14990€</p>
                <ul style="list-style: none; padding: 0; margin: 15px 0; color: #333;">
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Tout du package Professionnel +</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Chatbot intelligent dans l'app (ChatGPT/Claude)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intégration WhatsApp Business</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ IA sur mesure développée spécifiquement</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intelligence artificielle multi-modale</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Traitement du langage naturel avancé</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Vision par ordinateur et AR/VR</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Automatisation complète des workflows</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Décisions automatisées basées sur l'IA</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intégration CRM avec IA</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Intégration avec tous vos outils existants</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ IA auto-apprenante et évolutive</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Sécurité et conformité RGPD</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Consultant IA senior (4h/mois)</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Formation complète de l'équipe</li>
                  <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✓ Support 24/7 prioritaire</li>
                  <li style="padding: 8px 0;">✓ SLA garantie 99.9%</li>
                </ul>
              </div>
            </div>
          </div>
        `;
      }
      return '';
    }

    // Email de confirmation au client
    const mailOptionsToClient = {
      from: {
        name: 'Viviworks',
        address: 'viviworksvivi@gmail.com'
      },
      replyTo: 'viviworksvivi@gmail.com',
      to: email,
      subject: `Viviworks - Découvrez nos packages ${service || 'pour votre projet'}`,
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Viviworks Contact System',
        'Importance': 'Normal',
        'X-MSMail-Priority': 'Normal'
      },
      text: `
Merci ${firstName} !

Bonjour ${firstName} ${lastName},

Nous vous confirmons la bonne réception de votre demande concernant ${service || 'votre projet'}.

Prochaines étapes:
- Notre équipe va analyser votre demande
- Nous vous recontacterons sous 24 heures
- Un expert dédié sera assigné à votre projet

Pour procéder au paiement et réserver votre package, visitez:
https://viviw.netlify.app/paiement

Besoin d'aide pour choisir ? Notre équipe d'experts est là pour vous conseiller.
Prenez rendez-vous: https://viviw.netlify.app/contact

En attendant, n'hésitez pas à consulter notre blog ou nos réalisations:
- Blog: https://viviw.netlify.app/blog
- Réalisations: https://viviw.netlify.app/realisations

L'équipe Viviworks
Email: contact@viviworks.ai
Téléphone: +33 6 65 75 85 83
Site web: www.viviworks.ai

© 2024 Viviworks. Tous droits réservés.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background: linear-gradient(135deg, #4a9fd9 0%, #8b5a3c 100%); padding: 40px 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Merci ${firstName} !</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Nous avons bien reçu votre demande</p>
          </div>
          
          <div style="background-color: white; padding: 40px 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #333; line-height: 1.8; font-size: 16px;">Bonjour <strong>${firstName} ${lastName}</strong>,</p>
            
            <p style="color: #333; line-height: 1.8; font-size: 16px;">
              Nous vous confirmons la bonne réception de votre demande concernant <strong>${service || 'votre projet'}</strong>.
            </p>

            <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #4a9fd9;">
              <p style="color: #4a9fd9; font-weight: bold; margin: 0 0 10px 0; font-size: 16px;">⏱️ Prochaines étapes :</p>
              <ul style="color: #333; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li>Notre équipe va analyser votre demande</li>
                <li>Nous vous recontacterons sous <strong>24 heures</strong></li>
                <li>Un expert dédié sera assigné à votre projet</li>
              </ul>
            </div>

            ${getPackagesHTML(service)}

            <div style="background: linear-gradient(135deg, #4a9fd9 0%, #8b5a3c 100%); padding: 30px; border-radius: 10px; margin: 30px 0; text-align: center;">
              <h3 style="color: white; margin: 0 0 15px 0; font-size: 22px;">💳 Prêt à démarrer ?</h3>
              <p style="color: rgba(255,255,255,0.9); margin: 0 0 25px 0; font-size: 16px;">Procédez au paiement sécurisé pour réserver votre package</p>
              <a href="https://viviw.netlify.app/paiement" style="display: inline-block; background: white; color: #4a9fd9; padding: 15px 40px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">Procéder au paiement</a>
              <p style="color: rgba(255,255,255,0.8); margin: 20px 0 0 0; font-size: 13px;">Paiement 100% sécurisé par Stripe • SSL Crypté</p>
            </div>

            <div style="background: #f0f8ff; padding: 25px; border-radius: 10px; margin: 30px 0; text-align: center; border-left: 4px solid #4a9fd9;">
              <h3 style="color: #4a9fd9; margin: 0 0 15px 0; font-size: 18px;">🎯 Besoin d'aide pour choisir ?</h3>
              <p style="color: #333; margin: 0 0 20px 0; font-size: 14px;">Notre équipe d'experts est là pour vous conseiller</p>
              <a href="https://viviw.netlify.app/contact" style="display: inline-block; background: linear-gradient(135deg, #4a9fd9 0%, #8b5a3c 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 14px;">Prendre rendez-vous</a>
            </div>

            <p style="color: #333; line-height: 1.8; font-size: 16px;">
              En attendant, n'hésitez pas à consulter notre <a href="https://viviw.netlify.app/blog" style="color: #4a9fd9; text-decoration: none;">blog</a> 
              ou nos <a href="https://viviw.netlify.app/realisations" style="color: #4a9fd9; text-decoration: none;">réalisations</a>.
            </p>

            <div style="border-top: 1px solid #e0e0e0; margin-top: 30px; padding-top: 20px;">
              <p style="color: #666; line-height: 1.6; font-size: 14px; margin: 0;">
                <strong>L'équipe Viviworks</strong><br>
                📧 contact@viviworks.ai<br>
                📱 +33 6 65 75 85 83<br>
                🌐 <a href="https://viviworks.ai" style="color: #4a9fd9; text-decoration: none;">www.viviworks.ai</a>
              </p>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
            <p style="margin: 0;">© 2024 Viviworks. Tous droits réservés.</p>
          </div>
        </div>
      `,
    }

    // Envoyer les deux emails
    await transporter.sendMail(mailOptionsToAdmin)
    await transporter.sendMail(mailOptionsToClient)

    return NextResponse.json(
      { message: 'Emails envoyés avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi des emails' },
      { status: 500 }
    )
  }
}

