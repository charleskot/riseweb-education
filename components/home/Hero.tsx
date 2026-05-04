'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { HUBSPOT_MEETING_URL } from '@/lib/cases';
import type { Copy } from '@/lib/i18n/es';

export default function Hero({ t }: { t: Copy }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-item', {
        opacity: 0,
        y: 40,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-wr-dark"
    >
      {/* Subtle grid lines */}
      <div className="absolute inset-0 bg-grid-lines pointer-events-none" />

      {/* Lime ambient glow — lower-right corner */}
      <div className="absolute bottom-[10%] right-[8%] h-[500px] w-[500px] rounded-full bg-wr-lime/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 lg:pt-40 pb-20 lg:pb-24">
        <div className="hero-item text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
          {t.hero.eyebrow}
        </div>

        <h1
          className="hero-item mt-6 font-black tracking-tighter text-wr-white"
          style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)', lineHeight: 1.05 }}
        >
          {t.hero.headline.map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? <em className="font-serif italic text-wr-gray">{line}</em> : line}
            </span>
          ))}
        </h1>

        <div className="hero-item mt-8 h-px w-24 bg-wr-border" />

        <p className="hero-item mt-8 max-w-2xl text-base md:text-lg text-wr-white/70 leading-relaxed">
          {t.hero.subheadline}
        </p>

        <div className="hero-item mt-10 flex flex-wrap items-center gap-5">
          <a
            href={HUBSPOT_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-wr-lime px-7 py-3.5 text-sm font-bold text-wr-dark hover:bg-wr-lime-lt transition-colors"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#casos"
            className="text-sm font-semibold text-wr-white/70 underline underline-offset-4 hover:text-wr-lime transition-colors"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
