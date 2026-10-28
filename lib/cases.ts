import type { Locale } from './i18n/config';

export type CaseId = 'barca' | 'cambra' | 'reversal';

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
    available: true,
    content: {
      es: {
        client: 'Cambra de Comerç de Barcelona',
        hook: 'Plataforma cloud llave en mano para digitalizar la formación de una de las instituciones de referencia del país.',
        modalTitle: 'Plataforma cloud de gestión académica para la Cambra de Comerç de Barcelona.',
        startingPoint: 'La Cambra Oficial de Comerç, Indústria, Serveis i Navegació de Barcelona —una de las instituciones de referencia del tejido empresarial catalán y español— operaba su área formativa sobre un ecosistema heredado de hace dos décadas: sistemas anticuados, integraciones ineficaces y dependencia de proveedores externos poco flexibles. La oportunidad: rediseñar la plataforma desde cero como una herramienta moderna, ágil y escalable, capaz de multiplicar la actividad formativa de la Cambra y dar servicio simultáneo a la red de cámaras y entidades vinculadas a nivel estatal.',
        whatWeDid: 'Asumimos el proyecto como partner llave en mano: análisis exhaustivo de los procesos, selección e integración de las mejores herramientas del mercado y construcción de un ecosistema único compuesto por ERP académico, LMS (campus virtual), portal web, sistema de pagos, notificaciones y gestión de bonificaciones FUNDAE. Arquitectura cloud multi-empresa, cumplimiento RGPD de origen e integración con el ERP financiero y el CRM corporativo. Capacitamos al equipo interno para que la Cambra opere la plataforma con plena autonomía y acompañamos el despliegue hasta su puesta en producción.',
        resultsHeading: 'Resultados',
        metrics: [
          { value: 'ERP + LMS + Portal', label: 'ecosistema integrado en una sola plataforma cloud' },
          { value: 'Multi-empresa', label: 'servicio simultáneo a la red de cámaras y entidades' },
          { value: 'RGPD + FUNDAE', label: 'cumplimiento normativo de origen' },
          { value: 'Autonomía total', label: 'equipo interno capacitado para operar sin dependencia externa' },
        ],
        ctaLabel: 'Agenda una consulta',
      },
      en: {
        client: 'Cambra de Comerç de Barcelona',
        hook: 'Turnkey cloud platform to digitize the training operations of one of Spain\'s reference institutions.',
        modalTitle: 'Cloud academic-management platform for the Cambra de Comerç de Barcelona.',
        startingPoint: 'The Barcelona Chamber of Commerce —one of the reference institutions of the Catalan and Spanish business fabric— was running its training area on an ecosystem inherited from two decades ago: outdated systems, inefficient integrations, and dependence on inflexible external vendors. The opportunity: redesign the platform from scratch as a modern, agile, scalable tool capable of multiplying the Chamber\'s training activity and simultaneously serving the network of chambers and affiliated entities at a national level.',
        whatWeDid: 'We took on the project as a turnkey partner: exhaustive process analysis, selection and integration of the best tools in the market, and construction of a single ecosystem made up of an academic ERP, LMS (virtual campus), web portal, payments system, notifications and FUNDAE subsidy management. Multi-tenant cloud architecture, GDPR compliance by design and integration with the corporate financial ERP and CRM. We trained the internal team so the Chamber could operate the platform autonomously, and accompanied the rollout through go-live.',
        resultsHeading: 'Results',
        metrics: [
          { value: 'ERP + LMS + Portal', label: 'full ecosystem on a single cloud platform' },
          { value: 'Multi-tenant', label: 'serving the network of chambers and entities simultaneously' },
          { value: 'GDPR + FUNDAE', label: 'compliance by design' },
          { value: 'Full autonomy', label: 'internal team trained to operate without external dependence' },
        ],
        ctaLabel: 'Book a consultation',
      },
    },
  },
  {
    id: 'reversal',
    logo: '/logos/reversal.png',
    available: true,
    content: {
      es: {
        client: 'Reversal Institute',
        hook: 'Proyecto propio: diseñamos, lanzamos y operamos una escuela online de longevidad con título universitario.',
        modalTitle: 'Reversal Institute: una escuela de longevidad lanzada y operada por Rise.',
        startingPoint: 'Reversal Institute es un proyecto propio de Rise. Detectamos una categoría formativa emergente —la longevidad y el healthspan— sin una oferta seria en español para los profesionales del bienestar: nutricionistas, entrenadores, fisioterapeutas, coaches, farmacéuticos o dueños de clínicas wellness. El reto: construir desde cero una escuela creíble, con respaldo universitario y un modelo comercial escalable.',
        whatWeDid: 'Aplicamos nuestro propio método de principio a fin: definición del producto académico y del claustro de expertos en activo, convenio con la Universidad Isabel I para la titulación, marca y web, sistema de captación y admisiones conectado a CRM, plataforma de matriculación y pagos, campus online con clases en directo y asistente IA para el alumno. Hoy operamos la Certificación en Longevidad y Healthspan, especializaciones clínicas y de negocio, y el Reversal Summit.',
        resultsHeading: 'Resultados',
        metrics: [
          { value: '15 ECTS', label: 'título propio expedido por la Universidad Isabel I' },
          { value: '16 semanas', label: 'programa online con clases en directo y 10 módulos' },
          { value: 'Escuela completa', label: 'certificación, especializaciones y summit propio' },
          { value: '100% Rise', label: 'producto, captación, tecnología y operación' },
        ],
        ctaLabel: 'Agenda una consulta',
      },
      en: {
        client: 'Reversal Institute',
        hook: 'Our own project: we designed, launched and run an online longevity school with a university degree.',
        modalTitle: 'Reversal Institute: a longevity school launched and run by Rise.',
        startingPoint: 'Reversal Institute is a Rise in-house project. We spotted an emerging training category —longevity and healthspan— with no serious Spanish-language offer for wellness professionals: nutritionists, trainers, physiotherapists, coaches, pharmacists and wellness clinic owners. The challenge: build a credible school from scratch, with university backing and a scalable commercial model.',
        whatWeDid: 'We applied our own method end to end: academic product design and a faculty of practising experts, an agreement with Universidad Isabel I for the degree, brand and website, lead-gen and admissions system connected to the CRM, enrollment and payments platform, and an online campus with live classes and an AI assistant for students. Today we run the Longevity and Healthspan Certification, clinical and business specializations, and the Reversal Summit.',
        resultsHeading: 'Results',
        metrics: [
          { value: '15 ECTS', label: 'university degree issued by Universidad Isabel I' },
          { value: '16 weeks', label: 'online program with live classes and 10 modules' },
          { value: 'Full school', label: 'certification, specializations and its own summit' },
          { value: '100% Rise', label: 'product, lead-gen, technology and operations' },
        ],
        ctaLabel: 'Book a consultation',
      },
    },
  },
];

export const HUBSPOT_MEETING_URL = 'https://meetings-eu1.hubspot.com/rebeca-marcen';
