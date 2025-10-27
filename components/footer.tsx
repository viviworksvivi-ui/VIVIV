"use client"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="relative bg-gradient-to-br from-card via-background to-card border-t border-border/50 overflow-hidden">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-6 md:col-span-1">
            <Image
              src="/images/vivi-logo.png"
              alt="Viviworks Logo"
              width={160}
              height={55}
              className="h-16 w-auto hover:scale-105 transition-transform duration-300"
            />
            <p className="text-muted-foreground leading-relaxed text-sm">{t('footer.tagline')}</p>
            <div className="flex space-x-3">
              <Link 
                href="https://facebook.com" 
                className="p-2.5 rounded-lg glass hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="p-2.5 rounded-lg glass hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                className="p-2.5 rounded-lg glass hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://instagram.com" 
                className="p-2.5 rounded-lg glass hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/creation-site-web"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm"
                >
                  Création de sites web
                </Link>
              </li>
              <li>
                <div className="space-x-2 text-sm">
                  <Link href="/services/developpement-frontend" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block">
                    Développement Front-end
                  </Link>
                  <span className="text-muted-foreground">/</span>
                  <Link href="/services/developpement-backend" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block">
                    Back-end
                  </Link>
                </div>
              </li>
              <li>
                <Link href="/services/devops" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  DevOps
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  SEO & Audit
                </Link>
              </li>
              <li>
                <Link href="/services/sea" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  SEA / Google Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm"
                >
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block text-sm">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg glass group-hover:bg-primary/10 transition-all">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a href="mailto:contact@viviworks.fr" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  contact@viviworks.fr
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg glass group-hover:bg-primary/10 transition-all">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a href="tel:+33665758583" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +33 6 65 75 85 83
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="p-2 rounded-lg glass group-hover:bg-primary/10 transition-all">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                </div>
                <span className="text-muted-foreground text-sm leading-relaxed">
                  24-26 Arcadia Avenue, Fin0000
                  <br />
                  Londres, Royaume-Uni, N3 2JU
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Viviworks. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-primary transition-colors">
                Confidentialité
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
