/**
 * The academic trail — a selection of coursework, in the order it appears
 * on the page. Edit here; Trail.astro draws whatever it finds.
 *
 * `term` and `note` are both optional. Leave `note` out unless there is
 * something genuinely useful to say: what the course covered, or what it
 * led to. The line on the page is a guide for the eye, not a diagram —
 * relationships between courses belong in the notes, where they're real.
 */

export interface TrailCourse {
  id: string;
  title: string;
  term?: string;
  note?: string;
}

export const courses: TrailCourse[] = [
  {
    id: 'java',
    title: 'Programming in Java',
    term: 'first year',
    note: 'First programming course.',
  },
  {
    id: 'calc3',
    title: 'Calculus III',
    term: 'first year',
    note: 'Multivariable calculus. Leads directly into the differential equations I’m taking now.',
  },
  {
    id: 'spanish',
    title: 'Elementary Spanish I & II',
    term: 'first year',
  },
  {
    id: 'truecrime',
    title: 'True Crime',
    term: 'spring, first year',
  },
  {
    id: 'linalg',
    title: 'Linear Algebra',
    term: 'second year',
    note: 'Turns up in everything since.',
  },
  {
    id: 'ctds',
    title: 'Intro to Computational Thinking & Data Science',
    term: 'second year',
    note: 'Modeling and data analysis in Python. Led to the computer science coursework I’m taking now.',
  },
];

export const ending = {
  text: 'The current semester picks up from here.',
  link: { label: 'Back to now', href: '/now' },
};
