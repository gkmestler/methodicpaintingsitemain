import styles from './Section.module.css'

type SectionProps = {
  children: React.ReactNode
  tone?: 'dark' | 'black' | 'navy'
  size?: 'default' | 'large'
  id?: string
  className?: string
}

// Full-width dark band with the reference site's backgrounds and 100px rhythm.
// "dark" glows blue from the bottom, "navy" from the top left, "black" is flat.
export default function Section({ children, tone = 'dark', size = 'default', id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]} ${size === 'large' ? styles.large : ''} ${className}`}>
      <div className="container">{children}</div>
    </section>
  )
}
