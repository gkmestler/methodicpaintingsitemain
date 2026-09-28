import Section from '../Section'
import { EyeIcon, CompassIcon } from '../icons'
import styles from './VisionMission.module.css'

const items = [
  {
    title: 'OUR VISION',
    body: 'A people-first platform where the customer, the crew, and the owner all come out ahead.',
    icon: <EyeIcon />,
  },
  {
    title: 'OUR MISSION',
    body: 'Partner with painting company owners who still have ambition, and provide the partnership, systems, and support to get where they want to go.',
    icon: <CompassIcon />,
  },
]

export default function VisionMission() {
  return (
    <Section tone="light">
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={item.title} className={styles.card} data-reveal style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className={styles.icon}>{item.icon}</div>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.body}>{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
