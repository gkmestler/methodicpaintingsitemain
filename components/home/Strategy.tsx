import Link from 'next/link'
import Section from '../Section'
import text from '../type.module.css'
import styles from './Strategy.module.css'

const paths = [
  {
    heading: 'Stay and grow.',
    body: 'You maintain complete operational autonomy, with shared resources and experienced partners to help you grow.',
  },
  {
    heading: 'Step away.',
    body: 'We build a transition on your timeline, install an operator, and protect your legacy and your employees.',
    href: '/transition',
  },
]

export default function Strategy() {
  return (
    <Section tone="dark" size="large" id="strategy">
      <div className={styles.header} data-reveal>
        <h2 className={text.heading}>OUR STRATEGY</h2>
        <p className={`${text.body} ${text.muted}`}>
          We vet companies for their reputation, their people, and their customer base. Then we ask the owner what they want.
        </p>
      </div>
      <div className={styles.paths}>
        {paths.map((path, index) => (
          <div key={path.heading} className={styles.path} data-reveal style={{ transitionDelay: `${index * 0.15}s` }}>
            <span className={styles.number}>{`0${index + 1}`}</span>
            <h3 className={styles.pathHeading}>{path.heading}</h3>
            <p className={styles.pathBody}>{path.body}</p>
            {path.href && (
              <Link href={path.href} className={styles.optionLink}>
                Explore this option <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
