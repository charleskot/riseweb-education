'use client';

import { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Copy } from '@/lib/i18n/es';

gsap.registerPlugin(ScrollTrigger);

export default function HowWeWork({ t }: { t: Copy }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.howwework-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.howwework-header', start: 'top bottom', once: true },
        }
      );
      gsap.fromTo(
        '.howwework-row',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.howwework-row', start: 'top bottom', once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  // Split title for italic accent — supports ES and EN
  const title = t.howWeWork.title;
  const splitMarkers = ['según', 'based on'];
  let splitIndex = -1;
  for (const marker of splitMarkers) {
    const idx = title.toLowerCase().indexOf(marker);
    if (idx > -1) {
      splitIndex = idx;
      break;
    }
  }
  const titleMain = splitIndex > -1 ? title.slice(0, splitIndex).trim() : title;
  const titleAccent = splitIndex > -1 ? title.slice(splitIndex) : '';

  return (
    <section
      ref={ref}
      id="como-trabajamos"
      className="border-t border-wr-border bg-wr-dark py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="howwework-header mb-20">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            Cómo trabajamos
          </p>
          <h2 className="text-balance text-4xl font-black tracking-tighter text-wr-white md:text-5xl">
            {titleMain}
            {titleAccent && (
              <>
                <br />
                <em className="font-serif italic text-wr-gray">{titleAccent}</em>
              </>
            )}
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-wr-white/70">{t.howWeWork.subtitle}</p>
        </div>

        {/* Editorial accordion list — full-width rows, ghost numbers, hairline dividers */}
        <div className="border-t border-wr-border">
          {t.howWeWork.levels.map((level) => {
            const hasDeliverables =
              'deliverables' in level && Array.isArray(level.deliverables) && level.deliverables.length > 0;
            return (
              <article
                key={level.number}
                className="howwework-row group relative overflow-hidden border-b border-wr-border transition-colors duration-300 hover:bg-wr-white/[0.02]"
              >
                {/* Ghost number background */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-black leading-none tracking-tighter text-wr-white/[0.04] transition-colors duration-300 group-hover:text-wr-white/[0.06] md:right-8"
                  style={{ fontSize: 'clamp(8rem, 18vw, 14rem)' }}
                >
                  {level.number}
                </span>

                <div className="relative z-10 grid grid-cols-1 gap-6 px-2 py-12 md:grid-cols-12 md:gap-8 md:py-16">
                  {/* Visible number label — left */}
                  <div className="md:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-widest tabular-nums text-wr-lime">
                      {level.number}
                    </span>
                  </div>

                  {/* Title + body — center */}
                  <div className={hasDeliverables ? 'md:col-span-6' : 'md:col-span-10'}>
                    <h3 className="text-balance text-2xl font-bold tracking-tight text-wr-white md:text-3xl">
                      {level.title}
                    </h3>
                    <p className="mt-4 max-w-prose text-base leading-relaxed text-wr-white/70">
                      {level.body}
                    </p>
                  </div>

                  {/* Deliverables — right */}
                  {hasDeliverables && level.deliverables && (
                    <ul className="space-y-2.5 md:col-span-4 md:pl-6 md:border-l md:border-wr-border">
                      {level.deliverables.map((d, j) => (
                        <li key={j} className="flex gap-2 text-sm text-wr-white/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-wr-lime" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
