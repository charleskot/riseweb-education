'use client';

import { useRef, useEffect } from 'react';
import { Award, Cpu, Handshake, Eye } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Copy } from '@/lib/i18n/es';

gsap.registerPlugin(ScrollTrigger);

const PILLAR_ICONS = [Award, Cpu, Handshake, Eye];

export default function WhyUs({ t }: { t: Copy }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.whyus-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.whyus-header', start: 'top bottom', once: true },
        }
      );
      gsap.fromTo(
        '.whyus-pillar',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.whyus-pillar', start: 'top bottom', once: true },
        }
      );
      gsap.fromTo(
        '.whyus-alt-block',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.whyus-alt-block', start: 'top bottom', once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="por-que-nosotros"
      className="border-t border-wr-border bg-wr-dark py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="whyus-header mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            Por qué nosotros
          </p>
          <h2 className="text-balance text-4xl font-black tracking-tighter text-wr-white md:text-5xl">
            {t.whyUs.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-wr-white/70">{t.whyUs.subtitle}</p>
        </div>

        {/* Pillars — full-width editorial rows: icon | title | body */}
        <div className="border-t border-wr-border">
          {t.whyUs.pillars.map((p, i) => {
            const Icon = PILLAR_ICONS[i] ?? Award;
            return (
              <article
                key={i}
                className="whyus-pillar group grid grid-cols-1 gap-4 border-b border-wr-border px-2 py-8 transition-colors duration-300 hover:bg-wr-white/[0.02] md:grid-cols-12 md:items-start md:gap-8 md:py-10"
              >
                <div className="md:col-span-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-wr-lime/10">
                    <Icon className="h-5 w-5 text-wr-lime" />
                  </div>
                </div>
                <h3 className="text-balance text-lg font-bold tracking-tight text-wr-white md:col-span-4 md:text-xl">
                  {p.title}
                </h3>
                <p className="max-w-prose text-base leading-relaxed text-wr-white/70 md:col-span-7">
                  {p.body}
                </p>
              </article>
            );
          })}
        </div>

        {/* Alternatives — comparison-table style */}
        <div className="whyus-alt-block mt-20">
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            Alternativas
          </h3>
          <div className="rounded-2xl bg-wr-surface p-8 md:p-12">
            <h3 className="text-balance text-2xl font-bold tracking-tight text-wr-white md:text-3xl">
              {t.whyUs.alternatives.title}
            </h3>
            <div className="mt-8 divide-y divide-wr-border">
              {t.whyUs.alternatives.items.map((item, i) => (
                <div key={i} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-3 md:gap-6">
                  <h4 className="text-sm font-bold tracking-tight text-wr-white">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-wr-white/60 md:col-span-2">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-wr-border pt-8 text-base text-wr-lime md:text-lg">
              <em className="font-serif italic">{t.whyUs.alternatives.closer}</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
