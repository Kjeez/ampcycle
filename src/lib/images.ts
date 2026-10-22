// Photo or video for each <ImageSlot id="...">. Put files in /public/images (or
// /public/videos) and add an entry here. Videos (.mp4/.webm) loop muted and use
// a same-named .jpg as poster. fit: 'contain' keeps cut-outs uncropped. Slots
// without an entry render a labelled placeholder.
export type SlotMedia = { src: string; alt: string; fit?: 'cover' | 'contain' };

const LAB: SlotMedia = { src: '/images/lab-cells.jpg', alt: 'Researcher testing lithium-ion cells at a lab bench' };
const PACKS: SlotMedia = { src: '/images/battery-packs.png', alt: 'Lithium-ion battery packs beside a recycling symbol', fit: 'contain' };
const PLANT: SlotMedia = { src: '/images/plant-render.png', alt: 'Rendering of a battery recycling line and recovered materials', fit: 'contain' };
const SORTING: SlotMedia = { src: '/images/sorting-line.jpg', alt: 'Workers loading spent batteries onto a sorting conveyor' };
const BLACK_MASS: SlotMedia = { src: '/images/black-mass.jpg', alt: 'Gloved hands holding black mass powder' };
const EXTRACTION: SlotMedia = { src: '/images/electro-extraction.jpg', alt: 'Metal-rich slurry in a lab extraction setup' };
const POWDER: SlotMedia = { src: '/images/recovered-powder.jpg', alt: 'Gloved hand holding recovered white metal salt' };

export const IMAGES: Partial<Record<string, SlotMedia>> = {
  // Home
  'hero-facility': { src: '/videos/home-hero.mp4', alt: 'Animated lithium-ion cell' },
  'partner-manufacturers': LAB,
  'partner-oems': PACKS,
  'partner-waste': SORTING,
  'case-study': BLACK_MASS,
  'band-lab': EXTRACTION,
  // Technology
  'tech-hero': { src: '/videos/tech-hero.mp4', alt: 'Batteries moving along a recycling conveyor' },
  'tech-step-1': SORTING,
  'tech-step-2': BLACK_MASS,
  'tech-step-3': EXTRACTION,
  'tech-step-4': POWDER,
  // Research
  'research-hero': LAB,
  'research-focus-1': EXTRACTION,
  // 'research-focus-2': solvent preparation
  'research-focus-3': BLACK_MASS,
  'research-focus-4': PLANT,
  'research-focus-5': SORTING,
  // About
  // 'about-hero': team at the Pune facility
  'impact-1': PACKS,
  'impact-2': SORTING,
  'impact-3': POWDER,
  'impact-4': PLANT,
  // 'about-founder': portrait of Ravindra Joshi
  // Contact
  // 'contact-facility': facility exterior
};
