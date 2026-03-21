import ScrollFloat from './components/ScrollFloat'
import SiteFooter from './components/SiteFooter'
import TopNav from './components/TopNav'

const privacySections = [
  {
    title: '1. Information We Do Not Collect',
    paragraphs: [
      'Put simply: We do not collect, store, transmit, or share any of your personal data on our servers.',
      'RetPark does not require you to create an account, does not track your location, and does not harvest your personal information. Your "chill sessions," focus data, and pet collection progress belong entirely to you.',
    ],
  },
  {
    title: '2. Local Storage and iCloud',
    paragraphs: [
      "All data generated within the App (such as your pet's status, chill tickets, and receipt cards) is stored locally on your iOS device.",
      "If you choose to back up your device using Apple's iCloud, your App data will be securely synced via your personal Apple ID. We do not have access to your iCloud data. This process is governed exclusively by Apple's Privacy Policy.",
    ],
  },
  {
    title: '3. In-App Purchases',
    paragraphs: [
      'RetPark offers In-App Purchases (such as the RetPark PRO Lifetime unlock). All payment transactions are processed securely by Apple via the App Store. We do not process, receive, or have access to your credit card information, billing details, or Apple ID credentials.',
    ],
  },
  {
    title: '4. Analytics and Crash Reports',
    paragraphs: [
      "We do not use third-party analytics or tracking SDKs. We may only receive anonymous, aggregated crash reports and usage metrics provided directly by Apple (if you have opted-in to share these analytics with developers in your iOS device settings). This anonymous data is used solely to fix bugs and improve the App's performance.",
    ],
  },
  {
    title: '5. External Links',
    paragraphs: [
      'The App may contain links to our official website (https://www.retpark.com) or external social media platforms for support and community purposes. Please note that if you click on a third-party link, you will be directed to that site.',
      'We strongly advise you to review the Privacy Policy of any external sites you visit, as we have no control over their content or privacy practices.',
    ],
  },
  {
    title: "6. Children's Privacy",
    paragraphs: [
      'RetPark does not knowingly collect any personal information from children under the age of 13 (or 16 in certain jurisdictions), as we do not collect personal information from anyone.',
    ],
  },
  {
    title: '7. Changes to This Privacy Policy',
    paragraphs: [
      'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.',
    ],
  },
  {
    title: '8. Contact Us',
    paragraphs: [
      'If you have any questions or suggestions about our Privacy Policy, please feel free to contact us:',
      'Website: https://www.retpark.com',
      'Email: pepermao94@gmail.com',
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
              Welcome to RetPark! We built this app to be a safe, stress-free
              digital sanctuary. Because we believe in true relaxation, we have
              designed RetPark with a strict privacy-first approach.
            </p>
            <p>
              This Privacy Policy explains how we handle your data when you use
              the RetPark mobile application ("the App") and our official website
              (https://www.retpark.com).
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
              </article>
            ))}
          </div>
          <p className="privacy-meta">Last Updated: March 17, 2026</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export default PrivacyPage
