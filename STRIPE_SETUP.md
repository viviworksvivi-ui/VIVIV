# Configuration Stripe pour Viviworks

## 📋 Prérequis

1. Créer un compte Stripe sur [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Récupérer vos clés API dans la section "Développeurs" > "Clés API"

## 🔑 Variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# Stripe Keys (Mode Test pour le développement)
STRIPE_SECRET_KEY=sk_test_votre_cle_secrete
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_votre_cle_publique

# Email Configuration
EMAIL_USER=viviworksvivi@gmail.com
EMAIL_APP_PASSWORD=bsat plwy zqnt qgyl
```

## 🚀 Mise en production

Pour passer en mode production :

1. Dans le tableau de bord Stripe, activez votre compte
2. Remplacez les clés de test par les clés de production :
   - `sk_test_...` → `sk_live_...`
   - `pk_test_...` → `pk_live_...`

## 📱 Pages disponibles

- `/paiement` - Page de sélection et paiement des packages
- `/payment/success` - Page de confirmation après paiement réussi
- `/payment/cancel` - Page affichée si le paiement est annulé

## 💳 Packages configurés

### Site Web
- **DÉMARRAGE DIGITAL** - 890€
- **ACCÉLÉRATION BUSINESS** - 1690€
- **DOMINATION MARCHÉ** - 2990€

### Site Web IA
- **SITE WEB IA - STARTER** - 3990€
- **SITE WEB IA - PROFESSIONNEL** - 5490€
- **SITE WEB IA - ENTERPRISE** - 8490€

### Application Mobile
- **APPLICATION MOBILE** - 5000€
- **GESTION D'APPLICATION** - 300€/mois (abonnement)

### Application Mobile IA
- **APP MOBILE IA - STARTER** - 9990€
- **APP MOBILE IA - PROFESSIONNEL** - 11990€
- **APP MOBILE IA - ENTERPRISE** - 14990€

## 🧪 Test en mode développement

Utilisez les cartes de test Stripe :
- **Paiement réussi** : `4242 4242 4242 4242`
- **Paiement refusé** : `4000 0000 0000 0002`
- Date d'expiration : N'importe quelle date future
- CVC : N'importe quel code à 3 chiffres

## 📧 Notifications

Après un paiement réussi, vous pouvez configurer des webhooks Stripe pour :
- Envoyer un email de confirmation au client
- Notifier l'équipe Viviworks
- Mettre à jour votre base de données

## 🔒 Sécurité

- Les clés secrètes ne sont JAMAIS exposées au client
- Tous les paiements transitent par Stripe (PCI-DSS compliant)
- HTTPS obligatoire en production

