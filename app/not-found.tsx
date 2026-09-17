import Link from 'next/link'
import Button from '@/components/Button'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Page not found</h1>
          <Button href="/" variant="dark">
            Back to home
          </Button>
          <p className={styles.alt}>
            Or <Link href="/contact">get in touch</Link>.
          </p>
        </div>
      </div>
    </main>
  )
}
