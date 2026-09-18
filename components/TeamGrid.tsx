import { team } from '@/data/team'
import TeamCard from './TeamCard'
import styles from './TeamGrid.module.css'

export default function TeamGrid() {
  return (
    <div className={styles.grid}>
      {team.map((member, index) => (
        <TeamCard key={member.name} member={member} index={index} />
      ))}
    </div>
  )
}
