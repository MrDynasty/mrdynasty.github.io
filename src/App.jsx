import ScrollFloat from './components/ScrollFloat'

const assets = {
  meadow: '/assets/meadow.png',
  phoneFrame: '/assets/phone-frame.png',
  phoneScreen: '/assets/phone-screen.png',
  mascot: '/assets/mascot.png',
  logo: '/assets/logo.png',
  card1: '/assets/card-1.png',
  card2: '/assets/card-2.png',
  card3: '/assets/card-3.png',
  appStore: '/assets/app-store.svg',
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

function App() {
  return (
    <main className="page">
      <section className="hero-section">
        <nav className="topbar">
          <div className="brand">
            <img src={assets.logo} alt="Ret Park logo" />
            <span>Ret Park</span>
          </div>
          <div className="top-links">
            <a href="#contact">Contact Us</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <ScrollFloat
              containerClassName="hero-float"
              textClassName="hero-title"
              stagger={0.02}
            >
              Productivity is a trap. Let&apos;s rot together.
            </ScrollFloat>
            <p>
              The ultimate anti-hustle timer. Lay your phone flat, disconnect
              from the noise, and hatch a digital pet that thrives on your
              offline time.
            </p>
            <img src={assets.appStore} alt="Download on the App Store" />
            <small>Featured on iOS 17 • Zero Ads • Privacy First</small>
          </div>

          <div className="hero-device">
            <div className="phone-layer">
              <img className="frame" src={assets.phoneFrame} alt="" />
            </div>
            <img className="mascot" src={assets.mascot} alt="Ret Park mascot" />
          </div>
        </div>

        <img className="hero-meadow" src={assets.meadow} alt="" />
      </section>

      <section className="steps-section">
        <ScrollFloat
          containerClassName="section-float"
          textClassName="section-title"
          scrollStart="top bottom-=10%"
          scrollEnd="bottom center"
        >
          The easiest game ever: Do absolutely nothing.
        </ScrollFloat>

        <div className="steps-grid">
          {steps.map((item) => (
            <article key={item.title} className="step-card">
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-list">
          {features.map((item) => (
            <article key={item.title} className="feature-item">
              <img src={item.img} alt="" />
              <div>
                <h4>
                  {item.emoji} {item.title}
                </h4>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer-section">
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
      </footer>
    </main>
  )
}

export default App
