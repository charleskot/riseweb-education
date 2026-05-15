import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: 'Política de privacidad — WeRise®',
};

type Section = {
  h: string;
  p?: string[];
  ul?: string[];
  pp?: string[];
};
type LocaleCopy = {
  eyebrow: string;
  title: string;
  lastUpdate: string;
  back: string;
  sections: Section[];
};

const COPY: Record<Locale, LocaleCopy> = {
  es: {
    eyebrow: 'Legal',
    title: 'Política de privacidad',
    lastUpdate: 'Última actualización: enero 2026',
    back: 'Volver al inicio',
    sections: [
      {
        h: '1. Responsable del tratamiento',
        p: [
          'El responsable del tratamiento de sus datos personales es <strong>WeRise Digital S.L.</strong>, domiciliada en España. Puede contactar con nosotros en cualquier momento a través del correo electrónico <a href="mailto:hello@werise.education">hello@werise.education</a>.',
          'WeRise Digital S.L. actúa como responsable del tratamiento de los datos personales que usted nos facilita a través de este sitio web, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).',
        ],
      },
      {
        h: '2. Datos que recopilamos',
        p: ['Recopilamos los datos personales que usted nos facilita de forma voluntaria, que pueden incluir:'],
        ul: [
          '<strong>Datos de contacto:</strong> nombre, dirección de correo electrónico y empresa u organización a la que pertenece.',
          '<strong>Datos de uso del sitio:</strong> información sobre cómo interactúa con nuestro sitio web, recogida a través de cookies analíticas. Estos datos se tratan de forma agregada y anonimizada siempre que es posible.',
        ],
        pp: ['No recopilamos categorías especiales de datos personales (datos de salud, origen racial o étnico, creencias religiosas, etc.).'],
      },
      {
        h: '3. Finalidad del tratamiento',
        p: ['Tratamos sus datos personales para las siguientes finalidades:'],
        ul: [
          '<strong>Gestión de consultas:</strong> atender y responder a las solicitudes de información o contacto que nos remita.',
          '<strong>Información comercial:</strong> enviarle información sobre nuestros servicios, casos de éxito o novedades, únicamente cuando nos lo haya solicitado expresamente o haya prestado su consentimiento.',
          '<strong>Mejora del servicio:</strong> analizar el uso del sitio web para mejorar su funcionamiento, contenidos y experiencia de usuario.',
        ],
      },
      {
        h: '4. Base legal del tratamiento',
        p: ['El tratamiento de sus datos se ampara en las siguientes bases legales:'],
        ul: [
          '<strong>Consentimiento del interesado (Art. 6.1.a RGPD):</strong> cuando usted acepta expresamente el tratamiento de sus datos al cumplimentar un formulario, suscribirse a comunicaciones comerciales o aceptar cookies no esenciales.',
          '<strong>Interés legítimo (Art. 6.1.f RGPD):</strong> para la gestión de consultas recibidas y el análisis agregado del uso del sitio web, siempre que no prevalezcan sus derechos e intereses fundamentales.',
        ],
        pp: ['Cuando el tratamiento se base en su consentimiento, podrá retirarlo en cualquier momento sin que ello afecte a la licitud del tratamiento previo a su retirada.'],
      },
      {
        h: '5. Conservación de datos',
        p: [
          'Sus datos personales se conservarán durante el tiempo necesario para atender la finalidad para la que fueron recogidos. Con carácter general, los datos de contacto se conservan por un período máximo de <strong>3 años desde el último contacto</strong> con usted, salvo que nos solicite su supresión antes.',
          'Una vez transcurrido el período de conservación, los datos serán eliminados de forma segura o anonimizados para fines estadísticos.',
        ],
      },
      {
        h: '6. Destinatarios y cesión de datos',
        p: [
          'WeRise Digital S.L. no cede sus datos personales a terceros, salvo que exista una obligación legal que lo exija.',
          'Para prestar nuestros servicios, contamos con proveedores especializados (alojamiento web, plataformas de correo, CRM) que pueden acceder a sus datos en calidad de encargados del tratamiento. Estos proveedores actúan únicamente siguiendo nuestras instrucciones y están vinculados por contratos de encargo del tratamiento.',
          'Algunos proveedores pueden estar ubicados fuera del Espacio Económico Europeo. En tales casos, nos aseguramos de que la transferencia se realice con las garantías adecuadas (cláusulas contractuales tipo aprobadas por la Comisión Europea).',
        ],
      },
      {
        h: '7. Sus derechos como interesado',
        p: ['De acuerdo con el RGPD y la LOPDGDD, usted tiene derecho a:'],
        ul: [
          '<strong>Acceso:</strong> obtener confirmación de si estamos tratando sus datos y acceder a ellos.',
          '<strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.',
          '<strong>Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.',
          '<strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.',
          '<strong>Limitación del tratamiento:</strong> solicitar que suspendamos el tratamiento de sus datos en determinadas circunstancias.',
          '<strong>Oposición:</strong> oponerse al tratamiento de sus datos cuando este se base en nuestro interés legítimo.',
        ],
        pp: [
          'Para ejercer cualquiera de estos derechos, puede contactarnos en <a href="mailto:hello@werise.education">hello@werise.education</a>, indicando su nombre y adjuntando una copia de su documento de identidad. Atenderemos su solicitud en el plazo máximo de un mes.',
          'Si considera que el tratamiento de sus datos no es conforme a la normativa, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.',
        ],
      },
      {
        h: '8. Cookies',
        p: ['Este sitio web utiliza cookies propias y de terceros. Para información detallada sobre los tipos de cookies que utilizamos, consulte nuestra <a href="/es/legal/cookies">Política de Cookies</a>.'],
      },
      {
        h: '9. Cambios en esta política',
        p: [
          'WeRise Digital S.L. se reserva el derecho a modificar esta Política de Privacidad para adaptarla a cambios legislativos, jurisprudenciales o de los servicios prestados. Cualquier modificación relevante será notificada a través de un aviso visible en el sitio web.',
          'Le recomendamos revisar esta política periódicamente para estar informado sobre cómo protegemos sus datos.',
        ],
      },
      {
        h: '10. Contacto',
        p: [
          'Si tiene cualquier pregunta sobre esta Política de Privacidad o sobre el tratamiento de sus datos personales, no dude en ponerse en contacto con nosotros:',
          '<strong>WeRise Digital S.L.</strong> · <a href="mailto:hello@werise.education">hello@werise.education</a>',
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Legal',
    title: 'Privacy policy',
    lastUpdate: 'Last update: January 2026',
    back: 'Back to home',
    sections: [
      {
        h: '1. Data controller',
        p: [
          'The controller of your personal data is <strong>WeRise Digital S.L.</strong>, based in Spain. You can contact us at any time at <a href="mailto:hello@werise.education">hello@werise.education</a>.',
          'WeRise Digital S.L. acts as the controller of the personal data you provide through this website, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 on Personal Data Protection (LOPDGDD).',
        ],
      },
      {
        h: '2. Data we collect',
        p: ['We collect the personal data you voluntarily provide to us, which may include:'],
        ul: [
          '<strong>Contact data:</strong> name, email address and company or organisation you belong to.',
          '<strong>Site usage data:</strong> information about how you interact with our website, collected via analytics cookies. This data is processed in aggregated and anonymised form whenever possible.',
        ],
        pp: ['We do not collect special categories of personal data (health data, racial or ethnic origin, religious beliefs, etc.).'],
      },
      {
        h: '3. Purpose of processing',
        p: ['We process your personal data for the following purposes:'],
        ul: [
          '<strong>Enquiry management:</strong> to handle and respond to information or contact requests you send us.',
          '<strong>Commercial information:</strong> to send you information about our services, case studies or news, only when you have expressly requested it or given your consent.',
          '<strong>Service improvement:</strong> to analyse the use of our website to improve its functioning, content and user experience.',
        ],
      },
      {
        h: '4. Legal basis for processing',
        p: ['The processing of your data is based on:'],
        ul: [
          '<strong>Consent (Art. 6.1.a GDPR):</strong> when you expressly accept the processing of your data by completing a form, subscribing to commercial communications or accepting non-essential cookies.',
          '<strong>Legitimate interest (Art. 6.1.f GDPR):</strong> for the management of enquiries received and aggregated analysis of website use, provided your fundamental rights do not override our interest.',
        ],
        pp: ['When processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of processing prior to its withdrawal.'],
      },
      {
        h: '5. Data retention',
        p: [
          'Your personal data will be kept for as long as necessary to fulfil the purpose for which it was collected. In general, contact data is kept for a maximum of <strong>3 years from the last contact</strong> with you, unless you request its deletion earlier.',
          'Once the retention period has elapsed, data will be securely deleted or anonymised for statistical purposes.',
        ],
      },
      {
        h: '6. Recipients and data transfers',
        p: [
          'WeRise Digital S.L. does not transfer your personal data to third parties, except where there is a legal obligation to do so.',
          'To provide our services, we work with specialised providers (web hosting, email platforms, CRM) that may access your data as data processors. These providers act solely on our instructions and are bound by data processing agreements.',
          'Some providers may be located outside the European Economic Area. In such cases, we ensure the transfer is carried out with appropriate safeguards (Standard Contractual Clauses approved by the European Commission).',
        ],
      },
      {
        h: '7. Your rights',
        p: ['Under the GDPR and LOPDGDD, you have the right to:'],
        ul: [
          '<strong>Access:</strong> obtain confirmation of whether we are processing your data and access it.',
          '<strong>Rectification:</strong> request correction of inaccurate or incomplete data.',
          '<strong>Erasure:</strong> request deletion of your data when no longer necessary.',
          '<strong>Portability:</strong> receive your data in a structured, commonly used format.',
          '<strong>Restriction of processing:</strong> request that we suspend the processing of your data in certain circumstances.',
          '<strong>Objection:</strong> object to the processing of your data when it is based on our legitimate interest.',
        ],
        pp: [
          'To exercise any of these rights, contact us at <a href="mailto:hello@werise.education">hello@werise.education</a>, providing your name and a copy of your ID. We will respond within one month.',
          'If you consider that the processing of your data does not comply with the regulation, you have the right to file a complaint with the Spanish Data Protection Agency (AEPD), <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.',
        ],
      },
      {
        h: '8. Cookies',
        p: ['This website uses first-party and third-party cookies. For detailed information on the cookies we use, see our <a href="/en/legal/cookies">Cookie Policy</a>.'],
      },
      {
        h: '9. Changes to this policy',
        p: [
          'WeRise Digital S.L. reserves the right to modify this Privacy Policy to adapt it to legislative or service changes. Any relevant modification will be notified through a visible notice on the website.',
          'We recommend reviewing this policy periodically.',
        ],
      },
      {
        h: '10. Contact',
        p: [
          'If you have any questions about this Privacy Policy or the processing of your personal data, please contact us:',
          '<strong>WeRise Digital S.L.</strong> · <a href="mailto:hello@werise.education">hello@werise.education</a>',
        ],
      },
    ],
  },
};

export default function PrivacyPage({ params }: { params: { locale: string } }) {
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
          {c.sections.map((s, i) => (
            <section key={i} className="flex flex-col gap-3">
              <h2 className="mb-3 text-base font-bold text-wr-white">{s.h}</h2>
              {s.p?.map((p, j) => (
                <p
                  key={`p-${j}`}
                  className="text-sm leading-relaxed text-wr-white/70 [&_a]:text-wr-lime [&_a]:underline-offset-2 [&_a:hover]:underline [&_strong]:text-wr-white"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
              {s.ul && (
                <ul className="flex flex-col gap-2 pl-4">
                  {s.ul.map((li, k) => (
                    <li
                      key={`li-${k}`}
                      className="list-inside list-disc text-sm leading-relaxed text-wr-white/70 [&_strong]:text-wr-white"
                      dangerouslySetInnerHTML={{ __html: li }}
                    />
                  ))}
                </ul>
              )}
              {s.pp?.map((p, j) => (
                <p
                  key={`pp-${j}`}
                  className="text-sm leading-relaxed text-wr-white/70 [&_a]:text-wr-lime [&_a]:underline-offset-2 [&_a:hover]:underline [&_strong]:text-wr-white"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </section>
          ))}

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
