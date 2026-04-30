import { TrendingDown, Globe, Code, LayoutGrid, Sparkles } from 'lucide-react';
import type { Copy } from '@/lib/i18n/es';

const PAIN_ICONS = [TrendingDown, Globe, Code, LayoutGrid];

export default function Problem({ t }: { t: Copy }) {
  return (
    <section id="problema" className="relative bg-wr-dark py-24">
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-12 px-6 md:px-12 lg:px-20 lg:grid-cols-2">
        {/* Left column: title + highlight card */}
        <div className="flex flex-col gap-10">
          <h2
            className="font-black tracking-tight text-wr-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05 }}
          >
            {t.problem.title}
          </h2>

          <div className="rounded-2xl border border-wr-border bg-wr-dark/60 p-8">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-wr-lime/15">
              <Sparkles className="h-5 w-5 text-wr-lime" />
            </div>
            <p className="text-lg font-semibold text-wr-white">
              {t.problem.highlight}
            </p>
          </div>
        </div>

        {/* Right column: 4 pains, separated by hairlines */}
        <ul className="divide-y divide-wr-border">
          {t.problem.pains.map((pain, i) => {
            const Icon = PAIN_ICONS[i] ?? TrendingDown;
            return (
              <li key={i} className="flex gap-4 py-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-wr-lime/15">
                  <Icon className="h-5 w-5 text-wr-lime" />
                </div>
                <p className="text-base text-wr-white/80">
                  <span className="font-semibold text-wr-white">{pain.title} </span>
                  {pain.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
