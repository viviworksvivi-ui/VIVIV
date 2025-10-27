# ⚡ Configuration Upstash - 5 minutes

## 🎯 Ce qu'il faut faire MAINTENANT

### **Étape 1: Créer compte Upstash (2 min)**

1. ✅ Allez sur: **https://console.upstash.com/**
2. ✅ Cliquez sur **"Sign Up"** 
3. ✅ Utilisez votre email ou GitHub (pas de carte bancaire)

### **Étape 2: Créer base de données Redis (1 min)**

1. ✅ Cliquez sur **"Create Database"**
2. ✅ Sélectionnez **"Redis"**
3. ✅ Choisissez:
   - **Type**: "Global" (gratuit)
   - **Name**: viviworks-quotes
   - **Region**: **Europe** (Paris ou Frankfurt)
4. ✅ Cliquez sur **"Create"**

### **Étape 3: Copier les clés (30 secondes)**

Une fois la base créée:

1. ✅ Cliquez sur l'onglet **"Details"**
2. ✅ Scroll jusqu'à **"REST API"**
3. ✅ Vous verrez 2 valeurs:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

### **Étape 4: Créer `.env.local` (1 min)**

Dans le dossier de votre projet (viviworksweb), créez un fichier nommé `.env.local`:

```bash
# UPSTASH REDIS
KV_REST_API_URL=https://your-xxxxx.upstash.io
KV_REST_API_TOKEN=AYAxxxxxxxxxxxxxxxxxxxxx

# VOS CLÉS EXISTANTES (garder les mêmes)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51QSw3cGHgEyzdAv0yJeW...
STRIPE_SECRET_KEY=sk_test_51QSw3cGHgEyzdAv0yJeW...
EMAIL_USER=habibbellara85@gmail.com
EMAIL_APP_PASSWORD=votre_password
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

⚠️ **IMPORTANT**: Remplacez `KV_REST_API_URL` et `KV_REST_API_TOKEN` par vos vraies valeurs !

### **Étape 5: Redémarrer le serveur (10 secondes)**

```bash
# Arrêtez le serveur (Ctrl+C dans le terminal)
# Puis relancez:
pnpm dev
```

---

## ✅ **Vérification**

Une fois redémarré, retournez sur `/admin` et créez un devis.

**Si ça marche**: ✅ Vous verrez le devis créé sans erreur !  
**Si erreur**: ❌ Vérifiez que les clés sont bien dans `.env.local`

---

## 🎁 **Plan gratuit Upstash**

- ✅ **10,000 requêtes/mois** (largement suffisant)
- ✅ **256 MB stockage** (~10,000 devis)
- ✅ **Pas de carte bancaire**
- ✅ **Pas d'expiration**

---

## 🚨 **Besoin d'aide ?**

### Erreur: "KV_REST_API_URL is not a valid URL"
→ Vérifiez que l'URL commence par `https://`

### Erreur: "Unauthorized"
→ Vérifiez le token, il doit commencer par `AYA...`

### Le fichier .env.local n'existe pas
→ Créez-le à la racine du projet (même niveau que package.json)

---

## 📸 **Captures d'écran Upstash**

### Où trouver les clés:
```
Console Upstash
  └─ Databases
      └─ viviworks-quotes
          └─ Details
              └─ REST API  ← ICI
                  ├─ UPSTASH_REDIS_REST_URL
                  └─ UPSTASH_REDIS_REST_TOKEN
```

---

**Temps total: ~5 minutes**  
**Coût: 0€**  
**Résultat: Système de devis fonctionnel !**

