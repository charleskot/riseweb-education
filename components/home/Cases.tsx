'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { CASES, type CaseId } from '@/lib/cases';
import type { Locale } from '@/lib/i18n/config';
import type { Copy } from '@/lib/i18n/es';
import CaseModal from './CaseModal';

export default function Cases({ t, locale }: { t: Copy; locale: Locale }) {
  const [openId, setOpenId] = useState<CaseId | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

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
    <section id="casos" className="bg-wr-dark py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <h2
          className="font-black tracking-tight text-wr-white"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05 }}
        >
          {t.cases.title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-wr-white/70">{t.cases.subtitle}</p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
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
                className={`group flex flex-col items-start gap-6 rounded-2xl border border-wr-border bg-wr-dark/40 p-8 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-wr-lime ${
                  clickable
                    ? 'hover:border-wr-lime cursor-pointer'
                    : 'opacity-60 cursor-not-allowed'
                }`}
              >
                <div className="flex h-16 w-32 items-center justify-center rounded-md bg-white/95 px-4">
                  <Image
                    src={c.logo}
                    alt={content.client}
                    width={120}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="text-lg font-semibold text-wr-white">{content.client}</div>
                <div className="text-sm text-wr-white/70">
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
