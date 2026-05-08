'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Copy } from '@/lib/i18n/es';

gsap.registerPlugin(ScrollTrigger);

export default function WhyItHappens({ t }: { t: Copy }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.why-item', start: 'top bottom', once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="diagnostico"
      className="relative border-t border-wr-border bg-wr-dark py-24 md:py-32"
    >
      {/* Subtle lime glow on the left */}
      <div className="pointer-events-none absolute left-[-10%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-wr-lime/[0.04] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <p className="why-item mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
          {t.whyItHappens.eyebrow}
        </p>
        <h2 className="why-item text-balance text-4xl font-black tracking-tighter text-wr-white md:text-5xl">
          {t.whyItHappens.titleMain}
          <br />
          <em className="font-serif italic text-wr-gray">{t.whyItHappens.titleAccent}</em>
        </h2>

        <p className="why-item mt-10 max-w-3xl text-lg leading-relaxed text-wr-white/75">
          {t.whyItHappens.body}
        </p>

        <div className="why-item mt-10 flex items-start gap-4 border-l-2 border-wr-lime pl-5">
          <p className="text-lg font-semibold text-wr-white md:text-xl">
            {t.whyItHappens.closer}
          </p>
        </div>
      </div>
    </section>
  );
}
