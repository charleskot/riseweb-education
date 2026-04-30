'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/config';

export default function LangToggle({ current }: { current: Locale }) {
  const pathname = usePathname();

  // Strip current locale prefix from path to get the "shared" sub-path
  const stripped = pathname.replace(new RegExp(`^/${current}`), '') || '/';

  return (
    <div className="flex items-center gap-2 text-sm">
      {locales.map((loc) => {
        const target = loc === 'es' ? stripped : `/${loc}${stripped === '/' ? '' : stripped}`;
        const isActive = loc === current;
        return (
          <Link
            key={loc}
            href={target}
            aria-current={isActive ? 'true' : undefined}
            className={isActive ? 'font-semibold text-wr-white' : 'text-wr-white/60 hover:text-wr-white'}
          >
            {loc.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
