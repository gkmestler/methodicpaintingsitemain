import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import TextBlock from '@/components/TextBlock'
import Image from 'next/image'
import Quote from '@/components/Quote'
import CardGrid from '@/components/CardGrid'
import Closer from '@/components/Closer'
import Statement from '@/components/home/Statement'

import styles from './page.module.css'

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
    body: "We propose buying 65–85% of your company for cash at closing. You continue leading with an agreed salary and retain 15–35% equity in your painting company. Roles and participation in a future group sale are agreed in the deal terms.",
  },
  {
    title: 'HANDS-ON SUPPORT',
    body: 'We work with you on sales, marketing, estimating, hiring, and operations, with support tied to agreed priorities.',
  },
  {
    title: 'BUILDING VALUE AS PARTNERS',
    body: 'As more companies join, we develop shared back-office resources, owner knowledge, and purchasing power to pursue better terms on paint, supplies, and software.',
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
        heading="Strength in numbers with the power of autonomy"
        tone="light"
        image={{ src: '/images/partner-crew.jpg', alt: 'Two crew members in safety vests sharing a laugh on site' }}
      >
        <p>
          Owners get both. You keep running your business the way you always have, and you get the economics and resources of being part of a bigger group.
        </p>
        <p className={styles.exitLink}>
          <Link href="/full-exit">Considering retirement or a full exit?</Link>
        </p>
      </Statement>

      <Quote tone="dark">
        When you partner with Methodic, you decide what&apos;s right for you and the business, and we structure the deal around it.
      </Quote>

      <TextBlock heading="OUR STRATEGY" tone="light">
        <p>
          Our goal is for your retained ownership to deliver more at a future sale than your first payment, through organic earnings growth and a potentially higher earnings multiple as group scale, management, and systems strengthen. This is not guaranteed; proceeds depend on performance, valuation, debt, costs, and ownership terms.
        </p>
      </TextBlock>

      <TextBlock
        heading="WE ARE MASSACHUSETTS FOCUSED AND PEOPLE FIRST"
        tone="dark"
        buttonLabel="Contact"
        aside={
          <Image src="/images/massachusetts.svg" alt="Outline of Massachusetts" width={3000} height={1728} unoptimized className={styles.stateIcon} />
        }
      >
        <p>
          We&apos;re based in Massachusetts and we&apos;re buying here. We go where the best crews and the best reputations are.
        </p>
      </TextBlock>

      <CardGrid cards={cards} tone="light" />

      <Closer line2="If you want to go far, go together." buttonLabel="Contact" style="serif" />
    </main>
  )
}
