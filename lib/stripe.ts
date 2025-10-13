import Stripe from 'stripe'

// Cette configuration n'est utilisée que côté serveur
export const getStripe = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not defined. Please add it to your .env.local file')
  }

  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-12-18.acacia',
    typescript: true,
  })
}

// Définition des packages et leurs prix
export const packages = {
  // Site Web
  'site-web-demarrage': {
    name: 'DÉMARRAGE DIGITAL',
    price: 890,
    currency: 'eur',
    description: 'Site web vitrine responsive avec SEO optimisé',
    features: [
      'Site web vitrine responsive (valeur 2500€)',
      'Référencement local (SEO) optimisé',
      'Fiche Google My Business optimisée',
      'Visuels créés sur mesure',
      'Newsletter mensuelle (jusqu\'à 500 contacts)',
      'Reporting mensuel simplifié',
      'Formation initiale (2h) aux outils digitaux'
    ]
  },
  'site-web-acceleration': {
    name: 'ACCÉLÉRATION BUSINESS',
    price: 1690,
    currency: 'eur',
    description: 'Site web avancé avec stratégie digitale complète',
    features: [
      'Tout du package Démarrage +',
      'Site web avancé avec blog intégré',
      'Stratégie de contenu (4 articles/mois)',
      'Intégration WhatsApp Business',
      'Campagnes Google Ads',
      'Email automation',
      'Analyse concurrentielle trimestrielle',
      'Rendez-vous stratégique mensuel (1h)'
    ]
  },
  'site-web-domination': {
    name: 'DOMINATION MARCHÉ',
    price: 2990,
    currency: 'eur',
    description: 'Package premium avec stratégie digitale complète',
    features: [
      'Tout du package Accélération +',
      'Stratégie digitale complète',
      'E-commerce ou fonctionnalités avancées',
      'Marketing automation complet',
      'Intégration chatbot multilingue',
      'Influenceur marketing',
      'Formation équipe (4h/trimestre)',
      'Consultant dédié',
      'Reporting avancé avec KPIs business'
    ]
  },
  // Site Web IA
  'site-web-ia-starter': {
    name: 'SITE WEB IA - STARTER',
    price: 3990,
    currency: 'eur',
    description: 'Site web avec intelligence artificielle intégrée',
    features: [
      'Site web sur mesure avec intégration IA',
      'Chatbot intelligent personnalisé (ChatGPT/Claude)',
      'Génération automatique de contenu',
      'Assistant virtuel pour les visiteurs',
      'Automatisation SEO avec Semrush',
      'Analyse concurrentielle automatisée',
      'Interface responsive et moderne',
      'Support technique dédié'
    ]
  },
  'site-web-ia-professionnel': {
    name: 'SITE WEB IA - PROFESSIONNEL',
    price: 5490,
    currency: 'eur',
    description: 'IA avancée avec automatisation complète',
    features: [
      'Tout du package Starter +',
      'Site web sur mesure avec IA avancée',
      'Automatisation complète avec n8n',
      'Scraping automatisé de données',
      'Intégration Semrush + Ahrefs',
      'Analyse prédictive des ventes',
      'Multi-langues avec traduction IA',
      'API IA personnalisée'
    ]
  },
  'site-web-ia-enterprise': {
    name: 'SITE WEB IA - ENTERPRISE',
    price: 8490,
    currency: 'eur',
    description: 'Solution IA sur mesure pour entreprises',
    features: [
      'Tout du package Professionnel +',
      'IA développée spécifiquement',
      'Automatisation complète des workflows',
      'IA multi-modale sur mesure',
      'Intégration avec tous vos outils',
      'IA auto-apprenante et évolutive',
      'Sécurité et conformité RGPD',
      'Support 24/7 prioritaire',
      'SLA garantie 99.9%'
    ]
  },
  // Application Mobile
  'app-mobile': {
    name: 'APPLICATION MOBILE',
    price: 5000,
    currency: 'eur',
    description: 'Application mobile native iOS et Android',
    features: [
      'Application mobile native (iOS et Android)',
      'Développement Flutter/Dart',
      'Interface utilisateur moderne et intuitive',
      'Fonctionnalités personnalisées',
      'Intégration API et base de données',
      'Tests et débogage complets',
      'Maintenance (6 mois inclus)',
      'Support technique dédié',
      'Documentation technique complète'
    ]
  },
  'app-mobile-gestion': {
    name: 'GESTION D\'APPLICATION',
    price: 300,
    currency: 'eur',
    description: 'Maintenance mensuelle de votre application (engagement 12 mois)',
    features: [
      'Maintenance continue de l\'application',
      'Mises à jour de sécurité régulières',
      'Support technique prioritaire',
      'Monitoring des performances',
      'Gestion des bugs et corrections',
      'Optimisation des performances',
      'Rapports de performance mensuels'
    ],
    recurring: true
  },
  // Application Mobile IA
  'app-mobile-ia-starter': {
    name: 'APP MOBILE IA - STARTER',
    price: 9990,
    currency: 'eur',
    description: 'Application mobile avec IA intégrée',
    features: [
      'Application mobile native avec IA intégrée',
      'Reconnaissance vocale et traitement du langage',
      'Recommandations personnalisées basées sur l\'IA',
      'Interface adaptative selon l\'utilisateur',
      'Génération automatique de contenu',
      'Analyse comportementale des utilisateurs',
      'Notifications intelligentes',
      'Support technique dédié'
    ]
  },
  'app-mobile-ia-professionnel': {
    name: 'APP MOBILE IA - PROFESSIONNEL',
    price: 11990,
    currency: 'eur',
    description: 'IA avancée avec machine learning',
    features: [
      'Tout du package Starter +',
      'Chatbot intelligent dans l\'app (ChatGPT/Claude)',
      'IA avancée avec machine learning',
      'Vision par ordinateur intégrée',
      'Reconnaissance d\'images et objets',
      'Intégration CRM avec IA',
      'Analyse prédictive des ventes',
      'API IA personnalisée'
    ]
  },
  'app-mobile-ia-enterprise': {
    name: 'APP MOBILE IA - ENTERPRISE',
    price: 14990,
    currency: 'eur',
    description: 'Solution IA complète pour entreprises',
    features: [
      'Tout du package Professionnel +',
      'IA sur mesure développée spécifiquement',
      'Intelligence artificielle multi-modale',
      'Vision par ordinateur et AR/VR',
      'Automatisation complète des workflows',
      'Intégration avec tous vos outils existants',
      'IA auto-apprenante et évolutive',
      'Sécurité et conformité RGPD',
      'Support 24/7 prioritaire',
      'SLA garantie 99.9%'
    ]
  }
} as const

export type PackageId = keyof typeof packages

