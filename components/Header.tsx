'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { navLinks, contactLink } from '@/lib/site'
import styles from './Header.module.css'

// Pages with a dark hero get white text and the white logo from the top.
// Everything else starts with black text and switches to white on scroll.
// The header background is transparent on every page until the user scrolls.
const darkRoutes = ['/how-we-partner', '/team', '/contact', '/transition']

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isDark = darkRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`))
  const isInverted = isDark || isScrolled || isMenuOpen

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setIsMenuOpen(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  const headerClass = [
    styles.header,
    isScrolled ? styles.scrolled : '',
    isDark ? styles.dark : '',
    isMenuOpen ? styles.menuOpen : '',
  ].join(' ')

  return (
    <>
      <header className={headerClass}>
        <div className="container">
          <div className={styles.inner}>
            <Link href="/" className={styles.logo} aria-label="Methodic Painting home">
              <Logo tone={isInverted ? 'light' : 'dark'} priority />
            </Link>

            <nav className={styles.nav} aria-label="Primary">
              <ul className={styles.links}>
                {[...navLinks, contactLink].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={`${styles.link} ${isActive(link.href) ? styles.active : ''}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              <span className={styles.menuIcon} />
            </button>
          </div>
        </div>
      </header>

      <nav id="mobile-nav" className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`} aria-label="Mobile">
        <ul className={styles.mobileLinks}>
          {[...navLinks, contactLink].map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={`${styles.mobileLink} ${isActive(link.href) ? styles.active : ''}`} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
