import type { ImageMetadata } from 'astro';
import portrait from '../assets/context/portrait.jpg';
import student from '../assets/context/student.jpg';
import newyork from '../assets/context/newyork.jpg';
import markets from '../assets/context/markets.jpg';
import foodie from '../assets/context/foodie.png';

export interface LensAnnotation {
  text: string;
  pos: 'tl' | 'tr' | 'bl' | 'br';
}

export interface Lens {
  id: string;
  label: string;
  fig: string;
  caption: string;
  alt: string;
  plate: 'portrait' | 'student' | 'newyork' | 'markets' | 'foodie';
  annotations?: LensAnnotation[];
}

export const plates: Record<Lens['plate'], ImageMetadata> = {
  portrait,
  student,
  newyork,
  markets,
  foodie,
};

export const control: Omit<Lens, 'plate'> & { plate: Lens['plate'] } = {
  id: 'control',
  label: 'Control',
  fig: 'fig. 02.0 — the control',
  caption: 'The control group. Everything else is context.',
  alt: 'Prisha in a light blue dress, standing between stone columns.',
  plate: 'portrait',
};

export const lenses: Lens[] = [
  {
    id: 'student',
    label: 'Academic',
    fig: 'fig. 02.1 — academic',
    caption: 'Knowledge compounds. So, unfortunately, does tuition.',
    alt: 'The same person, now in a graduation cap and gown, in the same colonnade.',
    plate: 'student',
  },
  {
    id: 'newyork',
    label: 'New Yorker',
    fig: 'fig. 02.2 — new yorker',
    caption: 'Walks like she’s already late, and rarely is.',
    alt: 'The same person, unchanged, on a Manhattan avenue with towers dissolving behind her.',
    plate: 'newyork',
  },
  {
    id: 'markets',
    label: 'Analyst',
    fig: 'fig. 02.3 — analyst',
    caption: 'It was supposed to be a quick look.',
    alt: 'The same portrait on the front page of a fictional financial newspaper, under the headline “Local student opens Excel. Things escalate.”',
    plate: 'markets',
  },
  {
    id: 'foodie',
    label: 'Foodie',
    fig: 'fig. 02.4 — foodie',
    caption: 'Two courses in hand, a third under consideration.',
    alt: 'Prisha holding a slice of pepperoni pizza and a milkshake, with a thought bubble of fries above her, between the same stone columns.',
    plate: 'foodie',
  },
];
