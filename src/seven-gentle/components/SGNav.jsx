const links = [
  { page: 'home', href: '/seven-gentle/', label: 'Home' },
  { page: 'support', href: '/seven-gentle/support/', label: 'Support' },
  { page: 'privacy', href: '/seven-gentle/privacy/', label: 'Privacy' },
  { page: 'terms', href: '/seven-gentle/terms/', label: 'Terms' },
]

function SGNav({ currentPage = 'home' }) {
  return (
    <nav className="sg-nav" aria-label="Seven Gentle">
      <ul>
        {links.map((link) => (
          <li key={link.page}>
            <a
              href={link.href}
              aria-current={currentPage === link.page ? 'page' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SGNav
