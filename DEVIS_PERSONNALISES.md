# 📋 Système de Devis Personnalisés - Documentation

## Vue d'ensemble

Le système de devis personnalisés permet aux administrateurs de créer des offres sur mesure pour leurs clients. Le processus est entièrement automatisé :

1. ✅ L'admin crée un devis dans le panel admin
2. ✅ Un email automatique avec le lien de paiement est envoyé au client
3. ✅ Le client accède à son devis via le lien ou en entrant son email
4. ✅ Le client paie directement via Stripe
5. ✅ Le devis est automatiquement marqué comme payé

---

## 🎯 Fonctionnalités

### Pour l'Administrateur

**Page Admin : `/admin`**

- ✅ Formulaire de création de devis personnalisés
- ✅ Champs disponibles :
  - Nom du package (requis)
  - Prix en euros (requis)
  - Email du client (requis)
  - Description détaillée (requis)
  - Liste de fonctionnalités (optionnel)
- ✅ Envoi automatique d'email au client avec le lien de paiement
- ✅ Affichage du lien de paiement après création
- ✅ Liste des devis créés récemment (10 derniers)
- ✅ Statut de chaque devis (En attente / Payé)
- ✅ **NOUVEAU** : Modification des devis non payés
- ✅ **NOUVEAU** : Suppression des devis non payés
- ✅ Protection : Seuls les devis non payés peuvent être modifiés/supprimés

### Pour le Client

**Page de Paiement : `/paiement-sur-devis`**

- ✅ Accès direct via le lien dans l'email
- ✅ Recherche manuelle par email si besoin
- ✅ Affichage du devis personnalisé avec :
  - Nom du package
  - Prix
  - Description complète
  - Liste des fonctionnalités incluses
  - Date de création
- ✅ Paiement sécurisé via Stripe
- ✅ Confirmation automatique après paiement

---

## 📝 Guide d'utilisation

### Étape 1 : Créer un Devis (Admin)

1. Connectez-vous au panel admin : `/admin/login`
2. Descendez à la section "Devis Personnalisés"
3. Remplissez le formulaire :
   ```
   Nom du package : "Site Web E-commerce sur mesure"
   Prix : 3500
   Email du client : client@exemple.com
   Description : "Développement complet d'un site e-commerce..."
   Fonctionnalités :
   - Design responsive
   - Paiement en ligne
   - Gestion des stocks
   - Tableau de bord admin
   ```
4. Cliquez sur "Créer et envoyer par email"
5. ✅ Le lien de paiement s'affiche et l'email est envoyé automatiquement

### Étape 2 : Le Client Reçoit l'Email

Le client reçoit un email professionnel contenant :
- Le nom du package
- La description complète
- La liste des fonctionnalités
- Le prix
- Un bouton "Procéder au paiement"

### Étape 3 : Le Client Paie

1. Le client clique sur le lien dans l'email
2. Il arrive sur `/paiement-sur-devis` avec son devis affiché
3. Il clique sur "Procéder au paiement"
4. Il est redirigé vers Stripe pour le paiement sécurisé
5. Après paiement, il arrive sur la page de succès
6. ✅ Le devis est automatiquement marqué comme "Payé"

### Étape 3.5 : Modifier un Devis (Avant Paiement)

Si vous devez modifier un devis avant que le client ne paie :

1. Allez sur `/admin` dans la section "Devis Personnalisés"
2. Trouvez le devis à modifier dans la liste
3. Cliquez sur l'icône **✏️ (crayon)** à droite du devis
4. Une fenêtre modale s'ouvre avec tous les champs pré-remplis
5. Modifiez les informations nécessaires :
   - Nom du package
   - Prix
   - Email du client
   - Description
   - Fonctionnalités
6. Cliquez sur **"Enregistrer"**
7. ✅ Le devis est mis à jour instantanément

**Note importante** : La modification ne renvoie pas d'email au client. Si vous souhaitez l'informer, contactez-le manuellement.

### Étape 3.6 : Supprimer un Devis (Avant Paiement)

Si vous devez annuler un devis :

