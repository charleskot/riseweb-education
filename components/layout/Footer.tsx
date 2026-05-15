import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { HUBSPOT_MEETING_URL } from '@/lib/cases';
import type { Copy } from '@/lib/i18n/es';
import type { Locale } from '@/lib/i18n/config';

export default function Footer({ t, locale }: { t: Copy; locale: Locale }) {
  const year = new Date().getFullYear();
  const base = locale === 'es' ? '/es' : '/en';
  const privacyHref = `${base}/legal/privacidad`;
  const cookiesHref = `${base}/legal/cookies`;

  return (
    <footer className="border-t border-wr-border bg-wr-dark">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={base} aria-label="WeRise — inicio" className="mb-4 inline-flex">
              <Image
                src="/werise-wordmark.png"
                alt="WeRise"
                width={160}
                height={48}
                className="h-9 w-auto"
              />
            </Link>
            <p className="max-w-[260px] text-sm leading-relaxed text-wr-white/60">
              {t.footer.tagline}
            </p>
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${t.footer.contact.email}`}
                className="group flex items-center gap-2 text-sm text-wr-white/60 transition-colors hover:text-wr-white"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-wr-lime" />
                {t.footer.contact.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-wr-white/60">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-wr-lime" />
                {t.footer.contact.location}
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-wr-white/50">
              {t.footer.columns.navegacion.heading}
            </p>
            <ul className="space-y-2.5">
              {t.footer.columns.navegacion.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-wr-white/70 transition-colors hover:text-wr-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Grupo */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-wr-white/50">
              {t.footer.columns.grupo.heading}
            </p>
            <ul className="space-y-2.5">
              {t.footer.columns.grupo.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-wr-white/70 transition-colors hover:text-wr-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-wr-white/50">
              {t.header.cta}
            </p>
            <a
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-wr-lime px-5 py-2.5 text-sm font-bold text-wr-dark transition-colors hover:bg-wr-lime-lt"
            >
              {t.footer.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-wr-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-wr-white/50">
            {t.footer.copyright.replace('{year}', String(year))}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={privacyHref}
              className="text-xs text-wr-white/50 transition-colors hover:text-wr-white"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href={cookiesHref}
              className="text-xs text-wr-white/50 transition-colors hover:text-wr-white"
            >
              {t.footer.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
