// Photo or video for each <ImageSlot id="...">. Put files in /public/images (or
// /public/videos) and set the path here (e.g. 'hero-facility': '/images/hero.jpg').
// Videos (.mp4/.webm) loop muted and use a same-named .jpg as poster. Slots
// without an entry render a labelled placeholder.
export const IMAGES: Partial<Record<string, string>> = {
  // Home
  'hero-facility': '/videos/home-hero.mp4',
  // 'partner-manufacturers': '',
  // 'partner-oems': '',
  // 'partner-waste': '',
  // 'case-study': '',
  // 'band-lab': '',
  // Technology
  'tech-hero': '/videos/tech-hero.mp4',
  // 'tech-step-1' … 'tech-step-4': '',
  // Research
  // 'research-hero': '',
  // 'research-focus-1' … 'research-focus-5': '',
  // About
  // 'about-hero': '',
  // 'impact-1' … 'impact-4': '',
  // 'about-founder': '',
  // Contact
  // 'contact-facility': '',
};
