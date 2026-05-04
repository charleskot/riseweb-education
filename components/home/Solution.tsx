'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Copy } from '@/lib/i18n/es';

gsap.registerPlugin(ScrollTrigger);

export default function Solution({ t }: { t: Copy }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.solution-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.solution-header', start: 'top bottom', once: true },
        }
      );
      gsap.fromTo(
        '.solution-pillar',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.solution-pillar', start: 'top bottom', once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="solucion"
      className="border-t border-wr-border bg-wr-dark py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="solution-header max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            {t.solution.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tighter text-wr-white text-balance md:text-6xl">
            {t.solution.titleMain}{' '}
            <em className="font-serif italic text-wr-gray">{t.solution.titleAccent}</em>
          </h2>
          <p className="mt-6 max-w-2xl text-base text-wr-white/70 leading-relaxed md:text-lg">
            {t.solution.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {t.solution.pillars.map((p) => (
            <article
              key={p.number}
              className="solution-pillar relative rounded-2xl border border-wr-border bg-wr-dark/60 p-8 transition-colors hover:border-wr-lime/30 md:p-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black tracking-tighter tabular-nums text-wr-lime md:text-5xl">
                  {p.number}
                </span>
                <h3 className="text-xl font-bold text-wr-white text-balance md:text-2xl">
                  {p.title}
                </h3>
              </div>
              <p className="mt-4 max-w-prose text-base text-wr-white/70 leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
