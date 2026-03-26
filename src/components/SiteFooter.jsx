import ScrollFloat from './ScrollFloat'
import { assets } from '../siteData'

function SiteFooter() {
  return (
    <footer className="footer-section" id="contact">
      <div className="content-shell">
        <ScrollFloat
          containerClassName="footer-float"
          textClassName="footer-title"
          scrollStart="top bottom-=20%"
          scrollEnd="bottom center"
        >
          Your digital soft landing.
        </ScrollFloat>
        <div className="footer-links" aria-label="Footer links">
          <a href="/contact.html">Contact Us</a>
          <span className="footer-links-divider" aria-hidden="true" />
          <a href="/privacy.html">Privacy Policy</a>
          <span className="footer-links-divider" aria-hidden="true" />
          <a href="/terms.html">Terms of Use</a>
        </div>
        <div className="footer-social" aria-label="Social links">
          <a
            className="social-link"
            href="https://www.tiktok.com/@retpark_studio"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.socialTikTok} alt="" aria-hidden="true" />
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com/retpark_studio/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.socialInstagram} alt="" aria-hidden="true" />
          </a>
        </div>
        <p>Copyright © 2026 RetPark Studio. All rights reserved.</p>
        <img src={assets.meadow} alt="" />
      </div>
    </footer>
  )
}

export default SiteFooter
