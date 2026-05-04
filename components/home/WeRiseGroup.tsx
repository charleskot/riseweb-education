'use client';

import { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Copy } from '@/lib/i18n/es';

gsap.registerPlugin(ScrollTrigger);

export default function WeRiseGroup({ t }: { t: Copy }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.group-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.group-content', start: 'top bottom', once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  // Split title to italicize "vertical educación" / "education vertical"
  const title = t.weRiseGroup.title;
  const accentMarkers = ['vertical educación', 'education vertical'];
  let parts: { before: string; accent: string; after: string } | null = null;
  for (const marker of accentMarkers) {
    const idx = title.toLowerCase().indexOf(marker);
    if (idx > -1) {
      parts = {
        before: title.slice(0, idx),
        accent: title.slice(idx, idx + marker.length),
        after: title.slice(idx + marker.length),
      };
      break;
    }
  }

  return (
    <section
      ref={ref}
      id="grupo"
      className="border-t border-wr-border bg-wr-dark py-24 md:py-32"
    >
      <div className="group-content mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
          Grupo WeRise
        </p>
        <h2 className="text-balance text-3xl font-black tracking-tighter text-wr-white md:text-4xl">
          {parts ? (
            <>
              {parts.before}
              <em className="font-serif italic text-wr-gray">{parts.accent}</em>
              {parts.after}
            </>
          ) : (
            title
          )}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-wr-white/70 md:text-lg">
          {t.weRiseGroup.body}
        </p>
        <a
          href={t.weRiseGroup.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-wr-lime transition-colors hover:text-wr-lime-lt"
        >
          {t.weRiseGroup.cta.replace(/\s*→\s*$/, '')}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
}
