import { assets, contactEmail } from '../siteData'

function SocialIcon({ children, label }) {
  return (
    <a className="social-link" href="/" aria-label={label} onClick={(event) => event.preventDefault()}>
      {children}
    </a>
  )
}

function TopNav({ currentPage = 'home' }) {
  const isPrivacyPage = currentPage === 'privacy'
  const isContactPage = currentPage === 'contact'
  const fallbackContactPage = '/contact.html'
  const mailtoHref = `mailto:${contactEmail}`

  const handleContactClick = (event) => {
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.altKey
      || event.ctrlKey
      || event.shiftKey
    ) {
      return
    }

    event.preventDefault()
    let pageHidden = false
    const onVisibilityChange = () => {
      if (document.hidden) {
        pageHidden = true
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange)
    window.location.href = mailtoHref

    window.setTimeout(() => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
      if (!pageHidden) {
        window.location.href = fallbackContactPage
      }
    }, 750)
  }

  return (
    <nav className="topbar">
      <a className="brand" href="/">
        <img src={assets.logo} alt="Ret Park logo" />
        <span>Ret Park</span>
      </a>
      <div className="top-actions">
        <div className="top-links">
          <a
            href={fallbackContactPage}
            aria-current={isContactPage ? 'page' : undefined}
            onClick={handleContactClick}
          >
            Contact Us
          </a>
          <span className="top-links-divider" aria-hidden="true" />
          <a href="/privacy.html" aria-current={isPrivacyPage ? 'page' : undefined}>
            Privacy Policy
          </a>
        </div>
        <span className="top-divider" aria-hidden="true" />
        <div className="social-links" aria-label="Social links">
          <SocialIcon label="X">
            <img src={assets.socialX} alt="" aria-hidden="true" />
          </SocialIcon>
          <SocialIcon label="TikTok">
            <img src={assets.socialTikTok} alt="" aria-hidden="true" />
          </SocialIcon>
          <SocialIcon label="Instagram">
            <img src={assets.socialInstagram} alt="" aria-hidden="true" />
          </SocialIcon>
        </div>
      </div>
    </nav>
  )
}

export default TopNav
