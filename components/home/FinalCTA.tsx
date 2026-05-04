'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HUBSPOT_MEETING_URL } from '@/lib/cases';
import type { Copy } from '@/lib/i18n/es';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA({ t }: { t: Copy }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.cta-content', start: 'top bottom', once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="cta"
      className="relative overflow-hidden border-t border-wr-border bg-wr-dark py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-grid-lines pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-wr-lime/[0.06] blur-[120px] pointer-events-none" />

      <div className="cta-content relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h2
          className="font-black tracking-tighter text-wr-white"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
        >
          {t.finalCta.title.map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? <em className="font-serif italic text-wr-gray">{line}</em> : line}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-wr-white/70 md:text-lg">
          {t.finalCta.body}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={HUBSPOT_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-wr-lime px-9 py-5 text-base font-bold text-wr-dark transition-colors hover:bg-wr-lime-lt"
          >
            {t.finalCta.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${t.finalCta.email}`}
            className="text-sm text-wr-white/60 transition-colors hover:text-wr-white"
          >
            {t.finalCta.email}
          </a>
        </div>
      </div>
    </section>
  );
}
