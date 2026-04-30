import type { Copy } from '@/lib/i18n/es';

export default function Results({ t }: { t: Copy }) {
  const q = t.results.quantitative;
  const qual = t.results.qualitative;
  return (
    <section id="resultados" className="bg-wr-dark py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <h2
          className="font-black tracking-tight text-wr-white"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05 }}
        >
          {t.results.title}
        </h2>

        {/* Quantitative ROI */}
        <div className="mt-16">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-wr-white/60">
            {q.heading}
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="grid grid-cols-2 gap-6 lg:col-span-9 lg:grid-cols-4">
              {q.metrics.map((m, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-wr-border bg-wr-dark/40 p-6"
                >
                  <div className="text-3xl font-black text-wr-white md:text-4xl">{m.value}</div>
                  <div className="mt-2 text-sm text-wr-white/70">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-wr-lime p-6 text-wr-dark lg:col-span-3">
              <div className="text-3xl font-black md:text-4xl">{q.highlight.value}</div>
              <div className="mt-2 text-sm font-semibold">{q.highlight.label}</div>
            </div>
          </div>
        </div>

        {/* Qualitative ROI */}
        <div className="mt-16">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-wr-white/60">
            {qual.heading}
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {qual.items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-wr-border bg-wr-dark/40 p-6"
              >
                <h4 className="text-base font-bold text-wr-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-wr-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
