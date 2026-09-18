import { Activity, Eye, Fingerprint, Layers3, ShieldCheck, Timer, ArrowDown, Check } from 'lucide-react'
import { ChromeButton, CookieNotice, DotGrid, FeatureCard, PageShell, SectionLabel } from '@/components/site-header'

const features = [
  { icon: <Activity aria-hidden="true" />, title: 'Every event, in order', text: 'See every Meta Pixel event a page sends, exactly as it fires.' },
  { icon: <Eye aria-hidden="true" />, title: 'Validate with confidence', text: 'Inspect event data, parameters, and tracking setup in one clear view.' },
  { icon: <Layers3 aria-hidden="true" />, title: 'Standard or custom', text: 'Monitor standard and custom events in real time, without the guesswork.' },
  { icon: <Fingerprint aria-hidden="true" />, title: 'Know where it came from', text: 'Identify Pixel IDs and the frame each event originated from.' },
  { icon: <ShieldCheck aria-hidden="true" />, title: 'Catch what is off', text: 'Spot missing events, duplicates, and malformed values before launch.' },
  { icon: <Timer aria-hidden="true" />, title: 'Private by design', text: 'Personal-looking values are masked when read. Events last minutes, not forever.' },
]

export default function Home() {
  return <PageShell>
    <main>
      <section className="hero">
        <DotGrid />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <SectionLabel>Meta Pixel event log</SectionLabel>
            <h1>See what your pixels <em>actually</em> send.</h1>
            <p className="hero-intro">Receipts is a clear, privacy-minded validation tool for developers, agencies, and growth teams who want to know what&apos;s happening under the hood.</p>
            <div className="hero-actions"><ChromeButton /><span className="free-note"><span className="pulse-dot" />No account. No setup.</span></div>
          </div>
          <div className="hero-visual" aria-label="Illustration of a Meta Pixel event log">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="receipt-window">
              <div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span className="window-title">RECEIPTS / LIVE LOG</span><span className="window-status"><b /> LIVE</span></div>
              <div className="log-meta"><span>EVENT</span><span>PIXEL ID</span><span>FRAME</span></div>
              {['PageView', 'ViewContent', 'AddToCart', 'Purchase'].map((item, index) => <div className="log-row" key={item}><span className="event-name"><b className={index === 3 ? 'event-dot gold' : 'event-dot'} />{item}</span><span className="mono">{index % 2 ? '8942•••17' : '8942•••17'}</span><span className="frame-tag">{index === 0 ? 'top' : 'iframe'}</span><Check className="check" aria-hidden="true" /></div>)}
              <div className="window-footer"><span><span className="pulse-dot" /> 4 events captured</span><span>00:02.84</span></div>
            </div>
            <div className="float-tag tag-top">01 <span>events in order</span></div><div className="float-tag tag-bottom">privacy first <ShieldCheck aria-hidden="true" /></div>
          </div>
        </div>
        <div className="scroll-cue"><ArrowDown aria-hidden="true" /> scroll to explore</div>
      </section>

      <section className="intro-strip"><div className="shell intro-grid"><p className="intro-lead">The missing layer between <span>“it should work”</span> and knowing it works.</p><div className="intro-aside"><span className="number">01</span><p>Because dashboards show outcomes. Receipts shows the signal that got you there.</p></div></div></section>

      <section className="features-section"><div className="shell"><div className="section-heading"><div><SectionLabel>What you get</SectionLabel><h2>Clarity at the<br /><em>point of capture.</em></h2></div><p>Open the extension on any page and get a readable, chronological record of every Meta Pixel event — no digging through DevTools.</p></div><div className="feature-grid">{features.map((feature) => <FeatureCard key={feature.title} icon={feature.icon} title={feature.title}>{feature.text}</FeatureCard>)}</div></div></section>

      <section className="audience-section"><div className="shell audience-grid"><div><SectionLabel>Built for the detail-oriented</SectionLabel><h2>Good tracking starts with a <em>good receipt.</em></h2></div><div className="audience-list"><div><span>01</span><p><strong>Developers</strong> ship with confidence and diagnose issues faster.</p></div><div><span>02</span><p><strong>Agencies</strong> validate client implementations without the back-and-forth.</p></div><div><span>03</span><p><strong>Growth teams</strong> protect the quality of the signals they rely on.</p></div></div></div></section>

      <section className="cta-section"><div className="shell cta-inner"><div className="cta-stamp">R<br /><span>✓</span><br />26</div><SectionLabel>Ready when you are</SectionLabel><h2>Make your next<br /><em>event count.</em></h2><ChromeButton /><p className="cta-footnote">Free Chrome extension · Built for the modern web</p></div></section>
    </main><CookieNotice />
  </PageShell>
}
