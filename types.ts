export interface Perfume {
  id: string;
  name: string;
  tagline: string;
  description: string;
  notes: string[];
  mood: string;
  image: string;
  collection: 'Signature' | 'Heritage' | 'Limited';
  longevity: string;
  inspiration: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export interface NavItem {
  label: string;
  href: string; // Hash link or external
  isExternal?: boolean;
}