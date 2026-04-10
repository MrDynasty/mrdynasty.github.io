import ScrollFloat from './components/ScrollFloat'
import SiteFooter from './components/SiteFooter'
import TopNav from './components/TopNav'
import { appStoreUrl, assets, features, steps } from './siteData'

function App() {
  return (
    <main className="page">
      <section className="hero-section">
        <div className="content-shell hero-shell">
          <TopNav />

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
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                >
                  <img src={assets.appStore} alt="" />
                </a>
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

      <SiteFooter />
    </main>
  )
}

export default App
