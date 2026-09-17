import Image from 'next/image'
import styles from './PhotoStrip.module.css'

// Placeholder crew and job-site photos. Replace the files in
// /public/images/placeholders and update the alt text.
const photos = [
  { src: '/images/placeholders/photo-1.png', alt: '[Crew photo 1]' },
  { src: '/images/placeholders/photo-2.png', alt: '[Job-site photo 2]' },
  { src: '/images/placeholders/photo-3.png', alt: '[Crew photo 3]' },
  { src: '/images/placeholders/photo-4.png', alt: '[Job-site photo 4]' },
  { src: '/images/placeholders/photo-5.png', alt: '[Crew photo 5]' },
]

export default function PhotoStrip() {
  return (
    <section className={styles.strip} aria-label="Crew and job-site photos">
      <div className={styles.row}>
        {photos.map((photo, index) => (
          <div key={photo.src} className={styles.slot} data-reveal style={{ transitionDelay: `${index * 0.08}s` }}>
            <Image src={photo.src} alt={photo.alt} width={1200} height={900} sizes="(min-width: 1024px) 20vw, (min-width: 576px) 40vw, 70vw" className={styles.image} />
          </div>
        ))}
      </div>
    </section>
  )
}
