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
      description="Realty is a real estate listings platform built for Nigerian agencies. Buyers can browse and enquire about properties, agents manage their own listings and leads, and one admin controls who gets agent access."
      details={[
        ['Type', 'Client project'],
        ['Stack', 'Next.js (App Router) with TypeScript, Tailwind, Prisma with PostgreSQL on Supabase (database, auth and photo storage), Zod, and Sharp; deployed on Vercel from GitHub.'],
        ['Status', 'Built'],
      ]}
      features={['Security', 'SEO', 'Responsive design', 'Listings management', 'Lead management','Email integration', 'Image upload and optimization', 'Admin dashboard', 'Agent dashboard', 'Customer dashboard']}
      live={LIVE}
      code={CODE}
    />
  )
}

// Used by the Portfolio gallery tiles (the image comes from IMAGE above)
export const meta = { name: 'Real Estate Website', tag: 'Website · Client project', image: IMAGE }