1. Allez sur `/admin` dans la section "Devis Personnalisés"
2. Trouvez le devis à supprimer dans la liste
3. Cliquez sur l'icône **🗑️ (poubelle)** à droite du devis
4. Une boîte de confirmation apparaît
5. Vérifiez les informations du devis
6. Cliquez sur **"Supprimer"** pour confirmer
7. ✅ Le devis est supprimé définitivement

**Note importante** : Cette action est irréversible. Le client ne recevra aucune notification.

---

## 🔧 Paramètres Techniques

### Routes API Créées

1. **`/api/admin/create-quote` (POST)**
   - Crée un devis et envoie l'email au client
   - Authentification requise (cookie admin)
   - Retourne le lien de paiement

2. **`/api/quotes` (GET)**
   - Récupère les devis (utilisé côté client via localStorage)
   - Paramètre : `email` (requis)

3. **`/api/create-checkout-session` (POST)** - MODIFIÉ
   - Gère maintenant les packages standards ET les devis personnalisés
   - Détecte automatiquement le type via `isCustomQuote`
   - Crée la session Stripe appropriée

### Pages Créées

1. **`/paiement-sur-devis`**
   - Page publique pour les clients
   - Recherche de devis par email
   - Affichage et paiement des devis

2. **`/admin` (MODIFIÉE)**
   - Section "Devis Personnalisés" ajoutée
   - Formulaire de création
   - Liste des devis récents

### Fichiers Créés/Modifiés

```
lib/
  └── quotes.ts                           [CRÉÉ/MODIFIÉ] Gestion des devis
                                          + Fonction updateQuote() ajoutée

app/
  ├── admin/
  │   └── page.tsx                       [MODIFIÉ] Formulaire devis + Modifier/Supprimer
  ├── paiement-sur-devis/
  │   └── page.tsx                       [CRÉÉ] Page client
  ├── payment/
  │   └── success/
  │       └── page.tsx                   [MODIFIÉ] Gestion statut payé
  └── api/
      ├── admin/
      │   └── create-quote/
      │       └── route.ts               [CRÉÉ] API création devis
      ├── quotes/
      │   └── route.ts                   [CRÉÉ] API récupération
      └── create-checkout-session/
          └── route.ts                   [MODIFIÉ] Support devis custom
```

---

## 💾 Stockage des Données

Les devis sont stockés dans le **localStorage du navigateur** du client :
- Clé : `viviworks_quotes`
- Format : JSON array
- Avantages : Simple, pas de base de données requise
- Limitations : Données stockées localement seulement

⚠️ **Pour la production**, il est recommandé de migrer vers une vraie base de données (MongoDB, PostgreSQL, etc.) pour :
- Synchronisation entre appareils
- Persistance garantie
- Analytics et reporting
- Gestion avancée

---

## 📧 Configuration Email

Le système utilise **Nodemailer** avec Gmail.

### Variables d'environnement requises :

```env
# Email Configuration
EMAIL_USER=viviworksvivi@gmail.com
EMAIL_APP_PASSWORD=votre_app_password

# URL du site (pour les liens dans les emails)
NEXT_PUBLIC_SITE_URL=https://viviworks.fr
# En développement : http://localhost:3000
```

### Format de l'Email Envoyé

- ✅ Design HTML professionnel
- ✅ Responsive
- ✅ Affichage du package, description, fonctionnalités
- ✅ Prix en évidence
- ✅ Bouton CTA pour le paiement
- ✅ Version texte incluse (anti-spam)
- ✅ Informations de contact Viviworks

---

## 🔒 Sécurité

### Authentification Admin
- Cookie `vw_admin` requis
- Vérifié par le middleware
- Seuls les admins connectés peuvent créer des devis

### Paiement
- 100% via Stripe (PCI-DSS compliant)
- Aucune donnée de carte stockée
- Redirection sécurisée
- Webhooks pour confirmation

### Validation
- Validation côté serveur des données
- Sanitization des emails
- Vérification des prix (> 0)
- Protection CSRF via Next.js

