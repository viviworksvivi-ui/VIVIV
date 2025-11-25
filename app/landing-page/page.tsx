"use client"

import { useState, useEffect, useRef } from 'react'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import './landing-page.css'

export default function LandingPage() {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Créez votre site web professionnel en quelques clics"
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const formElementRef = useRef<HTMLFormElement>(null)
  const packsRef = useRef<HTMLElement>(null)
  const [selectedPack, setSelectedPack] = useState<string>('decouverte')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  // Animation de typing
  useEffect(() => {
    let charIndex = 0
    const typeInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypedText(fullText.substring(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 70)

    return () => clearInterval(typeInterval)
  }, [])

  // Clignotement du curseur
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  // Effet parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroBackground = document.querySelector('.slide1-hero-background')
      if (heroBackground) {
        (heroBackground as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animation au scroll pour Slide2
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    document.querySelectorAll('.slide2-step-card').forEach(card => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(30px)';
      (card as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  // Charger le script Calendly
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Nettoyer le script si le composant est démonté
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // Fonction pour scroller vers les packs
  const scrollToPacks = () => {
    if (packsRef.current) {
      packsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Fonction pour scroller vers le formulaire avec le pack sélectionné
  const scrollToForm = (pack: string) => {
    setSelectedPack(pack)
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Mettre à jour le select après le scroll
      setTimeout(() => {
        const packSelect = document.getElementById('pack') as HTMLSelectElement
        if (packSelect) {
          packSelect.value = pack
        }
      }, 500)
    }
  }

  // Détecter le pack depuis l'URL au chargement
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const packParam = urlParams.get('pack')
    if (packParam && ['decouverte', 'performance', 'growth'].includes(packParam)) {
      setSelectedPack(packParam)
      setTimeout(() => {
        const packSelect = document.getElementById('pack') as HTMLSelectElement
        if (packSelect) {
          packSelect.value = packParam
        }
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  // Fonctions pour le carrousel de témoignages
  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialsRef.current) {
      const scrollAmount = 400 // Largeur de scroll par clic
      const currentScroll = testimonialsRef.current.scrollLeft
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      testimonialsRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
    }
  }

  // Défilement automatique pour les logos
  useEffect(() => {
    const container = logosRef.current
    if (!container) return

    const scrollSpeed = 1 // pixels par tick

    const scrollStep = () => {
      if (!container) return
      const totalWidth = container.scrollWidth / 2 // largeur de la première série

      if (container.scrollLeft >= totalWidth) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += scrollSpeed
      }
    }

    const intervalId = window.setInterval(scrollStep, 16) // ~60fps

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="landing-page-container">
      <Navigation />
      

      {/* Slide 1 - Hero avec typing animation */}
      <section id="slide-0" className="slide1-hero">
        <div className="slide1-hero-background">
          <Image 
            src="/pexels-kindelmedia-6774944.webp" 
            alt="Équipe en réunion" 
            fill
            className="slide1-hero-image"
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="slide1-hero-overlay"></div>
          <div className="slide1-hero-gradient"></div>
        </div>
        
        <div className="slide1-hero-content">
          <div className="slide1-hero-grid">
            {/* Colonne gauche */}
            <div className="slide1-hero-left">
              <h1 className="slide1-hero-title">
                <span className="slide1-typing-text">{typedText}</span>
                <span 
                  className="slide1-typing-cursor" 
                  style={{ opacity: showCursor ? 1 : 0 }}
                ></span>
              </h1>
              
              <p className="slide1-hero-subtitle">
                Transformez votre vision digitale en réalité avec nos solutions web innovantes et performantes
              </p>
              
              {/* Formulaire CTA */}
              <form className="slide1-hero-form" onSubmit={(e) => {
                e.preventDefault()
                scrollToPacks()
              }}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Entrez votre email"
                  className="slide1-hero-input"
                  required
                />
                <button type="submit" className="slide1-hero-button">
                  Commencer
                </button>
              </form>
              
              {/* Features */}
              <div className="slide1-hero-features">
                <div className="slide1-feature-item">
                  <svg className="slide1-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Sans engagement</span>
                </div>
                <div className="slide1-feature-item">
                  <svg className="slide1-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>100% Gratuit</span>
                </div>
                <div className="slide1-feature-item">
                  <svg className="slide1-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Livraison en 48h</span>
                </div>
              </div>
            </div>
            
            {/* Colonne droite - Browser Mockup */}
            <div className="slide1-hero-right">
              <div className="slide1-browser-window">
                <div className="slide1-browser-header">
                  <div className="slide1-browser-dots">
                    <span className="slide1-dot slide1-dot-red"></span>
                    <span className="slide1-dot slide1-dot-yellow"></span>
                    <span className="slide1-dot slide1-dot-green"></span>
                  </div>
                  <div className="slide1-browser-url">yoursite.com</div>
                </div>
                <div className="slide1-browser-content">
                  <div className="slide1-content-line"></div>
                  <div className="slide1-content-line"></div>
                  <div className="slide1-content-line slide1-content-line-short"></div>
                  <div className="slide1-content-button">Call to Action</div>
                  <div className="slide1-content-line slide1-content-line-thin"></div>
                  <div className="slide1-content-line slide1-content-line-thin slide1-content-line-short"></div>
                </div>
                
                {/* Badges flottants */}
                <div className="slide1-floating-badge slide1-floating-badge-yellow">
                  <div className="slide1-badge-inner">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                </div>
                <div className="slide1-floating-badge slide1-floating-badge-green">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2 - Comment ça marche */}
      <section id="slide-1" className="slide2-how-it-works" style={{ minHeight: 'auto' }}>
        <div className="slide2-container">
          <h2 className="slide2-section-title">Comment ça marche ?</h2>
          <p className="slide2-section-subtitle">Un processus simple et transparent pour obtenir votre landing page parfaite</p>
          
          <div className="slide2-steps-grid">
            {/* Card 01 */}
            <div className="slide2-step-card">
              <div className="slide2-step-number">01</div>
              <div className="slide2-step-icon blue-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3>Maquette gratuite de votre landing page</h3>
              <p>Nous créons une maquette personnalisée de votre landing page en 48h, entièrement gratuite et sans engagement.</p>
            </div>

            {/* Card 02 */}
            <div className="slide2-step-card">
              <div className="slide2-step-number">02</div>
              <div className="slide2-step-icon orange-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3>Choisissez votre pack et développez votre stratégie marketing</h3>
              <p>Si la maquette vous plaît, choisissez votre pack et nous développons ensemble votre stratégie marketing complète.</p>
            </div>
          </div>

          <div className="slide2-cta-wrapper">
            <a href="/contact" className="slide2-cta-button">
              Commencer maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Slide 3 - Nos offres et tarifs */}
      <section id="slide-2" className="slide3-pricing" ref={packsRef}>
        <div className="slide3-container">
          <h2 className="slide3-section-title">Nos offres et tarifs</h2>
          <p className="slide3-section-subtitle">Choisissez la solution qui correspond à vos besoins et à votre budget</p>
          
          <div className="slide3-pricing-grid">
            {/* Pack Découverte */}
            <div className="slide3-pricing-card">
              <h3 className="slide3-pack-name">Pack Découverte</h3>
              <div className="slide3-pack-price">
                <span className="slide3-price-amount">0€</span>
              </div>
              <p className="slide3-pack-subtitle">Landing page gratuite sans engagement</p>
              
              <ul className="slide3-pack-features">
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Maquette personnalisée de votre landing page</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Design moderne et responsive</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Livraison en 48h</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Sans engagement</span>
                </li>
              </ul>
              
              <button 
                type="button"
                onClick={() => scrollToForm('decouverte')}
                className="slide3-pack-button"
              >
                Je choisis ce pack
              </button>
            </div>

            {/* Pack Performance - Featured */}
            <div className="slide3-pricing-card slide3-featured">
              <div className="slide3-popular-badge">Offre la plus populaire</div>
              <h3 className="slide3-pack-name">Pack Performance</h3>
              <div className="slide3-pack-price">
                <span className="slide3-price-amount">Sur devis</span>
              </div>
              <p className="slide3-pack-subtitle">Solution complète avec suivi mensuel</p>
              
              <ul className="slide3-pack-features">
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Tout du Pack Growth inclus</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>2 pages supplémentaires (produit/service)</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Suivi mensuel complet avec reporting</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Call stratégique mensuel</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Optimisation continue SEO & SEA</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Support dédié 7/7</span>
                </li>
              </ul>
              
              <button 
                type="button"
                onClick={() => scrollToForm('performance')}
                className="slide3-pack-button slide3-button-white"
              >
                Je choisis ce pack
              </button>
            </div>

            {/* Pack Growth */}
            <div className="slide3-pricing-card">
              <h3 className="slide3-pack-name">Pack Growth</h3>
              <div className="slide3-pack-price">
                <span className="slide3-price-amount-gradient">À partir de 499€</span>
              </div>
              <p className="slide3-pack-subtitle">Landing page + stratégie SEO/SEA complète</p>
              
              <ul className="slide3-pack-features">
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Landing page complète et optimisée</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Audit SEO premium complet</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Campagne SEA personnalisée</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Optimisation des conversions</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Support prioritaire</span>
                </li>
                <li>
                  <svg className="slide3-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Prix flexible selon budget</span>
                </li>
              </ul>
              
              <button 
                type="button"
                onClick={() => scrollToForm('growth')}
                className="slide3-pack-button"
              >
                Je choisis ce pack
              </button>
            </div>
          </div>

          <p className="slide3-footer-text">
            Tous nos packs incluent un design moderne, responsive et optimisé pour les conversions. Contactez-nous pour un devis personnalisé selon vos besoins spécifiques.
          </p>
        </div>
      </section>

      {/* Slide 4 - Pourquoi nous choisir */}
      <section id="slide-3" className="slide4-why-choose">
        <div className="slide4-container">
          <h2 className="slide4-section-title">Pourquoi nous choisir ?</h2>
          <p className="slide4-section-subtitle">Nos clients nous font confiance et obtiennent des résultats exceptionnels</p>
          
          <div className="slide4-stats-grid">
            <div className="slide4-stat-card">
              <div className="slide4-stat-number">200+</div>
              <div className="slide4-stat-label">Landing pages créées</div>
            </div>
            
            <div className="slide4-stat-card">
              <div className="slide4-stat-number">85%</div>
              <div className="slide4-stat-label">Augmentation conversion moyenne</div>
            </div>
            
            <div className="slide4-stat-card">
              <div className="slide4-stat-number">48h</div>
              <div className="slide4-stat-label">Délai de livraison</div>
            </div>
            
            <div className="slide4-stat-card">
              <div className="slide4-stat-number">100%</div>
              <div className="slide4-stat-label">Clients satisfaits</div>
            </div>
          </div>

          {/* Section Témoignages */}
          <div className="slide4-testimonials-section">
            <div className="slide4-testimonials-wrapper">
              <button 
                className="slide4-scroll-button slide4-scroll-left"
                onClick={() => scrollTestimonials('left')}
                aria-label="Défiler vers la gauche"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              
              <div className="slide4-testimonials-container" ref={testimonialsRef}>
                <div className="slide4-testimonials-grid">
              {/* Témoignage 1 - Ribbaclim */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Nous avons confié à Viviworks la refonte complète de notre site vitrine pour la secteur de la climatisation, et le résultat a dépassé nos attentes. L'équipe y'a livré un design moderne et professionnel en un temps record. Leur rigueur et leur sens du détail sont impressionnants."
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/Ribbaclim.webp" 
                      alt="Ribbaclim logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">Ribbaclim</div>
                </div>
              </div>

              {/* Témoignage 2 - Wake Up Academy */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Notre projet nécessitait une mise en ligne rapide et un design engageant. Viviworks a su livrer dans les délais tout en maintenant une qualité exceptionnelle. Leur sérieux et leur capacité d'adaptation sont à saluer. Une équipe digne de confiance."
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/wakeup.webp" 
                      alt="Wake Up Academy logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">Wake Up Academy</div>
                </div>
              </div>

              {/* Témoignage 3 - Ecoclimatic */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Un grand merci à Viviworks pour la création de notre site professionnel. Ils ont su valoriser nos services de climatisation avec une présentation sobre, rapide et parfaitement référencée. Leur rigueur dans le travail fait vraiment la différence."
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/ecoclim.webp" 
                      alt="Ecoclimatic logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">Ecoclimatic</div>
                </div>
              </div>

              {/* Témoignage 4 - Baybylou */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Nous avons fait appel à Viviworks pour notre boutique en ligne. Résultat : un site e-commerce rapide, bien structuré et esthétiquement très réussi. L'équipe a été disponible et à l'écoute du début à la fin. Excellent travail !"
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/Baybylou.webp" 
                      alt="Baybylou logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">Baybylou</div>
                </div>
              </div>

              {/* Témoignage 5 - Everlink */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Viviworks nous a accompagnés sur le développement de notre plateforme B2B. Leur réactivité et leur capacité à livrer dans les délais ont été déterminantes. Un vrai partenaire fiable et compétent."
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/everlink.webp" 
                      alt="Everlink logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">Everlink</div>
                </div>
              </div>

              {/* Témoignage 6 - Bébé Jungle */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Le site conçu par Viviworks est à la fois chaleureux et professionnel, idéal pour notre clientèle de jeunes parents. L'équipe a travaillé avec soin, efficacité et une rapidité remarquable. Nous recommandons sans hésiter."
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/bebejungle.webp" 
                      alt="Bébé Jungle logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">Bébé Jungle</div>
                </div>
              </div>

              {/* Témoignage 7 - Stratelink */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Grâce à Viviworks, nous disposons désormais d'un site professionnel et performant qui met en valeur notre expertise. Leur approche stratégique, leur précision technique et leur rapidité d'exécution sont des atouts rares dans ce secteur."
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/stratelin.webp" 
                      alt="Stratelink logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">Stratelink</div>
                </div>
              </div>

              {/* Témoignage 8 - Farem Voyage */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Nous avons confié à Viviworks la création de notre plateforme SaaS dédiée aux voyages. Leur équipe a été d'une efficacité remarquable : architecture claire, design fluide et fonctionnalités parfaitement intégrées. Ils ont su livrer un produit stable et professionnel en un temps record. Un vrai partenaire tech fiable."
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/faremvoy.webp" 
                      alt="Farem Voyage logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">Farem Voyage</div>
                </div>
              </div>

              {/* Témoignage 9 - CamJuridique */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Pour notre cabinet juridique, Viviworks a conçu un site à la fois sobre, élégant et rassurant, exactement ce qu'il nous fallait pour notre image de marque. Leur rapidité d'exécution et leur rigueur dans chaque étape du projet ont été exemplaires."
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/CamJuridique.webp" 
                      alt="CamJuridique logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">CamJuridique</div>
                </div>
              </div>

              {/* Témoignage 10 - Fundi */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Nous avions besoin d'un site rapide, intuitif et professionnel pour notre activité. Viviworks a su allier design et performance, tout en respectant les délais serrés. Une équipe sérieuse, organisée et à l'écoute. Nous les recommandons sans hésitation."
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/fundi.webp" 
                      alt="Fundi logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">Fundi</div>
                </div>
              </div>

              {/* Témoignage 11 - Cokzen */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Viviworks a pris en charge tout le développement de notre boutique Shopify. Leur professionnalisme, leur rapidité et leur capacité à anticiper nos besoins ont rendu le projet simple et agréable. La qualité du rendu final est irréprochable."
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/cokzen.webp" 
                      alt="Cokzen logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">Cokzen</div>
                </div>
              </div>

              {/* Témoignage 12 - OjaArchitect */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Le site web réalisé par Viviworks est exactement ce que nous voulions : épuré, moderne et réactif. L'équipe a compris notre identité visuelle dès le premier brief. Leur rigueur et leur sens du détail nous ont vraiment impressionnés. Un travail d'excellence."
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/oja.webp" 
                      alt="OjaArchitect logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">OjaArchitect</div>
                </div>
              </div>

              {/* Témoignage 13 - Furavix */}
              <div className="slide4-testimonial-card">
                <div className="slide4-testimonial-header">
                  <div className="slide4-testimonial-avatar">
                    <Image 
                      src="/p/messageico.webp" 
                      alt="Message icon" 
                      width={28} 
                      height={28}
                      className="slide4-message-icon"
                    />
                  </div>
                  <div className="slide4-testimonial-stars">
                    <Image 
                      src="/p/5etoiles.webp" 
                      alt="5 étoiles" 
                      width={120} 
                      height={20}
                      className="slide4-stars-image"
                    />
                  </div>
                </div>
                <p className="slide4-testimonial-text">
                  "Notre marque souhaitait un site Shopify qui reflète la qualité de nos produits. Viviworks a livré un design haut de gamme, optimisé pour le mobile et le SEO. L'équipe a été disponible, rigoureuse et incroyablement rapide. Merci pour ce travail remarquable."
                </p>
                <div className="slide4-testimonial-footer">
                  <div className="slide4-client-logo">
                    <Image 
                      src="/p/furavix.webp" 
                      alt="Furavix logo" 
                      width={45} 
                      height={45}
                      className="slide4-logo-image"
                    />
                  </div>
                  <div className="slide4-client-name">Furavix</div>
                </div>
              </div>
                </div>
              </div>
              
              <button 
                className="slide4-scroll-button slide4-scroll-right"
                onClick={() => scrollTestimonials('right')}
                aria-label="Défiler vers la droite"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Section Ils nous font confiance */}
          <div className="slide4-trust-section">
            <h3 className="slide4-trust-title">Ils nous font confiance</h3>
            <div className="slide4-trust-wrapper">
              <div className="slide4-trust-container" ref={logosRef}>
                <div className="slide4-trust-grid">
                  {/* Première série de logos */}
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 1.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 2.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 3 (1).webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 4.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 5.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 6.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 7.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 8.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 9.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  {/* Duplication pour effet infini */}
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 1.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 2.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 3 (1).webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 4.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 5.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 6.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 7.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 8.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                  <div className="slide4-trust-logo">
                    <Image 
                      src="/confiance/Group 9.webp" 
                      alt="Logo client" 
                      width={200} 
                      height={120}
                      className="slide4-logo-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Vidéo */}
          <div className="slide4-video-section">
            <div className="slide4-video-wrapper">
              <div className="slide4-video-container">
                <video
                  className="slide4-video"
                  controls
                  preload="metadata"
                  poster=""
                >
                  <source src="/copy-8760a85f-23a7-498b-a823-a408aa06de3d_SGGxSAID.mp4" type="video/mp4" />
                  <source src="/copy_8760A85F-23A7-498B-A823-A408AA06DE3D.mov" type="video/quicktime" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5 - Formulaire de contact */}
      <section id="slide-4" className="slide5-contact-form">
        <div className="slide5-container" ref={formRef}>
          <h2 className="slide5-main-title">
            <span className="slide5-title-gradient-1">Recevez</span>{" "}
            <span className="slide5-title-gradient-2">votre landing page</span>{" "}
            <span className="slide5-title-gradient-3">gratuite</span>
          </h2>
          <p className="slide5-subtitle">
            Complétez le formulaire ci-dessous et recevez votre maquette personnalisée en 48h maximum
          </p>

          <form 
            ref={formElementRef}
            className="slide5-form" 
            onSubmit={async (e) => {
              e.preventDefault()
              setIsSubmitting(true)
              setSubmitMessage(null)

              const form = e.currentTarget
              const formData = new FormData(form)
              const data = {
                pack: selectedPack,
                fullname: formData.get('fullname') as string,
                email: formData.get('email') as string,
                website: formData.get('website') as string || '',
                company: formData.get('company') as string || '',
                address: formData.get('address') as string || '',
                phone: formData.get('phone') as string || '',
                description: formData.get('description') as string
              }

              try {
                console.log('📤 Envoi du formulaire...', data)
                
                const response = await fetch('/api/landing-page-form', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                })

                console.log('📥 Réponse reçue:', response.status, response.statusText)
                console.log('📥 Content-Type:', response.headers.get('content-type'))

                // Vérifier que la réponse est bien du JSON
                const contentType = response.headers.get('content-type')
                if (!contentType || !contentType.includes('application/json')) {
                  const text = await response.text()
                  console.error('❌ Réponse non-JSON reçue:', text.substring(0, 500))
                  
                  // Si c'est une page 404 ou d'erreur Next.js
                  if (response.status === 404 || text.includes('<!DOCTYPE')) {
                    throw new Error('La route API n\'a pas été trouvée. Veuillez redémarrer le serveur de développement.')
                  }
                  
                  throw new Error('Le serveur a retourné une réponse invalide. Veuillez réessayer ou contacter le support.')
                }

                const result = await response.json()
                console.log('📦 Résultat:', result)

                if (response.ok && (result.success !== false)) {
                  setSubmitMessage({
                    type: 'success',
                    text: result.message || 'Formulaire envoyé avec succès ! Vous allez recevoir un email de confirmation dans quelques instants.'
                  })
                  // Réinitialiser le formulaire
                  if (formElementRef.current) {
                    formElementRef.current.reset()
                  }
                  setSelectedPack('decouverte')
                } else {
                  const errorText = result.error || result.details || 'Une erreur est survenue. Veuillez réessayer.'
                  console.error('❌ Erreur:', errorText)
                  setSubmitMessage({
                    type: 'error',
                    text: errorText
                  })
                }
              } catch (error) {
                console.error('❌ Erreur lors de l\'envoi:', error)
                const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.'
                setSubmitMessage({
                  type: 'error',
                  text: errorMessage
                })
              } finally {
                setIsSubmitting(false)
              }
            }}
          >
            <div className="slide5-form-row">
              <div className="slide5-form-group">
                <label htmlFor="pack" className="slide5-label">Choisissez votre pack</label>
                <select id="pack" name="pack" className="slide5-select" value={selectedPack} onChange={(e) => setSelectedPack(e.target.value)}>
                  <option value="decouverte">Pack Découverte - Gratuit</option>
                  <option value="performance">Pack Performance - Sur devis</option>
                  <option value="growth">Pack Growth - À partir de 499€</option>
                </select>
              </div>
            </div>

            <div className="slide5-form-row">
              <div className="slide5-form-group">
                <label htmlFor="fullname" className="slide5-label">Nom complet *</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="slide5-input"
                  placeholder="Votre nom complet"
                  required
                />
              </div>
              <div className="slide5-form-group">
                <label htmlFor="email" className="slide5-label">Email professionnel *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="slide5-input"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <div className="slide5-form-row">
              <div className="slide5-form-group">
                <label htmlFor="website" className="slide5-label">Site web actuel (optionnel)</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="slide5-input"
                  placeholder="https://votre-site.com"
                />
              </div>
              <div className="slide5-form-group">
                <label htmlFor="company" className="slide5-label">Nom de la société</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="slide5-input"
                  placeholder="Nom de votre société"
                />
              </div>
            </div>

            <div className="slide5-form-row">
              <div className="slide5-form-group">
                <label htmlFor="address" className="slide5-label">Adresse postale</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="slide5-input"
                  placeholder="votre adresse exacte"
                />
              </div>
              <div className="slide5-form-group">
                <label htmlFor="phone" className="slide5-label">Numéro de téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="slide5-input"
                  placeholder="+33 7 1512 025"
                />
              </div>
            </div>

            <div className="slide5-form-row">
              <div className="slide5-form-group slide5-form-group-full">
                <label htmlFor="description" className="slide5-label">Décrivez votre besoin principal *</label>
                <textarea
                  id="description"
                  name="description"
                  className="slide5-textarea"
                  placeholder="Décrivez votre projet, vos objectifs, votre secteur d'activité..."
                  rows={5}
                  required
                />
              </div>
            </div>

            {submitMessage && (
              <div className={`slide5-message slide5-message-${submitMessage.type}`}>
                {submitMessage.type === 'success' ? '✓' : '✗'} {submitMessage.text}
              </div>
            )}

            <button 
              type="submit" 
              className="slide5-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Recevoir ma landing page gratuite'}
            </button>

            <div className="slide5-features">
              <div className="slide5-feature">
                <svg className="slide5-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>100% gratuit</span>
              </div>
              <div className="slide5-feature">
                <svg className="slide5-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Sans engagement</span>
              </div>
              <div className="slide5-feature">
                <svg className="slide5-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Livraison 48h</span>
              </div>
            </div>
          </form>

          <div className="slide5-calendly-section">
            <h3 className="slide5-calendly-title">Réservez directement un rendez-vous</h3>
            <div className="calendly-inline-widget" data-url="https://calendly.com/viviworksia/30min" style={{minWidth: '320px', height: '600px'}}></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

