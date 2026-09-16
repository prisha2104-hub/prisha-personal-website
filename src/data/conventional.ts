/**
 * The conventional version — edit here, not in components.
 *
 * Every fact on this page must be true. Anything not yet confirmed is a
 * `tk` slot ({ text, tk: true }): it renders in brackets, visibly
 * unfinished, and the footnote explains itself. Replace the text and drop
 * the flag when the real value arrives. Do not let invented dates or
 * titles sneak in here — the rest of the site never lies, and neither
 * does this page.
 *
 * Current state: nothing is bracketed. Everything below comes off the
 * résumé of record (September 2026). If something changes there, change
 * it here.
 */

export interface Slot {
  text: string;
  tk?: boolean;
  href?: string;
}

export interface Figure {
  figure: string;
  text: string;
}

/** A ruled label/value row inside an entry — for work with parts. */
export interface BreakdownRow {
  label: string;
  text: string;
}

export interface Entry {
  what: string;
  org?: Slot;
  place?: string;
  when?: Slot;
  /** One line of framing, set larger than the details. Use sparingly. */
  lead?: string;
  details?: Slot[];
  breakdown?: BreakdownRow[];
  figures?: Figure[];
  link?: { label: string; href: string };
}

export interface DocSection {
  id: string;
  title: string;
  entries: Entry[];
}

export const identity = {
  name: 'Prisha Agarwal',
  descriptor: 'economics–mathematics · new york',
  line: 'Studies economics and mathematics at Barnard; builds UAA; teaches calculus.',
  asOf: 'September 2026',
};

export const contacts: Slot[] = [
  { text: 'email', href: 'mailto:pva2104@barnard.edu' },
  { text: 'github', href: 'https://github.com/prisha2104-hub' },
  { text: 'linkedin', href: 'https://www.linkedin.com/in/prisha-agarwal-21228828a/' },
];

