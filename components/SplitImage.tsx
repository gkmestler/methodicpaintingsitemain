import Image from 'next/image'
import Section from './Section'
import styles from './SplitImage.module.css'

type SplitImageProps = {
  statement: string
  imageSrc: string
  imageAlt: string
  tone?: 'white' | 'light' | 'dark' | 'black'
}

// Large serif statement beside a single image slot.
export default function SplitImage({ statement, imageSrc, imageAlt, tone = 'white' }: SplitImageProps) {
  return (
    <Section tone={tone}>
      <div className={styles.grid}>
        <div className={styles.text} data-reveal>
          <p className={styles.statement}>{statement}</p>
        </div>
        <div className={styles.imageWrap} data-reveal style={{ transitionDelay: '0.15s' }}>
          <Image src={imageSrc} alt={imageAlt} width={1200} height={1000} sizes="(min-width: 900px) 50vw, 100vw" className={styles.image} />
        </div>
      </div>
    </Section>
  )
}
