'use client';

import { useRef, useEffect } from 'react';
import { Target, Users, Cpu, Compass } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Copy } from '@/lib/i18n/es';

gsap.registerPlugin(ScrollTrigger);

const AREA_ICONS = [Target, Users, Cpu, Compass];

export default function WhatWeDo({ t }: { t: Copy }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.wwd-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.wwd-header', start: 'top bottom', once: true },
        }
      );
      gsap.fromTo(
        '.wwd-area',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.wwd-area', start: 'top bottom', once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="que-hacemos"
      className="border-t border-wr-border bg-wr-dark py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="wwd-header mb-16 max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            {t.whatWeDo.eyebrow}
          </p>
          <h2 className="text-balance text-4xl font-black tracking-tighter text-wr-white md:text-5xl">
            {t.whatWeDo.title}
          </h2>
          <p className="mt-6 text-lg text-wr-white/70">{t.whatWeDo.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {t.whatWeDo.areas.map((area, i) => {
            const Icon = AREA_ICONS[i] ?? Target;
            return (
              <article
                key={area.number}
                className="wwd-area group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-wr-border bg-wr-surface p-7 transition-colors duration-300 hover:border-wr-lime/30 hover:bg-wr-white/[0.02] md:p-9"
              >
                {/* Ghost number background */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-3 select-none font-black leading-none tracking-tighter text-wr-white/[0.04] transition-colors duration-300 group-hover:text-wr-lime/[0.06] md:right-7 md:top-4"
                  style={{ fontSize: 'clamp(5rem, 9vw, 8rem)' }}
                >
                  {area.number}
                </span>

                <div className="relative z-10 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-wr-lime/10">
                    <Icon className="h-5 w-5 text-wr-lime" />
                  </div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest tabular-nums text-wr-lime">
                    {area.number}
                  </span>
                </div>

                <h3 className="relative z-10 text-balance text-2xl font-bold tracking-tight text-wr-white">
                  {area.title}
                </h3>

                <p className="relative z-10 text-base leading-relaxed text-wr-white/70">
                  {area.body}
                </p>

                <div className="relative z-10 mt-auto border-t border-wr-border pt-5">
                  <p className="text-sm font-semibold text-wr-lime">{area.impact}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
