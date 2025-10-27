# 🔐 Configuration finale - .env.local

## ✅ Vos clés Upstash sont prêtes !

### Votre URL Redis:
```
https://causal-sparrow-30160.upstash.io
```

---

## 📝 **Créer le fichier .env.local**

### **Étape 1: Révéler le token dans Upstash**

1. Sur la page Upstash, cliquez sur l'icône **œil 👁️** à côté de "Read-Only Token"
2. Le token `********` s'affiche en clair
3. **Copiez-le entièrement** (commence par `AYA...`)

### **Étape 2: Créer le fichier**

Dans votre projet **viviworksweb**, créez un fichier nommé `.env.local` avec ce contenu:

```bash
# ========================================
# UPSTASH REDIS (NOUVEAU)
# ========================================

KV_REST_API_URL=https://causal-sparrow-30160.upstash.io
KV_REST_API_TOKEN=COLLER_VOTRE_TOKEN_ICI

# ========================================
# VOS CLÉS EXISTANTES
# ========================================

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51QSw3cGHgEyzdAv0yJeW...
STRIPE_SECRET_KEY=sk_test_51QSw3cGHgEyzdAv0yJeW...

EMAIL_USER=habibbellara85@gmail.com
EMAIL_APP_PASSWORD=votre_password_gmail_app

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

⚠️ **IMPORTANT**: Remplacez `COLLER_VOTRE_TOKEN_ICI` par le vrai token depuis Upstash !

---

## 🚀 **Étape 3: Redémarrer le serveur**

```bash
# Dans le terminal où tourne pnpm dev:
# 1. Arrêtez avec Ctrl+C
# 2. Relancez:
pnpm dev
```

---

## ✅ **Étape 4: Tester**

1. Allez sur `http://localhost:3000/admin`
2. Créez un devis
3. **✅ Ça devrait fonctionner sans erreur !**

---

## 🎉 **Résultat attendu**

Quand vous créez un devis:
- ✅ Plus d'erreur "Missing KV_REST_API"
- ✅ Le devis est stocké dans Redis
- ✅ Email envoyé au client
- ✅ Devis visible dans la liste

---

## 🚨 **Si erreur**

### "URL is not valid"
→ Vérifiez que l'URL est bien `https://causal-sparrow-30160.upstash.io` (avec https://)

### "Unauthorized" 
→ Le token est incorrect, revérifiez dans Upstash

### Fichier .env.local non trouvé
→ Il doit être à la racine (même niveau que package.json, pas dans un sous-dossier)

---

**Une fois configuré, dites-moi pour que je vérifie que tout fonctionne ! 🚀**

