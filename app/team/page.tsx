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

const support = [
  {
    title: 'Build a stronger operation.',
    expertise: 'Painting · Home services · Operations',
    body: 'Growing a painting company brings questions about crews, estimating, scheduling, and the next hire. Our network brings experience running painting and home-service businesses to those conversations.',
  },
  {
    title: 'Make informed decisions.',
    expertise: 'Legal · Accounting · Capital',
    body: 'Understand the numbers, ownership structure, and financing questions behind your next step. Methodic draws on legal, accounting, and capital markets experience as we work through a potential partnership.',
  },
  {
    title: 'Plan what comes next.',
    expertise: 'Strategy · Acquisitions · M&A',
    body: 'Whether you want to keep growing or begin a transition, there are decisions to make about your role, your team, and the business. Our advisors bring perspective on growth, acquisitions, and ownership changes.',
  },
]

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="OUR TEAM & ADVISORY NETWORK"
        title="MORE EXPERIENCE. IN YOUR CORNER."
        subtitle="You know your business. Through Methodic, you can draw on a wider network of painting operators, business builders, and advisors to help you grow a stronger, more valuable company."
        buttonLabel="Talk about your business"
        tone="dark"
        size="short"
        backgroundImage="/images/founders.jpg"
      />

      <Section tone="light" id="advisory-network">
        <div className={styles.intro} data-reveal>
          <div>
            <p className={styles.eyebrow}>THE ADVISORY NETWORK</p>
            <h2 className={styles.heading}>You don’t have to work<br className={styles.desktopBreak} /> through every decision alone.</h2>
          </div>
          <p className={styles.lead}>
            Running jobs and building a company are different demands on your time.
            We bring together experience across the trade and the business behind it,
            so owners have people to turn to when the next decision falls outside their day-to-day work.
          </p>
        </div>

        <div className={styles.supportGrid}>
          {support.map((item, index) => (
            <article className={styles.supportCard} key={item.title} data-reveal>
              <span className={styles.number} aria-hidden="true">0{index + 1}</span>
              <p className={styles.expertise}>{item.expertise}</p>
              <h3>{item.title}</h3>
              <p className={styles.supportBody}>{item.body}</p>
            </article>
          ))}
        </div>

        <div className={styles.rosterHeader} data-reveal>
          <div>
            <p className={styles.eyebrow}>PEOPLE BEHIND THE PERSPECTIVE</p>
            <h2 className={styles.heading}>Meet our advisors.</h2>
          </div>
          <p>Select a card to read about their experience.</p>
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
          <p className={styles.eyebrow}>THE PEOPLE YOU PARTNER WITH</p>
          <h2 className={styles.heading}>Partners</h2>
          <p className={styles.lead}>
            Gavin, Logan, and Dean lead Methodic Painting. Start with a conversation
            about the company you’ve built, what you want to protect, and where you want to take it.
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
