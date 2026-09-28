import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import TextBlock from '@/components/TextBlock'
import CardGrid from '@/components/CardGrid'
import Closer from '@/components/Closer'
import Statement from '@/components/home/Statement'
import VisionMission from '@/components/home/VisionMission'
import Strategy from '@/components/home/Strategy'
import Criteria from '@/components/home/Criteria'

export const metadata: Metadata = {
  title: 'Methodic Painting | We Back Painting Companies in Massachusetts',
  description:
    'Methodic Painting is building a network of the best painting companies in Massachusetts. Owner-operators who back painting companies to grow, transition, and win.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Methodic Painting | We Back Painting Companies in Massachusetts',
    description:
      'Methodic Painting is building a network of the best painting companies in Massachusetts. Owner-operators who back painting companies to grow, transition, and win.',
    url: '/',
  },
}

const pillars = [
  {
    title: 'REAL VALUE',
    body: 'We grow companies by investing in people, systems, and sales.',
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

// Crew and job-site photos beside the reputation statement
const networkPhotos = [
  { src: '/images/network/painting-1.jpg', alt: 'Painter spraying the exterior trim of a house' },
  { src: '/images/network/painting-2.jpg', alt: 'Painting crew at work on a job site' },
  { src: '/images/network/painting-3.jpg', alt: 'Painter working on a residential exterior' },
  { src: '/images/network/painting-4.jpg', alt: 'Painting crew on a commercial job' },
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

      <TextBlock heading="WHO WE ARE" tone="dark" buttonLabel="Meet the Team" buttonHref="/team">
        <p>
          Methodic Painting is building a network of the best painting companies in Massachusetts. We&apos;re not a private equity firm and we&apos;re not a big competitor coming to town. We&apos;re a group of owner-operators and trade-business builders who think painting companies deserve a better exit than a broker listing or a handshake sale.
        </p>
      </TextBlock>

      <TextBlock heading="WHY METHODIC" tone="light" buttonLabel="Contact">
        <p>
          Realize the value you’ve built and remain an owner as we grow. Continue leading with an agreed salary and meaningful retained ownership in your painting company.
        </p>
      </TextBlock>

      <Statement heading="A network of painting companies built on reputation." tone="dark" images={networkPhotos}>
        <p>
          You can&apos;t buy a good name in a town. You earn it, one job at a time. We work alongside you to build on that reputation and take your company further.
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
        intro="We grow companies by investing in people and systems. Every deal is structured so the owner, the crew, and Methodic all win together."
        cards={pillars}
        tone="light"
      />

      <Strategy />

      <Criteria />

      <Closer line1="STRONG ALONE." line2="STRONGER TOGETHER." buttonLabel="Contact" style="caps" />
    </main>
  )
}
