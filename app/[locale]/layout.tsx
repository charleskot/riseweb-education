import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { es } from '@/lib/i18n/es';
import { en } from '@/lib/i18n/en';
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
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
