# Claude Code prompt: build methodicpainting.com

Paste everything below this line into Claude Code from inside a new empty project folder. Before you run it, clone the reference repo next to it so Claude Code can read it:

```
git clone https://github.com/gkmestler/METHODIC-VENTURES ../methodic-ventures-reference
```

---

## Context

I'm building a new marketing website for **Methodic Painting**, a seller-facing acquisition brand. We buy painting companies in New England. This is a separate site from the Methodic Ventures site but it needs to share its look and feel.

The reference codebase is at `../methodic-ventures-reference`. Read it fully before writing anything. Note the README still calls it "Valient," ignore that, it's the Methodic Ventures site. Reuse its stack, its visual system, and any components that transfer cleanly:

- Next.js (App Router), TypeScript, CSS Modules, no CSS frameworks
- Montserrat from Google Fonts for headings and UI, Georgia serif for body where the reference uses it
- Palette: white #FFFFFF, light blue #C3E2FF, bright blue #62B2FF, black #000000
- Sticky header with transparency behavior, scroll-in animations, mobile-first responsive layout
- The existing `Header`, `Footer`, `Hero`, `Leadership`, and `Advisors` components are the ones to borrow patterns from. Match the spacing, type scale, button style, card style, and section rhythm of the reference so the two sites look like siblings.

The reference site is a single-page site. This one is multi-page. Keep the same visual language but give each page its own route.

I'm deploying to Vercel and using Resend for the contact form. Set both of those up as part of this build.

## Site structure

Nav (desktop and mobile hamburger): Home, How We Partner, Team, News, Contact. The Contact link should be styled as the primary button. Logo links home. Use a text wordmark "METHODIC PAINTING" in Montserrat until I drop in a logo file, and make the logo a single swap in one place.

Routes:

- `/` Home
- `/how-we-partner`
- `/team`
- `/news` (placeholder list page, MDX or simple data file, no posts yet)
- `/contact`

Every page gets proper metadata (title, description, Open Graph) with sensible defaults in `layout.tsx` and page-level overrides.

## Copy

Use the copy below exactly. Do not invent additional copy, do not add filler sentences, do not add em-dashes anywhere. Where I've marked something in [brackets] it's a placeholder for me to fill; leave it visibly bracketed in the code so I can find it.

### Home `/`

**Hero**
Eyebrow: METHODIC PAINTING
Headline: BACKING PAINTING COMPANIES
Subhead: TO GROW, TRANSITION, AND WIN
Button: Contact (links to /contact)

**Who We Are**
Heading: WHO WE ARE
Methodic Painting is building a network of the best painting companies in New England. We're not a private equity firm and we're not a big competitor coming to town. We're a group of owner-operators and trade-business builders who think painting companies deserve a better exit than a broker listing or a handshake sale.

**Why Methodic**
Heading: WHY METHODIC
Owners can take money off the table now and keep a piece of the business so they still win as it grows. We keep your crews, your foreman, and your name on the trucks. What changes is that you get the back office, the estimating support, and the growth capital you've never had time to build yourself.
Button: Contact

**Photo strip**
A horizontal row of 4 to 5 image slots. Use placeholder images from `/public/images/placeholders/` (generate simple neutral gray placeholders at build time or commit static ones). I'll replace with real crew and job-site photos.

**Statement block**
Heading: A network of painting companies built on reputation.
You can't buy a good name in a town. You earn it, one house and one commercial job at a time. Our job is to protect what you built and give your team the resources to build on it.

**Vision / Mission** (two side-by-side cards, each with a simple line icon)
OUR VISION
A people-first platform where the customer, the crew, and the owner all come out ahead.

OUR MISSION
Partner with painting company owners who still have ambition, and give them the capital, systems, and support to get where they want to go.

**How We Got Here**
Heading: HOW WE GOT HERE
The painting industry is fragmenting and consolidating at the same time. Good companies are stuck at a ceiling, owners are aging out, and the buyers showing up are either lowballing or planning to gut the business. We started Methodic Painting to be the other option. Whether you want to grow, hand off to the next generation, or step away entirely, we build the deal around that.
Button: Contact

