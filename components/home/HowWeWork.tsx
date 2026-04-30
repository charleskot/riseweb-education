import { Check } from 'lucide-react';
import type { Copy } from '@/lib/i18n/es';

export default function HowWeWork({ t }: { t: Copy }) {
  return (
    <section id="como-trabajamos" className="bg-wr-dark py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <h2
          className="font-black tracking-tight text-wr-white"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05 }}
        >
          {t.howWeWork.title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-wr-white/70">{t.howWeWork.subtitle}</p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.howWeWork.levels.map((level, i) => {
            const isMiddle = i === 1;
            return (
              <article
                key={level.number}
                className={
                  isMiddle
                    ? 'rounded-2xl border-2 border-wr-lime bg-wr-dark p-8 lg:scale-[1.02]'
                    : 'rounded-2xl border border-wr-border bg-wr-dark/60 p-8'
                }
              >
                <div
                  className={`text-5xl font-black ${
                    isMiddle ? 'text-wr-lime' : 'text-wr-white/30'
                  }`}
                >
                  {level.number}
                </div>
                <h3 className="mt-4 text-xl font-bold text-wr-white">{level.title}</h3>
                <p className="mt-3 text-sm text-wr-white/70 leading-relaxed">{level.body}</p>

                {'deliverables' in level && level.deliverables && (
                  <ul className="mt-6 space-y-2">
                    {level.deliverables.map((d, j) => (
                      <li key={j} className="flex gap-2 text-sm text-wr-white/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-wr-lime" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
