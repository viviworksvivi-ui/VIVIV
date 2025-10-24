# Instructions pour éviter que les emails arrivent dans le spam

## ✅ Modifications appliquées dans le code

1. **En-têtes d'email améliorés**
   - Ajout de `from` avec nom complet ("Viviworks")
   - Ajout de `replyTo` pour faciliter les réponses
   - Ajout d'en-têtes standards (X-Priority, X-Mailer, etc.)

2. **Version texte des emails**
   - Chaque email a maintenant une version HTML ET texte
   - Cela améliore considérablement la délivrabilité

3. **Configuration TLS améliorée**
   - Meilleure compatibilité avec les serveurs Gmail

## 🔧 Actions à effectuer manuellement dans Gmail

### 1. Vérifier la configuration de sécurité Gmail

1. Connectez-vous sur https://myaccount.google.com/security
2. Vérifiez que "Validation en deux étapes" est activée
3. Confirmez que l'App Password est actif

### 2. Améliorer la réputation de l'expéditeur

**Important** : Pour éviter le spam, suivez ces étapes :

#### A. Envoyer un email de test à vous-même
1. Testez le formulaire de contact
2. Trouvez l'email dans votre boîte de réception (ou spam)
3. Si c'est dans le spam, cliquez sur "**Ceci n'est pas un spam**"
4. Ajoutez `viviworksvivi@gmail.com` à vos contacts

#### B. Réchauffer l'adresse email
Pour les nouvelles adresses ou celles peu utilisées :

1. **Premiers jours** : Envoyez 5-10 emails par jour
2. **Première semaine** : Augmentez progressivement à 20-30 par jour
3. **Deuxième semaine** : Augmentez à 50-100 par jour
4. **Après 2-3 semaines** : L'adresse sera "réchauffée"

#### C. Demander aux destinataires d'ajouter l'adresse à leurs contacts
- Ajoutez une note dans vos communications : "Ajoutez-nous à vos contacts pour ne rien manquer"

### 3. Configuration SPF, DKIM et DMARC

Pour améliorer la délivrabilité, configurez ces enregistrements DNS :

#### Si vous utilisez un domaine personnalisé (ex: contact@viviworks.ai)

1. **SPF** : Autorise Gmail à envoyer des emails pour votre domaine
   ```
   Type: TXT
   Nom: @
   Valeur: v=spf1 include:_spf.google.com ~all
   ```

2. **DKIM** : Signature numérique pour authentifier les emails
   - Suivez les instructions de Google Workspace
   - https://support.google.com/a/answer/174124

3. **DMARC** : Politique pour gérer les emails non authentifiés
   ```
   Type: TXT
   Nom: _dmarc
   Valeur: v=DMARC1; p=none; rua=mailto:viviworksvivi@gmail.com
   ```

### 4. Vérifier le contenu des emails

✅ **Bonnes pratiques déjà appliquées** :
- Ratio texte/images équilibré
- Pas de mots spam excessifs (FREE, URGENT, etc.)
- Liens HTTPS sécurisés
- Version texte incluse
- Pas de pièces jointes suspectes

### 5. Tester la délivrabilité

Utilisez ces outils pour tester :

1. **Mail Tester** : https://www.mail-tester.com/
   - Envoyez un email à l'adresse fournie
   - Vous obtiendrez un score sur 10
   - Suivez les recommandations

2. **Google Postmaster Tools** : https://postmaster.google.com/
   - Surveillez la réputation de votre domaine
   - Consultez les taux de spam

## 📊 Monitoring

### Indicateurs à surveiller :
- **Taux d'ouverture** : > 15% est bon
- **Taux de plainte spam** : < 0.1% est excellent
- **Taux de rebond** : < 2% est bon

### Si les emails continuent d'aller en spam :

1. **Vérifiez votre score** sur mail-tester.com
2. **Réduisez la fréquence** d'envoi temporairement
3. **Personnalisez davantage** les emails
4. **Évitez les liens raccourcis** (bit.ly, etc.)
5. **Utilisez un service d'emailing professionnel** comme :
   - SendGrid
   - Mailgun
   - Amazon SES
   - Postmark

## 🎯 Recommandations finales

### Court terme (immédiat)
1. Testez le formulaire de contact
2. Marquez l'email comme "pas spam" s'il y atterrit
3. Ajoutez l'adresse aux contacts

### Moyen terme (1-2 semaines)
1. Surveillez les retours des clients
2. Demandez-leur d'ajouter votre email à leurs contacts
3. "Réchauffez" l'adresse avec des envois progressifs

### Long terme (1-3 mois)
1. Configurez un domaine personnalisé avec SPF/DKIM/DMARC
2. Migrez vers un service d'emailing professionnel si nécessaire
3. Surveillez régulièrement les métriques de délivrabilité

## 🆘 Besoin d'aide ?

Si le problème persiste après avoir suivi ces étapes :
1. Vérifiez les logs d'erreur dans la console Netlify
2. Testez avec différents destinataires (Gmail, Outlook, etc.)
3. Contactez le support Gmail si vous pensez que votre adresse est blacklistée

---

**Note** : La délivrabilité s'améliore avec le temps et une bonne réputation. Soyez patient et suivez les bonnes pratiques !






