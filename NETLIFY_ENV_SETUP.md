# Configuration des variables d'environnement sur Netlify

## ⚠️ IMPORTANT - Mode Production Stripe

Vous utilisez maintenant les clés Stripe de **PRODUCTION**. Cela signifie que tous les paiements seront **RÉELS** et les cartes bancaires seront **DÉBITÉES**.

## 🔧 Configuration sur Netlify

### Étape 1 : Accéder aux paramètres de votre site

1. Connectez-vous sur https://app.netlify.com
2. Sélectionnez votre site **viviw** (ou musical-maamoul-3ca585)
3. Cliquez sur **"Site settings"** (Paramètres du site)
4. Dans le menu de gauche, cliquez sur **"Environment variables"** (Variables d'environnement)

### Étape 2 : Ajouter les variables d'environnement

Cliquez sur **"Add a variable"** et ajoutez les variables suivantes **UNE PAR UNE** :

#### 1. NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
```
pk_live_51SHjw7QR87h5tf6sCC3mEk377GfXRMnQVDiIdD0ad3eqh5FAmsikII4eii5hcIEFGlsisGiRarrPIAXB3WwZAF6e00JiNKoQqD
```

#### 2. STRIPE_SECRET_KEY
```
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
```

#### 3. EMAIL_USER
```
viviworksvivi@gmail.com
```

#### 4. EMAIL_PASS
```
bsat plwy zqnt qgyl
```

### Étape 3 : Redéployer le site

Après avoir ajouté toutes les variables :

1. Cliquez sur **"Save"** (Enregistrer)
2. Allez dans **"Deploys"** (Déploiements)
3. Cliquez sur **"Trigger deploy"** > **"Clear cache and deploy site"**
4. Attendez que le déploiement se termine (quelques minutes)

## ✅ Vérification

### Test avec une vraie carte

⚠️ **ATTENTION** : Utilisez maintenant de **VRAIES CARTES BANCAIRES** pour tester. Les paiements seront **RÉELS**.

Pour tester, vous pouvez :
1. Faire un paiement test avec votre propre carte
2. Annuler immédiatement le paiement dans le dashboard Stripe si nécessaire

### Cartes de test Stripe (NE FONCTIONNERONT PLUS)

Ces cartes ne fonctionnent qu'en mode test :
- ❌ `4242 4242 4242 4242` - Ne fonctionne plus
- ❌ `4000 0025 0000 3155` - Ne fonctionne plus

## 📊 Suivi des paiements

### Dashboard Stripe

1. Connectez-vous sur https://dashboard.stripe.com
2. **IMPORTANT** : Vérifiez que vous êtes en mode **"Production"** (pas "Test")
3. Vous verrez tous les vrais paiements dans :
   - **Paiements** : Tous les paiements reçus
   - **Clients** : Liste de vos clients
   - **Produits** : Vos packages

### Notifications

Configurez les notifications Stripe :
1. Allez dans **Settings** > **Business settings** > **Notifications**
2. Activez les emails pour :
   - Paiements réussis
   - Paiements échoués
   - Litiges (disputes)
   - Remboursements

## 💳 Gestion des paiements

### Remboursements

Si vous devez rembourser un client :
1. Dashboard Stripe > **Payments**
2. Cliquez sur le paiement à rembourser
3. Cliquez sur **"Refund payment"**
4. Choisissez montant total ou partiel
5. Confirmez

### Litiges (Chargebacks)

Si un client conteste un paiement :
1. Vous recevrez un email de Stripe
2. Répondez dans les 7 jours avec les preuves
3. Fournissez : contrats, emails, preuve de livraison

## 🔒 Sécurité

### Protection des clés

- ✅ Les clés sont sur Netlify (sécurisé)
- ✅ Les clés sont dans .env.local (ignoré par git)
- ✅ Ne partagez JAMAIS vos clés sk_live_...

### Radar Stripe

Stripe Radar protège automatiquement contre la fraude :
- Détection des cartes volées
- Blocage des paiements suspects
- Authentification 3D Secure automatique

## 📧 Emails de confirmation

Après chaque paiement réussi :
1. Le client est redirigé vers `/payment/success`
2. Un email de confirmation est envoyé (configuré dans votre code)
3. Vous recevez une notification admin

## 🆘 Support

### En cas de problème

1. **Paiement échoué** : Vérifiez dans Stripe > Logs
2. **Erreur de configuration** : Vérifiez les variables Netlify
3. **Questions Stripe** : support@stripe.com
4. **Logs Netlify** : Site > Deploys > [votre deploy] > Deploy logs

### Contacts utiles

- **Support Stripe** : https://support.stripe.com
- **Documentation** : https://stripe.com/docs
- **Status Stripe** : https://status.stripe.com

## 📝 Checklist finale

Avant de lancer en production :

- [ ] Variables d'environnement configurées sur Netlify
- [ ] Site redéployé avec les nouvelles variables
- [ ] Test de paiement effectué avec une vraie carte
- [ ] Emails de confirmation fonctionnent
- [ ] Dashboard Stripe vérifié (mode Production)
- [ ] Notifications Stripe activées
- [ ] CGV et mentions légales à jour
- [ ] Politique de remboursement définie

## ⚖️ Conformité légale

N'oubliez pas :
- **CGV** : Conditions générales de vente
- **Mentions légales** : Obligatoires
- **RGPD** : Protection des données
- **Politique de remboursement** : Clairement affichée

---

**Félicitations !** 🎉 Votre système de paiement Stripe est maintenant en mode **PRODUCTION** et prêt à recevoir de vrais paiements !




