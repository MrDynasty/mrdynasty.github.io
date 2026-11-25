import SGBrand from './SGBrand'
import { contactEmail, supportMailto } from '../content'

function SGFooter() {
  return (
    <footer className="sg-footer">
      <div className="sg-shell">
        <div className="sg-footer-top">
          <div>
            <SGBrand />
            <p>
              Seven minutes of gentle movement, matched to how you move.
              Designed for iPhone, and made to be easy to use.
            </p>
          </div>
          <div>
            <h2 className="sg-footer-heading">Help and legal</h2>
            <ul className="sg-footer-links">
              <li>
                <a href="/seven-gentle/">Home</a>
              </li>
              <li>
                <a href="/seven-gentle/support/">Support</a>
              </li>
              <li>
                <a href="/seven-gentle/privacy/">Privacy Policy</a>
              </li>
              <li>
                <a href="/seven-gentle/terms/">Terms of Use</a>
              </li>
              <li>
                <a href={supportMailto}>Email us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sg-footer-bottom">
          <span>© 2026 Seven Gentle. All rights reserved.</span>
          <span>
            Not a medical device. Read the{' '}
            <a href="/seven-gentle/support/#safety">safety guidance</a>.
          </span>
          <span>
            Contact: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default SGFooter
