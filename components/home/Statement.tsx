import Section from '../Section'
import text from '../type.module.css'
import styles from './Statement.module.css'

type StatementProps = {
  heading: string
  children: React.ReactNode
  tone?: 'white' | 'light' | 'dark' | 'black'
}

// Large serif statement with supporting copy, split on desktop.
export default function Statement({ heading, children, tone = 'light' }: StatementProps) {
  return (
    <Section tone={tone}>
      <div className={styles.grid} data-reveal>
        <h2 className={`${text.serif} ${styles.heading}`}>{heading}</h2>
        <div className={`${text.body} ${text.muted} ${styles.copy}`}>{children}</div>
      </div>
    </Section>
  )
}
