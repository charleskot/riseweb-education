import { isLocale } from '@/lib/i18n/config';
import { es } from '@/lib/i18n/es';
import { en } from '@/lib/i18n/en';
import { notFound } from 'next/navigation';

const COPIES = { es, en } as const;

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const t = COPIES[params.locale];
  return (
    <main className="min-h-screen bg-wr-dark text-wr-white p-12">
      <h1>{t.hero.headline.join(' ')}</h1>
    </main>
  );
}
