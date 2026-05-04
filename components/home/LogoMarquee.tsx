import type { Copy } from '@/lib/i18n/es';

// Editorial trust strip — eyebrow + 3 client wordmarks rendered as text.
// We avoid logo images here because the assets we have (Hofmann banner photo,
// Barça JPG with white background) don't render well as inverted-white logos.
// Text wordmarks read cleaner and match the editorial tone of the site.
export default function LogoMarquee({ t }: { t: Copy }) {
  return (
    <section
      aria-label="Clientes"
      className="border-y border-wr-border bg-wr-dark py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-wr-lime">
          {t.trust.eyebrow}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-16">
          {t.trust.clients.map((client) => (
            <span
              key={client}
              className="text-base font-bold uppercase tracking-[0.18em] text-wr-white/80 md:text-lg"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
