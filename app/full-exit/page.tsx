import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import TextBlock from '@/components/TextBlock'

const title = 'Retirement & Full Exits'
const description =
  'Considering retirement or a full exit from your Massachusetts painting company? Talk with Methodic about individually agreed sale and transition terms.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/full-exit' },
  openGraph: { title, description, url: '/full-exit' },
}

export default function FullExitPage() {
  return (
    <main>
      <PageHero
        title="READY FOR A FULL EXIT?"
        subtitle="If you’re considering retirement or moving on from your painting company, we can talk about a full sale. Our focus is Massachusetts."
        tone="dark"
        buttonLabel="Talk about your business"
      />
      <TextBlock heading="A transition built around your situation." headingStyle="serif" tone="light" buttonLabel="Discuss a full exit">
        <p>
          A full exit is available without requiring you to retain equity or continue
          in a salaried leadership role. We agree the sale terms, transition
          responsibilities, and any continuing involvement individually.
        </p>
        <p>
          Start with the company you’ve built, your goals, and what a workable
          handover would involve for you and your team.
        </p>
        <p>
          Prefer to keep leading? <Link href="/how-we-partner">Explore our stay-and-grow partnership.</Link>
        </p>
      </TextBlock>
    </main>
  )
}
