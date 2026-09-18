'use client'

import { useState } from 'react'
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
  const [isExpanded, setIsExpanded] = useState(false)
  const expandable = Boolean(member.bio)

  const zoom = member.zoom ?? 1
  const focus = member.focus ?? 30
  const imageStyle = {
    objectPosition: `50% ${focus}%`,
    transform: zoom !== 1 ? `scale(${zoom})` : undefined,
    transformOrigin: `50% ${focus}%`,
  }

  const toggle = () => {
    if (expandable) setIsExpanded((open) => !open)
  }

  return (
    <div className={styles.card} data-reveal style={{ transitionDelay: `${(index % 4) * 0.08}s` }}>
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
        <div
          className={`${styles.info} ${expandable ? styles.expandable : ''} ${isExpanded ? styles.expanded : ''}`}
          onClick={toggle}
          onKeyDown={(event) => {
            if (expandable && (event.key === 'Enter' || event.key === ' ')) {
              event.preventDefault()
              toggle()
            }
          }}
          role={expandable ? 'button' : undefined}
          tabIndex={expandable ? 0 : undefined}
          aria-expanded={expandable ? isExpanded : undefined}
          aria-label={expandable ? `${member.name}, ${member.title}. ${isExpanded ? 'Hide' : 'Show'} details` : undefined}
        >
          <div className={styles.infoRow}>
            <div className={styles.infoText}>
              <div className={styles.nameRow}>
                <span className={styles.name}>{member.name}</span>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinLink}
                    aria-label={`${member.name} on LinkedIn`}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Image src="/images/linkedin-icon-44.png" alt="" width={18} height={18} className={styles.linkedinIcon} />
                  </a>
                )}
              </div>
              <span className={styles.title}>{member.title}</span>
            </div>
            {expandable && (
              <span className={styles.arrow} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            )}
          </div>
          {expandable && <p className={styles.bio}>{member.bio}</p>}
        </div>
      </div>
    </div>
  )
}
