// News posts, newest first. Add an entry here to publish a post on /news.
// Leave the array empty to show the "First post coming soon." empty state.

export type Post = {
  slug: string
  title: string
  date: string // ISO date, for example '2026-10-01'
  excerpt: string
  // Optional link to the full post. Until post pages exist, this can point to
  // an external article or be left off to render the title without a link.
  href?: string
}

export const posts: Post[] = []
