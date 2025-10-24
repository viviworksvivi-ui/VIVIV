# 🚀 Guide de déploiement sur Hostinger

## Étape 1 : Build le projet localement

1. Ouvrez PowerShell dans le dossier du projet
2. Installez les dépendances (si pas déjà fait) :
   ```bash
   pnpm install
   ```

3. Construisez le site :
   ```bash
   pnpm build
   ```

4. Le dossier `out/` sera créé avec tous les fichiers statiques

## Étape 2 : Préparer Hostinger

### A. Connectez-vous à hPanel (Hostinger)

1. Allez sur https://hpanel.hostinger.com
2. Cliquez sur **"Websites"** dans le menu
3. Sélectionnez **viviworks.ai** (ou le domaine que vous voulez utiliser)

### B. Accédez au File Manager

1. Dans la page du site, cliquez sur **"File Manager"**
2. Vous verrez le dossier `public_html`

### C. Videz le dossier public_html

1. Sélectionnez tous les fichiers dans `public_html`
2. Cliquez sur **"Delete"** pour les supprimer
3. Confirmez la suppression

## Étape 3 : Uploader les fichiers

### Méthode 1 : Via File Manager (Recommandé)

1. Dans le File Manager, allez dans `public_html`
2. Cliquez sur **"Upload Files"**
3. Sélectionnez TOUS les fichiers du dossier `out/` de votre projet
4. Attendez que l'upload soit terminé (peut prendre 5-10 minutes)

**IMPORTANT** : Uploadez aussi le fichier `.htaccess` qui est dans `out/`

### Méthode 2 : Via FTP (Alternative)

1. Téléchargez FileZilla : https://filezilla-project.org/
2. Dans hPanel, allez dans **"FTP Accounts"**
3. Créez un compte FTP ou utilisez celui existant
4. Connectez-vous avec FileZilla :
   - Host: ftp.viviworks.ai (ou votre domaine)
   - Username: votre nom d'utilisateur FTP
   - Password: votre mot de passe FTP
   - Port: 21
5. Naviguez vers `public_html`
6. Uploadez tous les fichiers du dossier `out/`

## Étape 4 : Variables d'environnement

⚠️ **IMPORTANT** : Les API routes Next.js ne fonctionnent pas en mode statique.

Votre site utilise des API routes pour :
- Contact form (`/api/contact`)
- Package email (`/api/send-package-email`)
- Stripe checkout (`/api/create-checkout-session`)

### Solutions :

**Option A : Désactiver les fonctionnalités dynamiques**
- Utiliser un service externe pour les formulaires (Formspree, EmailJS)
- Rediriger vers Stripe directement sans API

**Option B : Utiliser un service backend séparé**
- Héberger les API sur Vercel/Netlify (gratuit)
- Faire pointer votre formulaire vers cette API externe

**Option C : Upgrade vers un plan Node.js Hostinger**
- Business plan ou supérieur
- Supporte les applications Node.js complètes

## Étape 5 : Configuration du domaine

### Si vous utilisez viviworks.ai :

1. Dans hPanel, allez dans **"Domains"**
2. Cliquez sur **"Manage"** à côté de viviworks.ai
3. Vérifiez que les DNS pointent vers Hostinger
4. Si nécessaire, configurez :
   - Type A → IP de votre serveur Hostinger
   - CNAME www → viviworks.ai

## Étape 6 : SSL/HTTPS

1. Dans hPanel, allez dans **"SSL"**
2. Sélectionnez votre domaine (viviworks.ai)
3. Activez le certificat SSL gratuit (Let's Encrypt)
4. Attendez 10-15 minutes pour l'activation

## Étape 7 : Tester le site

1. Attendez 5 minutes après l'upload
2. Visitez : https://viviworks.ai
3. Vérifiez que toutes les pages fonctionnent
4. Testez la navigation

## 🔧 Résolution de problèmes

### Le site affiche "403 Forbidden"
- Vérifiez qu'il y a un fichier `index.html` dans `public_html`
- Vérifiez les permissions des fichiers (644 pour les fichiers, 755 pour les dossiers)

### Les images ne s'affichent pas
- Vérifiez que le dossier `_next` a été uploadé
- Vérifiez que les images sont dans le bon chemin

### Les liens ne fonctionnent pas
- Vérifiez que le fichier `.htaccess` a été uploadé
- Vérifiez que mod_rewrite est activé (normalement oui sur Hostinger)

### Erreur 500
- Vérifiez le fichier `.htaccess`
- Contactez le support Hostinger

## 📞 Support

- **Hostinger Support** : Chat 24/7 dans hPanel
- **Documentation** : https://support.hostinger.com

## ⚠️ Limitations du mode statique

Fonctionnalités qui NE marcheront PAS :
- ❌ Formulaire de contact (API route)
- ❌ Envoi d'emails via Nodemailer
- ❌ Création de session Stripe côté serveur
- ❌ Toutes les API routes Next.js

Fonctionnalités qui marcheront :
- ✅ Toutes les pages statiques
- ✅ Navigation
- ✅ Animations
- ✅ Images
- ✅ CSS/JavaScript
- ✅ Google Analytics

## 🎯 Recommandation

Pour garder TOUTES les fonctionnalités (formulaires, emails, Stripe) :
1. Utilisez **Vercel** (gratuit) pour le site principal
2. Ou passez au plan **Business Cloud Hosting** de Hostinger (supporte Node.js)




