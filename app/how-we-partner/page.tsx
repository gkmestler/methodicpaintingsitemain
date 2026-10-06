import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import TextBlock from '@/components/TextBlock'
import Quote from '@/components/Quote'
import CardGrid from '@/components/CardGrid'
import Statement from '@/components/home/Statement'

const title = 'How We Partner'
const description =
  'We partner with the best painting companies in their market. Flexible deal structures, hands-on support, and full autonomy for owners who stay.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/how-we-partner' },
  openGraph: { title, description, url: '/how-we-partner' },
}

const cards = [
  {
    title: 'FLEXIBLE DEAL STRUCTURES',
    body: 'We shape the partnership around your goals, from the ownership you retain to the role you want as the business grows.',
  },
  {
    title: 'HANDS-ON SUPPORT',
    body: 'Our advisors provide operational guidance, while partner owners share what works and help each other grow.',
  },
  {
    title: 'BUILDING VALUE AS PARTNERS',
    body: 'As the group grows, we build shared resources and combine purchasing power to help every company go further.',
  },
]

export default function HowWePartnerPage() {
  return (
    <main>
      <PageHero
        title="HOW WE PARTNER"
        subtitle="We partner with the best painting companies in their market."
        buttonLabel="Contact"
        tone="dark"
        size="tall"
        backgroundImage="/images/partner-painters.jpg"
        backgroundPosition="center 40%"
      />

      <Statement
        heading="Your company. Your decisions. More support."
        tone="light"
        image={{ src: '/images/partner-crew.jpg', alt: 'Two crew members in safety vests sharing a laugh on site' }}
      >
        <p>
          You maintain complete operational autonomy. You lead your team and make the day-to-day decisions, with experienced advisors and shared resources to support your growth. You also have other owners to turn to, people who understand the work and can share what&apos;s worked for them.
        </p>
      </Statement>

      <Quote tone="dark">
        When you partner with Methodic, you decide what&apos;s right for you and the business, and we structure the deal around it.
      </Quote>

      <TextBlock heading="OUR STRATEGY" tone="light">
        <p>
          We partner with painting companies with strong crews and strong reputations. We keep the people and the name, and bring the experience and resources to help the business grow.
        </p>
      </TextBlock>

      <TextBlock
        heading="PARTNERING NATIONWIDE. PEOPLE FIRST."
        tone="dark"
        buttonLabel="Contact"
      >
        <p>
          We&apos;re looking to partner with painting companies across the United States. We go where the best crews and the best reputations are.
        </p>
      </TextBlock>

      <CardGrid cards={cards} tone="light" />

    </main>
  )
}
