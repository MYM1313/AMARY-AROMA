import { Perfume, Review } from './types';

// SET 2: Collections Images (Cinematic, Dark/Light Contrast, High Interaction)
export const PERFUMES: Perfume[] = [
  {
    id: 'darcy-dark',
    name: 'D’ARCY DARK',
    tagline: 'Whispers of ancient wood.',
    description: 'A grounding composition of sacred Mysore sandalwood and dry cedar, uplifted by a phantom touch of cardamom. It sits close to the skin, an intimate secret shared only with those closest to you.',
    notes: ['Mysore Sandalwood', 'Cardamom', 'Cedar', 'Warm Amber'],
    mood: 'Grounding, Intimate, Quiet',
    image: 'https://ik.imagekit.io/jabzmiuta/Gemini_Generated_Image_3wd4ul3wd4ul3wd4.png',
    collection: 'Signature',
    longevity: '8-10 Hours (Skin Scent)',
    inspiration: 'The silence of an ancient temple at dawn.'
  },
  {
    id: 'eve-intense',
    name: 'EVE INTENSE',
    tagline: 'A flower blooming in shadow.',
    description: 'Not your grandmother’s rose. This is dark, thorny, and enveloped in smoke. Turkish rose absolute meets crushed peppercorns and a base of dirty patchouli for a scent that commands attention.',
    notes: ['Turkish Rose', 'Black Pepper', 'Patchouli', 'Incense'],
    mood: 'Mysterious, Bold, Romantic',
    image: 'https://ik.imagekit.io/jabzmiuta/Gemini_Generated_Image_8bnshw8bnshw8bns.png',
    collection: 'Signature',
    longevity: '12+ Hours (Projection)',
    inspiration: 'A midnight walk through a forgotten garden in Jaipur.'
  },
  {
    id: 'radiant-aura',
    name: 'RADIANT AURA',
    tagline: 'The ocean wind on salted skin.',
    description: 'Fresh, aquatic, yet undeniably warm. Sea salt crystals dissolve into sun-drenched bergamot and driftwoods. It captures the fleeting moment of sunset over the Arabian Sea.',
    notes: ['Sea Salt', 'Bergamot', 'Driftwood', 'White Musk'],
    mood: 'Liberating, Fresh, Serene',
    image: 'https://ik.imagekit.io/jabzmiuta/Gemini_Generated_Image_fs97trfs97trfs97.png',
    collection: 'Limited',
    longevity: '6-8 Hours (Fresh)',
    inspiration: 'The golden hour coastline of Goa.'
  },
  {
    id: 'ignite-quest',
    name: 'IGNITE QUEST',
    tagline: 'Liquid royalty.',
    description: 'A decadent blend of agarwood and saffron, softened by vanilla bean. Rich, opulent, and unmistakably luxurious. A scent for occasions that require a golden touch.',
    notes: ['Agarwood (Oud)', 'Saffron', 'Vanilla', 'Leather'],
    mood: 'Opulent, Warm, Regal',
    image: 'https://ik.imagekit.io/jabzmiuta/Gemini_Generated_Image_s7nc4as7nc4as7nc.png',
    collection: 'Signature',
    longevity: '12+ Hours (Eternal)',
    inspiration: 'The royal durbars of old India.'
  }
];

// SET 1: Fragrance Fragments Images (Textures, Soft Light, Detail Oriented)
export const FRAGMENTS: Perfume[] = [
    {
      id: 'frag-amber-woods',
      name: 'Amber Woods',
      tagline: 'Resonant warmth.',
      description: 'A deep, resinous embrace of ancient amber and seasoned oak.',
      notes: ['Amber', 'Oakmoss', 'Resin'],
      mood: 'Warm',
      image: 'https://ik.imagekit.io/jabzmiuta/Whisk_b73d334af45d4abb6e642f6990847ca5dr.jpeg',
      collection: 'Heritage',
      longevity: 'Base Note',
      inspiration: 'Ancient forests.'
    },
    {
      id: 'frag-desert-sand',
      name: 'Desert Sand',
      tagline: 'Arid elegance.',
      description: 'The scent of sun-baked dunes and warm mineral breezes.',
      notes: ['Warm Sand', 'Dry Air', 'Mineral'],
      mood: 'Earthy',
      image: 'https://ik.imagekit.io/jabzmiuta/Whisk_ed08ba2c496f212b43c4c180125164dedr.jpeg',
      collection: 'Signature',
      longevity: 'Base Note',
      inspiration: 'Golden hour dunes.'
    },
    {
      id: 'frag-vanilla-drift',
      name: 'Vanilla Drift',
      tagline: 'Soft clouds.',
      description: 'Ethereal vanilla bean carried on a gentle wind.',
      notes: ['Vanilla Bean', 'White Musk', 'Cream'],
      mood: 'Soft',
      image: 'https://ik.imagekit.io/jabzmiuta/Whisk_626f487ac2979c990bd4d5ba4c76701adr.jpeg',
      collection: 'Limited',
      longevity: 'Heart Note',
      inspiration: 'Floating weightless.'
    },
    {
      id: 'frag-night-bloom',
      name: 'Night Bloom',
      tagline: 'Midnight mystery.',
      description: 'Intoxicating white florals awakening under the moon.',
      notes: ['Jasmine', 'Tuberose', 'Moonflower'],
      mood: 'Floral',
      image: 'https://ik.imagekit.io/jabzmiuta/Whisk_abc86ecd06687cda4874764be9a3edfadr.jpeg',
      collection: 'Heritage',
      longevity: 'Top Note',
      inspiration: 'Secret gardens.'
    }
];

export const REVIEWS: Review[] = [
  { 
    id: '1', 
    author: 'Vikram Oberoi', 
    location: 'Mumbai, MH',
    text: 'D’ARCY DARK has a depth I haven’t found in European niche houses. It feels ancient yet incredibly modern. The sandalwood note is exceptionally pure.', 
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop'
  },
  { 
    id: '2', 
    author: 'Ananya Gupta', 
    location: 'New Delhi, DL',
    text: 'Finally, a fragrance that captures the petrichor of Indian soil without being overpowering. Radiant Aura is my daily signature. Absolutely stunning packaging.', 
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop'
  },
  { 
    id: '3', 
    author: 'Siddharth Reddy', 
    location: 'Bengaluru, KA',
    text: 'Eve Intense settles into this warm, smoky vanilla that lasts 12+ hours on my skin. It feels personal, like a secret kept close.', 
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop'
  },
  { 
    id: '4', 
    author: 'Meera Kapoor', 
    location: 'Jaipur, RJ',
    text: 'Ignite Quest is pure opulence in a bottle. I wore it to a wedding and received compliments all night. The saffron notes are incredible.', 
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop'
  },
];

export const NAV_ITEMS = [
  { label: 'Home', href: '#/' },
  { label: 'Fragments', href: '#/encubidia' },
  { label: 'Collections', href: '#/collections' },
  { label: 'Why AMARY', href: '#/why-amary' },
  { label: 'Experience', href: '#/about' },
  { label: 'Reviews', href: '#/reviews' },
  { label: 'Rooted in Heritage', href: '#/heritage' },
  { label: 'Contact', href: '#/connection' },
];