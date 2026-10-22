'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { TeamMember } from '@/data/team'
import styles from './TeamGrid.module.css'

export default function TeamMemberInfo({ member }: { member: TeamMember }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const expandable = Boolean(member.bio)
  const toggle = () => {
    if (expandable) setIsExpanded((open) => !open)
  }

  return (
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
              {member.titleNote && <em className={styles.titleNote}>{member.titleNote}</em>}
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
  )
}
