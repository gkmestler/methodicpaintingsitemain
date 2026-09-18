import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import TextBlock from '@/components/TextBlock'
import SplitImage from '@/components/SplitImage'
import CardGrid from '@/components/CardGrid'
import Closer from '@/components/Closer'
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
    body: "Full sale, partial sale, seller note, stay-and-grow. We've done the work on structure so you don't have to.",
  },
  {
    title: 'HANDS-ON SUPPORT',
    body: 'Real help with hiring, payroll, HR, estimating, and marketing. You choose how much.',
  },
  {
    title: 'BUILDING VALUE AS PARTNERS',
    body: 'Our advisors have built and sold trade businesses. That network works for you the day we close.',
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
        backgroundImage="/images/partner-handshake.jpg"
      />

      <Statement heading="Strength in numbers with the power of autonomy" tone="light">
        <p>
          Owners get both. You keep running your business the way you always have, and you get the economics and resources of being part of a bigger group.
        </p>
      </Statement>

      <SplitImage
        statement="When you partner with Methodic, you decide what's right for you and the business, and we structure the deal around it."
        imageSrc="/images/placeholders/partner-large.png"
        imageAlt="[Partner photo]"
        tone="dark"
      />

      <TextBlock heading="OUR STRATEGY" tone="light">
        <p>
          We invest in painting companies with strong crews and strong reputations. We keep the people, we keep the name, and we add the systems and capital to grow.
        </p>
      </TextBlock>

      <TextBlock heading="WE ARE NEW ENGLAND FOCUSED AND PEOPLE FIRST" tone="dark" buttonLabel="Contact">
        <p>
          We&apos;re based in Massachusetts and we&apos;re buying here. We go where the best crews and the best reputations are.
        </p>
      </TextBlock>

      <CardGrid cards={cards} tone="light" />

      <Statement heading="Support customized for you and your business" tone="black">
        <p>
          Get the partnership without the corporate layer. Benefits of ownership, none of the 11pm bookkeeping.
        </p>
      </Statement>

      <Closer line1="If you want to go fast, go alone." line2="If you want to go far, go together." buttonLabel="Contact" style="serif" />
    </main>
  )
}
