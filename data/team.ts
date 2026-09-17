// Team grid, rendered in order. Advisors first, co-founders last.
// Titles marked [title] still need to be filled in.

export type TeamMember = {
  name: string
  title: string
  image: string
  // Optional crop tweaks so head sizes match across differently framed photos
  scale?: number
  offsetY?: number
}

export const team: TeamMember[] = [
  { name: 'Brad Johnson', title: '[title]', image: '/images/team/brad-johnson.jpg' },
  { name: 'Matt Walker', title: '[title]', image: '/images/team/matt-walker.png' },
  { name: 'Evan Farber', title: '[title]', image: '/images/team/evan-farber.png' },
  { name: 'Scott Waxler', title: '[title]', image: '/images/team/scott-waxler.jpg' },
  { name: 'Edward Gorelick', title: '[title]', image: '/images/team/edward-gorelick.jpg' },
  { name: 'Erik Noyes', title: '[title]', image: '/images/team/erik-noyes.jpg' },
  { name: 'Chad Mestler', title: '[title]', image: '/images/team/chad-mestler.jpg' },
  { name: 'Gavin Mestler', title: 'Co-Founder', image: '/images/team/gavin-mestler.png', scale: 1.22, offsetY: 7 },
  { name: 'Logan Mestler', title: 'Co-Founder', image: '/images/team/logan-mestler.png', scale: 1.62, offsetY: 17 },
  { name: 'Dean Farber', title: 'Co-Founder', image: '/images/team/dean-farber.png', offsetY: 3 },
]
