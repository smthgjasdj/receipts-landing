import { ArrowRight } from 'lucide-react'
import { ArticlePage, ArrowLink } from '@/components/site-header'

export default function GreetingPage() {
  return <ArticlePage eyebrow="Thank you" title={<>You&apos;re all <em>set.</em></>} intro="Receipts is installed and ready. There is nothing to configure — open any page with a Meta Pixel and click the Receipts icon to see the event log.">
    <h2>Getting started</h2>
    <ol className="steps">
      <li><strong>Open a page</strong> with a Meta Pixel installed.</li>
      <li><strong>Click the icon</strong> and every event the page sends appears in order.</li>
      <li><strong>Trigger an action</strong> — view a product, add to cart, complete a form.</li>
      <li><strong>Read the log</strong> and fix anything missing, duplicated, or malformed.</li>
    </ol>
    <h2>Stays private</h2>
    <p>Everything Receipts records stays in your browser. Values that look personal are masked the moment they are read, and recordings are kept for minutes, not forever.</p>
    <ArrowLink href="/">Back to the homepage <ArrowRight aria-hidden="true" /></ArrowLink>
  </ArticlePage>
}
