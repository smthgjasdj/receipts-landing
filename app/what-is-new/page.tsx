import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ArticlePage, ArrowLink } from '@/components/site-header'

export default function WhatIsReceipts() {
  return <ArticlePage eyebrow="The short version" title={<>What is <em>Receipts?</em></>} intro="Receipts is a lightweight Chrome extension that turns invisible Meta Pixel activity into a clear, readable event log.">
    <p>When a page sends an event, Receipts shows you what happened, when it happened, and where it came from. No network tab archaeology. No wondering whether a test event really fired.</p>
    <h2>What Receipts does</h2><p>Receipts sits quietly in your browser and listens for Meta Pixel events as they happen. It records the event name, parameters, Pixel ID, source frame, and timing in a simple chronological view.</p>
    <div className="feature-grid article-feature-grid"><div className="feature-card"><CheckCircle2 className="feature-icon" aria-hidden="true" /><h3>Capture the signal</h3><p>Watch standard and custom events arrive in real time.</p></div><div className="feature-card"><CheckCircle2 className="feature-icon" aria-hidden="true" /><h3>Understand the payload</h3><p>Inspect parameters and spot malformed or missing values.</p></div><div className="feature-card"><CheckCircle2 className="feature-icon" aria-hidden="true" /><h3>Keep it private</h3><p>Personal-looking values are masked the moment they are read.</p></div></div>
    <h2>Why teams use it</h2><p>For advertisers and ecommerce teams, Receipts makes campaign instrumentation easier to trust. For agencies, it creates a shared source of truth when validating client implementations. For developers, it shortens the loop between changing a tag and knowing it worked.</p>
    <h2>How it works</h2><ol className="steps"><li><strong>Install Receipts</strong> from the Chrome Web Store.</li><li><strong>Open the page</strong> you want to inspect and start the extension.</li><li><strong>Trigger an action</strong> — view a product, add to cart, or complete a form.</li><li><strong>Read the receipt</strong> and fix anything that is missing, duplicated, or off.</li></ol><ArrowLink href="/">See the essentials on the homepage <ArrowRight aria-hidden="true" /></ArrowLink>
  </ArticlePage>
}
