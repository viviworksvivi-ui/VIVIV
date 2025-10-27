import { NextResponse } from 'next/server'
import { getStripe, packages, type PackageId } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      packageId, 
      customerEmail, 
      customerName,
      // Champs pour les devis personnalisés
      isCustomQuote,
      quoteId,
      packageName,
      price,
      type,
      description,
      features,
      clientEmail
    } = body

    const stripe = getStripe()
    let sessionConfig: any

    // Si c'est un devis personnalisé
    if (isCustomQuote) {
      if (!packageName || !price || !clientEmail) {
        return NextResponse.json(
          { error: 'Informations du devis incomplètes' },
          { status: 400 }
        )
      }

      sessionConfig = {
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: packageName,
                description: description || 'Devis personnalisé Viviworks',
              },
              unit_amount: Math.round(price * 100), // Stripe utilise les centimes
              ...(type === 'recurring' && {
                recurring: {
                  interval: 'month',
                },
              }),
            },
            quantity: 1,
          },
        ],
        mode: type === 'recurring' ? 'subscription' : 'payment',
        success_url: `${request.headers.get('origin')}/payment/success?session_id={CHECKOUT_SESSION_ID}&custom_quote=true&quote_id=${quoteId}`,
        cancel_url: `${request.headers.get('origin')}/payment/cancel`,
        customer_email: clientEmail,
        metadata: {
          isCustomQuote: 'true',
          quoteId: quoteId || '',
          packageName,
          price: price.toString(),
          clientEmail,
        },
      }
    } 
    // Si c'est un package standard
    else {
      if (!packageId || !packages[packageId as PackageId]) {
        return NextResponse.json(
          { error: 'Package invalide' },
          { status: 400 }
        )
      }

      const selectedPackage = packages[packageId as PackageId]

      sessionConfig = {
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: selectedPackage.currency,
              product_data: {
                name: selectedPackage.name,
                description: selectedPackage.description,
              },
              unit_amount: selectedPackage.price * 100, // Stripe utilise les centimes
              ...(selectedPackage.recurring && {
                recurring: {
                  interval: 'month',
                },
              }),
            },
            quantity: 1,
          },
        ],
        mode: selectedPackage.recurring ? 'subscription' : 'payment',
        success_url: `${request.headers.get('origin')}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${request.headers.get('origin')}/payment/cancel`,
        customer_email: customerEmail,
        metadata: {
          packageId,
          customerName,
        },
      }
    }

    // Créer une session de paiement Stripe
    const session = await stripe.checkout.sessions.create(sessionConfig)

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Erreur création session Stripe:', error)
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue'
    console.error('Message d\'erreur détaillé:', errorMessage)
    console.error('Variables d\'environnement:', {
      hasPublishableKey: !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      hasSecretKey: !!process.env.STRIPE_SECRET_KEY,
      publishableKeyPrefix: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.substring(0, 10),
    })
    return NextResponse.json(
      { 
        error: 'Erreur lors de la création de la session de paiement',
        details: errorMessage 
      },
      { status: 500 }
    )
  }
}

