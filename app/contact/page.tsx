import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import LinkedInIcon from '@/components/icons/LinkedInIcon'
import { site } from '@/lib/site'
import styles from './page.module.css'

const title = 'Contact'
const description =
  'Thinking about selling or growing your painting company? Start with a conversation. No broker, no pressure, no obligation.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: { title, description, url: '/contact' },
}

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <PageHero
        title="CONTACT"
        subtitle="Thinking about selling or growing? Start with a conversation. No broker, no pressure, no obligation."
        tone="transparent"
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.formWrap} data-reveal>
              <div className={styles.glow} aria-hidden="true" />
              <div className={styles.formCard}>
                <ContactForm />
              </div>
            </div>

            <aside className={styles.sidebar} data-reveal style={{ transitionDelay: '0.15s' }}>
              <dl className={styles.details}>
                <div className={styles.detail}>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </dd>
                </div>
                <div className={styles.detail}>
                  <dt>Phone</dt>
                  <dd>
                    <a href={`tel:${site.phone}`}>{site.phone}</a>
                  </dd>
                </div>
                <div className={styles.detail}>
                  <dt>Location</dt>
                  <dd>{site.location}</dd>
                </div>
              </dl>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={styles.social}>
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
