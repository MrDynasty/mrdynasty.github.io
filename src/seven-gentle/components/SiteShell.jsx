import SGBrand from './SGBrand'
import SGFooter from './SGFooter'
import SGNav from './SGNav'

function SiteShell({ currentPage = 'home', children }) {
  return (
    <div className="sg-site">
      <a className="sg-skip-link" href="#main">
        Skip to content
      </a>
      <header className="sg-header">
        <div className="sg-shell sg-header-inner">
          <SGBrand />
          <SGNav currentPage={currentPage} />
        </div>
      </header>
      <main id="main">{children}</main>
      <SGFooter />
    </div>
  )
}

export default SiteShell
