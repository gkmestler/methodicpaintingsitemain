import Image from 'next/image'
import styles from './Logo.module.css'

// Logo files. Both are rendered and cross-faded so the header can switch
// from black to white when its background turns black on scroll.
const LOGO_BLACK = '/images/logo/methodic-painting-black.png'
const LOGO_WHITE = '/images/logo/methodic-painting-white.png'
const LOGO_WIDTH = 3416
const LOGO_HEIGHT = 482

type LogoProps = {
  tone?: 'dark' | 'light'
  priority?: boolean
}

export default function Logo({ tone = 'dark', priority = false }: LogoProps) {
  return (
    <span className={`${styles.logo} ${tone === 'light' ? styles.light : ''}`}>
      <Image
        src={LOGO_BLACK}
        alt="Methodic Painting"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        className={`${styles.image} ${styles.black}`}
      />
      <Image
        src={LOGO_WHITE}
        alt=""
        aria-hidden="true"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        className={`${styles.image} ${styles.white}`}
      />
    </span>
  )
}
