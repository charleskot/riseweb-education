'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Copy } from '@/lib/i18n/es';

gsap.registerPlugin(ScrollTrigger);

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
        '.problem-pain',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.problem-pain', start: 'top bottom', once: true },
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
      <div className="mx-auto max-w-5xl px-6">
        <div className="problem-header mb-14">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            {t.problem.eyebrow}
          </p>
          <h2 className="text-balance text-4xl font-black tracking-tighter text-wr-white md:text-5xl">
            {t.problem.title}
          </h2>
        </div>

        <ul className="border-t border-wr-border">
          {t.problem.pains.map((pain, i) => (
            <li
              key={i}
              className="problem-pain group flex items-baseline gap-6 border-b border-wr-border py-6 transition-colors duration-300 hover:bg-wr-white/[0.02]"
            >
              <span className="shrink-0 font-mono text-xs tabular-nums text-wr-lime">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-base leading-relaxed text-wr-white/85 md:text-lg">{pain}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
