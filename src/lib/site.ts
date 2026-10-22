export const NAV = [
  { href: '/technology', label: 'Technology' },
  { href: '/research', label: 'Research' },
  { href: '/about', label: 'About' },
];

export const FOOTER_NAV = [{ href: '/', label: 'Home' }, ...NAV, { href: '/contact', label: 'Contact' }];

// Shown on the page-transition panel while navigating.
export const PAGE_LABELS: Record<string, string> = {
  '/': 'Home',
  '/technology': 'Technology',
  '/research': 'Research',
  '/about': 'About',
  '/contact': 'Contact',
};

export const CONTACT = {
  email: 'contact@ampcycle.in',
  phone: '+91 98348 30928',
  tel: '+919834830928',
  area: 'MIDC Chinchwad, Pune',
  address:
    'Plot No. 20/6, D1 Block, Chinchwad Road, MIDC Chinchwad, Pimpri Chinchwad, Pune, Maharashtra, India 411019',
  maps: 'https://maps.google.com/?q=MIDC+Chinchwad+Pune+411019',
};

export const clamp01 = (v: number) => (Number.isNaN(v) ? 0 : Math.min(1, Math.max(0, v)));
