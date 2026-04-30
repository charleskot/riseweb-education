'use client';

import { ArrowRight } from 'lucide-react';
import { HUBSPOT_MEETING_URL } from '@/lib/cases';
import type { Copy } from '@/lib/i18n/es';

export default function FinalCTA({ t }: { t: Copy }) {
  return (
    <section id="cta" className="relative overflow-hidden bg-wr-dark py-32">
      <div className="absolute inset-0 bg-grid-lines pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-wr-lime/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 text-center">
        <h2
          className="font-black tracking-tight text-wr-white"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
        >
          {t.finalCta.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base text-wr-white/70 leading-relaxed md:text-lg">
          {t.finalCta.body}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={HUBSPOT_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-wr-lime px-8 py-4 text-base font-bold text-wr-dark hover:bg-wr-lime-lt transition-colors"
          >
            {t.finalCta.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${t.finalCta.email}`}
            className="text-sm text-wr-white/60 hover:text-wr-white transition-colors"
          >
            {t.finalCta.email}
          </a>
        </div>
      </div>
    </section>
  );
}
