/**
 * The Now page — edit here, not in components.
 *
 * `semester.courses` is the current slate, shown in order. `note` is
 * optional: include one only when it says something useful about what the
 * course covers or where it fits. Mark a course `tentative: true` and it
 * gets a dagger plus the shared footnote.
 */

export const dateline = {
  value: 'September 2026 · New York',
};

export interface WorkItem {
  name: string;
  hint: string;
  href?: string;
}

export const inProgress: WorkItem[] = [
  {
    name: 'Universal Asset Analyzer',
    href: '/uaa',
    hint: 'investment research, in one place',
  },
  {
    name: 'Teaching Calculus III',
    hint: 'TA, Columbia mathematics department',
  },
  {
    name: 'This site',
    hint: 'still being furnished',
  },
];

export interface Course {
  title: string;
  dept: string;
  note?: string;
  tentative?: boolean;
}

export const semester = {
  term: 'Fall 2026',
  note: 'subject to add/drop',
  footnote: '† not yet confirmed.',
  courses: [
    {
      title: 'Ordinary Differential Equations',
      dept: 'mathematics',
      note: 'Picks up where Calculus III left off.',
    },
    {
      title: 'Probability Theory',
      dept: 'mathematics',
    },
    {
      title: 'Intermediate Macroeconomics',
      dept: 'economics',
    },
    {
      title: 'Data Structures',
      dept: 'computer science',
    },
    {
      title: 'Social Psychology',
      dept: 'psychology',
    },
    {
      title: 'Law & Society',
      dept: 'law',
      tentative: true,
    },
    {
      title: 'Theoretical Foundations of Political Economy',
      dept: 'economics',
      tentative: true,
    },
    {
      title: 'Psychology Lab',
      dept: 'psychology',
      tentative: true,
      note: 'Designing and running small experiments.',
    },
  ] as Course[],
};
