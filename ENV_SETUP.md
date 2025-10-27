# 🔐 Configuration des variables d'environnement

## Pour Netlify (Production)

### Variables requises

Allez dans **Netlify Dashboard → Site Settings → Environment Variables** et ajoutez:

```bash
# Stripe (Production)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...

# Email (Gmail)
EMAIL_USER=contact@viviworks.fr
EMAIL_APP_PASSWORD=votre-mot-de-passe-application-gmail

# Site URL
NEXT_PUBLIC_SITE_URL=https://viviworks.fr

# Upstash Redis (Stockage des devis)
# Obtenir gratuitement sur https://upstash.com
KV_REST_API_URL=https://xxx.upstash.io
KV_REST_API_TOKEN=AYA...xxx
KV_REST_API_READ_ONLY_TOKEN=AYA...xxx
```

---

## Pour développement local

Créez un fichier `.env.local` à la racine:

```bash
# Stripe (Test)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Email (Gmail)
EMAIL_USER=votre-email@gmail.com
EMAIL_APP_PASSWORD=votre-mot-de-passe-application

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Upstash Redis
KV_REST_API_URL=https://xxx.upstash.io
KV_REST_API_TOKEN=AYA...xxx
KV_REST_API_READ_ONLY_TOKEN=AYA...xxx
```

---

## 📝 Comment obtenir les clés

### Stripe
1. https://dashboard.stripe.com/apikeys
2. Utilisez les clés **test** pour le dev
3. Utilisez les clés **live** pour la production

### Gmail App Password
1. Compte Google → Sécurité
2. Activer la validation en 2 étapes
3. Rechercher "Mots de passe d'application"
4. Générer un nouveau mot de passe pour "Mail"

### Upstash Redis (GRATUIT)
1. Créer un compte sur https://upstash.com
2. Créer une nouvelle base de données Redis
3. Choisir la région Europe (Paris ou Francfort)
4. Copier les 3 URLs/tokens fournis

---

**⚠️ IMPORTANT:**  
Ne jamais committer le fichier `.env.local` dans Git !

