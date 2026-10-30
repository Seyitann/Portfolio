import { useEffect, useRef } from 'react'

// Scroll-linked reveal. Each element's progress (--p, 0 to 1) follows its position in the
// window, so it fades up as you scroll down and eases back out as you scroll up, continuously.
const items = new Set()
let queued = false
const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

function update() {
  queued = false
  const vh = window.innerHeight
  const start = vh * 0.98 // element starts appearing when its top is near the bottom edge
  const end = vh * 0.68   // fully shown by the time its top reaches here
  items.forEach(({ el, delay }) => {
    const top = el.getBoundingClientRect().top + delay * 0.25 // delay = a later start, for staggering
    let p = Math.min(1, Math.max(0, (start - top) / (start - end)))
    p = p * p * (3 - 2 * p) // smoothstep easing
    el.style.setProperty('--p', p.toFixed(3))
  })
}
function onScroll() { if (!queued) { queued = true; requestAnimationFrame(update) } }

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduce) { el.style.setProperty('--p', 1); return }
    const item = { el, delay }
    items.add(item)
    if (items.size === 1) {
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll)
    }
    onScroll()
    return () => {
      items.delete(item)
      if (!items.size) {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    }
  }, [delay])
  return <Tag ref={ref} className={'rv ' + className} style={style} {...rest}>{children}</Tag>
}
