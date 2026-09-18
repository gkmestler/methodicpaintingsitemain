import Image from 'next/image'
import Section from '../Section'
import text from '../type.module.css'
import styles from './Statement.module.css'

type StatementImage = {
  src: string
  alt: string
}

type StatementProps = {
  heading: string
  children: React.ReactNode
  tone?: 'light' | 'dark' | 'black'
  // Optional photo collage shown beside the text (two by two grid)
  images?: StatementImage[]
}

// Large serif statement with supporting copy, split on desktop. With images,
// the collage takes the left column and the text moves to the right.
export default function Statement({ heading, children, tone = 'dark', images }: StatementProps) {
  const isDark = tone !== 'light'

  return (
    <Section tone={tone}>
      <div className={`${styles.grid} ${images ? styles.withImages : ''}`}>
        {images && (
          <div className={`${styles.collage} ${isDark ? styles.collageDark : styles.collageLight}`} data-reveal>
            {images.map((image) => (
              <div key={image.src} className={styles.photo}>
                <Image src={image.src} alt={image.alt} width={1600} height={1067} sizes="(min-width: 900px) 25vw, 50vw" className={styles.image} />
              </div>
            ))}
          </div>
        )}
        <div className={styles.text} data-reveal style={images ? { transitionDelay: '0.15s' } : undefined}>
          <h2 className={`${text.serif} ${styles.heading}`}>{heading}</h2>
          <div className={`${text.body} ${text.muted} ${styles.copy}`}>{children}</div>
        </div>
      </div>
    </Section>
  )
}
