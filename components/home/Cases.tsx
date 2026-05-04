'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CASES, type CaseId } from '@/lib/cases';
import type { Locale } from '@/lib/i18n/config';
import type { Copy } from '@/lib/i18n/es';
import CaseModal from './CaseModal';

gsap.registerPlugin(ScrollTrigger);

export default function Cases({ t, locale }: { t: Copy; locale: Locale }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [openId, setOpenId] = useState<CaseId | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cases-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.cases-header', start: 'top bottom', once: true },
        }
      );
      gsap.fromTo(
        '.cases-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.cases-item', start: 'top bottom', once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Open modal from URL hash on mount + listen for hash changes
  useEffect(() => {
    const handleHash = () => {
      const match = window.location.hash.match(/^#casos\/([a-z]+)$/);
      if (match) {
        const id = match[1] as CaseId;
        const found = CASES.find((c) => c.id === id && c.available);
        if (found) {
          setOpenId(id);
          return;
        }
      }
      setOpenId(null);
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const open = (id: CaseId) => {
    lastTriggerRef.current = buttonRefs.current[id] ?? null;
    history.replaceState(null, '', `#casos/${id}`);
    setOpenId(id);
  };

  const close = () => {
    history.replaceState(null, '', '#casos');
    setOpenId(null);
    // Return focus to the trigger that opened the modal
    setTimeout(() => {
      lastTriggerRef.current?.focus();
    }, 0);
  };

  const activeCase = openId ? CASES.find((c) => c.id === openId) : null;

  return (
    <section
      ref={sectionRef}
      id="casos"
      className="border-t border-wr-border bg-wr-dark py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="cases-header mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
            Casos de éxito
          </p>
          <h2 className="text-4xl font-black tracking-tighter text-wr-white md:text-5xl">
            {t.cases.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-wr-white/70">{t.cases.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CASES.map((c) => {
            const content = c.content[locale];
            const clickable = c.available;
            return (
              <button
                key={c.id}
                ref={(el) => {
                  buttonRefs.current[c.id] = el;
                }}
                type="button"
                disabled={!clickable}
                onClick={() => clickable && open(c.id)}
                className={`cases-item group flex flex-col items-start gap-5 rounded-2xl border border-transparent bg-wr-surface p-8 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-wr-lime ${
                  clickable
                    ? 'cursor-pointer hover:border-wr-lime/30 hover:bg-wr-white/[0.02]'
                    : 'cursor-not-allowed opacity-60'
                }`}
              >
                <div className="flex h-12 w-28 items-center justify-center rounded-md bg-white/95 px-3">
                  <Image
                    src={c.logo}
                    alt={content.client}
                    width={120}
                    height={40}
                    className="max-h-8 w-auto object-contain"
                  />
                </div>
                <div className="text-lg font-semibold tracking-tight text-wr-white">
                  {content.client}
                </div>
                <div className="text-sm leading-relaxed text-wr-white/70">
                  {clickable ? content.hook : t.cases.cambraComing}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {activeCase && activeCase.available && (
        <CaseModal caseStudy={activeCase} locale={locale} onClose={close} />
      )}
    </section>
  );
}
