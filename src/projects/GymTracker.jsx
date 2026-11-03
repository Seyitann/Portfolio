import ProjectShell from './ProjectShell.jsx'

// ---- ADD YOUR LINKS AND IMAGES HERE ----
const LIVE = 'https://portfolio-seyitan.vercel.app/'
const CODE = 'https://github.com/seyitann'
const IMAGE = '/images/gymDashboard.jpeg'
const CUSTOMER_SHOT = 'portfolio/public/images/Userpage.jpeg'
const ADMIN_SHOT = '/images/Progresspage.jpeg'
export default function GymTracker() {
  return (
    <ProjectShell
      name="Gym Tracker"
      label="Gym Tracker"
      image={IMAGE}
       shots={[['Customer view', CUSTOMER_SHOT], ['Admin view', ADMIN_SHOT]]}
      description="A mobile-first fitness app that suggests your workout each day, times it, and charts your progress.

Pick your goal and training days once, and the app plans your week. Start a workout, and it logs itself when the timer ends."
      details={[['Type', 'Personal project'], ['Stack', 'Full-stack web','React', 'TypeScript', 'Tailwind CSS', 'Supabase'], ['Status', 'Completed']]}
      features={['Smart daily plan', 'Exercise library', 'Auto-logging workout timer', 'Progress tracking','Secure accounts']}
      live={LIVE}
      code={CODE}
    />
  )
}

// Used by the Portfolio gallery tiles (the image comes from IMAGE above)
export const meta = { name: 'Gym Tracker', tag: 'Web app · Personal project', image: IMAGE }
