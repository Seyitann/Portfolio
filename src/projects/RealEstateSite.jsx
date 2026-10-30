import ProjectShell from './ProjectShell.jsx'

// ---- ADD YOUR LINKS AND IMAGES HERE ----
const LIVE = 'https://seyitan-s-project-4u57.vercel.app'   // e.g. 'https://your-site.com'
const CODE = 'https://github.com/seyitann'   // e.g. 'https://github.com/your-username/your-project'
const IMAGE = '/images/realty.png'
const CUSTOMER_SHOT = '/images/customer.png'
const ADMIN_SHOT = '/images/dashboard.png'

export default function RealEstateSite() {
  return (
    <ProjectShell
      name="Real Estate Website"
      label="Real estate site"
      image={IMAGE}
       shots={[['Customer view', CUSTOMER_SHOT], ['Admin view', ADMIN_SHOT]]}
      description="A website for a real estate company, currently being scoped."
      details={[['Type', 'Client project'], ['Stack', 'Web'], ['Status', 'Built']]}
      features={['Company website', 'Feature scoping stage']}
      live={LIVE}
      code={CODE}
    />
  )
}

// Used by the Portfolio gallery tiles (the image comes from IMAGE above)
export const meta = { name: 'Real Estate Website', tag: 'Website · Client project', image: IMAGE }
