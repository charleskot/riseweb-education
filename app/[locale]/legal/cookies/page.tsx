import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: 'Política de cookies — WeRise®',
};

type CookieCardData = { type: string; description: string; examples: string; required: boolean };

const COPY = {
  es: {
    eyebrow: 'Legal',
    title: 'Política de cookies',
    lastUpdate: 'Última actualización: enero 2026',
    back: 'Volver al inicio',
    badgeYes: 'Requiere consentimiento: Sí',
    badgeNo: 'Requiere consentimiento: No',
    examplesLabel: 'Ejemplos:',
    sections: {
      whatAre: {
        h: '1. ¿Qué son las cookies?',
        p: [
          'Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo cuando los visita. Sirven para que el sitio recuerde información sobre su visita, como sus preferencias de idioma o si ha iniciado sesión.',
          'Las cookies pueden ser propias (establecidas directamente por el sitio que visita) o de terceros (establecidas por dominios distintos al que aparece en la barra de direcciones). Según su duración, pueden ser de sesión (se eliminan al cerrar el navegador) o persistentes.',
          'En España, el uso de cookies está regulado por la Ley 34/2002 (LSSI-CE) y por el RGPD. Las cookies que no son estrictamente necesarias requieren su consentimiento previo e informado.',
        ],
      },
      typesIntro: {
        h: '2. Cookies que utilizamos',
        p: ['A continuación detallamos los tipos de cookies que este sitio web utiliza o puede utilizar:'],
      },
      cards: [
        {
          type: 'Técnicas / Necesarias',
          description: 'Imprescindibles para que el sitio web funcione correctamente. Permiten funciones básicas como la navegación entre páginas o el almacenamiento de sus preferencias de privacidad.',
          examples: 'Cookie de sesión de usuario, preferencias del banner de cookies.',
          required: false,
        },
        {
          type: 'Analíticas',
          description: 'Nos ayudan a entender cómo los visitantes interactúan con el sitio web mediante recopilación anónima o agregada. Utilizamos Google Analytics con la función de anonimización de IP activada.',
          examples: 'Google Analytics (_ga, _gid, _gat).',
          required: true,
        },
        {
          type: 'De marketing / Publicidad',
          description: 'Rastrean su actividad en línea para ayudar a los anunciantes a ofrecer publicidad más relevante para usted o medir la eficacia de las campañas. Compartimos información con terceros como Meta y Google.',
          examples: 'Meta Pixel (_fbp), Google Ads (IDE, _gcl_au).',
          required: true,
        },
      ] as CookieCardData[],
      manage: {
        h: '3. Cómo gestionar las cookies',
        p: [
          'Puede gestionar sus preferencias de cookies en cualquier momento a través del banner disponible en nuestro sitio web. Además, la mayoría de los navegadores le permiten controlar las cookies a través de sus ajustes:',
        ],
        browsers: [
          '<strong>Google Chrome:</strong> Menú → Configuración → Privacidad y seguridad → Cookies.',
          '<strong>Mozilla Firefox:</strong> Menú → Configuración → Privacidad y seguridad → Cookies y datos del sitio.',
          '<strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web.',
        ],
        pp: ['Tenga en cuenta que deshabilitar ciertas cookies puede afectar al funcionamiento del sitio.'],
      },
      third: {
        h: '4. Cookies de terceros',
        p: ['Algunos servicios integrados son gestionados por terceros con sus propias políticas, sobre las que WeRise Digital S.L. no tiene control directo:'],
        items: [
          '<strong>Google LLC</strong> — Google Analytics y Google Ads. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Google</a>',
          '<strong>Meta Platforms, Inc.</strong> — Meta Pixel. <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Política de Meta</a>',
        ],
        pp: ['Puede optar por no participar en la publicidad personalizada de Google en <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a> y en la de Meta a través de la <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer">configuración de anuncios de Facebook</a>.'],
      },
      updates: {
        h: '5. Actualizaciones de esta política',
        p: [
          'WeRise Digital S.L. puede actualizar esta Política de Cookies cuando sea necesario. Cualquier modificación relevante se comunicará a través de un aviso en el sitio web.',
          'La fecha de la última actualización aparece siempre en la cabecera de este documento.',
        ],
      },
      contact: {
        h: '6. Contacto',
        p: ['Si tiene alguna pregunta sobre el uso de cookies, puede contactarnos en <a href="mailto:hello@werise.education">hello@werise.education</a>. También puede consultar nuestra <a href="/es/legal/privacidad">Política de Privacidad</a>.'],
      },
    },
  },
  en: {
    eyebrow: 'Legal',
    title: 'Cookie policy',
    lastUpdate: 'Last update: January 2026',
    back: 'Back to home',
    badgeYes: 'Requires consent: Yes',
    badgeNo: 'Requires consent: No',
    examplesLabel: 'Examples:',
    sections: {
      whatAre: {
        h: '1. What are cookies?',
        p: [
          'Cookies are small text files that websites store on your device when you visit them. They help the site remember information about your visit, such as language preferences or whether you are logged in.',
          'Cookies can be first-party (set directly by the site you are visiting) or third-party (set by domains other than the one in the address bar). Depending on their duration, they can be session cookies (deleted when you close your browser) or persistent.',
          'In Spain, the use of cookies is regulated by Law 34/2002 (LSSI-CE) and the GDPR. Cookies that are not strictly necessary require your prior informed consent.',
        ],
      },
      typesIntro: {
        h: '2. Cookies we use',
        p: ['Below we list the types of cookies this website uses or may use:'],
      },
      cards: [
        {
          type: 'Strictly necessary',
          description: 'Essential for the website to function properly. They enable basic features such as page navigation or storing your privacy preferences.',
          examples: 'User session cookie, cookie banner preferences.',
          required: false,
        },
        {
          type: 'Analytics',
          description: 'Help us understand how visitors interact with the website through anonymous or aggregated data collection. We use Google Analytics with IP anonymisation enabled.',
          examples: 'Google Analytics (_ga, _gid, _gat).',
          required: true,
        },
        {
          type: 'Marketing / Advertising',
          description: 'Track your online activity to help advertisers deliver more relevant ads or measure campaign effectiveness. We share information with third parties such as Meta and Google.',
          examples: 'Meta Pixel (_fbp), Google Ads (IDE, _gcl_au).',
          required: true,
        },
      ] as CookieCardData[],
      manage: {
        h: '3. How to manage cookies',
        p: [
          'You can manage your cookie preferences at any time via the banner available on our website. In addition, most browsers let you control cookies through their settings:',
        ],
        browsers: [
          '<strong>Google Chrome:</strong> Menu → Settings → Privacy and security → Cookies.',
          '<strong>Mozilla Firefox:</strong> Menu → Settings → Privacy & Security → Cookies and Site Data.',
          '<strong>Safari:</strong> Preferences → Privacy → Cookies and website data.',
        ],
        pp: ['Note that disabling certain cookies may affect the operation of the site.'],
      },
      third: {
        h: '4. Third-party cookies',
        p: ['Some integrated services are managed by third parties with their own policies, over which WeRise Digital S.L. has no direct control:'],
        items: [
          '<strong>Google LLC</strong> — Google Analytics and Google Ads. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google policy</a>',
          '<strong>Meta Platforms, Inc.</strong> — Meta Pixel. <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Meta policy</a>',
        ],
        pp: ['You can opt out of personalised Google ads at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a> and Meta ads via <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer">Facebook ad settings</a>.'],
      },
      updates: {
        h: '5. Updates to this policy',
        p: [
          'WeRise Digital S.L. may update this Cookie Policy when necessary. Any relevant modification will be communicated through a notice on the website.',
          'The date of the last update always appears at the top of this document.',
        ],
      },
      contact: {
        h: '6. Contact',
        p: ['If you have any questions about the use of cookies, contact us at <a href="mailto:hello@werise.education">hello@werise.education</a>. You can also see our <a href="/en/legal/privacidad">Privacy Policy</a>.'],
      },
    },
  },
} as const;

