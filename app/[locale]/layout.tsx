import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { es, type Copy } from '@/lib/i18n/es';
import { en } from '@/lib/i18n/en';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const COPIES = { es, en } as const;

// ─── Fonts ────────────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const t = COPIES[params.locale];
  const url = params.locale === 'es' ? 'https://werise.education/' : 'https://werise.education/en';
  return {
    metadataBase: new URL('https://werise.education'),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        es: 'https://werise.education/',
        en: 'https://werise.education/en',
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url,
      siteName: 'Rise Education',
      locale: params.locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const t = COPIES[params.locale] as Copy;
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rise Education',
    url: 'https://werise.education',
    logo: 'https://werise.education/rise-education-logo.png',
    description: t.meta.description,
    parentOrganization: {
      '@type': 'Organization',
      name: 'WeRise',
      url: 'https://werise.es',
    },
    sameAs: [
      'https://www.linkedin.com/company/werise-education',
    ],
    brand: [
      { '@type': 'Brand', name: 'Hofmann Culinary School' },
      { '@type': 'Brand', name: 'Barça Innovation Hub' },
      { '@type': 'Brand', name: 'Frankfurt School of Finance & Management' },
      { '@type': 'Brand', name: 'Cambra de Comerç de Barcelona' },
      { '@type': 'Brand', name: 'Inesa Tech' },
      { '@type': 'Brand', name: 'Nuclio Digital School' },
      { '@type': 'Brand', name: 'TATTOOX' },
    ],
  };
  return (
    <html
      lang={params.locale}
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-wr-lime focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-wr-dark"
        >
          {params.locale === 'es' ? 'Saltar al contenido' : 'Skip to content'}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header t={t} current={params.locale} />
        <main id="main">{children}</main>
        <Footer t={t} />
      </body>
    </html>
  );
}
