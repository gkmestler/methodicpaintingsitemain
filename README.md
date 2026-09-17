# Methodic Painting

Marketing site for Methodic Painting, a seller-facing acquisition brand that buys painting companies in New England. It is a sibling of the Methodic Ventures site and shares its visual system.

## Stack

- Next.js (App Router) with TypeScript
- CSS Modules, no CSS frameworks
- Georgia for headings and Montserrat via `next/font` for body and UI, matching the Methodic Ventures site
- Resend for the contact form
- Deployed on Vercel

## Local dev

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build, must pass clean before deploying
npm run lint    # ESLint
npm run start   # serve the production build
```

## Env vars

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from https://resend.com/api-keys |
| `CONTACT_TO_EMAIL` | Inbox that receives contact form submissions |
| `CONTACT_FROM_EMAIL` | Sender address. Use `onboarding@resend.dev` until the domain is verified, then a `methodicpainting.com` address |

`.env.local` is git-ignored. `.env.example` lists every variable with comments.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, click **Add New > Project** and import the repo. The Next.js defaults are correct, no `vercel.json` is needed.
3. Before the first deploy, open **Settings > Environment Variables** and add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` for Production (and Preview if you want the form to work on preview URLs).
4. Deploy. Add `methodicpainting.com` under **Settings > Domains** and follow the DNS instructions.

## Verify the domain in Resend

Until the domain is verified, Resend only delivers from `onboarding@resend.dev` and only to the email on your Resend account.

1. In Resend, go to **Domains > Add Domain** and enter `methodicpainting.com`.
2. Add the DNS records Resend shows you (SPF, DKIM, and optionally DMARC) at your DNS provider.
3. Wait for the domain to show as **Verified**.
4. Change `CONTACT_FROM_EMAIL` in Vercel to something like `Methodic Painting <contact@methodicpainting.com>` and redeploy.

## Where things live

```
app/
  layout.tsx            Root layout, default metadata, Header/Footer
  page.tsx              Home
  how-we-partner/       How We Partner
  team/                 Team grid
  news/                 News list (reads data/posts.ts)
  contact/              Contact page
  privacy/              Privacy Policy
  api/contact/route.ts  Resend route handler
  sitemap.ts, robots.ts, icon.svg, opengraph-image.tsx
components/             Shared UI, each with a CSS Module
components/home/        Home-only sections
data/team.ts            Team members, in display order
data/posts.ts           News posts (empty until the first post)
lib/site.ts             Site name, URL, email, phone, LinkedIn, nav links
lib/contact.ts          Contact form validation shared by client and server
public/images/team/     Headshots
public/images/placeholders/  Gray placeholder images (regenerate with node scripts/make-placeholders.mjs)
public/info-pack.pdf    Placeholder PDF linked from the criteria section
```

## Logo

The header and footer both render `components/Logo.tsx`, which stacks the black and white PNGs from `public/images/logo/` and cross-fades between them. The header shows the black logo over light sections and switches to white once the header turns black on scroll; pages with a dark hero start black with the white logo. To replace the logo, overwrite the two PNG files and update `LOGO_WIDTH` and `LOGO_HEIGHT` in `Logo.tsx` to the new pixel dimensions.