**Three pillars**
Section heading: GROWTH BUILT ON PARTNERSHIP
Intro: We grow companies by investing in people and systems, not by cutting costs. Every deal is structured so the owner, the crew, and Methodic all win together.

Card 1: REAL VALUE
We grow companies by investing in people, systems, and sales, not by cutting costs. No forced timelines.

Card 2: YOUR TEAM STAYS
We provide the back office, the culture support, and the numbers so your crews can focus on quality work.

Card 3: ALIGNED UPSIDE
Your success is the whole model. When the business grows, you're still an owner and you get paid like one.

**Our Strategy** (two-path section, this is the most important block on the page, give it room)
Heading: OUR STRATEGY
Intro: We vet companies for their reputation, their people, and their customer base. Then we ask the owner what they want.

Path 1 heading: Stay and grow.
You keep running the company with full day-to-day autonomy and the backing of a bigger group.

Path 2 heading: Step away.
We build a transition on your timeline, install an operator, and protect your legacy and your employees.

**Typical Partner Criteria** (bulleted list with a check or arrow icon per line)
Heading: TYPICAL PARTNER CRITERIA
- Established residential or commercial painting company in New England
- [Revenue floor, e.g. $1M+ annual revenue]
- Strong reputation and repeat customer base
- Experienced crew leads or a foreman who can run jobs without the owner on site
- Owner willing to support a transition or stay on in a defined role
- Clean books or a willingness to get them clean

Button: Download Info Pack (links to `/info-pack.pdf` in `/public`, drop a placeholder PDF in for now)

**Closer**
Eyebrow: STRONG ALONE.
Headline: STRONGER TOGETHER.
Button: Contact

### How We Partner `/how-we-partner`

**Hero**
Heading: HOW WE PARTNER
Subhead: We partner with the best painting companies in their market.
Button: Contact

**Strength in numbers**
Heading: Strength in numbers with the power of autonomy
Owners get both. You keep running your business the way you always have, and you get the economics and resources of being part of a bigger group.

**Big statement with image**
When you partner with Methodic, you decide what's right for you and the business, and we structure the deal around it.
(One large image slot beside it, placeholder for now.)

**Our Strategy**
Heading: OUR STRATEGY
We invest in painting companies with strong crews and strong reputations. We keep the people, we keep the name, and we add the systems and capital to grow.

**Geography**
Heading: WE ARE NEW ENGLAND FOCUSED AND PEOPLE FIRST
We're based in Massachusetts and we're buying here. We go where the best crews and the best reputations are.
Button: Contact

**Three cards**
FLEXIBLE DEAL STRUCTURES
Full sale, partial sale, seller note, stay-and-grow. We've done the work on structure so you don't have to.

HANDS-ON SUPPORT
Real help with hiring, payroll, HR, estimating, and marketing. You choose how much.

BUILDING VALUE AS PARTNERS
Our advisors have built and sold trade businesses. That network works for you the day we close.

**Support customized for you**
Heading: Support customized for you and your business
Get the partnership without the corporate layer. Benefits of ownership, none of the 11pm bookkeeping.

**Closer**
Line 1 (smaller): If you want to go fast, go alone.
Line 2 (large): If you want to go far, go together.
Button: Contact

### Team `/team`

**Hero**
Heading: TEAM
Subhead: Methodic Painting is run by operators and backed by people who have built, run, and sold trade businesses. We're here to serve the companies we partner with.
Button: Contact

**Grid**
Heading: Meet the Team
One responsive grid, no section split between partners and advisors. Each card: headshot (square or 4:5 crop, grayscale on default with color on hover is fine if the reference does something similar), name, title. No bios, no links, no modals.

Drive this from a single `team.ts` data file so I can reorder and edit in one place. Order: advisors first, co-founders last. Titles are real-world titles, not "Advisor."

