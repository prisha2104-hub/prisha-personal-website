export interface Section {
  num: string;
  title: string;
  slug: string;
  blurb: string;
}

export const sections: Section[] = [
  {
    num: '01',
    title: 'Home',
    slug: '/',
    blurb: 'you are here',
  },
  {
    num: '02',
    title: 'Context',
    slug: '/context',
    blurb: 'where I’m from, where I am, and the lenses in between',
  },
  {
    num: '03',
    title: 'How one thing led to another',
    slug: '/one-thing-led-to-another',
    blurb: 'cause and effect, instead of a timeline',
  },
  {
    num: '04',
    title: 'Now',
    slug: '/now',
    blurb: 'what I’m building, reading, and turning over at the moment',
  },
  {
    num: '05',
    title: 'What I build',
    slug: '/building',
    blurb: 'questions that got out of hand',
  },
  {
    num: '06',
    title: 'Things I’m trying to understand',
    slug: '/understanding',
    blurb: 'an honest list',
  },
  {
    num: '07',
    title: 'Elsewhere',
    slug: '/elsewhere',
    blurb: 'books, rabbit holes, and other off-résumé material',
  },
  {
    num: '08',
    title: 'The conventional version',
    slug: '/conventional',
    blurb: 'the résumé, for those who need it',
  },
];