---

## 🧪 Tests

### Cartes de test Stripe

En mode développement (clés `sk_test_...`) :

| Scénario | Numéro de carte |
|----------|----------------|
| ✅ Paiement réussi | `4242 4242 4242 4242` |
| ❌ Paiement refusé | `4000 0000 0000 0002` |
| 🔄 Authentification requise | `4000 0025 0000 3155` |

- Date d'expiration : N'importe quelle date future
- CVC : N'importe quel code à 3 chiffres

### Tester le flux complet

1. Connectez-vous à `/admin/login`
2. Créez un devis avec votre propre email
3. Vérifiez votre boîte mail
4. **NOUVEAU** : Retournez à l'admin et testez la modification du devis
5. Cliquez sur le lien de paiement dans l'email
6. Utilisez la carte de test : `4242 4242 4242 4242`
7. Vérifiez la page de succès
8. Retournez à l'admin pour voir le statut "Payé"
9. **NOUVEAU** : Constatez que les boutons Modifier/Supprimer ont disparu (devis payé)

---

## 📊 Analytics & Suivi

### Données disponibles dans l'admin

- Nombre total de devis créés
- Nombre de devis en attente
- Nombre de devis payés
- Liste des 5 derniers devis

### Informations par devis

- ID unique
- Nom du package
- Prix
- Email du client
- Date de création
- Statut (En attente / Payé)
- Actions disponibles :
  - ✏️ Modifier (uniquement si non payé)
  - 🗑️ Supprimer (uniquement si non payé)

---

## 🚀 Améliorations Futures Possibles

1. **Base de données**
   - Stockage permanent
   - Synchronisation multi-appareils
   - Analytics avancés

2. **Notifications**
   - Email à l'admin quand un devis est payé
   - Rappels automatiques pour devis non payés
   - SMS notifications

3. **Gestion avancée**
   - ✅ ~~Possibilité d'éditer un devis~~ **FAIT !**
   - Date d'expiration des devis
   - Historique complet des paiements
   - Export PDF des devis
   - Envoyer un email de rappel au client

4. **Client Dashboard**
   - Espace client pour voir tous ses devis
   - Historique des paiements
   - Factures téléchargeables

5. **Multi-devises**
   - Support EUR, USD, GBP, etc.
   - Conversion automatique

---

## 🐛 Dépannage

### Le client ne reçoit pas l'email

1. Vérifiez les variables d'environnement
2. Vérifiez que l'App Password Gmail est correct
3. Vérifiez les logs serveur pour les erreurs
4. L'email peut être dans les spams (voir `ANTI_SPAM_INSTRUCTIONS.md`)

### Le lien de paiement ne fonctionne pas

1. Vérifiez que `NEXT_PUBLIC_SITE_URL` est correct
2. En développement : `http://localhost:3000`
3. En production : `https://viviworks.fr`

### Le devis ne s'affiche pas

1. Le client doit utiliser le même navigateur/appareil
2. Les cookies/localStorage doivent être activés
3. Essayez la recherche manuelle par email

### Je ne peux pas modifier un devis

1. Vérifiez que le devis n'est pas déjà payé
2. Seuls les devis "En attente" peuvent être modifiés
3. Les devis payés sont verrouillés pour l'intégrité des données

### La modification ne se sauvegarde pas

1. Vérifiez que tous les champs requis sont remplis
2. Le prix doit être supérieur à 0
3. L'email doit être valide
4. Consultez la console du navigateur pour les erreurs

### Le paiement échoue

1. Vérifiez les clés Stripe dans `.env.local`
2. En développement, utilisez les clés de test
3. Vérifiez la console pour les erreurs
4. Testez avec la carte `4242 4242 4242 4242`

---

## 📞 Support

Pour toute question ou problème :

- 📧 Email : viviworksvivi@gmail.com
- 📞 Téléphone : +33 6 65 75 85 83
- 🌐 Site : https://viviworks.fr

---

**Dernière mise à jour** : Octobre 2025
**Version** : 1.1.0 - Ajout modification/suppression des devis

