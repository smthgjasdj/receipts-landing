import { ArticlePage } from '@/components/site-header'

export default function PrivacyPolicy() { return <ArticlePage eyebrow="The important bit" title={<>Privacy <em>policy.</em></>} intro="We believe a debugging tool should help you see more without collecting more. Last updated: September 19, 2026.">
  <h2>What Receipts records</h2>
  <p>On the pages you inspect, Receipts records: the names of Meta Pixel events the page sends, the parameters attached to them, which Pixel IDs are present, which frame each event came from, and the address and title of the tab being inspected so recordings can be grouped by page. It observes requests to Meta&apos;s collection endpoint only — traffic to any other destination passes through untouched.</p>
  <h2>Personal data and masking</h2>
  <p>One kind of problem Receipts exists to catch is a site sending personal data to Meta without hashing it first. To make that safe to inspect, values that look personal are masked the moment they are read: an email becomes j***@e***.com, a phone number becomes +4*******58. The original text is never written to storage and never shown in the popup, so a screenshot of a debugging session is not itself a data breach. Exports contain masked values only, because no unmasked copy exists anywhere.</p>
  <h2>Where the data lives</h2>
  <p>Event recordings are held in the browser&apos;s session storage, keyed by tab. Your settings are held in the browser&apos;s local storage. There is no account, no sign-in, and no copy of your recordings outside this browser.</p>
  <h2>Retention and deletion</h2>
  <p>Recordings are kept for the window you choose — 15, 30 or 60 minutes (30 by default) — then deleted automatically. Closing a tab erases that tab&apos;s recording immediately. Uninstalling the extension removes all stored data with it.</p>
  <h2>Network activity</h2>
  <p>Your recorded event data never leaves your browser. The network traffic you see while using Receipts is the traffic the pages you visit already produce on their own — the extension watches it happen and does not generate, forward or modify it. The extension contacts exactly one website of its own: the Receipts product site, which hosts the release notes it opens after updates. That site keeps a record of the installed version so the notes match what you are running, and nothing else.</p>
  <h2>Sharing</h2>
  <p>Data recorded by the extension is never sold, rented or traded, and never shared with third parties — including Meta / Facebook, advertising networks, analytics providers and data brokers.</p>
  <h2>Exports</h2>
  <p>When you export a recording, the file is written by the popup from its own data on your device and contains masked values only.</p>
  <h2>Permissions and why they are needed</h2>
  <p><strong>storage</strong> — holds recorded events (session) and your settings (local) on your device; nothing recorded is ever written to a server.</p>
  <p><strong>alarms</strong> — wakes the extension periodically to enforce the retention window and to check its own website for release notes.</p>
  <p><strong>Content scripts on the pages you inspect</strong> — one small script in the page&apos;s own context watches the pixel&apos;s fbq function and network calls, and one in an isolated context relays what it saw. A Meta Pixel can be installed on any website, and a developer testing one works across staging domains, client storefronts and third-party sites that cannot be listed in advance. Every wrapped call is passed through to the original untouched — the page&apos;s tracking behaves exactly as it would without the extension.</p>
  <p><strong>Access to the Receipts site</strong> — the extension&apos;s own product website only, which serves its release notes.</p>
  <h2>Children</h2>
  <p>Receipts is a developer tool and is not directed at children. It collects no personal information from anyone.</p>
  <h2>Changes to this policy</h2>
  <p>If this policy changes, the updated version is published on this page with a new date at the top. Continuing to use the extension after a change means you accept the revised policy.</p>
</ArticlePage> }
