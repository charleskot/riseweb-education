'use client';

import { useRef, useEffect } from 'react';
import { LayoutDashboard, Bot, Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Copy } from '@/lib/i18n/es';

gsap.registerPlugin(ScrollTrigger);

export default function Technology({ t }: { t: Copy }) {
  const ref = useRef<HTMLElement>(null);
  const skola = t.technology.skola;
  const ai = t.technology.ai;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tech-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.tech-header', start: 'top bottom', once: true },
        }
      );
      gsap.fromTo(
        '.tech-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.tech-item', start: 'top bottom', once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  // Split title for italic accent — supports ES and EN
  const title = t.technology.title;
  const splitMarkers = [', no solo', ', not just'];
  let splitIndex = -1;
  for (const marker of splitMarkers) {
    const idx = title.toLowerCase().indexOf(marker.toLowerCase());
    if (idx > -1) {
      splitIndex = idx;
      break;
    }
  }
  const titleMain = splitIndex > -1 ? title.slice(0, splitIndex).trim() : title;
  const titleAccent = splitIndex > -1 ? title.slice(splitIndex + 1).trim() : '';

  return (
    <section
      ref={ref}
      id="tecnologia"
      className="border-t border-wr-border bg-wr-dark py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="tech-header mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            Tecnología
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
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Skola */}
          <article className="tech-item rounded-2xl border border-wr-border bg-wr-surface p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-wr-lime/10">
              <LayoutDashboard className="h-6 w-6 text-wr-lime" />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-wr-white">{skola.name}</h3>
            <p className="mt-1 text-sm text-wr-white/60">{skola.tagline}</p>
            <p className="mt-4 text-base text-wr-white/80">{skola.lead}</p>
            <ul className="mt-6 space-y-3 border-t border-wr-border pt-6">
              {skola.features.map((f, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-wr-white/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-wr-lime" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* AI */}
          <article className="tech-item rounded-2xl border border-wr-border bg-wr-surface p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-wr-lime/10">
              <Bot className="h-6 w-6 text-wr-lime" />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-wr-white">{ai.name}</h3>
            <ul className="mt-6 space-y-3 border-t border-wr-border pt-6">
              {ai.features.map((f, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-wr-white/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-wr-lime" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
