import { useState } from 'react'
import ScrollFloat from './components/ScrollFloat'
import SiteFooter from './components/SiteFooter'
import TopNav from './components/TopNav'
import { contactEmail } from './siteData'

function ContactPage() {
  const [copied, setCopied] = useState(false)
  const mailtoHref = `mailto:${contactEmail}`

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main className="page contact-page">
      <section className="hero-section contact-hero">
        <div className="content-shell contact-shell">
          <TopNav currentPage="contact" />

          <div className="contact-header">
            <ScrollFloat
              containerClassName="section-float-line"
              textClassName="section-title"
              scrollStart="top bottom-=10%"
              scrollEnd="bottom center"
            >
              Contact Us
            </ScrollFloat>
            <p>
              We will do our best to get back to you quickly. Use your default
              email app, or copy the address and send from any mailbox.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="content-shell">
          <div className="contact-grid">
            <article className="contact-card">
              <h3>Email Directly</h3>
              <p>Preferred contact email: {contactEmail}</p>
              <div className="contact-actions">
                <a className="contact-btn" href={mailtoHref}>
                  Open Email App
                </a>
                <button type="button" className="contact-btn ghost" onClick={handleCopyEmail}>
                  {copied ? 'Copied' : 'Copy Email'}
                </button>
              </div>
            </article>

            <article className="contact-card">
              <h3>How It Works</h3>
              <p>
                Tapping <strong>Open Email App</strong> uses a <code>mailto:</code> link,
                which will open your default email client and prefill the recipient as
                {` ${contactEmail}`}.
              </p>
            </article>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export default ContactPage
