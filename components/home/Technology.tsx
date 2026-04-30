import { LayoutDashboard, Bot, Check } from 'lucide-react';
import type { Copy } from '@/lib/i18n/es';

export default function Technology({ t }: { t: Copy }) {
  const skola = t.technology.skola;
  const ai = t.technology.ai;
  return (
    <section id="tecnologia" className="bg-wr-dark py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <h2
          className="font-black tracking-tight text-wr-white"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05 }}
        >
          {t.technology.title}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Skola */}
          <article className="rounded-2xl border border-wr-border bg-wr-dark/40 p-8">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-wr-lime/15">
              <LayoutDashboard className="h-5 w-5 text-wr-lime" />
            </div>
            <h3 className="text-2xl font-black text-wr-white">{skola.name}</h3>
            <p className="mt-1 text-sm text-wr-white/60">{skola.tagline}</p>
            <p className="mt-4 text-base text-wr-white/80">{skola.lead}</p>
            <ul className="mt-6 space-y-3">
              {skola.features.map((f, i) => (
                <li key={i} className="flex gap-3 text-sm text-wr-white/80 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-wr-lime" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* AI */}
          <article className="rounded-2xl border border-wr-border bg-wr-dark/40 p-8">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-wr-lime/15">
              <Bot className="h-5 w-5 text-wr-lime" />
            </div>
            <h3 className="text-2xl font-black text-wr-white">{ai.name}</h3>
            <ul className="mt-6 space-y-3">
              {ai.features.map((f, i) => (
                <li key={i} className="flex gap-3 text-sm text-wr-white/80 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-wr-lime" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
