import Section from './Section'
import Button from './Button'
import text from './type.module.css'
import styles from './TextBlock.module.css'

type TextBlockProps = {
  heading: string
  headingStyle?: 'caps' | 'serif'
  children: React.ReactNode
  buttonLabel?: string
  buttonHref?: string
  tone?: 'dark' | 'black' | 'navy'
  align?: 'center' | 'left'
  id?: string
}

// Centered heading plus paragraph, the reference "About" section pattern.
export default function TextBlock({
  heading,
  headingStyle = 'caps',
  children,
  buttonLabel,
  buttonHref = '/contact',
  tone = 'dark',
  align = 'center',
  id,
}: TextBlockProps) {
  return (
    <Section tone={tone} id={id}>
      <div className={`${styles.content} ${align === 'left' ? styles.left : ''}`} data-reveal>
        <h2 className={headingStyle === 'serif' ? text.serif : text.heading}>{heading}</h2>
        <div className={`${text.body} ${text.muted} ${styles.copy}`}>{children}</div>
        {buttonLabel && (
          <div className={styles.actions}>
            <Button href={buttonHref} variant="light">
              {buttonLabel}
            </Button>
          </div>
        )}
      </div>
    </Section>
  )
}
