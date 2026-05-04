export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-wr-dark px-6 text-center">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-wr-lime">404</p>
        <h1 className="text-balance mt-4 text-4xl font-black tracking-tighter text-wr-white md:text-6xl">
          Esta página no existe.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-wr-white/70">
          La URL que buscas se ha movido o nunca existió. Volver al inicio.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-wr-lime px-7 py-3.5 text-sm font-bold text-wr-dark transition-colors hover:bg-wr-lime-lt active:scale-[0.98]"
        >
          Inicio
        </a>
      </div>
    </div>
  );
}
