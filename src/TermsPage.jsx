import ScrollFloat from './components/ScrollFloat'
import SiteFooter from './components/SiteFooter'
import TopNav from './components/TopNav'

const termsSections = [
  {
    title: '1. General Use',
    content: (
      <>
        <p>
          RetPark is a lifestyle and relaxation timer designed to help you
          unplug. You agree to use the App only for its intended personal,
          non-commercial purposes.
        </p>
        <p>
          You may not reverse-engineer, modify, or distribute any part of the
          App without our explicit permission.
        </p>
      </>
    ),
  },
  {
    title: '2. Not a Medical Device',
    content: (
      <>
        <p>
          RetPark is an entertainment and digital wellbeing tool. While it uses
          calming soundscapes and mindful mechanics, it is not a medical device.
        </p>
        <p>
          It is not intended to diagnose, treat, cure, or prevent any medical
          conditions, including ADHD, anxiety, or insomnia. Please consult a
          qualified healthcare provider for medical advice.
        </p>
      </>
    ),
  },
  {
    title: '3. In-App Purchases and Subscriptions',
    content: (
      <>
        <p>
          RetPark offers premium features through In-App Purchases, including
          RetPark PRO Lifetime, monthly subscriptions, or consumable tips.
        </p>
        <ul>
          <li>
            <strong>Payments:</strong> All payments are securely processed by
            Apple via your App Store account at confirmation of purchase.
          </li>
          <li>
            <strong>Subscriptions:</strong> If you purchase a recurring
            subscription, it will automatically renew unless auto-renew is
            turned off at least 24 hours before the end of the current period.
            You can manage and cancel your subscriptions by going to your Apple
            Account Settings after purchase.
          </li>
          <li>
            <strong>Refunds:</strong> Because all transactions are handled by
            Apple, we cannot process refunds directly. Please contact Apple
            Support for any refund requests.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Intellectual Property',
    content: (
      <p>
        All content within RetPark, including but not limited to the digital
        pet artwork, animations, UI/UX design, Chill Cards, and soundscapes,
        are the exclusive property of RetPark Studio and are protected by
        copyright laws.
      </p>
    ),
  },
  {
    title: '5. User Privacy',
    content: (
      <p>
        We respect your privacy immensely. RetPark is designed to operate
        without collecting your personal data. Please refer to our{' '}
        <a href="/privacy.html">Privacy Policy</a> for more details.
      </p>
    ),
  },
  {
    title: '6. Limitation of Liability',
    content: (
      <p>
        To the maximum extent permitted by law, RetPark Studio shall not be
        liable for any indirect, incidental, or consequential damages arising
        out of your use or inability to use the App. The App is provided on an
        &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
      </p>
    ),
  },
  {
    title: '7. Changes to These Terms',
    content: (
      <p>
        We reserve the right to modify these Terms at any time. We will notify
        you of any changes by updating the &quot;Last Updated&quot; date at the
        top of this page.
      </p>
    ),
  },
  {
    title: '8. Contact Us',
    content: (
      <>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>
          Email:{' '}
          <a href="mailto:pepermao94@gmail.com">pepermao94@gmail.com</a>
        </p>
        <p>
          Website:{' '}
          <a href="https://www.retpark.com" target="_blank" rel="noreferrer">
            https://www.retpark.com
          </a>
        </p>
      </>
    ),
  },
]

function TermsPage() {
  return (
    <main className="page terms-page">
      <section className="hero-section terms-hero">
        <div className="content-shell terms-shell">
          <TopNav currentPage="terms" />

          <div className="terms-header">
            <ScrollFloat
              containerClassName="section-float-line"
              textClassName="section-title"
              scrollStart="top bottom-=10%"
              scrollEnd="bottom center"
            >
              Terms of Use
            </ScrollFloat>
            <p>
              Welcome to RetPark! These Terms of Use (&quot;Terms&quot;) govern
              your use of the RetPark mobile application (&quot;the App&quot;)
              operated by RetPark Studio (&quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;).
            </p>
            <p>
              By downloading, accessing, or using the App, you agree to be
              bound by these Terms. If you do not agree, please do not use the
              App.
            </p>
          </div>
        </div>
      </section>

      <section className="terms-section">
        <div className="content-shell">
          <div className="terms-grid">
            {termsSections.map((section) => (
              <article key={section.title} className="terms-card">
                <h3>{section.title}</h3>
                {section.content}
              </article>
            ))}
          </div>
          <p className="terms-meta">Last Updated: March 22, 2026</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export default TermsPage
