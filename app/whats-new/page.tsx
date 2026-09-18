import { ArticlePage } from '@/components/site-header'

const updates = [
  ['Recently', 'Improved Meta Pixel detection engine', 'Receipts now recognizes more implementation patterns, so your event log stays accurate across more sites.'],
  ['Recently', 'Enhanced event validation', 'Parameter detail is easier to scan, with clearer context around values and event sources.'],
  ['What we are working on', 'Better compatibility with modern websites', 'Embedded frames and single-page applications get the same careful attention as traditional pages.'],
  ['Always', 'Performance and reliability improvements', 'A smaller, faster extension that stays out of your way while you work.'],
]
export default function WhatsNew() { return <ArticlePage eyebrow="Changelog" title={<>What&apos;s <em>new.</em></>} intro="Small improvements that make event validation clearer, faster, and more dependable.">{updates.map(([date, title, copy]) => <article className="update-card" key={title}><div className="date">{date}</div><h3>{title}</h3><p>{copy}</p></article>)}</ArticlePage> }