export const sections: DocSection[] = [
  {
    id: 'education',
    title: 'Education',
    entries: [
      {
        what: 'Economics–Mathematics, minor in Computer Science',
        org: { text: 'Barnard College, Columbia University' },
        place: 'New York',
        when: { text: 'class of May 2029' },
        details: [
          {
            text: 'Coursework: accounting & finance for economics, intermediate microeconomics, intermediate macroeconomics, theoretical foundations of the political economy, linear algebra, calculus IV, data structures & algorithms, probability theory.',
          },
          {
            text: 'Clubs: Columbia Girls Who Code, Enterprise Valuation Group, Columbia Emerging Markets Review, CU Dhoom.',
          },
        ],
        figures: [{ figure: '4.07', text: "GPA · Dean's List" }],
      },
      {
        what: 'IB Diploma, 43/45',
        org: { text: 'Oberoi International School' },
        place: 'Mumbai',
        when: { text: 'May 2025' },
        details: [
          {
            text: 'HL economics, psychology, mathematics AA; SL English, biology, Spanish ab initio. SAT 1540.',
          },
          {
            text: 'School rank #1 in the SOF International Mathematics Olympiad; Global Economics Olympiad finalist; ICE Distinction Award for A* across five CAIE groups; team lead and finalist two years running at the Melbourne Case Competition.',
          },
        ],
      },
      {
        what: 'Young Scholars Program — economics, policy, society',
        org: { text: 'Ashoka University' },
        place: 'Mumbai',
        when: { text: 'May 2024' },
        details: [
          {
            text: 'Argued income inequality and the role of government in welfare in formal debates; ran comparative policy approaches through simulations.',
          },
        ],
      },
    ],
  },
  {
    id: 'experience',
    title: 'Experience',
    entries: [
      {
        what: 'Intern',
        org: { text: 'HDFC Asset Management Co.' },
        place: 'Mumbai',
        when: { text: 'May – July 2026' },
        lead: 'Two months on the question of how an asset manager finds investors — and what it is like to be one of them.',
        details: [
          {
            text: 'Built a curated database of 50 Mumbai-based single-family offices in the ₹400–900 crore net-worth range, screening candidates through MCA filings to work out who was actually a prospect and who only looked like one. The desk used it for outreach and for new client conversations.',
          },
          {
            text: 'Evaluated 5+ AMCs across 12 digital-interface and client-servicing metrics through primary research — calls and site visits, not brochures. The point was to see where investor experience genuinely differs between managers, and where outreach and service had room to be better.',
          },
          {
            text: 'Earned the NISM V-A Mutual Fund Distributors certification along the way: NAV accounting, return computation, risk profiling, and the suitability frameworks that govern fund distribution in India.',
          },
        ],
        figures: [
          { figure: '50', text: 'single-family offices in the database' },
          { figure: '₹400–900cr', text: 'net-worth range screened' },
          { figure: '5+', text: 'asset managers evaluated' },
          { figure: '12', text: 'interface & servicing metrics' },
        ],
      },
      {
        what: 'Teaching Assistant',
        org: { text: 'Columbia University Mathematics Department' },
        place: 'New York',
        when: { text: 'September 2026 – present' },
        details: [
          {
            text: 'Teaching assistant for Calculus III: in-class support while students work through classwork and homework, and questions answered by email between sessions. The work is mostly helping people find their footing in multivariable ideas.',
          },
        ],
      },
      {
        what: 'Finance Intern',
        org: { text: 'Scarecrow M&C Saatchi' },
        place: 'Mumbai',
        when: { text: 'June – July 2024' },
        details: [
          {
            text: 'Built a spreadsheet model to track and reconcile budgets across Nickelodeon YouTube ad campaigns, read three months of daily expense data for the reconciliation errors that kept recurring, and cross-checked sponsorship costs against 20 vendor agreements — catching discrepancies before payout.',
          },
        ],
      },
    ],
  },
  {
    id: 'building',
    title: 'Research & building',
    entries: [
      {
        what: 'Universal Asset Analyzer',
        org: { text: 'co-founder & CTO' },
        when: { text: 'June 2026 – present' },
        lead: 'Investment research is scattered across filings, screeners, transcripts, models, news, notes and portfolio data. UAA is one workspace for all of it.',
        details: [
          {
            text: 'Started with a friend and still being built. The premise came from watching how the work actually goes: the evidence lives in a dozen places, so the analysis ends up shaped by whatever was easiest to find rather than by what mattered. Consolidating the sources makes it possible to be systematic — and personal — about how a decision gets made.',
          },
          {
            text: 'I work across the product and engineering side: the valuation models, the screening and portfolio tools, the data pipelines underneath them, and the AI research layer that reads what an analyst would otherwise read alone.',
          },
        ],
        breakdown: [
          { label: 'valuation', text: 'DCF and comparable-company models' },
          { label: 'screening', text: 'quantitative screening tools' },
          { label: 'portfolio', text: 'portfolio analytics' },
          { label: 'research', text: 'AI-powered research capabilities' },
        ],
        link: { label: 'The longer story', href: '/one-thing-led-to-another#uaa' },
      },
      {
        what: 'Independent Researcher',
        org: { text: 'economics research' },
        place: 'Mumbai',
        when: { text: 'April – October 2025' },
        details: [
          {
            text: 'Designed a study testing anchoring bias in investment decisions using price data and regression analysis, then used linear regression to judge statistical significance, coefficient magnitude and model fit. The write-up reached 500+ readers across Medium, LinkedIn and Substack.',
          },
        ],
      },
      {
        what: 'This site',
        when: { text: 'ongoing' },
        details: [
          {
            text: 'Designed and built from scratch — Astro, TypeScript, hand-set interactions. Doubles as the evidence.',
          },
        ],
      },
    ],
  },
  {
    id: 'community',
    title: 'Community',
    entries: [
      {
        what: 'Project Head',
        org: { text: 'Food For Thought' },
        place: 'Mumbai',
        when: { text: '2023 – 2025' },
        details: [
          {
            text: 'Built and led a team of 30 against food waste and hunger, meeting three times a month: eight fundraisers raising USD 1,200+, 200+ food boxes donated, and grade-wide homeroom activities and workshops so the rest of the school understood why any of it was necessary.',
          },
        ],
      },
      {
        what: 'Project Head',
        org: { text: 'The Psych Times' },
        place: 'Mumbai',
        when: { text: 'June 2023 – August 2025' },
        details: [
          {
            text: 'Ran mental-health workshops at five underserved schools — coordinating with administrators, writing the session materials, leading the discussions — and built a mental-health resource site and social campaigns that reached 1,000+ people.',
          },
        ],
      },
      {
        what: 'Math Teacher & Volunteer',
        org: { text: 'Bansidhar Aggarwal School' },
        place: 'Mumbai',
        when: { text: '2021 – 2024' },
        details: [
          {
            text: 'Tutored Grade 6 students biweekly through algebra, integers, rates and percentages; ran quizzes and competitions (an “Exponent Relay” among them) that lifted grades 40%; wrote test papers and end-of-year examination questions to curriculum standard.',
          },
        ],
      },
      {
        what: 'Volunteer',
        org: { text: 'Gateway School' },
        place: 'Mumbai',
        when: { text: 'May – June 2023' },
        details: [
          {
            text: 'Facilitated small-group learning sessions with customised materials, documented therapy sessions in detail, and compiled weekly progress reports for educators and parents.',
          },
        ],
      },
      {
        what: 'Class Representative',
        org: { text: 'Student Council' },
        place: 'Mumbai',
        when: { text: '2021 – 2023' },
        details: [
          {
            text: 'Ran the execution of annual events and inter-house competitions, carried messages in both directions between teachers and students, and proposed initiatives at biweekly council meetings.',
          },
        ],
      },
    ],
  },
];

export interface SkillRow {
  label: string;
  items: string;
}

export const skills: SkillRow[] = [
  { label: 'code', items: 'Python (NumPy, pandas, SciPy) · Java · TypeScript · Astro · Git' },
  { label: 'tools', items: 'Microsoft Excel · Google Workspace' },
  {
    label: 'finance',
    items:
      'DCF & comparable-company valuation · quantitative screening · portfolio analytics · regression analysis · MCA-filings screening · primary research (calls, site visits)',
  },
  { label: 'certified', items: 'NISM V-A — Mutual Fund Distributors' },
  { label: 'languages', items: 'English · Hindi (fluent) · Spanish (intermediate) · French (basic)' },
];

export const footnote =
  'Every date and figure here is checkable. Print for the one-page version.';
