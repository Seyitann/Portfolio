import { Fragment } from 'react'
import Ph from '../Ph.jsx'
import { openLightbox } from '../Lightbox.jsx'

function Body({ name, description, details, features, live, code }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <dl>{details.map(([k, v]) => <Fragment key={k}><dt>{k}</dt><dd>{v}</dd></Fragment>)}</dl>
      {features?.length > 0 && <ul>{features.map(f => <li key={f}>{f}</li>)}</ul>}
      {(live || code) && (
        <div className="links">
          {live && <a className="lk" href={live} target="_blank" rel="noopener noreferrer">Live site</a>}
          {code && <a className="lk" href={code} target="_blank" rel="noopener noreferrer">Code</a>}
        </div>
      )}
    </div>
  )
}

// Every project uses this same layout: main picture with two extra pictures under it on the left,
// information on the right. shots = [[label, imagePath], [label, imagePath]].
export default function ProjectShell({ label, image, shots = [], ...p }) {
  const slots = [0, 1].map(i => shots[i] || ['Extra picture', ''])
  // every picture of this project, in order, so you can flip through them when one is opened
  const pics = [[image, p.name], ...slots.map(([l, src]) => [src, l + ' · ' + p.name])]
    .filter(([src]) => src).map(([src, alt]) => ({ src, alt }))
  const open = src => () => openLightbox(pics, pics.findIndex(x => x.src === src))
  return (
    <div className="feat">
      <div className="media">
        <Ph className="big" src={image} alt={p.name} onOpen={open(image)}>{label}</Ph>
        <div className="shots">
          {slots.map(([l, src], i) => <Ph key={i} src={src} alt={l} onOpen={open(src)}>{l}</Ph>)}
        </div>
      </div>
      <Body {...p} />
    </div>
  )
}