import { assets } from '../siteData'

function SocialIcon({ children, label }) {
  return (
    <a className="social-link" href="/" aria-label={label} onClick={(event) => event.preventDefault()}>
      {children}
    </a>
  )
}

function TopNav({ isPrivacyPage = false }) {
  const contactHref = isPrivacyPage ? '/#contact' : '#contact'

  return (
    <nav className="topbar">
      <a className="brand" href="/">
        <img src={assets.logo} alt="Ret Park logo" />
        <span>Ret Park</span>
      </a>
      <div className="top-actions">
        <div className="top-links">
          <a href={contactHref}>Contact Us</a>
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
