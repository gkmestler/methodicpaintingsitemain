import TeamMemberInfo from './TeamMemberInfo'
import Image from 'next/image'
import type { TeamMember } from '@/data/team'
import styles from './TeamGrid.module.css'

// Fallback used when a member has no image file yet
const placeholder = '/images/team/placeholder.svg'

type TeamCardProps = {
  member: TeamMember
  index: number
}

// Photo card with a name box. Cards with a bio expand on click to reveal it,
// the same pattern as the Methodic Ventures team cards.
export default function TeamCard({ member, index }: TeamCardProps) {
  const zoom = member.zoom ?? 1
  const focus = member.focus ?? 30
  const imageStyle = {
    objectPosition: `50% ${focus}%`,
    transform: zoom !== 1 ? `scale(${zoom})` : undefined,
    transformOrigin: `50% ${focus}%`,
  }

  return (
    <div className={styles.card} data-reveal style={{ transitionDelay: `${(index % 3) * 0.08}s` }}>
      <div className={styles.imageWrap}>
        <Image
          src={member.image || placeholder}
          alt={member.name}
          width={400}
          height={500}
          sizes="(min-width: 1400px) 400px, (min-width: 992px) 33vw, (min-width: 576px) 50vw, 100vw"
          className={styles.image}
          style={imageStyle}
        />
      </div>
      <div className={styles.infoWrap}>
        <TeamMemberInfo member={member} />
      </div>
    </div>
  )
}
