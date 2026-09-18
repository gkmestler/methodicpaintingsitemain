// Team grid, rendered in order. Co-founders first, then advisors.
// Roles, titles, and LinkedIn URLs come from the Methodic Ventures site.

export type TeamMember = {
  name: string
  // Shown under the name in the card
  title: string
  // Optional description revealed when the card is clicked
  bio?: string
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
    name: 'Gavin Mestler',
    title: 'Co-Founder and Managing Partner',
    image: '/images/team/gavin-mestler-2.jpg',
    zoom: 1.3,
    focus: 22,
    linkedin: 'https://www.linkedin.com/in/gavinmestler/',
  },
  {
    name: 'Logan Mestler',
    title: 'Co-Founder and Managing Partner',
    image: '/images/team/logan-mestler.jpg',
    zoom: 1.25,
    focus: 32,
    linkedin: 'https://www.linkedin.com/in/logan-mestler-753917253/',
  },
  {
    name: 'Dean Farber',
    title: 'Co-Founder and Managing Partner',
    image: '/images/team/dean-farber-3.jpg',
    zoom: 1.3,
    focus: 40,
    linkedin: 'https://www.linkedin.com/in/dean-farber-8b2159399/',
  },
  {
    name: 'Brad Johnson',
    title: 'Operations Advisor',
    bio: 'Professor Emeritus at Babson College and Former Vice President at Wayfair',
    image: '/images/team/brad-johnson.jpg',
    zoom: 1.15,
    focus: 25,
    linkedin: 'https://www.linkedin.com/in/bradjohnson12/',
  },
  {
    name: 'Warren Cross',
    title: 'Trades Advisor',
    bio: 'Founder & CEO of Cross Services Group, a 35-year home services and trades operator in Greater Boston',
    image: '/images/team/warren-cross.jpg',
    zoom: 1.1,
    focus: 35,
    linkedin: 'https://www.linkedin.com/in/warrencrossjr/',
  },
  {
    name: 'Matt Walker',
    title: 'Acquisitions Advisor',
    bio: 'Investor, Operator, and Entrepreneur Specializing in Business Acquisitions and Real Estate',
    image: '/images/team/matt-walker.png',
    zoom: 1.05,
    focus: 15,
    linkedin: 'https://www.linkedin.com/in/mattwalker15/',
  },
  {
    name: 'Evan Farber',
    title: 'Legal Advisor',
    bio: 'General Counsel at The Cranemere Group, Board Member of Flotek Industries',
    image: '/images/team/evan-farber.png',
    zoom: 1.1,
    focus: 42,
    linkedin: 'https://www.linkedin.com/in/evan-farber/',
  },
  {
    name: 'Scott Waxler',
    title: 'M&A Advisor',
    bio: 'Founder, Lockebridge Capital Partners',
    image: '/images/team/scott-waxler.jpg',
    zoom: 1,
    focus: 0,
    linkedin: 'https://www.linkedin.com/in/scottwaxler/',
  },
  {
    name: 'Edward Gorelick',
    title: 'Accounting Advisor',
    bio: 'Founder of Gorelick & Uslaner, CPAs',
    image: '/images/team/edward-gorelick.jpg',
    zoom: 1,
    focus: 10,
  },
  {
    name: 'Erik Noyes',
    title: 'Strategy Advisor',
    bio: 'Director of The Generator AI Lab and Professor of Entrepreneurship at Babson College',
    image: '/images/team/erik-noyes.webp',
    zoom: 1.2,
    focus: 10,
    linkedin: 'https://www.linkedin.com/in/erik-noyes-40b1b73/',
  },
  {
    name: 'Chad Mestler',
    title: 'Capital Markets Advisor',
    bio: 'Founder of Helvetica Group and Raiseli.com',
    image: '/images/team/chad-mestler.jpg',
    zoom: 1,
    focus: 0,
    linkedin: 'https://www.linkedin.com/in/chadmestler/',
  },
]
