import Image from 'next/image';
import type { Copy } from '@/lib/i18n/es';

// Trust strip with the 3 hero clients. Logos are deck-rendered transparent
// PNGs with light/white content — they sit cleanly on the dark background
// without any filter.
const LOGOS = [
  { id: 'hofmann', name: 'Hofmann Culinary School', src: '/logos/hofmann.png', w: 180, h: 90 },
  { id: 'barca', name: 'Barça Innovation Hub', src: '/logos/barca.png', w: 70, h: 72 },
  { id: 'cambra', name: 'Cambra de Comerç de Barcelona', src: '/logos/cambra.png', w: 200, h: 51 },
];

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
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-20">
          {LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="flex h-16 items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.w}
                height={logo.h}
                className="h-auto w-auto max-h-12 opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
