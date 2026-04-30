export const en = {
  meta: {
    title: 'Rise Education — WeRise education vertical | Growth for academic institutions',
    description: 'We transform leading academic institutions into sustainable growth. Strategy, technology and sales aligned to your results.',
  },
  header: {
    nav: [
      { label: 'Cases', href: '#casos' },
      { label: 'How we work', href: '#como-trabajamos' },
      { label: 'Why us', href: '#por-que-nosotros' },
      { label: 'Technology', href: '#tecnologia' },
    ],
    cta: 'Book a consultation',
  },
  hero: {
    eyebrow: 'WeRise education vertical',
    headline: ['Your institution already excels at teaching.', 'Now it deserves to excel at growing.'],
    subheadline: 'We integrate as the strategic partner of your academic institution: leading business, sales and marketing with a model aligned to your results.',
    ctaPrimary: 'Book a consultation',
    ctaSecondary: 'See case studies',
  },
  problem: {
    title: 'Many institutions know how to teach, but not how to scale.',
    highlight: 'They lack a professional commercial and digital marketing engine that amplifies that prestige.',
    pains: [
      { title: 'Rising marketing costs', body: 'and difficulty building sales teams.' },
      { title: 'New competitors with disruptive offerings', body: 'more agile and global.' },
      { title: 'Under-digitized processes', body: 'and costly structures that hold back scalability.' },
      { title: 'Leadership focused on operations', body: 'with vast amounts of data but no clear direction.' },
    ],
  },
  howWeWork: {
    title: 'Levels of collaboration based on where your institution stands.',
    subtitle: 'Not consultants, not commission agents: real business leadership.',
    levels: [
      {
        number: '01',
        title: 'Strategic diagnosis',
        body: 'Express analysis of the educational business to detect blockers and real opportunities. We identify blockers, opportunities and define a clear roadmap to grow with criteria.',
        deliverables: [
          'Clear view of the state of the business',
          'Main growth blockers',
          'Areas of opportunity',
          'Prioritized roadmap of next steps',
        ],
      },
      {
        number: '02',
        title: 'Specific services (project or monthly fee)',
        body: 'Business, sales and marketing leadership by project or monthly fee. We implement and optimize CRM, payment systems, AI automation and operational processes so the business works as a whole. We intervene exactly where growth is blocked.',
      },
      {
        number: '03',
        title: 'Success-based collaboration when it makes sense',
        body: 'When the business is ready, we step in to scale together: we invest structure and operate on a success basis.',
      },
    ],
  },
  cases: {
    title: 'Leading institutions already trust us.',
    subtitle: 'The common denominator: real, sustainable, verifiable growth.',
    cambraComing: 'Case study coming soon.',
  },
  results: {
    title: 'Every euro invested compounds into real growth.',
    quantitative: {
      heading: 'Quantitative ROI',
      metrics: [
        { value: '+25% – 40%', label: 'in enrollments' },
        { value: '-30%', label: 'in cost of acquisition per student' },
        { value: '+35% – 50%', label: 'in lead-to-enrollment conversion' },
        { value: 'x7', label: 'average ROI per euro invested in marketing' },
      ],
      highlight: { value: '+€50k/month', label: 'achievable revenue in 6 months' },
    },
    qualitative: {
      heading: 'Qualitative ROI',
      items: [
        { title: 'Freed-up leadership', body: 'More time to innovate on programs and improve quality.' },
        { title: 'Strengthened school', body: 'Prestige backed by a solid business engine.' },
        { title: 'Trust and visibility', body: 'Decisions based on data, not on intuition.' },
        { title: 'Reduced risk', body: 'Deep experience and a true win-win collaboration.' },
      ],
    },
  },
  whyUs: {
    title: 'We integrate as the strategic partner that drives your growth.',
    subtitle: 'Not consultants, not commission agents; real business leadership.',
    pillars: [
      { title: 'Proven experience in leading schools', body: 'With a team 100% focused on education: sales, marketing and business.' },
      { title: 'Integrated technology ecosystem', body: 'CRM, SalesHub and AI automations that multiply commercial effectiveness.' },
      { title: 'Win-win, low-risk model', body: 'We can work on a success basis when the business is ready.' },
      { title: 'Total transparency', body: 'Clear objectives and measurable results in real time.' },
    ],
    alternatives: {
      title: 'Choosing any other option always costs more',
      items: [
        { title: 'Sales or marketing agencies', body: 'Acquisition tactics without a global strategy, disconnected from the educational business.' },
        { title: 'External consultants', body: 'Diagnostics and presentations, but no real execution.' },
        { title: 'Doing it alone', body: 'Years of trial and error, hiring expensive profiles with no guaranteed return, and less time to innovate on the academic side.' },
      ],
      closer: "The only integral partner that combines strategy, sales, marketing and technology into a single growth engine, aligned to the school's results.",
    },
  },
  technology: {
    title: 'Technology that operates growth, not just describes it.',
    skola: {
      name: 'Skola',
      tagline: 'Enrollment and payment management',
      lead: 'The simplest and most secure way to manage your enrollments.',
      features: [
        'Frictionless global payments (Flywire integration)',
        'Clear view of the business: revenue, students and programs in one click',
        '100% digital enrollments: payment, signature and confirmation in a single flow',
        'Full automation: installments, reminders and blocks with no manual intervention',
        'Student portal with access to documents and invoices',
      ],
    },
    ai: {
      name: 'AI for your commercial team',
      features: [
        'Assistant connected to the CRM: contacts leads by WhatsApp and phone to schedule meetings automatically',
        'AI sales leadership: analyzes the pipeline and proposes daily actions to improve performance',
        'Automated follow-up: reminders and messages without human intervention',
        'Full integration: everything logged and updated in the CRM',
      ],
    },
  },
  weRiseGroup: {
    title: 'We are the WeRise education vertical.',
    body: 'WeRise is an AI-powered growth agency that helps companies scale with strategy, technology and execution. Rise Education is the team dedicated to academic institutions: business schools, universities, vocational schools and edtech projects. We combine the best of the group —proprietary technology, commercial talent, applied AI— with a deep understanding of the educational business.',
    cta: 'Discover the WeRise group →',
    href: 'https://werise.es',
  },
  finalCta: {
    title: ['Your institution already excels at teaching.', 'Now it deserves to excel at growing.'],
    body: 'Book a free consultation with our team. No commitment — you walk away with an initial diagnosis of your educational business and concrete proposals for improvement.',
    cta: 'Book a consultation',
    email: 'hello@werise.education',
  },
  footer: {
    parentLine: 'WeRise education vertical — werise.es',
    privacy: 'Privacy policy',
    cookies: 'Cookies policy',
    linkedin: 'LinkedIn',
    copyright: '© {year} Rise Education. All rights reserved.',
  },
} as const;

export type CopyEn = typeof en;
