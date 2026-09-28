import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import TextBlock from '@/components/TextBlock'

const title = 'Planning Your Transition'
const description =
  'Explore a transition from your painting company, with a plan for your team and the business you have built.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/transition' },
  openGraph: { title, description, url: '/transition' },
}

export default function TransitionPage() {
  return (
    <main>
      <PageHero
        title="PLANNING YOUR NEXT CHAPTER"
        subtitle="If you're ready to step back, let's talk about the future of the business you've built."
        tone="dark"
      />

      <TextBlock heading="A TRANSITION THAT WORKS FOR YOU" tone="light" buttonLabel="Start a conversation">
        <p>
          We can explore a full sale with a plan for the people and reputation you leave in our care. Together, we would agree on timing, a leadership handover, and your role during the transition.
        </p>
        <p>
          The conversation starts with what matters to you and what your company needs to keep doing good work.
        </p>
      </TextBlock>
    </main>
  )
}
