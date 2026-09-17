import Button from './Button'
import text from './type.module.css'
import styles from './PageHero.module.css'

type PageHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  buttonLabel?: string
  buttonHref?: string
  tone?: 'light' | 'dark' | 'transparent'
  size?: 'full' | 'short'
}

// Page-top hero. "light" is the home gradient from the reference hero,
// "dark" is the black hero used on the reference approach page, and
// "transparent" lets a dark page wrapper supply the background.
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  buttonLabel,
  buttonHref = '/contact',
  tone = 'dark',
  size = 'short',
}: PageHeroProps) {
  return (
    <section className={`${styles.hero} ${styles[tone]} ${size === 'full' ? styles.full : ''}`}>
      <div className="container">
        <div className={styles.content}>
          {eyebrow && <span className={text.eyebrow}>{eyebrow}</span>}
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={`${styles.subtitle} ${size === 'full' ? styles.subtitleCaps : ''}`}>{subtitle}</p>}
          {buttonLabel && (
            <div className={styles.actions}>
              <Button href={buttonHref} variant={tone === 'light' ? 'dark' : 'light'}>
                {buttonLabel}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
