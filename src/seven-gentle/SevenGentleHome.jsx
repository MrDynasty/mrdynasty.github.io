import SiteShell from './components/SiteShell'
import { AlertIcon } from './components/icons'
import {
  features,
  homeFaqs,
  steps,
  supportMailto,
  supportPaths,
} from './content'

function FeatureIcon({ feature }) {
  if (feature.iconText) {
    return (
      <span className="sg-feature-icon sg-feature-icon--text" aria-hidden="true">
        {feature.iconText}
      </span>
    )
  }

  const Icon = feature.Icon
  return (
    <span className="sg-feature-icon" aria-hidden="true">
      <Icon />
    </span>
  )
}

function SevenGentleHome() {
  return (
    <SiteShell currentPage="home">
      <section className="sg-hero">
        <div className="sg-shell sg-hero-grid">
          <div>
            <p className="sg-eyebrow">Gentle movement for every day</p>
            <h1>A little movement. A better day.</h1>
            <p className="sg-lead">
              Seven minutes of gentle movement, matched to the way you move —
              standing, holding a sturdy chair, or seated.
            </p>
            <p className="sg-body-copy">
              Seven Gentle is made for older adults who want to stay steady and
              independent without a gym, special equipment, or a complicated
              plan. Answer five short questions and follow along at home.
            </p>
            <div className="sg-hero-actions">
              <a className="sg-btn sg-btn-primary" href="#how-it-works">
                See how it works
              </a>
              <a className="sg-btn sg-btn-secondary" href={supportMailto}>
                Ask a question
              </a>
            </div>
            <p className="sg-meta">Designed for iPhone · No account needed</p>
          </div>

          <div className="sg-timer-card" aria-hidden="true">
            <div className="sg-timer-ring">
              <div className="sg-timer-face">
                <span className="sg-timer-value">7:00</span>
                <span className="sg-timer-unit">minutes</span>
              </div>
            </div>
            <p className="sg-timer-caption">Your daily gentle practice</p>
            <ul className="sg-pills">
              <li className="sg-pill">Standing</li>
              <li className="sg-pill">Chair support</li>
              <li className="sg-pill">Seated</li>
            </ul>
            <p className="sg-timer-note">One workout. One sturdy chair. No rush.</p>
          </div>
        </div>
      </section>

      <section className="sg-section" id="how-it-works" aria-labelledby="how-heading">
        <div className="sg-shell">
          <div className="sg-section-head">
            <p className="sg-eyebrow">How it works</p>
            <h2 id="how-heading">
              Five questions. One plan that meets you where you are.
            </h2>
            <p>
              No long forms and no fitness test. Seven Gentle asks what it needs
              to choose a safe starting point, then keeps the plan simple enough
              to actually use.
            </p>
          </div>
          <ol className="sg-steps">
            {steps.map((step, index) => (
              <li className="sg-step" key={step.title}>
                <span className="sg-step-number" aria-hidden="true">
                  {index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="sg-section sg-section--raised"
        aria-labelledby="paths-heading"
      >
        <div className="sg-shell">
          <div className="sg-section-head">
            <p className="sg-eyebrow">Three ways to move</p>
            <h2 id="paths-heading">Support that fits the way you feel today.</h2>
            <p>
              The fourth question asks how you would like to move. Your answer
              sets the whole course, so you are never asked to stand through a
              seated session or guess whether a movement is safe.
            </p>
          </div>
          <ul className="sg-paths">
            {supportPaths.map((path) => {
              const Icon = path.Icon
              return (
                <li className="sg-path" key={path.title}>
                  <span className="sg-path-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{path.title}</h3>
                  <p>{path.body}</p>
                </li>
              )
            })}
          </ul>
          <p className="sg-note">
            If you often feel unsteady, Seven Gentle uses seated movements. It
            will not switch your support style without asking.
          </p>
        </div>
      </section>

      <section className="sg-section" aria-labelledby="features-heading">
        <div className="sg-shell">
          <div className="sg-section-head">
            <p className="sg-eyebrow">Built for real life</p>
            <h2 id="features-heading">
              Simple by design, so the only thing you have to do is start.
            </h2>
          </div>
          <ul className="sg-features">
            {features.map((feature) => (
              <li className="sg-feature" key={feature.title}>
                <FeatureIcon feature={feature} />
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="sg-section sg-section--tint"
        aria-labelledby="privacy-heading"
      >
        <div className="sg-shell sg-band">
          <div>
            <p className="sg-eyebrow">Privacy first</p>
            <h2 id="privacy-heading">Your practice stays on your iPhone.</h2>
            <p>
              No account, no cloud sync, and no third-party analytics or
              advertising SDKs. Deleting the app removes your practice data.
            </p>
          </div>
          <a className="sg-btn sg-btn-secondary" href="/seven-gentle/privacy/">
            Read the privacy policy
          </a>
        </div>
      </section>

      <section className="sg-section" aria-labelledby="membership-heading">
        <div className="sg-shell sg-band">
          <div>
            <p className="sg-eyebrow">Free to start</p>
            <h2 id="membership-heading">
              Start with a free course. Join only if it helps.
            </h2>
            <p>
              Seven Gentle includes a free course you can use without a
              membership. An optional monthly or yearly subscription unlocks the
              full course library. Prices are shown in the app before you buy,
              and you can cancel in your App Store settings at any time.
            </p>
          </div>
          <a className="sg-btn sg-btn-secondary" href="/seven-gentle/terms/">
            Membership terms
          </a>
        </div>
      </section>

      <section className="sg-section" aria-labelledby="safety-heading">
        <div className="sg-shell">
          <div className="sg-safety">
            <span className="sg-safety-icon" aria-hidden="true">
              <AlertIcon />
            </span>
            <div>
              <h2 id="safety-heading">
                Move gently, and stop if something does not feel right.
              </h2>
              <p>
                Use a stable chair for supported and seated workouts, keep the
                area around you clear, and wear shoes with grip if you are
                standing. Stop if you feel dizzy, short of breath, or unsteady.
                Seven Gentle is not medical advice — talk to your doctor before
                starting a new routine, especially after a fall, surgery, or a
                change in medication.
              </p>
              <a href="/seven-gentle/support/#safety">More safety guidance</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section" aria-labelledby="faq-heading">
        <div className="sg-shell">
          <div className="sg-section-head">
            <p className="sg-eyebrow">Common questions</p>
            <h2 id="faq-heading">Good to know</h2>
          </div>
          <div className="sg-faq">
            {homeFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <div className="sg-faq-body">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

export default SevenGentleHome
