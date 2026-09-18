'use client'

import { useEffect } from 'react'
import { ArticlePage } from '@/components/site-header'

export default function DepartPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const browserId = params.get('browserId')
    if (!browserId) return
    fetch(`/api/left?browserId=${encodeURIComponent(browserId)}`, { method: 'POST' }).catch(() => {})
  }, [])

  return <ArticlePage eyebrow="Sorry to see you go" title={<>Receipts <em>removed.</em></>} intro="Thanks for giving Receipts a try. All recorded data was stored in your browser and is gone with the extension — nothing was left behind, and nothing was ever sent anywhere.">
    <h2>Changed your mind?</h2>
    <p>Receipts is always free, and reinstalling takes seconds.</p>
  </ArticlePage>
}
