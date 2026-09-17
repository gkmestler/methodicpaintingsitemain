import Image from 'next/image'
import styles from './Logo.module.css'

// To swap in a real logo, set LOGO_SRC to a file in /public (for example
// '/images/logo.png') and adjust LOGO_WIDTH and LOGO_HEIGHT to its rendered
// size. Everything that shows the logo (header and footer) reads from here.
const LOGO_SRC: string | null = null
const LOGO_WIDTH = 150
const LOGO_HEIGHT = 37

type LogoProps = {
  tone?: 'dark' | 'light'
  priority?: boolean
}

export default function Logo({ tone = 'dark', priority = false }: LogoProps) {
  if (LOGO_SRC) {
    return (
      <Image
        src={LOGO_SRC}
        alt="Methodic Painting"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        className={tone === 'light' ? styles.imageLight : styles.image}
      />
    )
  }

  return (
    <span className={`${styles.wordmark} ${tone === 'light' ? styles.wordmarkLight : ''}`}>
      METHODIC PAINTING
    </span>
  )
}
