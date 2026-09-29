import Button from './Button'
import styles from './Closer.module.css'

type CloserProps = {
  line1?: string
  line2: string
  buttonLabel: string
  buttonHref?: string
  style?: 'caps' | 'serif'
}

// End-of-page call to action on black. "caps" uses eyebrow plus headline,
// "serif" uses a smaller lead line and a large serif headline.
export default function Closer({ line1, line2, buttonLabel, buttonHref = '/contact', style = 'caps' }: CloserProps) {
  return (
    <section className={styles.closer}>
      <div className="container">
        <div className={styles.content} data-reveal>
          {style === 'caps' ? (
            <>
              {line1 && <p className={styles.eyebrow}>{line1}</p>}
              <h2 className={styles.headline}>{line2}</h2>
            </>
          ) : (
            <>
              {line1 && <p className={styles.lead}>{line1}</p>}
              <h2 className={styles.serifHeadline}>{line2}</h2>
            </>
          )}
          <div className={styles.actions}>
            <Button href={buttonHref} variant="light">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