```
[
  { name: "Brad Johnson", title: "[title]", image: "/images/team/brad-johnson.jpg" },
  { name: "Matt Walker", title: "[title]", image: "/images/team/matt-walker.jpg" },
  { name: "Evan Farber", title: "[title]", image: "/images/team/evan-farber.jpg" },
  { name: "Scott Waxler", title: "[title]", image: "/images/team/scott-waxler.jpg" },
  { name: "Edward Gorelick", title: "[title]", image: "/images/team/edward-gorelick.jpg" },
  { name: "Erik Noyes", title: "[title]", image: "/images/team/erik-noyes.jpg" },
  { name: "Chad Mestler", title: "[title]", image: "/images/team/chad-mestler.jpg" },
  { name: "Gavin Mestler", title: "Co-Founder", image: "/images/team/gavin-mestler.jpg" },
  { name: "Logan Mestler", title: "Co-Founder", image: "/images/team/logan-mestler.jpg" },
  { name: "Dean Farber", title: "Co-Founder", image: "/images/team/dean-farber.jpg" }
]
```

If headshots exist in the reference repo's `/public/images`, copy them over and wire them up. For anyone missing, use a neutral placeholder silhouette.

### News `/news`

Heading: NEWS & INSIGHTS
Subhead: Notes on the New England painting industry and how we think about buying and building companies.
Render a list of posts from a simple data file or MDX folder. Ship with zero posts and an empty state that says "First post coming soon." Keep it simple, I'll add posts later.

### Contact `/contact`

**Hero**
Heading: CONTACT
Subhead: Thinking about selling or growing? Start with a conversation. No broker, no pressure, no obligation.

**Form** (client component, POSTs to a Next.js route handler)
Fields: Name, Company, Town, Phone, Email, Tell us about your business (textarea). All required except Phone. Basic client-side validation, loading state on submit, success state that replaces the form ("Thanks, we'll be in touch within one business day."), and an inline error state.

Add a honeypot field for spam.

**Sidebar or below form**
Email: contact@methodicpainting.com
Phone: [phone]
Based in Massachusetts

### Footer (all pages)

Wordmark, phone [phone], email contact@methodicpainting.com, LinkedIn icon linking to [LinkedIn URL], nav links, "A Methodic Ventures company" linking to https://methodicventures.com, Privacy Policy link to `/privacy` (create a short generic privacy page), copyright line with current year.

## Resend contact form

- `npm install resend`
- Route handler at `app/api/contact/route.ts`
- Read `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` from env. Create `.env.example` with all three and add `.env.local` to `.gitignore` if it isn't already.
- Send a plain, readable email to `CONTACT_TO_EMAIL` with every field, subject line "New inquiry from [Company] ([Town])". Set `replyTo` to the submitter's email.
- Validate server-side too. Reject if the honeypot is filled. Return proper JSON status codes.
- Until I verify a domain in Resend, default `CONTACT_FROM_EMAIL` to `onboarding@resend.dev` in `.env.example` with a comment explaining it needs to change to a methodicpainting.com address after domain verification.

## Vercel

- Make sure `npm run build` passes clean with no type errors and no lint errors before you finish.
- Add a short section to README.md covering: local dev, env vars, how to deploy to Vercel (import repo, add the three env vars in Vercel project settings), and how to verify the domain in Resend.
- Add `vercel.json` only if something actually needs it. Otherwise leave defaults.

## Build order

1. Read the reference repo end to end. Tell me in two or three sentences what you're reusing and what you're changing before you write code.
2. Scaffold the project, global styles, fonts, palette variables, Header, Footer.
3. Home page, every section, using the copy above verbatim.
4. How We Partner page.
5. Team page and `team.ts`.
6. Contact page and Resend route handler.
7. News page and Privacy page.
8. Metadata, favicon, OG image placeholder, `robots.txt`, `sitemap.ts`.
9. Run the build, fix everything, then give me a checklist of every [bracket] placeholder I still need to fill and every image slot I need to supply.

## Rules

- No em-dashes anywhere in copy or code comments.
- Don't add sections, testimonials, stats strips, or copy I didn't give you. If the reference site has a section that doesn't map to anything above (for example the Statistics strip), don't port it.
- Don't use Tailwind or any UI library. CSS Modules only, matching the reference.
- Mobile first. Check every section at 375px width.
- Keep the whole thing fast. Use `next/image` for every image. No client components unless something actually needs interactivity (the form and the mobile nav).
- Commit as you go with clear messages.