'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Copy } from '@/lib/i18n/es';
import type { Locale } from '@/lib/i18n/config';

export default function CookieBanner({ t, locale }: { t: Copy; locale: Locale }) {
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const accepted = localStorage.getItem('wr-cookies-accepted');
    if (accepted) {
      setVisible(false);
    } else {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function acceptAll() {
    localStorage.setItem('wr-cookies-accepted', 'all');
    setVisible(false);
  }

  function acceptEssential() {
    localStorage.setItem('wr-cookies-accepted', 'essential');
    setVisible(false);
  }

  if (visible === null) return null;

  const cookiesHref = locale === 'es' ? '/es/legal/cookies' : '/en/legal/cookies';

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-wr-border bg-wr-surface px-6 py-4 transition-transform duration-500 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      role="region"
      aria-label={t.cookieBanner.ariaLabel}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-xl leading-none" aria-hidden="true">
            🍪
          </span>
          <p className="text-sm text-wr-white/70">
            {t.cookieBanner.message}{' '}
            <Link
              href={cookiesHref}
              className="text-wr-lime underline-offset-2 transition-colors hover:text-wr-lime-lt hover:underline"
            >
              {t.cookieBanner.moreInfo}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={acceptEssential}
            className="rounded-full border border-wr-border px-4 py-2 text-xs font-semibold text-wr-white/70 transition-colors hover:border-wr-lime/40 hover:text-wr-white"
          >
            {t.cookieBanner.acceptEssential}
          </button>
          <button
            onClick={acceptAll}
            className="rounded-full bg-wr-lime px-4 py-2 text-xs font-bold text-wr-dark transition-colors hover:bg-wr-lime-lt"
          >
            {t.cookieBanner.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