function ConsentBadge({ required, yesLabel, noLabel }: { required: boolean; yesLabel: string; noLabel: string }) {
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
        required ? 'bg-wr-lime/10 text-wr-lime' : 'bg-wr-border text-wr-white/60'
      }`}
    >
      {required ? yesLabel : noLabel}
    </span>
  );
}

export default function CookiesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const c = COPY[locale];
  const home = locale === 'es' ? '/es' : '/en';

  return (
    <main className="min-h-screen bg-wr-dark">
      <div className="px-6 pt-32 pb-12">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">{c.eyebrow}</p>
          <h1 className="mb-4 text-4xl font-black tracking-tighter text-wr-white md:text-5xl">{c.title}</h1>
          <p className="text-sm leading-relaxed text-wr-white/60">{c.lastUpdate}</p>
        </div>
      </div>

      <div className="px-6 pb-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          {/* What are cookies */}
          <section className="flex flex-col gap-3">
            <h2 className="mb-3 text-base font-bold text-wr-white">{c.sections.whatAre.h}</h2>
            {c.sections.whatAre.p.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-wr-white/70" dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </section>

          {/* Types of cookies */}
          <section className="flex flex-col gap-3">
            <h2 className="mb-3 text-base font-bold text-wr-white">{c.sections.typesIntro.h}</h2>
            <p className="text-sm leading-relaxed text-wr-white/70">{c.sections.typesIntro.p[0]}</p>
            <div className="mt-2 flex flex-col gap-4">
              {c.sections.cards.map((card) => (
                <div key={card.type} className="flex flex-col gap-3 rounded-xl border border-wr-border bg-wr-surface p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-wr-white">{card.type}</h3>
                    <ConsentBadge required={card.required} yesLabel={c.badgeYes} noLabel={c.badgeNo} />
                  </div>
                  <p className="text-sm leading-relaxed text-wr-white/70">{card.description}</p>
                  <p className="text-xs leading-relaxed text-wr-white/50">
                    <span className="font-medium text-wr-white/70">{c.examplesLabel} </span>
                    {card.examples}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Manage */}
          <section className="flex flex-col gap-3">
            <h2 className="mb-3 text-base font-bold text-wr-white">{c.sections.manage.h}</h2>
            <p className="text-sm leading-relaxed text-wr-white/70">{c.sections.manage.p[0]}</p>
            <ul className="flex flex-col gap-3 pl-1">
              {c.sections.manage.browsers.map((b, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-wr-white/70 [&_strong]:text-wr-white"
                  dangerouslySetInnerHTML={{ __html: b }}
                />
              ))}
            </ul>
            {c.sections.manage.pp.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-wr-white/70">{p}</p>
            ))}
          </section>

          {/* Third party */}
          <section className="flex flex-col gap-3">
            <h2 className="mb-3 text-base font-bold text-wr-white">{c.sections.third.h}</h2>
            <p className="text-sm leading-relaxed text-wr-white/70">{c.sections.third.p[0]}</p>
            <ul className="flex flex-col gap-2 pl-4">
              {c.sections.third.items.map((item, i) => (
                <li
                  key={i}
                  className="list-inside list-disc text-sm leading-relaxed text-wr-white/70 [&_a]:text-wr-lime [&_a]:underline-offset-2 [&_a:hover]:underline [&_strong]:text-wr-white"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
            {c.sections.third.pp.map((p, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-wr-white/70 [&_a]:text-wr-lime [&_a]:underline-offset-2 [&_a:hover]:underline"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </section>

          {/* Updates */}
          <section className="flex flex-col gap-3">
            <h2 className="mb-3 text-base font-bold text-wr-white">{c.sections.updates.h}</h2>
            {c.sections.updates.p.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-wr-white/70">{p}</p>
            ))}
          </section>

          {/* Contact */}
          <section className="flex flex-col gap-3">
            <h2 className="mb-3 text-base font-bold text-wr-white">{c.sections.contact.h}</h2>
            {c.sections.contact.p.map((p, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-wr-white/70 [&_a]:text-wr-lime [&_a]:underline-offset-2 [&_a:hover]:underline"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </section>

          <div className="border-t border-wr-border pt-4">
            <Link
              href={home}
              className="inline-flex items-center gap-2 text-sm text-wr-white/60 transition-colors hover:text-wr-white"
            >
              <span>←</span>
              <span>{c.back}</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
