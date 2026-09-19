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
  tone?: 'light' | 'dark' | 'black'
  // center: centered text; left / right: left-aligned text placed on that side of the page
  align?: 'center' | 'left' | 'right'
  // Optional content shown in a right column beside left-aligned text
  aside?: React.ReactNode
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
  aside,
  id,
}: TextBlockProps) {
  const isDark = tone !== 'light'
  const placement = aside ? 'left' : align

  const content = (
    <div className={`${styles.content} ${placement !== 'center' ? styles[placement] : ''}`} data-reveal>
        <h2 className={headingStyle === 'serif' ? text.serif : text.heading}>{heading}</h2>
        <div className={`${text.body} ${text.muted} ${styles.copy}`}>{children}</div>
        {buttonLabel && (
          <div className={styles.actions}>
            <Button href={buttonHref} variant={isDark ? 'light' : 'dark'}>
              {buttonLabel}
            </Button>
          </div>
        )}
      </div>
  )

  return (
    <Section tone={tone} id={id}>
      {aside ? (
        <div className={styles.split}>
          {content}
          <div className={styles.aside} data-reveal style={{ transitionDelay: '0.15s' }}>
            {aside}
          </div>
        </div>
      ) : (
        content
      )}
    </Section>
  )
}
