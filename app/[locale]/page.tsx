import Hero from '@/components/home/Hero';
import LogoMarquee from '@/components/home/LogoMarquee';
import Problem from '@/components/home/Problem';
import { isLocale } from '@/lib/i18n/config';
import { es, type Copy } from '@/lib/i18n/es';
import { en } from '@/lib/i18n/en';
import { notFound } from 'next/navigation';

const COPIES = { es, en } as const;

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const t = COPIES[params.locale] as Copy;
  return (
    <>
      <Hero t={t} />
      <LogoMarquee />
      <Problem t={t} />
    </>
  );
}
