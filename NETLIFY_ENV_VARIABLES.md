# Variables d'environnement Netlify

## 📋 Liste des variables à configurer dans Netlify

Allez dans **Site settings > Environment variables** dans votre dashboard Netlify et ajoutez les variables suivantes :

---

## 🔐 Variables OBLIGATOIRES

### 1. **EMAIL_USER**
- **Description** : Adresse email Gmail utilisée pour envoyer les emails (formulaire de contact, landing page, etc.)
- **Exemple** : `viviworksvivi@gmail.com`
- **Utilisée dans** :
  - Formulaire de contact (`/api/contact`)
  - Formulaire landing page (`/api/landing-page-form`)
  - Envoi de devis (`/api/admin/create-quote`)
  - Envoi de packages (`/api/send-package-email`)

### 2. **EMAIL_APP_PASSWORD**
- **Description** : Mot de passe d'application Gmail (⚠️ **PAS** votre mot de passe Gmail normal)
- **Comment l'obtenir** :
  1. Allez sur https://myaccount.google.com/
  2. Sécurité > Validation en 2 étapes (doit être activée)
  3. Mots de passe des applications > Sélectionnez "Autre" > Nommez-le "Viviworks Netlify"
  4. Copiez le mot de passe généré (16 caractères)
- **Exemple** : `abcd efgh ijkl mnop` (sans espaces : `abcdefghijklmnop`)
- **⚠️ Important** : Utilisez un mot de passe d'application, pas votre mot de passe Gmail

---

## 💳 Variables STRIPE (si vous utilisez les paiements)

### 3. **STRIPE_SECRET_KEY**
- **Description** : Clé secrète Stripe (commence par `sk_`)
- **Où la trouver** : Dashboard Stripe > Developers > API keys > Secret key
- **Exemple** : `sk_test_...` (test) ou `sk_live_...` (production)
- **Utilisée dans** : Création de sessions de paiement Stripe

### 4. **NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY**
- **Description** : Clé publique Stripe (commence par `pk_`)
- **Où la trouver** : Dashboard Stripe > Developers > API keys > Publishable key
- **Exemple** : `pk_test_...` (test) ou `pk_live_...` (production)
- **⚠️ Note** : Le préfixe `NEXT_PUBLIC_` signifie que cette variable est accessible côté client

---

## 🌐 Variables OPTIONNELLES

### 5. **NEXT_PUBLIC_SITE_URL**
- **Description** : URL complète de votre site (utilisée dans les liens des emails)
- **Exemple** : `https://viviworks.fr` ou `https://www.viviworks.fr`
- **Utilisée dans** : Liens dans les emails de confirmation

### 6. **NEXT_PUBLIC_YOUTUBE_VIDEO_ID**
- **Description** : ID de la vidéo YouTube à afficher (optionnel)
- **Exemple** : `dQw4w9WgXcQ`
- **Utilisée dans** : Composant `why-choose-us.tsx`

---

## 📝 Instructions pour Netlify

### Méthode 1 : Via l'interface Netlify

1. Connectez-vous à [Netlify Dashboard](https://app.netlify.com/)
2. Sélectionnez votre site
3. Allez dans **Site settings** (Paramètres du site)
4. Cliquez sur **Environment variables** (Variables d'environnement)
5. Cliquez sur **Add a variable** (Ajouter une variable)
6. Ajoutez chaque variable une par une :
   - **Key** : Nom de la variable (ex: `EMAIL_USER`)
   - **Value** : Valeur de la variable (ex: `viviworksvivi@gmail.com`)
   - **Scopes** : Sélectionnez les environnements (Production, Deploy previews, Branch deploys)
7. Cliquez sur **Save** (Enregistrer)

### Méthode 2 : Via le fichier `netlify.toml`

Vous pouvez aussi ajouter les variables dans le fichier `netlify.toml` :

```toml
[build.environment]
  EMAIL_USER = "viviworksvivi@gmail.com"
  EMAIL_APP_PASSWORD = "votre_mot_de_passe_application"
  STRIPE_SECRET_KEY = "sk_test_..."
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "pk_test_..."
  NEXT_PUBLIC_SITE_URL = "https://viviworks.fr"
```

⚠️ **Attention** : Ne commitez **JAMAIS** les valeurs réelles dans Git ! Utilisez uniquement l'interface Netlify pour les valeurs sensibles.

---

## ✅ Vérification

Après avoir configuré les variables, vous pouvez tester si elles sont bien configurées en visitant :
- `/api/test-env` - Affiche l'état de toutes les variables d'environnement

---

## 🔒 Sécurité

- ✅ Les variables avec `NEXT_PUBLIC_` sont accessibles côté client (dans le navigateur)
- ✅ Les autres variables sont **uniquement** accessibles côté serveur (API routes)
- ⚠️ **Ne partagez JAMAIS** vos clés secrètes ou mots de passe
- ⚠️ Utilisez des clés de **test** pour le développement et des clés **live** pour la production

---

## 📧 Configuration Gmail

Pour que l'envoi d'emails fonctionne avec Gmail :

1. **Activez la validation en 2 étapes** sur votre compte Gmail
2. **Générez un mot de passe d'application** :
   - Allez sur https://myaccount.google.com/apppasswords
   - Sélectionnez "Autre" et nommez-le "Viviworks"
   - Copiez le mot de passe généré (16 caractères)
3. **Utilisez ce mot de passe** dans `EMAIL_APP_PASSWORD`

---

## 🚀 Après la configuration

1. **Redéployez votre site** sur Netlify pour que les nouvelles variables soient prises en compte
2. **Testez le formulaire** de contact et de landing page
3. **Vérifiez les emails** reçus dans votre boîte Gmail

---

## ❓ Problèmes courants

### Les emails ne sont pas envoyés
- ✅ Vérifiez que `EMAIL_USER` et `EMAIL_APP_PASSWORD` sont correctement configurés
- ✅ Assurez-vous d'utiliser un **mot de passe d'application**, pas votre mot de passe Gmail
- ✅ Vérifiez que la validation en 2 étapes est activée sur Gmail

### Erreur "Invalid login"
- ✅ Vérifiez que `EMAIL_APP_PASSWORD` ne contient **pas d'espaces**
- ✅ Assurez-vous d'avoir copié le mot de passe d'application complet (16 caractères)

### Les paiements Stripe ne fonctionnent pas
- ✅ Vérifiez que `STRIPE_SECRET_KEY` et `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` sont configurés
- ✅ Assurez-vous d'utiliser les bonnes clés (test vs production)
- ✅ Vérifiez que les clés correspondent au même compte Stripe



