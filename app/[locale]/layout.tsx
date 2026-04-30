import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { es, type Copy } from '@/lib/i18n/es';
import { en } from '@/lib/i18n/en';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const COPIES = { es, en } as const;

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const t = COPIES[params.locale];
  return {
    title: t.meta.title,
    description: t.meta.description,
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
  return (
    <html lang={params.locale}>
      <body>
        <Header t={t} current={params.locale} />
        <main>{children}</main>
        <Footer t={t} />
      </body>
    </html>
  );
}
