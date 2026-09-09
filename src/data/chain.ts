/**
 * "How one thing led to another" — the moments the vine passes through.
 *
 * The vine (Chain.astro) draws the causality; each `connector` is spoken by the
 * line just before it reaches the next heading, so headings never start with
 * "so" or "then" themselves. Evidence is what appears when someone hovers or
 * taps the marked term in a detail. Nothing here is required reading — the
 * page has to make sense with every piece of evidence left undiscovered.
 */

export type DetailPart = string | { term: string };

export type Evidence =
  /** Contradictory headlines, timestamped like a wire feed. */
  | { kind: 'clippings'; note: string; items: { time: string; text: string }[] }
  /**
   * A cascade of questions, each one caused by the last. `kind` exists so real
   * titles can be filed here later without changing the component.
   */
  | { kind: 'cascade'; note: string; items: { text: string; kind?: 'question' | 'book' | 'article' }[] }
  /** Figures with captions, like a small ledger. */
  | { kind: 'ledger'; note: string; items: { figure: string; text: string }[] }
  /** Browser tabs, accumulating. */
  | { kind: 'tabs'; items: string[] };

export interface Moment {
  id: string;
  /** Spoken by the vine on its way to this moment. */
  connector?: string;
  heading: string;
  detail: DetailPart[];
  evidence?: Evidence;
  /** Where the block sits. `thought` renders inside the bubble. */
  place: 'left' | 'right' | 'thought' | 'close';
  product?: { name: string; href: string; cta: string; peek: string[] };
}

export const moments: Moment[] = [
  {
    id: 'markets',
    place: 'left',
    heading: 'I got curious about markets.',
    detail: [
      'This would have been simpler if anyone agreed on how they worked. Every move came with an ',
      { term: 'explanation' },
      ', usually several, none of them compatible, all of them confident.',
    ],
    evidence: {
      kind: 'clippings',
      note: 'assorted explanations, same afternoon',
      items: [
        { time: '09:41', text: 'Stocks rise on hopes of a rate cut' },
        { time: '14:05', text: 'Stocks slip on fears of a rate cut' },
        { time: '10:12', text: 'Investors shrug off inflation data' },
        { time: '15:30', text: 'Inflation data rattles investors' },
      ],
    },
  },
  {
    id: 'reading',
    place: 'right',
    connector: 'so',
    heading: 'I started reading, which did not help.',
    detail: [
      'Every answer arrived with two new ',
      { term: 'questions' },
      ' attached. This is either a design flaw or the whole point. I decided it was the point.',
    ],
    evidence: {
      kind: 'cascade',
      note: 'a representative evening',
      items: [
        { text: 'why did it move?' },
        { text: 'who decided that?' },
        { text: 'what is a basis point, really?' },
        { text: 'why does anyone trust a forecast?' },
        { text: 'why do I?' },
      ],
    },
  },
  {
    id: 'hdfc',
    place: 'left',
    connector: 'eventually',
    heading: 'I went to watch it done for real.',
    detail: [
      'An internship at ',
      { term: 'HDFC Asset Management' },
      ', where I built a scoring framework to compare asset managers against one another, worked through prospecting data on family offices, and saw what research looks like when it is someone’s job rather than someone’s evening.',
    ],
    evidence: {
      kind: 'ledger',
      note: 'the work, itemised',
      items: [
        { figure: '5+', text: 'asset management companies, compared' },
        { figure: '12', text: 'metrics in one scoring framework' },
        { figure: '20+', text: 'family office and HNI contacts in the prospecting data' },
        { figure: '1', text: 'research process, observed at close range' },
      ],
    },
  },
  {
    id: 'thought',
    place: 'thought',
    connector: 'where',
    heading: 'The research was interesting. The seventeen tabs were less so.',
    detail: [
      'Everything I needed existed. It was just in eleven places, none of which knew about the others. At some point I became less interested in opening another ',
      { term: 'tab' },
      ' and more interested in why I had to.',
    ],
    evidence: {
      kind: 'tabs',
      items: [
        'filings',
        'screener',
        'transcript',
        'news',
        'news, again',
        'spreadsheet',
        'notes',
        'someone’s blog',
        '+9',
      ],
    },
  },
  {
    id: 'uaa',
    place: 'close',
    connector: 'it turned out',
    heading: 'I was not the only one with a tab problem.',
    detail: [
      'A friend had hit the same wall from a different desk, so we started building the thing we wanted to use ourselves: one place where investment research actually comes together. It is going well, at some cost to our evenings.',
    ],
    product: {
      name: 'Universal Asset Analyzer',
      href: '/uaa',
      cta: 'Explore UAA',
      peek: ['the problem', 'the product', 'the deck'],
    },
  },
];

export interface FutureThread {
  from: string;
  to: string;
}

export const futureThreads: FutureThread[] = [
  { from: 'Food waste', to: 'Food For Thought' },
  { from: 'Mathematics', to: 'models, and better questions' },
  { from: 'Teaching', to: 'helping people understand difficult things' },
];
