import ProjectShell from './ProjectShell.jsx'

// ---- ADD YOUR LINKS AND IMAGES HERE ----
const LIVE = ''
const CODE = 'https://github.com/seyitann'
const IMAGE = '/images/smart.jpeg'
const CUSTOMER_SHOT = '/images/Picture1.png'
const ADMIN_SHOT = '/images/preview.webp'
export default function SmartIrrigation() {
  return (
    <ProjectShell
      name="Smart Irrigation System"
      label="Smart Irrigation"
      image={IMAGE}
      shots={[['Customer view', CUSTOMER_SHOT], ['Admin view', ADMIN_SHOT]]}
      description="An IoT system that automates watering. Built as my undergraduate thesis."
      details={[['Type', 'Thesis project'], ['Stack', 'IoT, embedded hardware'], ['Status', 'Completed']]}
      features={['Undergraduate thesis', 'Written up as a journal article']}
      live={LIVE}
      code={CODE}
    />
  )
}

// Used by the Portfolio gallery tiles (the image comes from IMAGE above)
export const meta = { name: 'Smart Irrigation System', tag: 'IoT · Thesis project', image: IMAGE }
