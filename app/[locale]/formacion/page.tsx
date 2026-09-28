import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/i18n/config';
import { HUBSPOT_MEETING_URL } from '@/lib/cases';

export const metadata: Metadata = {
  title: 'Formación — WeRise®',
  description:
    'Programas de formación en negocio educativo, marketing digital, ventas, tecnología y automatización con IA para equipos de instituciones académicas.',
};

type Program = { title: string; format: string; audience: string; body: string; modules: string[] };
type LocaleCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  intro2: string;
  who: { heading: string; items: string[] };
  formats: { heading: string; items: { title: string; body: string }[] };
  programsHeading: string;
  programs: Program[];
  fundae: { heading: string; body: string };
  cta: { title: string; body: string; button: string };
  back: string;
};

const COPY: Record<Locale, LocaleCopy> = {
  es: {
    eyebrow: 'Formación',
    title: 'Programas de formación para equipos de instituciones académicas.',
    intro:
      'Diseñamos e impartimos programas de formación in-company dirigidos a equipos de dirección, admisiones, marketing y operaciones de business schools, universidades, escuelas privadas y centros de FP.',
    intro2:
      'Los contenidos se construyen a partir de nuestra experiencia dirigiendo negocio, ventas, marketing y tecnología de instituciones académicas. Combinamos sesiones expositivas con talleres prácticos sobre casos y datos reales del propio centro.',
    who: {
      heading: 'A quién va dirigida',
      items: [
        'Direcciones generales y de negocio',
        'Equipos de admisiones y comercial',
        'Responsables de marketing y captación',
        'Responsables de tecnología, procesos y operaciones',
      ],
    },
    formats: {
      heading: 'Formatos',
      items: [
        {
          title: 'In-company',
          body: 'Programas cerrados para el equipo del centro, a medida del punto de partida y los objetivos definidos.',
        },
        {
          title: 'Talleres ejecutivos',
          body: 'Sesiones intensivas de una jornada sobre una temática concreta (funnel comercial, IA aplicada, etc.).',
        },
        {
          title: 'Acompañamiento continuo',
          body: 'Formación distribuida en el tiempo, combinada con implementación real en el negocio.',
        },
      ],
    },
    programsHeading: 'Áreas de formación',
    programs: [
      {
        title: 'Dirección de negocio educativo',
        format: 'Programa · 20-40 h',
        audience: 'Direcciones y comités de dirección',
        body: 'Cómo se dirige el negocio de un centro educativo con criterio: modelo económico, unit economics del alumno, KPIs y forecast comercial, roadmap de crecimiento y toma de decisiones basada en datos.',
        modules: [
          'Modelo de negocio y unit economics',
          'Cuadro de mando y KPIs comerciales',
          'Planificación de matrículas y forecast',
          'Estructura del equipo comercial',
        ],
      },
      {
        title: 'Marketing y captación digital',
        format: 'Programa · 16-30 h',
        audience: 'Equipos de marketing y captación',
        body: 'Cómo montar y operar un motor de captación digital que genere leads cualificados y matrículas de forma predecible: definición del ICP, embudo, campañas en Meta, Google y LinkedIn, y medición.',
        modules: [
          'ICP y propuesta de valor por programa',
          'Estrategia de embudo y contenido',
          'Campañas en Meta, Google y LinkedIn',
          'Atribución, medición y optimización',
        ],
      },
      {
        title: 'Sistema comercial y admisiones',
        format: 'Programa · 16-30 h',
        audience: 'Equipos de admisiones y ventas',
        body: 'Cómo profesionalizar el equipo de admisiones para convertir información en matrícula: playbook comercial, gestión del CRM, ritmo de gestión, técnicas de cierre y seguimiento sistemático.',
        modules: [
          'Playbook comercial del centro',
          'CRM: uso, disciplina y automatización',
          'Discovery, argumentación y objeciones',
          'Cierre, cobro y traspaso a academia',
        ],
      },
      {
        title: 'Tecnología y procesos',
        format: 'Programa · 12-24 h',
        audience: 'Responsables de tecnología y operaciones',
        body: 'Cómo diseñar y operar el stack tecnológico del centro para que marketing, ventas y administración trabajen sobre datos únicos: CRM, plataforma de matriculación y pagos, integraciones y automatizaciones.',
        modules: [
          'Arquitectura del stack educativo',
          'CRM y proceso comercial digitalizado',
          'Plataforma de matriculación, cobros y facturación',
          'Integraciones y automatizaciones operativas',
        ],
      },
      {
        title: 'IA aplicada al negocio educativo',
        format: 'Programa · 12-20 h',
        audience: 'Equipos de dirección, marketing y admisiones',
        body: 'Cómo introducir IA en la operación diaria del centro con criterio y sin humo: casos de uso reales, herramientas evaluadas, gobierno de datos y adopción por el equipo.',
        modules: [
          'Casos de uso de IA en captación y ventas',
          'IA como asistente del equipo comercial',
          'Automatización de tareas operativas',
          'Gobierno del dato, privacidad y adopción',
        ],
      },
    ],
    fundae: {
      heading: 'Bonificación FUNDAE',
      body:
        'Los programas de formación in-company pueden bonificarse a través de FUNDAE cuando el centro cumple los requisitos. Nos encargamos de la documentación y del alta cuando forma parte del alcance del proyecto.',
    },
    cta: {
      title: '¿Quieres el detalle de un programa concreto?',
      body: 'Agenda una consulta y preparamos una propuesta a medida del equipo, el punto de partida y los objetivos del centro.',
      button: 'Agenda una consulta',
    },
    back: 'Volver al inicio',
  },
  en: {
    eyebrow: 'Training',
    title: 'Training programs for teams at academic institutions.',
    intro:
      'We design and deliver in-company training programs for leadership, admissions, marketing and operations teams at business schools, universities, private schools and vocational centers.',
    intro2:
      'Content is built on our experience running business, sales, marketing and technology at academic institutions. We combine lectures with hands-on workshops on real data and cases from the school itself.',
    who: {
      heading: 'Who it is for',
      items: [
        'General and business leadership',
        'Admissions and sales teams',
        'Marketing and lead-gen leads',
        'Technology, process and operations leads',
      ],
    },
    formats: {
      heading: 'Formats',
      items: [
        {
          title: 'In-company',
          body: 'Closed programs for the school\'s team, tailored to the starting point and defined objectives.',
        },
        {
          title: 'Executive workshops',
          body: 'One-day intensive sessions on a specific topic (commercial funnel, applied AI, etc.).',
        },
        {
          title: 'Ongoing support',
          body: 'Training distributed over time, combined with real implementation in the business.',
        },
      ],
    },
    programsHeading: 'Training areas',
    programs: [
      {
        title: 'Educational business leadership',
        format: 'Program · 20-40 h',
        audience: 'Leadership and management committees',
        body: 'How to run an educational business with criteria: economic model, student unit economics, KPIs and commercial forecast, growth roadmap and data-driven decision making.',
        modules: [
          'Business model and unit economics',
          'Dashboard and commercial KPIs',
          'Enrollment planning and forecast',
          'Commercial team structure',
        ],
      },
      {
        title: 'Marketing and digital lead-gen',
        format: 'Program · 16-30 h',
        audience: 'Marketing and lead-gen teams',
        body: 'How to build and run a digital lead-gen engine that generates qualified leads and enrollments predictably: ICP definition, funnel, Meta / Google / LinkedIn campaigns, and measurement.',
        modules: [
          'ICP and value proposition per program',
          'Funnel and content strategy',
          'Meta, Google and LinkedIn campaigns',
          'Attribution, measurement and optimization',
        ],
      },
      {
        title: 'Commercial and admissions system',
        format: 'Program · 16-30 h',
        audience: 'Admissions and sales teams',
        body: 'How to professionalize the admissions team to turn information requests into enrollments: commercial playbook, CRM discipline, management cadence, closing techniques and systematic follow-up.',
        modules: [
          'Commercial playbook',
          'CRM: use, discipline and automation',
          'Discovery, pitch and objections',
          'Closing, payment and handoff to academics',
        ],
      },
      {
        title: 'Technology and processes',
        format: 'Program · 12-24 h',
        audience: 'Technology and operations leads',
        body: 'How to design and operate the school\'s tech stack so marketing, sales and admin work on a single source of truth: CRM, enrollment & payment platform, integrations and automations.',
        modules: [
          'Educational stack architecture',
          'CRM and digitized commercial process',
          'Enrollment, payment and billing platform',
          'Integrations and operational automations',
        ],
      },
      {
        title: 'AI applied to the educational business',
        format: 'Program · 12-20 h',
        audience: 'Leadership, marketing and admissions teams',
        body: 'How to introduce AI into daily operations with criteria and no fluff: real use cases, evaluated tools, data governance and team adoption.',
        modules: [
          'AI use cases in lead-gen and sales',
          'AI as an assistant to the commercial team',
          'Operational task automation',
          'Data governance, privacy and adoption',
        ],
      },
    ],
    fundae: {
      heading: 'FUNDAE funding',
      body:
        'In-company training programs may be funded through FUNDAE when the school meets the requirements. We handle documentation and registration when it is part of the project scope.',
    },
    cta: {
      title: 'Want the detail on a specific program?',
      body: 'Book a consultation and we\'ll prepare a tailored proposal based on the team, starting point and goals.',
      button: 'Book a consultation',
    },
    back: 'Back to home',
  },
};

