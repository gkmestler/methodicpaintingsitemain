import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import TextBlock from '@/components/TextBlock'
import CardGrid from '@/components/CardGrid'
import Closer from '@/components/Closer'
import PhotoStrip from '@/components/home/PhotoStrip'
import Statement from '@/components/home/Statement'
import VisionMission from '@/components/home/VisionMission'
import Strategy from '@/components/home/Strategy'
import Criteria from '@/components/home/Criteria'

export const metadata: Metadata = {
  title: 'Methodic Painting | We Back Painting Companies in New England',
  description:
    'Methodic Painting is building a network of the best painting companies in New England. Owner-operators who back painting companies to grow, transition, and win.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Methodic Painting | We Back Painting Companies in New England',
    description:
      'Methodic Painting is building a network of the best painting companies in New England. Owner-operators who back painting companies to grow, transition, and win.',
    url: '/',
  },
}

const pillars = [
  {
    title: 'REAL VALUE',
    body: 'We grow companies by investing in people, systems, and sales, not by cutting costs. No forced timelines.',
  },
  {
    title: 'YOUR TEAM STAYS',
    body: 'We provide the back office, the culture support, and the numbers so your crews can focus on quality work.',
  },
  {
    title: 'ALIGNED UPSIDE',
    body: "Your success is the whole model. When the business grows, you're still an owner and you get paid like one.",
  },
]

export default function Home() {
  return (
    <main>
      <PageHero
        title="WE BACK PAINTING COMPANIES"
        subtitle="TO GROW, TRANSITION, AND WIN"
        buttonLabel="Contact"
        tone="light"
        size="full"
        backgroundImage="/images/hero-painter.jpg"
      />

      <TextBlock heading="WHO WE ARE" tone="dark">
        <p>
          Methodic Painting is building a network of the best painting companies in New England. We&apos;re not a private equity firm and we&apos;re not a big competitor coming to town. We&apos;re a group of owner-operators and trade-business builders who think painting companies deserve a better exit than a broker listing or a handshake sale.
        </p>
      </TextBlock>

      <TextBlock heading="WHY METHODIC" tone="light" buttonLabel="Contact">
        <p>
          Owners can take money off the table now and keep a piece of the business so they still win as it grows. We keep your crews, your foreman, and your name on the trucks. What changes is that you get the back office, the estimating support, and the growth capital you&apos;ve never had time to build yourself.
        </p>
      </TextBlock>

      <PhotoStrip />

      <Statement heading="A network of painting companies built on reputation." tone="dark">
        <p>
          You can&apos;t buy a good name in a town. You earn it, one house and one commercial job at a time. Our job is to protect what you built and give your team the resources to build on it.
        </p>
      </Statement>

      <VisionMission />

      <TextBlock heading="HOW WE GOT HERE" tone="dark" buttonLabel="Contact">
        <p>
          The painting industry is fragmenting and consolidating at the same time. Good companies are stuck at a ceiling, owners are aging out, and the buyers showing up are either lowballing or planning to gut the business. We started Methodic Painting to be the other option. Whether you want to grow, hand off to the next generation, or step away entirely, we build the deal around that.
        </p>
      </TextBlock>

      <CardGrid
        heading="GROWTH BUILT ON PARTNERSHIP"
        intro="We grow companies by investing in people and systems, not by cutting costs. Every deal is structured so the owner, the crew, and Methodic all win together."
        cards={pillars}
        tone="light"
      />

      <Strategy />

      <Criteria />

      <Closer line1="STRONG ALONE." line2="STRONGER TOGETHER." buttonLabel="Contact" style="caps" />
    </main>
  )
}
