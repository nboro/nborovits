// Ordered registry of sections. Sidebar nav, scroll-spy and the legacy-route
// redirects all read from this list.
export const sections = [
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Professional Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

// Old multi-page routes -> section they should scroll to (SEO continuity).
// Experience/education now live in the About career timeline.
export const legacyRoutes = {
  '/resume': 'about',
  '/contact': 'contact',
  '/aboutme': 'about',
  '/projects': 'projects',
};

export default sections;
