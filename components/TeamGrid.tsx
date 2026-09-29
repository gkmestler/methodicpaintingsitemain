import type { TeamMember } from '@/data/team'
import TeamCard from './TeamCard'
import styles from './TeamGrid.module.css'

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className={styles.grid}>
      {members.map((member, index) => (
        <TeamCard key={member.name} member={member} index={index} />
      ))}
    </div>
  )
}
