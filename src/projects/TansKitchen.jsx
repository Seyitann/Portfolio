import ProjectShell from './ProjectShell.jsx'

// ---- ADD YOUR LINKS AND IMAGES HERE ----
const LIVE = 'https://tan-s-kitchen.vercel.app'   // e.g. 'https://your-site.com'
const CODE = 'https://github.com/Seyitann'   // e.g. 'https://github.com/you/tans-kitchen'
const IMAGE = 'images\\tanskitchen.png'  // e.g. '/images/tans-kitchen.jpg'
const CUSTOMER_SHOT = '/images/tanskitchenmenu.png'
const ADMIN_SHOT = '/images/tansadmin.png'

export default function TansKitchen() {
  return (
    <ProjectShell
      name="Tan's Kitchen"
      label="Tan's Kitchen screenshot"
      image={IMAGE}
      shots={[['Customer view', CUSTOMER_SHOT], ['Admin view', ADMIN_SHOT]]}
      description={'A Nigerian-food ordering site with an admin site for the owner. Built as a client project.'}
      details={[['Type', 'Client project'], ['Stack', 'React, Tailwind, TypeScript, Supabase'], ['Status', 'Built']]}
      features={['Menu and today\u2019s special', 'Cart and My Orders', 'User login', 'Admin site']}
      live={LIVE}
      code={CODE}
    />
  )
}

// Used by the Portfolio gallery tiles (the image comes from IMAGE above)
export const meta = { name: "Tan's Kitchen", tag: 'Web app · Client project', image: IMAGE }
