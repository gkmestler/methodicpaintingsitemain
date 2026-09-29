import Link from 'next/link'
import Logo from './Logo'
import LinkedInIcon from './icons/LinkedInIcon'
import { site, navLinks, contactLink } from '@/lib/site'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Methodic Painting home">
              <Logo tone="light" />
            </Link>
            <ul className={styles.contactList}>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Methodic Ventures on LinkedIn">
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <Link href={contactLink.href}>{contactLink.label}</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <span className={styles.divider} aria-hidden="true">|</span>
            <span>&copy; {year} {site.name}. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
