import ProjectShell from './ProjectShell.jsx'

// ---- ADD YOUR LINKS AND IMAGES HERE ----
const LIVE = ''
const CODE = ''
const IMAGE = ''

export default function GymTracker() {
  return (
    <ProjectShell
      name="Gym Tracker"
      label="Gym Tracker"
      image={IMAGE}
      description="A full-stack web app for logging workouts and tracking progress over time."
      details={[['Type', 'Personal project'], ['Stack', 'Full-stack web'], ['Status', 'In progress']]}
      features={['Workout logging', 'Progress tracking']}
      live={LIVE}
      code={CODE}
    />
  )
}

// Used by the Portfolio gallery tiles (the image comes from IMAGE above)
export const meta = { name: 'Gym Tracker', tag: 'Web app · Personal project', image: IMAGE }
