import { ArrowUpRight } from 'lucide-react';
import type { Copy } from '@/lib/i18n/es';

export default function WeRiseGroup({ t }: { t: Copy }) {
  return (
    <section id="grupo" className="bg-wr-dark py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-12 lg:px-20 text-center">
        <h2
          className="font-black tracking-tight text-wr-white"
          style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', lineHeight: 1.1 }}
        >
          {t.weRiseGroup.title}
        </h2>
        <p className="mt-6 text-base text-wr-white/70 leading-relaxed md:text-lg">
          {t.weRiseGroup.body}
        </p>
        <a
          href={t.weRiseGroup.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-wr-lime hover:text-wr-lime-lt transition-colors"
        >
          {t.weRiseGroup.cta}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
