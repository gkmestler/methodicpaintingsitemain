import Image from 'next/image'
import { team } from '@/data/team'
import styles from './TeamGrid.module.css'

// Fallback used when a member has no image file yet
const placeholder = '/images/team/placeholder.svg'

export default function TeamGrid() {
  return (
    <div className={styles.grid}>
      {team.map((member, index) => {
        const zoom = member.zoom ?? 1
        const focus = member.focus ?? 30
        const imageStyle = {
          objectPosition: `50% ${focus}%`,
          transform: zoom !== 1 ? `scale(${zoom})` : undefined,
          transformOrigin: `50% ${focus}%`,
        }

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
                style={imageStyle}
              />
            </div>
            <div className={styles.infoWrap}>
              <div className={styles.info}>
                <div className={styles.nameRow}>
                  <span className={styles.name}>{member.name}</span>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkedinLink}
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Image src="/images/linkedin-icon-44.png" alt="" width={18} height={18} className={styles.linkedinIcon} />
                    </a>
                  )}
                </div>
                {member.role && <span className={styles.role}>{member.role}</span>}
                <span className={styles.title}>{member.title}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
