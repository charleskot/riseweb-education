import Hero from '@/components/home/Hero';
import LogoMarquee from '@/components/home/LogoMarquee';
import Problem from '@/components/home/Problem';
import HowWeWork from '@/components/home/HowWeWork';
import Cases from '@/components/home/Cases';
import Results from '@/components/home/Results';
import WhyUs from '@/components/home/WhyUs';
import Technology from '@/components/home/Technology';
import WeRiseGroup from '@/components/home/WeRiseGroup';
import { isLocale, type Locale } from '@/lib/i18n/config';
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
      <HowWeWork t={t} />
      <Cases t={t} locale={params.locale as Locale} />
      <Results t={t} />
      <WhyUs t={t} />
      <Technology t={t} />
      <WeRiseGroup t={t} />
    </>
  );
}