export default function FormacionPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const c = COPY[locale];
  const home = locale === 'es' ? '/es' : '/en';

  return (
    <main className="min-h-screen bg-wr-dark">
      {/* Hero */}
      <section className="border-b border-wr-border px-6 pt-32 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            {c.eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-black tracking-tighter text-wr-white md:text-5xl lg:text-6xl">
            {c.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-wr-white/75">{c.intro}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-wr-white/60">{c.intro2}</p>
        </div>
      </section>

      {/* Audience + formats */}
      <section className="border-b border-wr-border px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
              {c.who.heading}
            </h2>
            <ul className="space-y-3">
              {c.who.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-base text-wr-white/80">
                  <span className="mt-2 h-1 w-3 shrink-0 bg-wr-lime" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
              {c.formats.heading}
            </h2>
            <div className="space-y-5">
              {c.formats.items.map((f) => (
                <div key={f.title}>
                  <h3 className="text-base font-bold text-wr-white">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-wr-white/60">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="border-b border-wr-border px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-black tracking-tight text-wr-white md:text-3xl">
            {c.programsHeading}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {c.programs.map((p) => (
              <article
                key={p.title}
                className="flex flex-col gap-4 rounded-2xl border border-wr-border bg-wr-surface p-6 md:p-7"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-wr-lime">
                    {p.format} · {p.audience}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-wr-white">{p.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-wr-white/70">{p.body}</p>
                <ul className="mt-1 space-y-1.5 border-t border-wr-border pt-4">
                  {p.modules.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-xs text-wr-white/60">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-wr-lime" />
                      {m}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDAE */}
      <section className="border-b border-wr-border px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            {c.fundae.heading}
          </p>
          <p className="text-base leading-relaxed text-wr-white/70">{c.fundae.body}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-black tracking-tighter text-wr-white md:text-4xl">
            {c.cta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-wr-white/70">
            {c.cta.body}
          </p>
          <div className="mt-8">
            <a
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-wr-lime px-6 py-3 text-sm font-bold text-wr-dark transition-colors hover:bg-wr-lime-lt"
            >
              {c.cta.button}
            </a>
          </div>
          <div className="mt-14">
            <Link
              href={home}
              className="inline-flex items-center gap-2 text-sm text-wr-white/50 transition-colors hover:text-wr-white"
            >
              <span>←</span>
              <span>{c.back}</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
