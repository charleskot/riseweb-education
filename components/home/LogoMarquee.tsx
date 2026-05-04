import Image from 'next/image';

// Static trust strip with the 3 hero clients only.
// Logos are rendered in white via CSS filter (brightness-0 invert) so they
// look uniform on the dark background — no white card behind them.
const LOGOS = [
  { id: 'hofmann', name: 'Hofmann Culinary School', src: '/logos/hofmann.png' },
  { id: 'barca', name: 'Barça Innovation Hub', src: '/logos/barca.png' },
  { id: 'cambra', name: 'Cambra de Comerç de Barcelona', src: '/logos/cambra.png' },
];

export default function LogoMarquee() {
  return (
    <section
      aria-label="Clientes"
      className="border-y border-wr-border bg-wr-dark py-8"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-16 gap-y-6 px-6 md:gap-x-24">
        {LOGOS.map((logo) => (
          <div
            key={logo.id}
            className="flex h-12 items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={140}
              height={48}
              className="max-h-10 w-auto object-contain opacity-80 brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
