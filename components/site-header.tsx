'use client'

import Link from 'next/link'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/what-is-new', label: 'What is Receipts?' },
  { href: '/whats-new', label: "What's new" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Receipts home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>Receipts</span>
        </Link>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <a className="nav-cta" href="https://chromewebstore.google.com/" target="_blank" rel="noreferrer">
            Get the extension <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <Link href="/" className="brand"><span className="brand-mark" aria-hidden="true"><span /></span><span>Receipts</span></Link>
          <p className="footer-note">Clearer signals for the web.</p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Explore</span>
          <Link href="/what-is-new">What is Receipts?</Link>
          <Link href="/whats-new">What&apos;s new</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Receipts</span><span>Made for people who care about the details.</span></div>
    </footer>
  )
}

export function CookieNotice() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <aside className="cookie-notice" aria-label="Cookie notice">
      <div className="cookie-icon" aria-hidden="true">●</div>
      <div><strong>A small note</strong><p>We use essential cookies to keep this site useful. No tracking, no surprises.</p></div>
      <button type="button" onClick={() => setVisible(false)} aria-label="Dismiss cookie notice">Got it</button>
    </aside>
  )
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="arrow-link" href={href}>{children}<ArrowUpRight aria-hidden="true" /></Link>
}

export function ChromeButton() {
  return <a className="button button-primary" href="https://chromewebstore.google.com/" target="_blank" rel="noreferrer">Get Receipts — it&apos;s free <ArrowUpRight aria-hidden="true" /></a>
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>
}

export function DotGrid() {
  return <div className="dot-grid" aria-hidden="true" />
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label"><span />{children}</div>
}

export function FeatureIcon({ children }: { children: React.ReactNode }) { return <div className="feature-icon">{children}</div> }

export function FeatureCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return <article className="feature-card"><FeatureIcon>{icon}</FeatureIcon><h3>{title}</h3><p>{children}</p></article>
}

export function ArticlePage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return <PageShell><main className="article-page"><div className="shell article-hero"><SectionLabel>{eyebrow}</SectionLabel><h1>{title}</h1><p>{intro}</p></div><div className="shell article-body">{children}</div></main></PageShell>
}
