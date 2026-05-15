'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import LangToggle from '@/components/ui/LangToggle';
import { HUBSPOT_MEETING_URL } from '@/lib/cases';
import type { Copy } from '@/lib/i18n/es';
import type { Locale } from '@/lib/i18n/config';

export default function Header({ t, current }: { t: Copy; current: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const homeHref = current === 'es' ? '/' : '/en';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
          scrolled ? 'bg-wr-dark/95 backdrop-blur border-b border-wr-border' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href={homeHref} aria-label="WeRise" className="flex items-center">
            <Image
              src="/werise-wordmark.png"
              alt="WeRise"
              width={140}
              height={40}
              priority
              className="h-7 w-auto md:h-8"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {t.header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-wr-white/70 hover:text-wr-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <LangToggle current={current} />
            <a
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-wr-lime px-5 py-2 text-sm font-bold text-wr-dark transition-colors hover:bg-wr-lime-lt active:scale-[0.98]"
            >
              {t.header.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-wr-white"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-wr-dark md:hidden">
          {t.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-wr-white"
            >
              {item.label}
            </a>
          ))}
          <LangToggle current={current} />
          <a
            href={HUBSPOT_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 rounded-full bg-wr-lime px-7 py-3 text-base font-bold text-wr-dark transition-transform active:scale-[0.98]"
          >
            {t.header.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </>
  );
}
