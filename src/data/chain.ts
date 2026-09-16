/**
 * "How one thing led to another" — the moments the vine passes through.
 *
 * The vine (Chain.astro) draws the causality; each `connector` is spoken by the
 * line just before it reaches the next heading, so headings never start with
 * "so" or "then" themselves. Evidence is what appears when someone hovers or
 * taps the marked term in a detail — except `window`, which is part of the
 * final moment and simply arrives with it. Nothing here is required reading —
 * the page has to make sense with every piece of evidence left undiscovered.
 *
 * Structure the component understands: any number of alternating left/right
 * spine moments, exactly one `thought`, then one or more `close` moments.
 * The last close is UAA — it has no page of its own and no product link;
 * this moment is where it lives. Every fact here is real (the same record
 * as /conventional). Keep the voice plain: no punchline per stop.
 */

export type DetailPart = string | { term: string };

export type Evidence =
  /** Contradictory headlines, timestamped like a wire feed. */
  | { kind: 'clippings'; note: string; items: { time: string; text: string }[] }
  /**
   * A cascade of steps or questions, each one caused by the last. `kind`
   * exists so real titles can be filed here later without changing the
   * component.
   */
  | { kind: 'cascade'; note: string; items: { text: string; kind?: 'question' | 'book' | 'article' }[] }
  /** Figures with captions, like a small ledger. */
  | { kind: 'ledger'; note: string; items: { figure: string; text: string }[] }
  /** Browser tabs, accumulating. */
  | { kind: 'tabs'; items: string[] }
  /** The same material, settled into one frame. Shown as the moment lights. */
  | { kind: 'window'; note: string; items: string[] };

export interface Moment {
  id: string;
  /** Spoken by the vine on its way to this moment. */
  connector?: string;
  heading: string;
  detail: DetailPart[];
  evidence?: Evidence;
  /** Where the block sits. `thought` renders inside the bubble. */
  place: 'left' | 'right' | 'thought' | 'close';
}

export const moments: Moment[] = [
  {
    id: 'markets',
    place: 'left',
    heading: 'It started with markets.',
    detail: [
      'High-school economics in Mumbai, and a growing suspicion about the financial pages: the same index move earned three ',
      { term: 'explanations' },
      ' by evening, all confident, none compatible. I started keeping score.',
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
    heading: 'The newspapers led to the filings.',
    detail: [
      'I went from the coverage to the documents it was paraphrasing: filings, earnings calls, footnotes. Somewhere in there the ',
      { term: 'question' },
      ' changed — from what a company is worth to why the people pricing it behave the way they do.',
    ],
    evidence: {
      kind: 'cascade',
      note: 'the questions, in order',
      items: [
        { text: 'why did the stock move?' },
        { text: 'what did the company actually report?' },
        { text: 'what did management say on the call?' },
        { text: 'why did anyone believe them?' },
      ],
    },
  },
  {
    id: 'research',
    place: 'left',
    connector: 'then',
    heading: 'I tested one of the claims.',
    detail: [
      'Anchoring — the theory that investors cling to the first price they see. Six months of price data, linear ',
      { term: 'regressions' },
      ' and model-checking, then a write-up. About 500 people read it.',
    ],
    evidence: {
      kind: 'cascade',
      note: 'the method',
      items: [
        { text: 'the claim: investors anchor to old prices' },
        { text: 'six months of price data' },
        { text: 'linear regressions' },
        { text: 'significance, magnitude, model fit' },
      ],
    },
  },
  {
    id: 'hdfc',
    place: 'right',
    connector: 'eventually',
    heading: 'I went to see it done professionally.',
    detail: [
      'A summer at ',
      { term: 'HDFC Asset Management' },
      ' in Mumbai. I screened MCA filings to build a database of fifty single-family offices the desk could actually call, and graded asset managers on how they treat investors — by phoning them and turning up in person.',
    ],
    evidence: {
      kind: 'ledger',
      note: 'the summer, itemised',
      items: [
        { figure: '50', text: 'single-family offices in the outreach database, screened via MCA filings' },
        { figure: '12', text: 'client-servicing metrics, scored through calls and site visits' },
        { figure: '5+', text: 'asset managers compared on them' },
        { figure: '1', text: 'NISM V-A certification, acquired along the way' },
      ],
    },
  },
  {
    id: 'thought',
    place: 'thought',
    connector: 'where',
    heading: 'The research was interesting. The seventeen tabs were less so.',
    detail: [
      'Everything I needed existed. It was just spread over a filing here, a screener there, a transcript, a spreadsheet, and whichever ',
      { term: 'tab' },
      ' the notes were hiding in.',
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
    id: 'teaching',
    place: 'close',
    connector: 'meanwhile',
    heading: 'I teach the math I lean on.',
    detail: [
      'TA for Calculus III in the Columbia math department: in the room while students work through problem sets, on email for everything after.',
    ],
  },
  {
    id: 'uaa',
    place: 'close',
    connector: 'it turned out',
    heading: 'I was not the only one with a tab problem.',
    detail: [
      'A friend had hit the same wall, so since June we’ve been building Universal Asset Analyzer: filings, screeners, valuation models, research notes and the portfolio in one window. My half is the engineering — the models, the quantitative screens, the pipelines underneath. It isn’t released; it’s where most of my time goes.',
    ],
    evidence: {
      kind: 'window',
      note: 'in one window',
      items: ['filings', 'screener', 'transcripts', 'models', 'notes', 'portfolio'],
    },
  },
];
