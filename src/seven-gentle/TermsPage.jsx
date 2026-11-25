import SiteShell from './components/SiteShell'
import { contactEmail } from './content'

function TermsPage() {
  return (
    <SiteShell currentPage="terms">
      <section className="sg-page-hero">
        <div className="sg-shell">
          <p className="sg-eyebrow">Legal</p>
          <h1>Terms of Use</h1>
          <p className="sg-intro">
            These terms cover your use of Seven Gentle, including the safety
            guidance and the optional membership.
          </p>
        </div>
      </section>

      <div className="sg-shell">
        <article className="sg-doc">
          <h2 id="about">1. About these terms</h2>
          <p>
            These Terms of Use (“terms”) govern your use of the Seven Gentle
            iPhone app and the pages at{' '}
            <a href="https://www.retpark.com/seven-gentle/">
              retpark.com/seven-gentle
            </a>
            . By downloading, accessing, or using the app, you agree to these
            terms. If you do not agree, please do not use the app.
          </p>
          <p>
            In these terms, “we”, “us”, and “our” mean the Seven Gentle team. You
            can contact us at{' '}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>

          <h2 id="licence">2. Your licence</h2>
          <p>
            We grant you a personal, non-exclusive, non-transferable, revocable
            licence to use the app on Apple devices you own or control, for
            personal, non-commercial purposes. You may not copy, modify,
            reverse-engineer, redistribute, sell, or create derivative works from
            the app or its content, except where the law allows it.
          </p>

          <h2 id="medical">3. Not medical advice</h2>
          <p>
            Seven Gentle provides general wellbeing and movement content. It is
            not a medical device and does not provide medical advice, diagnosis,
            or treatment. It is not a substitute for advice from your doctor or
            another qualified health professional.
          </p>
          <p>
            Talk to your doctor before starting a new exercise routine,
            especially if you have a health condition, have had a fall or
            surgery, or your medication has changed.
          </p>
          <p>
            Stop and rest if you feel pain, dizzy, short of breath, or unsteady.
            Use a sturdy chair when the workout calls for support, keep the area
            around you clear, and wear shoes with grip if you are standing.
          </p>

          <h2 id="plan">4. Your plan and content changes</h2>
          <p>
            Your plan is generated from the answers you give in the
            questionnaire. Courses may be updated or replaced. If a course in
            your plan is withdrawn, the app will show the change and offer an
            alternative instead of silently starting a different workout.
          </p>
          <p>
            The workout videos, images, and text are protected by copyright and
            may not be redistributed.
          </p>

          <h2 id="membership">5. Free courses and membership</h2>
          <p>
            Some courses are available without a membership. Other courses
            require an optional monthly or yearly subscription.
          </p>
          <ul>
            <li>
              <strong>Payment:</strong> the subscription price is charged to your
              Apple Account at confirmation of purchase. Prices are shown in the
              app before you buy and are set by the App Store for your region.
            </li>
            <li>
              <strong>Automatic renewal:</strong> the subscription renews
              automatically unless you cancel at least 24 hours before the end of
              the current period. Your Apple Account is charged for renewal
              within 24 hours before the period ends.
            </li>
            <li>
              <strong>Managing and cancelling:</strong> you can manage or cancel
              in your App Store account settings. Deleting the app does not
              cancel a subscription.
            </li>
            <li>
              <strong>Refunds:</strong> purchases are handled by Apple. We cannot
              issue refunds directly; please contact Apple Support.
            </li>
          </ul>
          <p>
            Any free trial or promotional offer is governed by the terms shown in
            the app or App Store at the time you accept it.
          </p>

          <h2 id="apple">6. Apple&apos;s role</h2>
          <p>
            Apple&apos;s Standard End User License Agreement also applies to the
            app. Apple is not a party to these terms, is not responsible for the
            app or its content, and has no obligation to provide maintenance or
            support for it. Apple is a third-party beneficiary of these terms and
            may enforce them.
          </p>

          <h2 id="privacy">7. Privacy</h2>
          <p>
            Your privacy matters. Practice data stays on your iPhone, and we do
            not sell personal information. Read the{' '}
            <a href="/seven-gentle/privacy/">Privacy Policy</a> for details.
          </p>

          <h2 id="acceptable-use">8. Acceptable use</h2>
          <p>
            Do not use the app in a way that breaks the law, interferes with the
            app or another person&apos;s use of it, or attempts to access data or
            systems you are not authorised to access.
          </p>

          <h2 id="availability">9. Availability and changes to the app</h2>
          <p>
            We may update, change, or discontinue features of the app. We do not
            guarantee that the app will always be available or error-free. Video
            playback depends on your device and iOS version; purchases and
            restoring purchases need a connection to the App Store.
          </p>

          <h2 id="ip">10. Intellectual property</h2>
          <p>
            Seven Gentle, its name, logo, videos, images, text, and design are
            protected by copyright and other laws. These terms do not give you
            ownership of any content.
          </p>

          <h2 id="disclaimer">11. Disclaimers</h2>
          <p>
            To the fullest extent permitted by law, the app is provided “as is”
            and “as available”. We do not warrant that the app will meet your
            requirements or that any content is suitable for your particular
            circumstances. The safety guidance in the app and in these terms is
            general information, not personalised medical advice.
          </p>

          <h2 id="liability">12. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, we are not liable for
            indirect, incidental, special, consequential, or punitive damages, or
            for loss of data, arising out of your use of or inability to use the
            app.
          </p>
          <p>
            Nothing in these terms excludes or limits liability that cannot be
            excluded or limited by law, including liability for death or personal
            injury caused by negligence, for fraud, or for your mandatory
            consumer rights.
          </p>

          <h2 id="changes">13. Changes to these terms</h2>
          <p>
            We may update these terms from time to time. We will post the new
            version on this page and update the “Last updated” date below.
            Continued use of the app after a change means you accept the updated
            terms.
          </p>

          <h2 id="contact">14. Contact</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
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

export default TermsPage
