import styles from './Section.module.css'

type SectionProps = {
  children: React.ReactNode
  tone?: 'light' | 'dark' | 'black'
  size?: 'default' | 'large'
  id?: string
  className?: string
}

// Full-width band with the reference site's backgrounds and 100px rhythm.
// "light" is the blue-to-white gradient, "dark" is black with a blue glow
// from the bottom, "black" is flat black.
export default function Section({ children, tone = 'dark', size = 'default', id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]} ${size === 'large' ? styles.large : ''} ${className}`}>
      <div className="container">{children}</div>
    </section>
  )
}
