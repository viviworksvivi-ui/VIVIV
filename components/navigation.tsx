"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [marketingOpen, setMarketingOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: t('nav.home') },
    { href: "/a-propos", label: t('nav.about') },
    {
      href: "/services",
      label: t('nav.services'),
      hasDropdown: true,
      dropdownItems: [
        { href: "/services/creation-site-web", label: t('nav.dropdown.creation') },
        { href: "/services/developpement-frontend", label: t('nav.dropdown.fe') },
        { href: "/services/developpement-backend", label: t('nav.dropdown.be') },
        { href: "/services/maquettes-ux-ui", label: t('nav.dropdown.ux') },
        { href: "/services/logiciels-sur-mesure", label: t('nav.dropdown.custom') },
        { href: "/services/devops", label: t('nav.dropdown.devops') },
        { href: "/services/seo", label: t('nav.dropdown.seo') },
        { href: "/services/sea", label: t('nav.dropdown.sea') },
        { href: "/services/crm", label: t('nav.dropdown.crm') },
        { href: "/services/sass", label: t('nav.dropdown.saas') },
      ],
    },
    { href: "/developpement-web", label: t('nav.devweb') },
    {
      href: "/marketing-digital",
      label: t('nav.marketing'),
      hasDropdown: true,
      dropdownItems: [
        { href: "/marketing-digital", label: t('nav.marketingMenu.marketing') },
        { href: "/campagnes-publicitaires", label: t('nav.marketingMenu.ads') },
        { href: "/google-ads", label: t('nav.marketingMenu.google') },
        { href: "/meta-ads", label: t('nav.marketingMenu.meta') },
      ],
    },
    { href: "/realisations", label: t('nav.realisations') },
    { href: "/blog", label: t('nav.blog') },
    { href: "/contact", label: t('nav.contact') },
  ]

  const servicesRef = useRef<HTMLDivElement | null>(null)
  const marketingRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
      if (marketingRef.current && !marketingRef.current.contains(event.target as Node)) {
        setMarketingOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg nav-blur" 
        : "bg-background/80 backdrop-blur-sm border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-start items-center transition-all duration-300 ${
          scrolled ? "h-20 lg:h-24" : "h-24 lg:h-28"
        }`}>
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/images/vivi-logo.png"
                alt="Viviworks Logo"
                className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                  scrolled ? "h-20 lg:h-24" : "h-24 lg:h-28"
                }`}
                onError={(e) => {
                  console.error('Logo failed to load');
                  e.currentTarget.src = '/placeholder-logo.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10 animate-pulse-subtle"></div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8 lg:ml-[20%] flex-nowrap">
            {navItems.map((item, index) => (
              <div key={item.href} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative" ref={item.label === "Services" ? servicesRef : marketingRef}>
                    <button
                      className="flex items-center text-foreground/80 hover:text-primary transition-all duration-300 font-medium py-2 text-sm tracking-wide whitespace-nowrap group/btn"
                      onClick={() => {
                        if (item.label === "Services") {
                          setServicesOpen((prev) => !prev)
                          setMarketingOpen(false)
                        } else {
                          setMarketingOpen((prev) => !prev)
                          setServicesOpen(false)
                        }
                      }}
                      aria-haspopup="menu"
                      aria-expanded={item.label === "Services" ? servicesOpen : marketingOpen}
                    >
                      {item.label}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        (item.label === "Services" ? servicesOpen : marketingOpen) ? "rotate-180" : ""
                      }`} />
                    </button>
                    {(item.label === "Services" ? servicesOpen : marketingOpen) && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl py-3 animate-fade-in-down overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
                        <div className="relative z-10">
                          {item.dropdownItems?.map((dropdownItem, idx) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-5 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 hover:translate-x-1 animate-slide-in-left border-l-2 border-transparent hover:border-primary"
                              style={{ animationDelay: `${idx * 0.05}s` }}
                              onClick={() => {
                                setServicesOpen(false)
                                setMarketingOpen(false)
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="relative text-foreground/80 hover:text-primary transition-colors duration-200 font-medium group/link py-2 text-sm tracking-wide whitespace-nowrap"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover/link:w-full transition-all duration-300 rounded-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-primary/10 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-primary transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 text-primary transition-transform duration-200" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-4 pb-4 space-y-2 sm:px-3 bg-background/98 backdrop-blur-lg border-t border-border/50 rounded-b-lg shadow-lg">
              {navItems.map((item, index) => (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <div className="px-4 py-3 text-foreground/80 font-medium text-sm">
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-foreground/60 hover:text-primary hover:bg-primary/5 transition-colors duration-200 rounded-lg text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors duration-200 rounded-lg text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
