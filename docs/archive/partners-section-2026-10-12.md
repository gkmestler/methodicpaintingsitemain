# Archived partners section

Removed October 12, 2026 at the owner's request. Gavin Mestler, Logan Mestler, and Dean Farber should remain off the displayed roster until restoration is requested. This is a historical archive, not current website content.

The advisor roster is unchanged. Original headshots remain in `public/images/team/` for restoration.

## Restore the section

1. Restore the following `partners` export in `data/team.ts` (which defines `TeamMember`).
2. Add `partners` back to the import from `@/data/team` in `app/team/page.tsx`.
3. Replace the archive comment before `<Closer>` with the saved section below.
4. Restore the saved styles in `app/team/page.module.css`.
5. If appropriate, restore the former page description and button label listed below.

## Partner profiles — data/team.ts

```ts
export const partners: TeamMember[] = [
  {
    name: 'Gavin Mestler',
    title: 'Co-Founder and Managing Partner',
    image: '/images/team/gavin-mestler-2.jpg',
    zoom: 1.3,
    focus: 28,
    linkedin: 'https://www.linkedin.com/in/gavinmestler/',
  },
  {
    name: 'Logan Mestler',
    title: 'Co-Founder and Managing Partner',
    image: '/images/team/logan-mestler.jpg',
    zoom: 1.25,
    focus: 38,
    linkedin: 'https://www.linkedin.com/in/logan-mestler-753917253/',
  },
  {
    name: 'Dean Farber',
    title: 'Co-Founder and Managing Partner',
    image: '/images/team/dean-farber-4.jpg',
    zoom: 1.3,
    focus: 46,
    linkedin: 'https://www.linkedin.com/in/dean-farber-8b2159399/',
  },
]
```

## Section — app/team/page.tsx

```tsx
      <Section tone="light" id="partners">
        <div className={styles.partnersHeader} data-reveal>
          <h2 className={styles.heading}>Partners</h2>
          <p className={styles.lead}>
            Gavin, Logan, and Dean lead Methodic Painting. Start with a conversation about the company you’ve built and where you want to take it.
          </p>
        </div>
        <TeamGrid members={partners} />
      </Section>
```

## Styles — app/team/page.module.css

```css
.partnersHeader {
  max-width: 820px;
  margin: 0 auto 42px;
  text-align: center;
  margin-bottom: 60px;
}

.partnersHeader .lead {
  margin: 32px auto 0;
  text-align: center;
  text-wrap: balance;
}
```

## Previous related copy

Page description: Meet Methodic Painting’s advisory network and partners, with experience in painting, home services, operations, legal, accounting, and business transitions.

Closer button: Talk with the partners
