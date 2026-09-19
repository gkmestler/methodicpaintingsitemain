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
  // Optional photo collage shown on the left of the text (two by two grid)
  images?: StatementImage[]
  // Optional single photo shown on the right of the text
  image?: StatementImage
}

// Large serif statement with supporting copy, split on desktop. With a
// collage the photos take the left column; with a single image the text
// takes the left column and the photo the right.
export default function Statement({ heading, children, tone = 'dark', images, image }: StatementProps) {
  const isDark = tone !== 'light'
  const frameClass = isDark ? styles.frameDark : styles.frameLight

  return (
    <Section tone={tone}>
      <div className={`${styles.grid} ${images ? styles.withImages : ''} ${image ? styles.withImage : ''}`}>
        {images && (
          <div className={`${styles.collage} ${frameClass}`} data-reveal>
            {images.map((item) => (
              <div key={item.src} className={styles.photo}>
                <Image src={item.src} alt={item.alt} width={1600} height={1067} sizes="(min-width: 900px) 25vw, 50vw" className={styles.image} />
              </div>
            ))}
          </div>
        )}
        <div className={styles.text} data-reveal style={images ? { transitionDelay: '0.15s' } : undefined}>
          <h2 className={`${text.serif} ${styles.heading}`}>{heading}</h2>
          <div className={`${text.body} ${text.muted} ${styles.copy}`}>{children}</div>
        </div>
        {image && (
          <div className={`${styles.single} ${styles.photo} ${frameClass}`} data-reveal style={{ transitionDelay: '0.15s' }}>
            <Image src={image.src} alt={image.alt} width={1800} height={1198} sizes="(min-width: 900px) 45vw, 100vw" className={styles.image} />
          </div>
        )}
      </div>
    </Section>
  )
}
