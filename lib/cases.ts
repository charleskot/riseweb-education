import type { Locale } from './i18n/config';

export type CaseId = 'hofmann' | 'barca' | 'cambra';

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseLocaleContent {
  client: string;
  hook: string;                  // One-line teaser shown on the card
  modalTitle: string;
  startingPoint: string;         // "Punto de partida" body
  whatWeDid: string;             // "Qué hicimos" body
  resultsHeading: string;
  yearGrid?: Array<{ year: string; value: string; sub: string }>;
  metrics: CaseMetric[];
  ctaLabel: string;
}

export interface CaseStudy {
  id: CaseId;
  logo: string;                  // /logos/<id>.png path
  available: boolean;            // false → card is non-clickable, no modal
  content: Record<Locale, CaseLocaleContent>;
}

export const CASES: CaseStudy[] = [
  {
    id: 'hofmann',
    logo: '/logos/hofmann.png',
    available: true,
    content: {
      es: {
        client: 'Hofmann Culinary School',
        hook: 'Una marca culinaria de referencia, potenciada con procesos comerciales y tecnología para multiplicar x3 su facturación.',
        modalTitle: 'Multiplicando por 3 la facturación de una de las escuelas culinarias más prestigiosas de Europa.',
        startingPoint: 'Hofmann es una de las escuelas culinarias de referencia en Europa, con una marca premium consolidada y un nivel formativo excepcional. La oportunidad: profesionalizar y escalar la operación comercial para que la maquinaria de negocio estuviera al nivel de la marca y del talento académico. Punto de partida: facturación 3M€, exclusivamente presencial, con un enorme potencial digital y de captación todavía por activar.',
        whatWeDid: 'Construimos la transformación por fases: primero la base tecnológica (CRM, plataforma de matriculación y pagos, cuadro de mando), después un equipo comercial interno (diseño, selección, onboarding y gestión), y finalmente el salto digital con un campus online y un equipo de ventas online operado desde WeRise durante la fase de arranque.',
        resultsHeading: 'Resultados',
        yearGrid: [
          { year: '2023', value: '3 M€', sub: 'Punto de partida · presencial' },
          { year: '2024', value: '5 M€', sub: '+60% · ocupación 89%' },
          { year: '2025', value: '7 M€', sub: 'EBITDA 1,9 M€' },
          { year: '2026 (proy.)', value: '+10 M€', sub: 'EBITDA +2,5 M€' },
        ],
        metrics: [
          { value: '56% → 89%', label: 'ocupación presencial' },
          { value: '<3%', label: 'CAC sobre facturación' },
          { value: '0 → 60-70k€/mes', label: 'canal online en 4-5 meses' },
          { value: 'x3', label: 'facturación en menos de 3 años' },
        ],
        ctaLabel: 'Agenda una consulta',
      },
      en: {
        client: 'Hofmann Culinary School',
        hook: 'A reference culinary brand, powered by commercial processes and technology to scale revenue 3x.',
        modalTitle: 'Tripling the revenue of one of Europe\'s most prestigious culinary schools.',
        startingPoint: 'Hofmann is one of the leading culinary schools in Europe, with a consolidated premium brand and an exceptional level of training. The opportunity: professionalize and scale the commercial operation so the business machinery would match the brand and the academic talent. Starting point: €3M revenue, exclusively in-person, with significant digital and lead-gen potential still to activate.',
        whatWeDid: 'We led the transformation in sequenced phases: first the technology base (CRM, enrollment & payments platform, dashboard), then the in-house commercial team (design, selection, onboarding, management), and finally the digital leap with an online campus and an online sales team operated from WeRise during ramp-up.',
        resultsHeading: 'Results',
        yearGrid: [
          { year: '2023', value: '€3M', sub: 'Starting point · in-person' },
          { year: '2024', value: '€5M', sub: '+60% · 89% occupancy' },
          { year: '2025', value: '€7M', sub: '€1.9M EBITDA' },
          { year: '2026 (proj.)', value: '+€10M', sub: '+€2.5M EBITDA' },
        ],
        metrics: [
          { value: '56% → 89%', label: 'in-person occupancy' },
          { value: '<3%', label: 'CAC over revenue' },
          { value: '0 → €60-70k/mo', label: 'online channel in 4-5 months' },
          { value: '3x', label: 'revenue in under 3 years' },
        ],
        ctaLabel: 'Book a consultation',
      },
    },
  },
  {
    id: 'barca',
    logo: '/logos/barca.png',
    available: true,
    content: {
      es: {
        client: 'Barça Innovation Hub',
        hook: '0 a 145.000 €/mes en 6 meses comercializando programas premium globalmente.',
        modalTitle: 'Comercialización global de programas premium del FC Barcelona.',
        startingPoint: 'Barça Innovation Hub, el hub de innovación y formación del FC Barcelona, lanzaba una nueva generación de programas premium dirigidos a profesionales del deporte a escala internacional. El reto: construir un sistema de captación y comercialización global desde cero, con foco en el perfil ejecutivo y volumen de matrículas suficiente para validar el modelo.',
        whatWeDid: 'Actuamos como partner integral de comercialización y estrategia de negocio/producto: definición del posicionamiento internacional, captación digital orientada a perfiles ejecutivos en mercados clave, sistema comercial end-to-end conectado a CRM, y dirección de ventas con IA aplicada al pipeline.',
        resultsHeading: 'Resultados',
        metrics: [
          { value: '0 → 145.000€/mes', label: 'facturación en 6 meses' },
          { value: '-7%', label: 'coste de adquisición sobre facturación' },
          { value: '✓', label: 'validación del modelo de comercialización global de programas premium' },
        ],
        ctaLabel: 'Agenda una consulta',
      },
      en: {
        client: 'Barça Innovation Hub',
        hook: '0 to €145k/month in 6 months commercializing premium programs globally.',
        modalTitle: 'Global commercialization of FC Barcelona premium programs.',
        startingPoint: "Barça Innovation Hub, FC Barcelona's innovation and education hub, was launching a new generation of premium programs targeted at sports professionals internationally. The challenge: build a global lead-gen and commercialization system from scratch, focused on the executive profile, with enough enrollment volume to validate the model.",
        whatWeDid: 'We acted as the integral commercialization and business/product strategy partner: defining international positioning, digital lead-gen targeting executive profiles in key markets, end-to-end commercial system connected to the CRM, and AI-driven sales management applied to the pipeline.',
        resultsHeading: 'Results',
        metrics: [
          { value: '0 → €145k/mo', label: 'revenue in 6 months' },
          { value: '-7%', label: 'acquisition cost over revenue' },
          { value: '✓', label: 'global commercialization model for premium programs validated' },
        ],
        ctaLabel: 'Book a consultation',
      },
    },
  },
  {
    id: 'cambra',
    logo: '/logos/cambra.png',
    available: false,
    content: {
      es: {
        client: 'Cambra de Comerç de Barcelona',
        hook: 'Caso de éxito en preparación.',
        modalTitle: '',
        startingPoint: '',
        whatWeDid: '',
        resultsHeading: '',
        metrics: [],
        ctaLabel: '',
      },
      en: {
        client: 'Cambra de Comerç de Barcelona',
        hook: 'Case study coming soon.',
        modalTitle: '',
        startingPoint: '',
        whatWeDid: '',
        resultsHeading: '',
        metrics: [],
        ctaLabel: '',
      },
    },
  },
];

export const HUBSPOT_MEETING_URL = 'https://meetings-eu1.hubspot.com/rebeca-marcen';
