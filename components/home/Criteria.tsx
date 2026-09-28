import Section from '../Section'
import { CheckIcon } from '../icons'
import text from '../type.module.css'
import styles from './Criteria.module.css'

const criteria = [
  'Established residential or commercial painting company in Massachusetts',
  'Generally $3–5 million in annual revenue.',
  'Strong reputation and repeat customer base',
  'Experienced crew leads or a foreman who can run jobs without the owner on site',
  'Owner willing to support a transition or stay on in a defined role',
  'Clean books or a willingness to get them clean',
]

export default function Criteria() {
  return (
    <Section tone="light">
      <div className={styles.content} data-reveal>
        <h2 className={text.heading}>TYPICAL PARTNER CRITERIA</h2>
        <ul className={styles.list}>
          {criteria.map((item) => (
            <li key={item} className={styles.item}>
              <span className={styles.check}>
                <CheckIcon />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
