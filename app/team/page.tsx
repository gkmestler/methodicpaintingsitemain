import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import TeamGrid from '@/components/TeamGrid'
import styles from './page.module.css'

const title = 'Team'
const description =
  'Methodic Painting is run by operators and backed by people who have built, run, and sold trade businesses.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/team' },
  openGraph: { title, description, url: '/team' },
}

export default function TeamPage() {
  return (
    <main>
      <PageHero
        title="TEAM"
        subtitle="Methodic Painting is run by operators and backed by people who have built, run, and sold trade businesses. We're here to serve the companies we partner with."
        buttonLabel="Contact"
        tone="dark"
        size="tall"
        backgroundImage="/images/founders.jpg"
      />

      <Section tone="light">
        <h2 className={styles.heading} data-reveal>
          Meet the Team
        </h2>
        <p className={styles.intro} data-reveal>
          Our advisors bring operating and acquisition experience to help partner owners grow their companies and build a more valuable group.
        </p>
        <TeamGrid />
      </Section>
    </main>
  )
}
