import ScrollFloat from './components/ScrollFloat'

const assets = {
  meadow: '/assets/meadow.png',
  phoneFrame: '/assets/phone-frame.png',
  mascot: '/assets/mascot.png',
  logo: '/assets/logo.png',
  card1: '/assets/card-1.png',
  card2: '/assets/card-2.png',
  card3: '/assets/card-3.png',
  appStore: '/assets/app-store-figma.png',
  feature1: '/assets/feature-1.png',
  feature2: '/assets/feature-2.png',
  feature3: '/assets/feature-3.png',
}

const steps = [
  {
    title: 'Disconnect.',
    desc: 'Lay your phone flat. Watch your stressed corporate dog finally take a nap.',
    img: assets.card1,
  },
  {
    title: "Don't Panic.",
    desc: 'Pick it up too soon? Your dog wakes up in a panic. Put it back down to soothe them.',
    img: assets.card2,
  },
  {
    title: 'Collect Rewards.',
    desc: 'Long-press to gently wake your dog. Draw witty, brutally honest "Chill Cards". Can you find the secret ones?',
    img: assets.card3,
  },
]

const features = [
  {
    title: 'Neurodivergent-Friendly Audio:',
    desc: 'Brown noise, rain, and puppy snores to calm racing thoughts.',
    img: assets.feature1,
    emoji: '🎵',
  },
  {
    title: 'StandBy Mode:',
    desc: 'Turn your charging iPhone into a lo-fi digital fireplace.',
    img: assets.feature2,
    emoji: '🏝️',
  },
  {
    title: 'Zero Data Collection',
    desc: "We don't track you. Your chill time is yours alone.",
    img: assets.feature3,
    emoji: '🔒',
  },
]

function SocialIcon({ children, label }) {
  return (
    <a className="social-link" href="/" aria-label={label} onClick={(event) => event.preventDefault()}>
      {children}
    </a>
  )
}

function App() {
  return (
    <main className="page">
      <section className="hero-section">
        <div className="content-shell hero-shell">
          <nav className="topbar">
            <div className="brand">
              <img src={assets.logo} alt="Ret Park logo" />
              <span>Ret Park</span>
            </div>
            <div className="top-actions">
              <div className="top-links">
                <a href="#contact">Contact Us</a>
                <a href="#privacy">Privacy Policy</a>
              </div>
              <div className="social-links" aria-label="Social links">
                <SocialIcon label="X">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 4h2.8l4.4 6.1L17.4 4H20l-6.5 7.4L20 20h-2.8l-4.8-6.6L6.6 20H4l7-8z" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="TikTok">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 4c.5 1.6 1.4 2.8 3 3.5 1 .4 1.8.5 3 .5v2.8c-1.3 0-2.6-.3-3.8-.8v4.6c0 3-2.4 5.4-5.4 5.4A5.4 5.4 0 0 1 5.4 15c0-3 2.4-5.4 5.4-5.4.3 0 .6 0 .9.1V13a2.5 2.5 0 0 0-.9-.2A2.3 2.3 0 0 0 8.5 15a2.3 2.3 0 0 0 2.3 2.3 2.3 2.3 0 0 0 2.3-2.3V4z" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3m0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7zm9.6 1.3a1.1 1.1 0 1 1 0 2.1 1.1 1.1 0 0 1 0-2.1M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </nav>

          <div className="hero-content">
            <div className="hero-copy">
              <div className="hero-title-group">
                <ScrollFloat
                  containerClassName="hero-float"
                  textClassName="hero-title"
                  stagger={0.02}
                >
                  Productivity is a trap.
                </ScrollFloat>
                <ScrollFloat
                  containerClassName="hero-float"
                  textClassName="hero-title"
                  stagger={0.02}
                >
                  Let&apos;s rot together.
                </ScrollFloat>
              </div>
              <p>
                The ultimate anti-hustle timer. Lay your phone flat, disconnect
                from the noise, and hatch a digital pet that thrives on your
                offline time.
              </p>
              <div className="hero-store">
                <img src={assets.appStore} alt="Download on the App Store" />
                <small>Featured on iOS 18 • Zero Ads • Privacy First</small>
              </div>
            </div>

            <img className="hero-device" src={assets.phoneFrame} alt="" />
          </div>

          <img className="mascot" src={assets.mascot} alt="Ret Park mascot" />
        </div>
      </section>

      <section className="steps-section">
        <div className="content-shell">
          <div className="section-float">
            <ScrollFloat
              containerClassName="section-float-line"
              textClassName="section-title"
              scrollStart="top bottom-=10%"
              scrollEnd="bottom center"
            >
              The easiest game ever:
            </ScrollFloat>
            <ScrollFloat
              containerClassName="section-float-line"
              textClassName="section-title"
              scrollStart="top bottom-=10%"
              scrollEnd="bottom center"
            >
              Do absolutely nothing.
            </ScrollFloat>
          </div>
          
          <div className="steps-grid">
            {steps.map((item) => (
              <article key={item.title} className="step-card">
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="content-shell">
          <div className="feature-list">
            {features.map((item) => (
              <article key={item.title} className="feature-item">
                <img src={item.img} alt="" />
                <div className="feature-copy">
                  <h4>
                    {item.emoji} {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer-section">
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
    </main>
  )
}

export default App
