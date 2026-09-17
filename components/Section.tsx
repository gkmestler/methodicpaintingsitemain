import styles from './Section.module.css'

type SectionProps = {
  children: React.ReactNode
  tone?: 'white' | 'light' | 'dark' | 'black'
  size?: 'default' | 'large'
  id?: string
  className?: string
}

// Full-width band with the reference site's backgrounds and 100px rhythm.
export default function Section({ children, tone = 'white', size = 'default', id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]} ${size === 'large' ? styles.large : ''} ${className}`}>
      <div className="container">{children}</div>
    </section>
  )
}
