'use client';

import { useRef, useEffect } from 'react';
import { TrendingDown, Globe, Code, LayoutGrid, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Copy } from '@/lib/i18n/es';

gsap.registerPlugin(ScrollTrigger);

const PAIN_ICONS = [TrendingDown, Globe, Code, LayoutGrid];

export default function Problem({ t }: { t: Copy }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.problem-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.problem-header', start: 'top bottom', once: true },
        }
      );
      gsap.fromTo(
        '.problem-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.problem-item', start: 'top bottom', once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="problema"
      className="relative border-t border-wr-border bg-wr-dark py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        {/* Left column: title + highlight card */}
        <div className="problem-header flex flex-col gap-10">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
              El problema
            </p>
            <h2 className="text-balance text-4xl font-black tracking-tighter text-wr-white md:text-5xl">
              {t.problem.title}
            </h2>
          </div>

          <div className="rounded-2xl border border-wr-border bg-wr-surface p-8">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-wr-lime/10">
              <Sparkles className="h-5 w-5 text-wr-lime" />
            </div>
            <p className="text-lg font-semibold text-wr-white">
              {t.problem.highlight}
            </p>
          </div>
        </div>

        {/* Right column: 4 pains, separated by hairlines */}
        <ul className="divide-y divide-wr-border">
          {t.problem.pains.map((pain, i) => {
            const Icon = PAIN_ICONS[i] ?? TrendingDown;
            return (
              <li key={i} className="problem-item flex gap-4 py-6 first:pt-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-wr-lime/10">
                  <Icon className="h-5 w-5 text-wr-lime" />
                </div>
                <p className="text-base text-wr-white/80">
                  <span className="font-semibold text-wr-white">{pain.title} </span>
                  {pain.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
