import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { posts } from '@/data/posts'
import styles from './page.module.css'

const title = 'News & Insights'
const description =
  'Notes on the New England painting industry and how we think about buying and building companies.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/news' },
  openGraph: { title, description, url: '/news' },
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function NewsPage() {
  return (
    <main>
      <PageHero title="NEWS & INSIGHTS" subtitle={description} tone="dark" />

      <Section tone="light">
        {posts.length === 0 ? (
          <p className={styles.empty} data-reveal>
            First post coming soon.
          </p>
        ) : (
          <ul className={styles.list}>
            {posts.map((post, index) => (
              <li key={post.slug} className={styles.post} data-reveal style={{ transitionDelay: `${index * 0.08}s` }}>
                <time dateTime={post.date} className={styles.date}>
                  {formatDate(post.date)}
                </time>
                <h2 className={styles.title}>{post.href ? <a href={post.href}>{post.title}</a> : post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </main>
  )
}
