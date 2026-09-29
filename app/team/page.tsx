import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import TeamGrid from '@/components/TeamGrid'
import Closer from '@/components/Closer'
import { advisors, partners } from '@/data/team'
import { showAdvisorPreview, prospectiveAdvisors } from '@/data/advisor-preview'
import styles from './page.module.css'

const title = 'Team & Advisory Network'
const description =
  'Meet Methodic Painting’s advisory network and partners, with experience in painting, home services, operations, legal, accounting, and business transitions.'

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
        title="OUR TEAM & ADVISORY NETWORK"
        subtitle="You know your business. We bring a network of painting operators and advisors to help you grow a stronger, more valuable company."
        buttonLabel="Talk about your business"
        tone="dark"
        size="short"
        backgroundImage="/images/founders.jpg"
      />

      <Section tone="light" id="advisory-network">
        <div className={styles.rosterHeader} data-reveal>
          <div>
            <h2 className={styles.heading}>Meet our advisors.</h2>
          </div>
        </div>
        <TeamGrid members={advisors} />
      </Section>

      {showAdvisorPreview && (
        <Section tone="dark" id="prospective-advisors">
          <div className={styles.previewHeader} data-reveal>
            <p className={styles.eyebrow}>LOOKING AHEAD</p>
            <h2 className={styles.heading}>More painting experience at the table.</h2>
            <p className={styles.lead}>A look at how the painting-industry side of the network could grow.</p>
          </div>
          <div className={styles.previewGrid}>
            {prospectiveAdvisors.map((advisor, index) => (
              <article className={styles.previewCard} key={advisor.name} data-reveal>
                <div className={styles.previewTop}>
                  <span className={styles.previewBadge}>Prospective · Preview</span>
                  <span className={styles.previewNumber} aria-hidden="true">0{index + 1}</span>
                </div>
                <div className={styles.previewInfo}>
                  <p className={styles.previewContext}>{advisor.context}</p>
                  <h3>{advisor.name}</h3>
                  <p>{advisor.detail}</p>
                  <span className={styles.unconfirmed}>Not a confirmed advisor</span>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section tone="light" id="partners">
        <div className={styles.partnersHeader} data-reveal>
          <h2 className={styles.heading}>Partners</h2>
          <p className={styles.lead}>
            Gavin, Logan, and Dean lead Methodic Painting. Start with a conversation about the company you’ve built and where you want to take it.
          </p>
        </div>
        <TeamGrid members={partners} />
      </Section>

      <Closer
        line1="YOUR BUSINESS. YOUR NEXT CHAPTER."
        line2="Let’s talk about what comes next."
        buttonLabel="Talk with the partners"
        style="serif"
      />
    </main>
  )
}
