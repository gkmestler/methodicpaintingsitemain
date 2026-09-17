// Team grid, rendered in order. Advisors first, co-founders last.
// Roles, titles, and LinkedIn URLs come from the Methodic Ventures site.

export type TeamMember = {
  name: string
  // Short area of focus, shown above the title (Operations, Legal, and so on)
  role?: string
  title: string
  image: string
  linkedin?: string
  // Crop tuning so every face lands at the same size and height in the card.
  // zoom scales the photo (1 = fill the card), focus is the vertical point
  // (0 to 100, percent from the top) the crop and zoom are anchored to.
  zoom?: number
  focus?: number
}

export const team: TeamMember[] = [
  {
    name: 'Brad Johnson',
    role: 'Operations',
    title: 'Professor Emeritus at Babson College and Former Vice President at Wayfair',
    image: '/images/team/brad-johnson.jpg',
    zoom: 1.15,
    focus: 25,
    linkedin: 'https://www.linkedin.com/in/bradjohnson12/',
  },
  {
    name: 'Warren Cross',
    role: 'Trades',
    title: 'Founder & CEO of Cross Services Group, a 35-year home services and trades operator in Greater Boston',
    image: '/images/team/warren-cross.jpg',
    zoom: 1.1,
    focus: 35,
    linkedin: 'https://www.linkedin.com/in/warrencrossjr/',
  },
  {
    name: 'Matt Walker',
    role: 'Acquisitions',
    title: 'Investor, Operator, and Entrepreneur Specializing in Business Acquisitions and Real Estate',
    image: '/images/team/matt-walker.png',
    zoom: 1.15,
    focus: 25,
    linkedin: 'https://www.linkedin.com/in/mattwalker15/',
  },
  {
    name: 'Evan Farber',
    role: 'Legal',
    title: 'General Counsel at The Cranemere Group, Board Member of Flotek Industries',
    image: '/images/team/evan-farber.png',
    zoom: 1.1,
    focus: 35,
    linkedin: 'https://www.linkedin.com/in/evan-farber/',
  },
  {
    name: 'Scott Waxler',
    role: 'M&A',
    title: 'Founder, Lockebridge Capital Partners',
    image: '/images/team/scott-waxler.jpg',
    zoom: 1,
    focus: 0,
    linkedin: 'https://www.linkedin.com/in/scottwaxler/',
  },
  {
    name: 'Edward Gorelick',
    role: 'Accounting',
    title: 'Founder of Gorelick & Uslaner, CPAs',
    image: '/images/team/edward-gorelick.jpg',
    zoom: 1,
    focus: 10,
  },
  {
    name: 'Erik Noyes',
    role: 'Strategy',
    title: 'Director of The Generator AI Lab and Professor of Entrepreneurship at Babson College',
    image: '/images/team/erik-noyes.webp',
    zoom: 1.2,
    focus: 28,
    linkedin: 'https://www.linkedin.com/in/erik-noyes-40b1b73/',
  },
  {
    name: 'Chad Mestler',
    role: 'Capital Markets',
    title: 'Founder of Helvetica Group and Raiseli.com',
    image: '/images/team/chad-mestler.jpg',
    zoom: 1,
    focus: 0,
    linkedin: 'https://www.linkedin.com/in/chadmestler/',
  },
  {
    name: 'Gavin Mestler',
    title: 'Co-Founder',
    image: '/images/team/gavin-mestler.jpg',
    zoom: 1.9,
    focus: 14,
    linkedin: 'https://www.linkedin.com/in/gavinmestler/',
  },
  {
    name: 'Logan Mestler',
    title: 'Co-Founder',
    image: '/images/team/logan-mestler.jpg',
    zoom: 1.15,
    focus: 25,
    linkedin: 'https://www.linkedin.com/in/logan-mestler-753917253/',
  },
  {
    name: 'Dean Farber',
    title: 'Co-Founder',
    image: '/images/team/dean-farber-2.png',
    zoom: 1.15,
    focus: 20,
    linkedin: 'https://www.linkedin.com/in/dean-farber-8b2159399/',
  },
]
