import { useState } from 'react'
import SiteShell from './components/SiteShell'
import { contactEmail, supportFaqs, supportMailto } from './content'

function SupportPage() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <SiteShell currentPage="support">
      <section className="sg-page-hero">
        <div className="sg-shell sg-support-hero-grid">
          <div>
            <p className="sg-eyebrow">Support</p>
            <h1>We&apos;re here to help.</h1>
            <p className="sg-intro">
              Seven Gentle is meant to be simple. If something is not working,
              or you are not sure what to do next, start with the answers below
              — or send us an email.
            </p>
          </div>

          <div className="sg-contact-card">
            <h2>Email support</h2>
            <p>
              Tell us what happened and we will get back to you. It helps to
              include your iPhone model, your iOS version, and the steps that
              led to the problem.
            </p>
            <a className="sg-contact-email" href={supportMailto}>
              {contactEmail}
            </a>
            <div className="sg-contact-actions">
              <a className="sg-btn sg-btn-primary sg-btn--small" href={supportMailto}>
                Open email app
              </a>
              <button
                type="button"
                className="sg-btn sg-btn-secondary sg-btn--small"
                onClick={handleCopyEmail}
              >
                {copied ? 'Copied' : 'Copy email'}
              </button>
            </div>
            <span className="sg-copy-status" role="status" aria-live="polite">
              {copied ? 'Email address copied.' : ''}
            </span>
            <p className="sg-small">
              Please do not send payment details, health records, or other
              sensitive information.
            </p>
          </div>
        </div>
      </section>

      <section className="sg-section" aria-labelledby="help-heading">
        <div className="sg-shell">
          <div className="sg-section-head">
            <p className="sg-eyebrow">Quick help</p>
            <h2 id="help-heading">Answers to the things people ask most.</h2>
          </div>

          <div className="sg-help-grid">
            <article className="sg-help-card" id="getting-started">
              <h2>Getting started</h2>
              <p>
                Answer the short questionnaire and Seven Gentle will match you
                with a seven-minute course for your support style. Each workout
                starts from the home screen.
              </p>
              <p>
                Follow along with the video and pause whenever you need to. You
                can change how many days a week you practise at any time from
                your profile.
              </p>
            </article>

            <article className="sg-help-card" id="changing-plan">
              <h2>Changing your plan</h2>
              <p>
                From your profile, choose <strong>View or edit plan</strong> to
                see the parts of your workout and change how many days a week you
                practise.
              </p>
              <p>
                If your support needs change, finish a workout and choose{' '}
                <strong>Change support needs</strong> on the summary screen, then
                answer the questionnaire again.
              </p>
            </article>

            <article className="sg-help-card" id="difficulty">
              <h2>Choosing a difficulty</h2>
              <p>
                After a workout, tell us whether it felt{' '}
                <strong>Too easy</strong>, <strong>Just right</strong>, or{' '}
                <strong>Too difficult</strong>. That answer is stored with the
                session so you can review it in <strong>View progress</strong>.
              </p>
              <p>
                If a movement hurts, stop and rest. Seven Gentle is not medical
                treatment and is not a substitute for advice from your clinician.
              </p>
            </article>

            <article className="sg-help-card" id="reminders">
              <h2>Reminders and notifications</h2>
              <p>
                Reminders are optional local notifications scheduled on your
                iPhone. No reminder data leaves the device.
              </p>
              <p>
                You can change the times and days in <strong>Reminders</strong>,
                or turn reminders off there or in{' '}
                <strong>Settings &gt; Notifications &gt; Seven Gentle</strong>.
              </p>
            </article>

            <article className="sg-help-card" id="membership">
              <h2>Membership and purchases</h2>
              <ul>
                <li>
                  Open <strong>Your Subscription</strong> in your profile to see
                  your current plan, restore a purchase, or open Apple&apos;s
                  subscription management screen.
                </li>
                <li>
                  Prices and renewal dates are shown in the app and in your App
                  Store account. Apple processes every payment.
                </li>
                <li>
                  To cancel, open your iPhone <strong>Settings</strong>, tap your
                  name, then <strong>Subscriptions</strong>. Deleting the app
                  does not cancel a subscription.
                </li>
              </ul>
              <p>
                If the app says the product is unavailable, check your connection
                and try again later. If a purchase is missing, use{' '}
                <strong>Restore purchases</strong>; if it still does not appear,
                contact Apple Support.
              </p>
            </article>

            <article className="sg-help-card" id="accessibility">
              <h2>Accessibility</h2>
              <p>
                Open <strong>Accessibility</strong> in the app to choose a larger
                text size and turn on higher contrast or spoken cues. Changes
                apply immediately.
              </p>
              <p>
                Seven Gentle also follows the iPhone&apos;s larger text setting
                and works with VoiceOver. If something is still hard to read or
                tap, email us and tell us which screen it is.
              </p>
            </article>

            <article className="sg-help-card" id="data">
              <h2>Your data</h2>
              <p>
                Your questionnaire answers, plan, workout history, reminders, and
                accessibility settings are stored locally on your iPhone. There
                is no account and no cloud sync.
              </p>
              <p>
                Deleting the app removes this data permanently. Because there is
                no server copy, we cannot restore your history for you.
              </p>
            </article>

            <article className="sg-help-card" id="safety">
              <h2>Practising safely</h2>
              <p>
                Use a stable chair for supported and seated workouts, keep the
                area around you clear, and wear shoes with grip if you are
                standing.
              </p>
              <p>
                Stop if you feel dizzy, short of breath, or unsteady. Ask your
                doctor before starting a new exercise routine, especially after a
                fall, surgery, or a change in medication.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="sg-section sg-section--raised" aria-labelledby="faq-heading">
        <div className="sg-shell">
          <div className="sg-section-head">
            <p className="sg-eyebrow">More questions</p>
            <h2 id="faq-heading">Frequently asked</h2>
          </div>
          <div className="sg-faq">
            {supportFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <div className="sg-faq-body">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section" aria-labelledby="contact-heading">
        <div className="sg-shell sg-band">
          <div>
            <p className="sg-eyebrow">Still stuck?</p>
            <h2 id="contact-heading">Send us the details and we will take a look.</h2>
            <p>
              Include your iPhone model, your iOS version, and a short
              description of what happened. Screenshots are welcome, as long as
              they do not show personal or health information.
            </p>
          </div>
          <a className="sg-btn sg-btn-primary" href={supportMailto}>
            Email {contactEmail}
          </a>
        </div>
      </section>
    </SiteShell>
  )
}

export default SupportPage
