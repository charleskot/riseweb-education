'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Copy } from '@/lib/i18n/es';

gsap.registerPlugin(ScrollTrigger);

export default function Results({ t }: { t: Copy }) {
  const ref = useRef<HTMLElement>(null);
  const q = t.results.quantitative;
  const qual = t.results.qualitative;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.results-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.results-header', start: 'top bottom', once: true },
        }
      );
      gsap.fromTo(
        '.results-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.results-item', start: 'top bottom', once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  // Split title for italic accent — supports ES and EN
  const title = t.results.title;
  const splitMarkers = [' se multiplica', ' compounds'];
  let splitIndex = -1;
  for (const marker of splitMarkers) {
    const idx = title.toLowerCase().indexOf(marker.toLowerCase());
    if (idx > -1) {
      splitIndex = idx;
      break;
    }
  }
  const titleMain = splitIndex > -1 ? title.slice(0, splitIndex).trim() : title;
  const titleAccent = splitIndex > -1 ? title.slice(splitIndex).trim() : '';

  return (
    <section
      ref={ref}
      id="resultados"
      className="border-t border-wr-border bg-wr-dark py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="results-header mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            Resultados
          </p>
          <h2 className="text-4xl font-black tracking-tighter text-wr-white md:text-5xl">
            {titleMain}
            {titleAccent && (
              <>
                <br />
                <em className="font-serif italic text-wr-gray">{titleAccent}</em>
              </>
            )}
          </h2>
        </div>

        {/* Quantitative ROI */}
        <div className="mt-16">
          <h3 className="results-item mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            {q.heading}
          </h3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="grid grid-cols-2 gap-4 lg:col-span-9 lg:grid-cols-4">
              {q.metrics.map((m, i) => (
                <div
                  key={i}
                  className="results-item rounded-2xl border border-wr-border bg-wr-surface p-6"
                >
                  <div className="text-5xl font-black tracking-tighter tabular-nums text-wr-white md:text-6xl">
                    {m.value}
                  </div>
                  <div className="mt-3 text-sm leading-snug text-wr-white/70">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="results-item flex flex-col justify-center rounded-2xl bg-wr-lime p-6 text-wr-dark lg:col-span-3">
              <div className="text-4xl font-black tracking-tighter tabular-nums md:text-5xl">
                {q.highlight.value}
              </div>
              <div className="mt-3 text-sm font-semibold leading-snug">{q.highlight.label}</div>
            </div>
          </div>
        </div>

        {/* Qualitative ROI */}
        <div className="mt-16">
          <h3 className="results-item mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            {qual.heading}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {qual.items.map((item, i) => (
              <div
                key={i}
                className="results-item rounded-2xl border border-wr-border bg-wr-surface p-6"
              >
                <h4 className="text-base font-bold tracking-tight text-wr-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-wr-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
