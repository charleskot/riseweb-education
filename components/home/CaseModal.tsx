'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import type { CaseStudy } from '@/lib/cases';
import { HUBSPOT_MEETING_URL } from '@/lib/cases';
import type { Locale } from '@/lib/i18n/config';

export default function CaseModal({
  caseStudy,
  locale,
  onClose,
}: {
  caseStudy: CaseStudy;
  locale: Locale;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const c = caseStudy.content[locale];
  const titleId = `case-title-${caseStudy.id}`;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-0 md:p-8 motion-reduce:transition-none"
      aria-hidden="false"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-screen w-full max-w-3xl overflow-y-auto bg-wr-dark text-wr-white md:max-h-[90vh] md:rounded-2xl"
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label={locale === 'es' ? 'Cerrar' : 'Close'}
          className="absolute right-4 top-4 z-10 rounded-full p-2 hover:bg-wr-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-wr-lime"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-8 p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-32 items-center justify-center rounded-md bg-white/95 px-3">
              <Image
                src={caseStudy.logo}
                alt={c.client}
                width={120}
                height={32}
                className="max-h-8 w-auto object-contain"
              />
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-wr-lime">
              {locale === 'es' ? 'CASO DE ESTUDIO' : 'CASE STUDY'}
            </div>
          </div>

          {/* Title */}
          <h2 id={titleId} className="text-balance text-2xl font-black md:text-4xl">
            {c.modalTitle}
          </h2>

          {/* Starting point */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-wr-white/50">
              {locale === 'es' ? 'Punto de partida' : 'Starting point'}
            </h3>
            <p className="mt-2 text-wr-white/80 leading-relaxed">{c.startingPoint}</p>
          </div>

          {/* What we did */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-wr-white/50">
              {locale === 'es' ? 'Qué hicimos' : 'What we did'}
            </h3>
            <p className="mt-2 text-wr-white/80 leading-relaxed">{c.whatWeDid}</p>
          </div>

          {/* Results — year grid (only if present) */}
          {c.yearGrid && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-wr-white/50">
                {c.resultsHeading}
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
                {c.yearGrid.map((y) => (
                  <div key={y.year} className="rounded-xl border border-wr-border p-4">
                    <div className="text-xs uppercase tracking-widest tabular-nums text-wr-white/50">{y.year}</div>
                    <div className="mt-1 text-2xl font-black tabular-nums text-wr-lime">{y.value}</div>
                    <div className="mt-1 text-xs text-wr-white/60">{y.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics */}
          {c.metrics.length > 0 && (
            <ul className="space-y-2 text-sm text-wr-white/80">
              {c.metrics.map((m, i) => (
                <li key={i} className="flex gap-3">
                  <strong className="min-w-[120px] tabular-nums text-wr-white">{m.value}</strong>
                  <span>{m.label}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <a
            href={HUBSPOT_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-wr-lime px-7 py-3.5 text-sm font-bold text-wr-dark transition-colors hover:bg-wr-lime-lt active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wr-lime"
          >
            {c.ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
