# 🚀 Guide de déploiement sur Netlify

## ✅ Configuration complète pour Viviworks

---

## 📋 Prérequis

### 1. Compte Upstash Redis (GRATUIT)
Le système de devis nécessite une base de données Redis.

**Créer un compte Upstash:**
1. Allez sur https://upstash.com
2. Créez un compte gratuit (pas de carte bancaire requise)
3. Créez une nouvelle base de données Redis
4. Sélectionnez la région la plus proche (Europe pour la France)
5. Notez les 3 clés suivantes:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`  
   - `KV_REST_API_READ_ONLY_TOKEN` (optionnel)

---

## 🔧 Configuration Netlify

### Étape 1: Variables d'environnement

Dans Netlify Dashboard → Site Settings → Environment Variables, ajoutez:

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
KV_REST_API_URL=https://xxx.upstash.io
KV_REST_API_TOKEN=AYA...xxx
KV_REST_API_READ_ONLY_TOKEN=AYA...xxx
```

### Étape 2: Build Settings

```bash
Build command: pnpm build
Publish directory: .next
Node version: 20.x
```

### Étape 3: Déployer

```bash
# Option A: Push automatique
git push origin main

# Option B: Déploiement manuel
netlify deploy --prod
```

---

## 🎯 Fonctionnalités activées

### ✅ Système de devis
- Création de devis par l'admin
- Stockage dans Upstash Redis
- Emails automatiques aux clients
- Paiement via Stripe
- Gestion complète (CRUD)

### ✅ Paiements Stripe
- Packages standards
- Devis personnalisés
- Webhooks configurés

### ✅ Emails
- Confirmation de paiement
- Envoi de devis
- Contact

---

## 📊 Limites du plan gratuit Upstash

| Fonctionnalité | Limite |
|----------------|--------|
| Requêtes/mois | 10,000 |
| Stockage | 256 MB |
| Latence | ~50ms (Europe) |

**C'est largement suffisant pour:**
- ~1000 devis stockés
- ~5000 consultations/mois
- Usage professionnel normal

---

## 🔒 Sécurité

### Routes protégées
- `/admin/*` → Cookie `vw_admin`
- `/api/admin/*` → Authentification requise
- `/api/quotes` → Filtrage par email client

### Variables sensibles
- Toutes les clés sont en variables d'environnement
- Jamais committées dans Git
- Séparées dev/production

---

## 🧪 Tester en local

### 1. Installer les dépendances
```bash
pnpm install
```

### 2. Créer `.env.local`
```bash
cp .env.local.example .env.local
# Remplir avec vos clés
```

### 3. Lancer le serveur
```bash
pnpm dev
```

### 4. Tester
- Admin: http://localhost:3000/admin
- Devis: http://localhost:3000/paiement-sur-devis

---

## 🚨 Troubleshooting

### Erreur: "Failed to connect to KV"
✅ Vérifiez que les variables `KV_REST_API_*` sont bien configurées dans Netlify

### Erreur: "Unauthorized"
✅ Connectez-vous à `/admin/login` avec le mot de passe

### Les devis ne s'affichent pas
✅ Vérifiez la console navigateur et les logs Netlify Functions

### Emails non reçus
✅ Vérifiez `EMAIL_USER` et `EMAIL_APP_PASSWORD`
✅ Activez "App Password" dans Gmail

---

## 📈 Monitoring

### Netlify Functions Logs
```
Site Settings → Functions → Function logs
```

### Upstash Console
```
https://console.upstash.com
→ Database → Browse → Voir "quotes:all"
```

---

## 🔄 Migration depuis fichier JSON

Si vous avez des devis dans `data/quotes.json`:

```bash
# Récupérer les devis existants
cat data/quotes.json

# Les ajouter manuellement via l'admin
# Ou créer un script de migration
```

---

## 💡 Améliorations futures

### Court terme
- [ ] Backup automatique Upstash
- [ ] Dashboard statistiques admin
- [ ] Notifications email pour nouveaux paiements

### Long terme
- [ ] Migration vers PostgreSQL si > 10k devis
- [ ] API REST publique pour intégrations
- [ ] Webhooks Stripe avancés

---

## 📞 Support

En cas de problème:
1. Vérifier les logs Netlify Functions
2. Vérifier les variables d'environnement
3. Tester en local avec `.env.local`
4. Vérifier la console Upstash

---

## 🎉 Résultat

Après configuration, votre site aura:
- ✅ Déploiement automatique à chaque push
- ✅ HTTPS gratuit (certificat Let's Encrypt)
- ✅ CDN global (temps de chargement < 1s)
- ✅ Stockage Redis persistant
- ✅ Functions serverless (API routes)
- ✅ Paiements Stripe fonctionnels
- ✅ Emails automatiques

**Coût total: 0€/mois** (plan gratuit Netlify + Upstash)

---

**Version: 2.0.0**  
**Dernière mise à jour: Octobre 2024**

