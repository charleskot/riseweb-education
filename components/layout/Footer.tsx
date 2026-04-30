import Link from 'next/link';
import type { Copy } from '@/lib/i18n/es';

export default function Footer({ t }: { t: Copy }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-wr-border bg-wr-dark py-12 text-sm text-wr-white/60">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
        <div className="flex items-center gap-4">
          <span className="font-bold text-wr-white">Rise Education</span>
          <span>{t.footer.parentLine}</span>
        </div>
        <nav className="flex flex-wrap items-center gap-6">
          <Link href="/legal/privacy" className="hover:text-wr-white transition-colors">
            {t.footer.privacy}
          </Link>
          <Link href="/legal/cookies" className="hover:text-wr-white transition-colors">
            {t.footer.cookies}
          </Link>
          <a
            href="https://www.linkedin.com/company/werise-education"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-wr-white transition-colors"
          >
            {t.footer.linkedin}
          </a>
        </nav>
        <div>{t.footer.copyright.replace('{year}', String(year))}</div>
      </div>
    </footer>
  );
}
