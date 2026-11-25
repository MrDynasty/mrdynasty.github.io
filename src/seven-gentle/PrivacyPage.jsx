import SiteShell from './components/SiteShell'
import { contactEmail } from './content'

function PrivacyPage() {
  return (
    <SiteShell currentPage="privacy">
      <section className="sg-page-hero">
        <div className="sg-shell">
          <p className="sg-eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="sg-intro">
            Seven Gentle is designed so your practice stays on your iPhone. This
            policy explains what the app stores, what it never collects, and how
            our website handles information.
          </p>
        </div>
      </section>

      <div className="sg-shell">
        <article className="sg-doc">
          <div className="sg-callout">
            <h2>The short version</h2>
            <ul>
              <li>No account and no sign-in.</li>
              <li>No cloud sync of your practice data.</li>
              <li>No third-party analytics, tracking, or advertising SDKs.</li>
              <li>
                Your answers, plan, and history stay on your iPhone and are
                removed when you delete the app.
              </li>
            </ul>
          </div>

          <h2 id="scope">1. Who we are and what this policy covers</h2>
          <p>
            Seven Gentle is an iPhone app for short, gentle movement sessions.
            This policy applies to the Seven Gentle app (bundle identifier{' '}
            <strong>com.ppmm107.com</strong>) and to the pages at{' '}
            <a href="https://www.retpark.com/seven-gentle/">
              retpark.com/seven-gentle
            </a>
            .
          </p>
          <p>
            In this policy, “we”, “us”, and “our” mean the Seven Gentle team. You
            can reach us at{' '}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>

          <h2 id="stored">2. Information stored on your iPhone</h2>
          <p>
            Seven Gentle stores the following information locally on your device,
            using the app&apos;s own preferences:
          </p>
          <ul>
            <li>
              your questionnaire answers: age range, activity level, goals,
              support style, and days per week;
            </li>
            <li>the plan generated from those answers;</li>
            <li>
              your workout history, including completion and difficulty feedback;
            </li>
            <li>your reminder settings; and</li>
            <li>your accessibility settings, such as text size and contrast.</li>
          </ul>
          <p>
            This information is used only to run the app on your device. It is
            not sent to us or to anyone else. There is no account and no cloud
            sync, so it is not automatically restored on a new iPhone.
          </p>
          <p>
            Deleting the app removes this information. If you back up your iPhone
            with Apple&apos;s backup tools, app data may be included in that
            backup; we do not have access to your backup.
          </p>

          <h2 id="not-collected">3. Information we do not collect</h2>
          <p>Seven Gentle does not collect:</p>
          <ul>
            <li>
              your name, email address, phone number, or contacts;
            </li>
            <li>
              your precise or approximate location;
            </li>
            <li>
              health records, medical information, or data from the Health app;
            </li>
            <li>
              photos, microphone, or camera data; or
            </li>
            <li>advertising identifiers.</li>
          </ul>
          <p>
            The app does not include third-party analytics, tracking, or
            advertising SDKs, and it does not ask for App Tracking Transparency
            permission. We do not sell or share personal information.
          </p>

          <h2 id="membership">4. Membership and purchases</h2>
          <p>
            Subscriptions are purchased through Apple&apos;s App Store and
            processed by Apple. Seven Gentle reads only whether an active
            subscription exists; we never receive your payment card, billing
            address, or Apple Account credentials.
          </p>
          <p>
            Apple&apos;s handling of purchase information is governed by
            Apple&apos;s Privacy Policy. You can review your purchases and
            subscription status in your App Store account settings.
          </p>

          <h2 id="notifications">5. Notifications</h2>
          <p>
            Reminders are optional local notifications created and delivered on
            your iPhone. Reminder times and days stay on the device. You can
            change them in the app or turn notifications off in{' '}
            <strong>Settings &gt; Notifications &gt; Seven Gentle</strong>.
          </p>

          <h2 id="diagnostics">6. Diagnostics and crash reports</h2>
          <p>
            If you choose to share analytics and crash data with developers in
            your iPhone settings, Apple may provide us with aggregated,
            de-identified crash reports and usage metrics. We use them only to
            find and fix problems, and they do not identify you. We do not
            combine them with other information.
          </p>

          <h2 id="website">7. Our website</h2>
          <p>
            Our website is a static site. We do not set cookies, run analytics,
            or use advertising or tracking scripts on it.
          </p>
          <p>
            The site is hosted by GitHub Pages. GitHub may process standard
            technical information, such as your IP address and browser type, to
            deliver the pages and protect the service from abuse. We do not
            receive or use that information to identify visitors. See{' '}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub&apos;s Privacy Statement
            </a>{' '}
            for details.
          </p>
          <p>
            If you email us, we receive your email address and whatever you
            include in the message. We use it only to answer you and keep it only
            as long as needed to resolve your question. We do not add you to a
            mailing list.
          </p>

          <h2 id="children">8. Children&apos;s privacy</h2>
          <p>
            Seven Gentle is intended for adults. We do not knowingly collect
            personal information from children. Because the app does not collect
            personal information from anyone, it does not knowingly collect it
            from children under 13 (or the minimum age in your jurisdiction).
          </p>
          <p>
            If you believe a child has sent us personal information by email,
            contact us and we will delete it.
          </p>

          <h2 id="choices">9. Your choices and rights</h2>
          <ul>
            <li>
              <strong>Delete your practice data:</strong> delete the app from
              your iPhone.
            </li>
            <li>
              <strong>Stop reminders:</strong> turn them off in the app or in
              iPhone Settings.
            </li>
            <li>
              <strong>Manage your membership:</strong> use your App Store
              account settings.
            </li>
            <li>
              <strong>Ask us a question or ask us to delete an email:</strong>{' '}
              contact{' '}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </li>
          </ul>
          <p>
            Depending on where you live, you may have rights to access, correct,
            or delete personal information. The only personal information we may
            hold is what you send us by email; contact us to exercise those
            rights. Because we do not hold an account or your practice data,
            there is no profile for us to export or delete on our side.
          </p>

          <h2 id="changes">10. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. We will post the new
            version on this page and update the “Last updated” date below. If a
            change is significant, we will describe it on this page. We
            encourage you to review this page occasionally.
          </p>

          <h2 id="contact">11. Contact us</h2>
          <p>
            If you have any questions about this policy or how Seven Gentle
            handles information, email{' '}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Please do not
            send health records or payment details.
          </p>

          <p className="sg-doc-meta">
            Last updated: October 2026
            <br />
            Applies to Seven Gentle for iPhone (com.ppmm107.com) and
            retpark.com/seven-gentle.
            <br />
            <a href="#main">Back to top</a>
          </p>
        </article>
      </div>
    </SiteShell>
  )
}

export default PrivacyPage
