'use client';

import Image from 'next/image';

const LOGOS = [
  { id: 'hofmann', name: 'Hofmann Culinary School', src: '/logos/hofmann.png' },
  { id: 'barca', name: 'Barça Innovation Hub', src: '/logos/barca.jpg' },
  { id: 'frankfurt', name: 'Frankfurt School', src: '/logos/frankfurt.png' },
  { id: 'cambra', name: 'Cambra de Comerç de Barcelona', src: '/logos/cambra.png' },
  { id: 'inesa', name: 'Inesa Tech', src: '/logos/inesa.png' },
  { id: 'nuclio', name: 'Nuclio Digital School', src: '/logos/nuclio.png' },
  { id: 'tattoox', name: 'TATTOOX', src: '/logos/tattoox.png' },
];

export default function LogoMarquee() {
  // Duplicate the array so the loop is seamless (translateX(-50%) ends exactly on the duplicate)
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section
      aria-label="Clientes"
      className="border-y border-wr-border bg-wr-dark py-10 overflow-hidden"
    >
      <div
        className="flex gap-12 will-change-transform motion-reduce:!animate-none"
        style={{ animation: 'marquee-scroll 40s linear infinite', width: 'max-content' }}
      >
        {doubled.map((logo, idx) => (
          <div
            key={`${logo.id}-${idx}`}
            className="flex h-14 w-40 shrink-0 items-center justify-center rounded-md bg-white/95 px-4"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={40}
              className="max-h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
