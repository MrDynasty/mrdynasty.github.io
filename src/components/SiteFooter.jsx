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
        <p>Copyright © 2026 RetPark Studio. All rights reserved.</p>
        <img src={assets.meadow} alt="" />
      </div>
    </footer>
  )
}

export default SiteFooter
