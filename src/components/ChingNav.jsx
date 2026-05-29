function ChingNav({ currentPage = 'home' }) {
  const isChingPrivacy = currentPage === 'ching-privacy'
  const isChingTerms = currentPage === 'ching-terms'

  return (
    <nav className="topbar">
      <a className="brand" href="/">
        <span>ching</span>
      </a>
      <div className="top-actions">
        <div className="top-links">
          <a
            href="/ching-privacy.html"
            aria-current={isChingPrivacy ? 'page' : undefined}
          >
            Privacy Policy
          </a>
          <span className="top-links-divider" aria-hidden="true" />
          <a
            href="/ching-terms.html"
            aria-current={isChingTerms ? 'page' : undefined}
          >
            Terms of Use
          </a>
        </div>
      </div>
    </nav>
  )
}

export default ChingNav
