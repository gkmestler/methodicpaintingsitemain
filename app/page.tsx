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
    title: 'YOU STAY IN CONTROL',
    body: 'You maintain complete operational autonomy, with experienced partners and shared resources behind you.',
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

      <TextBlock heading="Who We Are" tone="dark" buttonLabel="Meet the Team" buttonHref="/team">
        <p>
          Methodic is a first-of-its-kind coalition of like-minded painting companies working towards a shared vision: building a leading network of trusted painting businesses. Methodic does not operate as a traditional private equity firm or as a large competitor, but rather as an alliance of likeminded owner operators driven by a common mission, value system, and purpose.
        </p>
      </TextBlock>

      <TextBlock heading="WHY METHODIC" tone="light" buttonLabel="Contact">
        <p>
          Take some chips off the table while keeping a stake in what comes next. Retained ownership lets you participate in annual distributions and an eventual full exit that reflects the value you help build. Your team and company name stay in place. We bring experienced advisors and shared resources to help you take the business to the next level.
        </p>
      </TextBlock>

      <Statement heading="A network of painting companies built on reputation." tone="dark" images={networkPhotos}>
        <p>
          You can&apos;t buy a good name in a town. You earn it, one job at a time. Our job is to protect what you built and give your team the resources to build on it.
        </p>
      </Statement>

      <VisionMission />

      <TextBlock heading="HOW WE GOT HERE" tone="dark" buttonLabel="Contact">
        <p>
          Building a respected painting company takes years. Taking it further can mean more demands on the owner, from hiring and estimating to keeping the back office running. We started Methodic Painting to be the other option. Our purpose is to help you take your company to the next level, with partners who share the work and respect what made the business yours.
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
