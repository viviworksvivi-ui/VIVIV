"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">
              Politique de confidentialité – ViviTool
            </h1>
            <p className="text-muted-foreground">Dernière mise à jour : février 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg dark:prose-invert max-w-none space-y-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <article className="space-y-10">
              {/* 1. Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ViviTool (« l&apos;application ») est une application de communication et de collaboration entre clients et équipes. Cette politique décrit la façon dont nous collectons, utilisons et protégeons vos informations.
                </p>
              </div>

              {/* 2. Données collectées */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Données collectées</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous pouvons collecter les données suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong className="text-foreground">Informations de compte :</strong> nom, adresse e-mail, mot de passe (chiffré)</li>
                  <li><strong className="text-foreground">Photos et médias :</strong> photos de profil, images partagées dans les messages ou en pièces jointes</li>
                  <li><strong className="text-foreground">Contenu des messages :</strong> textes, pièces jointes et autres contenus échangés dans l&apos;application</li>
                </ul>
              </div>

              {/* 3. Utilisation de la caméra */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Utilisation de la caméra</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L&apos;application utilise la caméra de votre appareil pour :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong className="text-foreground">Photos de profil :</strong> prendre ou choisir une photo de profil</li>
                  <li><strong className="text-foreground">Pièces jointes :</strong> prendre des photos à envoyer dans les conversations</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  L&apos;accès à la caméra n&apos;est demandé que lorsque vous utilisez ces fonctionnalités. Vous pouvez refuser l&apos;accès ou le retirer dans les paramètres de votre appareil.
                </p>
              </div>

              {/* 4. Utilisation des données */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Utilisation des données</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les données sont utilisées pour :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Gérer votre compte et assurer l&apos;authentification</li>
                  <li>Permettre la messagerie et le partage de fichiers</li>
                  <li>Améliorer le fonctionnement et la sécurité de l&apos;application</li>
                </ul>
              </div>

              {/* 5. Stockage et sécurité */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Stockage et sécurité</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Les données sont stockées sur des serveurs sécurisés</li>
                  <li>Les mots de passe sont chiffrés</li>
                  <li>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles adaptées pour protéger vos données</li>
                </ul>
              </div>

              {/* 6. Partage des données */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Partage des données</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous ne vendons pas vos données. Elles peuvent être partagées uniquement :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Avec les personnes avec lesquelles vous échangez des messages dans l&apos;application</li>
                  <li>Lorsque la loi l&apos;exige ou pour protéger nos droits légitimes</li>
                </ul>
              </div>

              {/* 7. Vos droits */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Vos droits</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conformément au règlement en vigueur, vous pouvez :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                  <li>Accéder à vos données personnelles</li>
                  <li>Demander la rectification de données inexactes ou incomplètes</li>
                  <li>Demander la suppression de vos données</li>
                  <li>Refuser certaines utilisations de vos données</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Pour exercer ces droits, contactez-nous à :{" "}
                  <a
                    href="mailto:contact@viviworks.fr"
                    className="text-primary hover:underline font-medium"
                  >
                    contact@viviworks.fr
                  </a>
                </p>
              </div>

              {/* 8. Conservation */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Conservation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Les données sont conservées tant que votre compte est actif. Vous pouvez demander leur suppression à tout moment.
                </p>
              </div>

              {/* 9. Modifications */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous pouvons mettre à jour cette politique. Les changements seront publiés sur cette page avec une nouvelle date de mise à jour.
                </p>
              </div>
            </article>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
