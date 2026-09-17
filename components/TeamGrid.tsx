import Image from 'next/image'
import { team } from '@/data/team'
import styles from './TeamGrid.module.css'

// Fallback used when a member has no image file yet
const placeholder = '/images/team/placeholder.svg'

export default function TeamGrid() {
  return (
    <div className={styles.grid}>
      {team.map((member, index) => {
        const transform =
          member.scale || member.offsetY
            ? `scale(${member.scale ?? 1}) translateY(${member.offsetY ?? 0}%)`
            : undefined

        return (
          <div key={member.name} className={styles.card} data-reveal style={{ transitionDelay: `${(index % 4) * 0.08}s` }}>
            <div className={styles.imageWrap}>
              <Image
                src={member.image || placeholder}
                alt={member.name}
                width={400}
                height={500}
                sizes="(min-width: 992px) 25vw, 50vw"
                className={styles.image}
                style={transform ? { transform } : undefined}
              />
            </div>
            <div className={styles.infoWrap}>
              <div className={styles.info}>
                <span className={styles.name}>{member.name}</span>
                <span className={styles.title}>{member.title}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
