// Picture block. Pass onOpen to make a picture clickable (only when it has an image).
export default function Ph({ src, alt, className = '', style, children, onOpen }) {
  const click = src && onOpen
  const a11y = click ? {
    role: 'button', tabIndex: 0, 'aria-label': 'View larger: ' + (alt || 'picture'), onClick: onOpen,
    onKeyDown: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen() } },
  } : {}
  return (
    <div className={'ph ' + className + (click ? ' zoom' : '')} style={style} {...a11y}>
      {children}
      {src && <img src={src} alt={alt || ''} />}
    </div>
  )
}