import { Award, Cpu, Handshake, Eye } from 'lucide-react';
import type { Copy } from '@/lib/i18n/es';

const PILLAR_ICONS = [Award, Cpu, Handshake, Eye];

export default function WhyUs({ t }: { t: Copy }) {
  return (
    <section id="por-que-nosotros" className="bg-wr-dark py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <h2
          className="font-black tracking-tight text-wr-white"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05 }}
        >
          {t.whyUs.title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-wr-white/70">{t.whyUs.subtitle}</p>

        {/* Pillars */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.whyUs.pillars.map((p, i) => {
            const Icon = PILLAR_ICONS[i] ?? Award;
            return (
              <article
                key={i}
                className="rounded-2xl border border-wr-border bg-wr-dark/40 p-6"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-wr-lime/15">
                  <Icon className="h-5 w-5 text-wr-lime" />
                </div>
                <h3 className="text-base font-bold text-wr-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-wr-white/70">{p.body}</p>
              </article>
            );
          })}
        </div>

        {/* Alternatives */}
        <div className="mt-20 rounded-2xl border border-wr-border bg-wr-dark/40 p-8 md:p-12">
          <h3 className="text-xl font-bold text-wr-white md:text-2xl">
            {t.whyUs.alternatives.title}
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {t.whyUs.alternatives.items.map((item, i) => (
              <div key={i} className="rounded-xl bg-wr-dark/60 p-5">
                <h4 className="text-sm font-bold text-wr-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-wr-white/60">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base font-semibold text-wr-lime md:text-lg">
            {t.whyUs.alternatives.closer}
          </p>
        </div>
      </div>
    </section>
  );
}
