import Link from 'next/link'
import styles from './Button.module.css'

type ButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'dark' | 'light' | 'solid'
  download?: boolean
  className?: string
}

// Outline button matching the reference hero CTA. "dark" is a black outline for
// light backgrounds, "light" is a white outline for dark backgrounds, and
// "solid" is the filled primary style used for the nav Contact link.
export default function Button({ href, children, variant = 'dark', download, className = '' }: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`

  if (download) {
    return (
      <a href={href} className={classes} download>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
