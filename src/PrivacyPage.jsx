import ScrollFloat from './components/ScrollFloat'
import SiteFooter from './components/SiteFooter'
import TopNav from './components/TopNav'

const privacySections = [
  {
    title: '1. Data Collection',
    paragraphs: [
      'Ret Park does not require account registration to access the core experience. We do not ask for sensitive personal data to use core timer and companion features.',
    ],
  },
  {
    title: '2. Device and Usage Data',
    paragraphs: [
      'We keep telemetry minimal. Operational diagnostics, if enabled, are limited to reliability and error monitoring and are designed to avoid direct personal identification.',
    ],
  },
  {
    title: '3. How Information Is Used',
    bullets: [
      'Maintain core app stability and feature reliability.',
      'Troubleshoot crashes and improve product quality.',
      'Protect service integrity and reduce abuse.',
    ],
  },
  {
    title: '4. Third-Party Services',
    paragraphs: [
      'Ret Park avoids invasive trackers. When third-party integrations are introduced, this page will be updated before rollout to describe their purpose and data impact.',
    ],
  },
  {
    title: '5. Data Retention',
    paragraphs: [
      'Any operational data is retained only for as long as required for technical operation, security, and legal compliance.',
    ],
  },
  {
    title: "6. Children's Privacy",
    paragraphs: [
      'Ret Park is not intended to knowingly collect personal data from children. If you believe data may have been submitted in error, contact us so we can review and remove it where appropriate.',
    ],
  },
  {
    title: '7. Contact',
    paragraphs: [
      'For privacy-related requests, please contact privacy@retpark.app.',
    ],
  },
]

function PrivacyPage() {
  return (
    <main className="page privacy-page">
      <section className="hero-section privacy-hero">
        <div className="content-shell privacy-shell">
          <TopNav currentPage="privacy" />

          <div className="privacy-header">
            <ScrollFloat
              containerClassName="section-float-line"
              textClassName="section-title"
              scrollStart="top bottom-=10%"
              scrollEnd="bottom center"
            >
              Privacy Policy
            </ScrollFloat>
            <p>
              Ret Park is designed to be calm and private by default. This page
              explains what we collect, why we collect it, and how we protect your
              information.
            </p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="content-shell">
          <div className="privacy-grid">
            {privacySections.map((section) => (
              <article key={section.title} className="privacy-card">
                <h3>{section.title}</h3>
                {section.paragraphs?.map((text) => (
                  <p key={text}>{text}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
          <p className="privacy-meta">Last updated: March 21, 2026</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export default PrivacyPage
