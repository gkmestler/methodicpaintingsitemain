import styles from './Quote.module.css'

type QuoteProps = {
  children: React.ReactNode
  tone?: 'light' | 'dark' | 'black'
}

// A single centered serif statement in a compact band.
export default function Quote({ children, tone = 'dark' }: QuoteProps) {
  return (
    <section className={`${styles.band} ${styles[tone]}`}>
      <div className="container">
        <p className={styles.statement} data-reveal>
          {children}
        </p>
      </div>
    </section>
  )
}
