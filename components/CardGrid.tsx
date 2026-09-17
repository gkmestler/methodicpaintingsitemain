import Section from './Section'
import text from './type.module.css'
import styles from './CardGrid.module.css'

type Card = {
  title: string
  body: string
  icon?: React.ReactNode
}

type CardGridProps = {
  heading?: string
  intro?: string
  cards: Card[]
  tone?: 'dark' | 'black' | 'navy'
  columns?: 2 | 3
}

// Grid of bordered cards, the square-cornered card style from the reference.
export default function CardGrid({ heading, intro, cards, tone = 'dark', columns = 3 }: CardGridProps) {

  return (
    <Section tone={tone}>
      {(heading || intro) && (
        <div className={styles.header} data-reveal>
          {heading && <h2 className={text.heading}>{heading}</h2>}
          {intro && <p className={`${text.body} ${text.muted}`}>{intro}</p>}
        </div>
      )}
      <div className={`${styles.grid} ${columns === 2 ? styles.two : styles.three}`}>
        {cards.map((card, index) => (
          <div
            key={card.title}
            className={styles.card}
            data-reveal
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {card.icon && <div className={styles.icon}>{card.icon}</div>}
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.body}>{card.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
