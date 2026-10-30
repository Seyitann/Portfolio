import { useEffect, useState } from 'react'

// Call openLightbox([{ src, alt }, ...], startIndex) from anywhere to show pictures full screen.
export const openLightbox = (items, index = 0) =>
  window.dispatchEvent(new CustomEvent('lightbox', { detail: { items, index: Math.max(0, index) } }))

export default function Lightbox() {
  const [s, setS] = useState(null)
  useEffect(() => {
    const f = e => setS(e.detail)
    window.addEventListener('lightbox', f)
    return () => window.removeEventListener('lightbox', f)
  }, [])
  useEffect(() => {
    if (!s) return
    const n = s.items.length, go = d => setS(v => ({ ...v, index: (v.index + d + n) % n }))
    const k = e => { if (e.key === 'Escape') setS(null); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }
    document.addEventListener('keydown', k)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = prev }
  }, [s])
  if (!s) return null
  const n = s.items.length, it = s.items[s.index]
  const go = (e, d) => { e.stopPropagation(); setS(v => ({ ...v, index: (v.index + d + n) % n })) }
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Picture viewer" onClick={() => setS(null)}>
      <button className="lb-x" aria-label="Close" onClick={() => setS(null)}>&times;</button>
      {n > 1 && <button className="lb-n lb-p" aria-label="Previous picture" onClick={e => go(e, -1)}>&lsaquo;</button>}
      <img src={it.src} alt={it.alt || ''} onClick={e => e.stopPropagation()} />
      {n > 1 && <button className="lb-n lb-r" aria-label="Next picture" onClick={e => go(e, 1)}>&rsaquo;</button>}
      <p className="lb-c">{it.alt ? it.alt + ' · ' : ''}{s.index + 1} / {n}</p>
    </div>
  )
}