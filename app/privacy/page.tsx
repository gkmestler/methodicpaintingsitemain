import type { Metadata } from 'next'
import { site } from '@/lib/site'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses, and protects information submitted through this website.`,
  alternates: { canonical: '/privacy' },
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <article className={styles.article}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: [date]</p>

          <h2>Who we are</h2>
          <p>
            This website is operated by {site.name}, based in Massachusetts. You can reach us at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>Information we collect</h2>
          <p>
            When you submit the contact form we collect the information you provide: your name, company, town, phone number, email address, and anything you tell us about your business. We use this information only to respond to your inquiry and to evaluate a potential partnership.
          </p>
          <p>
            Like most websites, our hosting provider may automatically log basic technical information such as your IP address, browser type, and the pages you visit. We use this only to keep the site running and secure.
          </p>

          <h2>How we use your information</h2>
          <p>
            We use the information you share to reply to you, to discuss a potential transaction, and to keep records of our conversations. We do not sell your information and we do not share it with third parties for their own marketing.
          </p>

          <h2>Service providers</h2>
          <p>
            Contact form submissions are delivered to us by email through a third-party email service. Our site is hosted by a third-party hosting provider. These providers process data on our behalf and are not permitted to use it for their own purposes.
          </p>

          <h2>Confidentiality</h2>
          <p>
            We understand that a conversation about selling or growing your business is sensitive. We treat everything you share with us as confidential and will not discuss it with anyone outside our team and advisors without your permission.
          </p>

          <h2>Data retention</h2>
          <p>We keep inquiry information for as long as needed to follow up with you and for our business records. You can ask us to delete your information at any time.</p>

          <h2>Your choices</h2>
          <p>
            You can request access to, correction of, or deletion of the information we hold about you by emailing <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>Changes to this policy</h2>
          <p>We may update this policy from time to time. The date at the top of this page shows when it was last revised.</p>
        </article>
      </div>
    </main>
  )
}
