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
        '.howwework-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.howwework-item', start: 'top bottom', once: true },
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
      className="border-t border-wr-border bg-wr-dark py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="howwework-header mb-16">
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
          <p className="mt-6 max-w-3xl text-lg text-wr-white/70">{t.howWeWork.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {t.howWeWork.levels.map((level, i) => {
            const isMiddle = i === 1;
            return (
              <article
                key={level.number}
                className={`howwework-item relative overflow-hidden rounded-2xl border bg-wr-surface p-8 ${
                  isMiddle
                    ? 'border-wr-lime/40'
                    : 'border-wr-border'
                }`}
              >
                {/* Ghost number background */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-4 -top-8 select-none font-black leading-none tracking-tighter ${
                    isMiddle ? 'text-wr-lime/[0.08]' : 'text-wr-white/[0.04]'
                  }`}
                  style={{ fontSize: '12rem' }}
                >
                  {level.number}
                </span>

                <div className="relative z-10">
                  <div
                    className={`text-xs font-semibold uppercase tracking-widest ${
                      isMiddle ? 'text-wr-lime' : 'text-wr-white/40'
                    }`}
                  >
                    {level.number}
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-wr-white">
                    {level.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-wr-white/70">{level.body}</p>

                  {'deliverables' in level && level.deliverables && (
                    <ul className="mt-6 space-y-2 border-t border-wr-border pt-6">
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
