// Photo or video for each <ImageSlot id="...">. Put files in /public/images (or
// /public/videos) and add an entry here. Videos (.mp4/.webm) loop muted and use
// a same-named .jpg as poster. fit: 'contain' keeps cut-outs uncropped. Slots
// without an entry render a labelled placeholder.
export type SlotMedia = { src: string; alt: string; fit?: 'cover' | 'contain' };

const PACKS: SlotMedia = { src: '/images/battery-packs.png', alt: 'Lithium-ion battery packs beside a recycling symbol', fit: 'contain' };
const PLANT: SlotMedia = { src: '/images/plant-render.png', alt: 'Rendering of a battery recycling line and recovered materials', fit: 'contain' };
const SORTING: SlotMedia = { src: '/images/sorting-line.jpg', alt: 'Workers loading spent batteries onto a sorting conveyor' };
const BLACK_MASS: SlotMedia = { src: '/images/black-mass.jpg', alt: 'Gloved hands holding black mass powder' };
const EXTRACTION: SlotMedia = { src: '/images/extraction-lab.jpg', alt: 'Metal-rich slurry in a lab extraction setup' };
const POWDER: SlotMedia = { src: '/images/recovered-powder.jpg', alt: 'Gloved hand holding recovered white metal salt' };

// Stock photos from Unsplash (free licence, no attribution required); file name ← photo id.
// production-line ← 1717386255767  ev-battery ← 1767990495521  battery-collection ← 1637773339519
// research-lab ← 1581093577421  modular-cells ← 1732030373864  solvent-prep ← 1582560475093
// control-panel ← 1780034766312  cell-terminals ← 1742899273038
const stock = (file: string, alt: string): SlotMedia => ({ src: `/images/${file}.jpg`, alt });

export const IMAGES: Partial<Record<string, SlotMedia>> = {
  // Home
  'hero-facility': { src: '/videos/home-hero.mp4', alt: 'Animated lithium-ion cell' },
  'partner-manufacturers': stock('production-line', 'Automated battery production line'),
  'partner-oems': stock('ev-battery', 'Electric vehicle battery pack with high-voltage cabling'),
  'partner-waste': stock('battery-collection', 'A heap of collected used batteries'),
  'band-lab': BLACK_MASS,
  // Technology
  'tech-hero': { src: '/videos/tech-hero.mp4', alt: 'Batteries moving along a recycling conveyor' },
  'tech-step-1': SORTING,
  'tech-step-2': BLACK_MASS,
  'tech-step-3': EXTRACTION,
  'tech-step-4': POWDER,
  // Research
  'research-hero': stock('research-lab', 'Scientist working at a laboratory bench'),
  'research-focus-1': stock('modular-cells', 'Rows of modular cells'),
  'research-focus-2': stock('solvent-prep', 'Gloved hand pipetting solution into sample vials'),
  'research-focus-3': BLACK_MASS,
  'research-focus-4': stock('control-panel', 'Industrial process control cabinet'),
  'research-focus-5': stock('cell-terminals', 'Close-up of battery cell terminals'),
  // About
  // 'about-hero': team at the facility
  'impact-1': PACKS,
  'impact-2': SORTING,
  'impact-3': POWDER,
  'impact-4': PLANT,
  // 'about-founder': portrait of Ravindra Joshi
  // Contact
  // 'contact-facility': facility exterior
};
