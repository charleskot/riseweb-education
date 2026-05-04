# Rise Education — werise.education

One-pager bilingüe (ES/EN) en Next.js, vertical educación del grupo WeRise.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000 (ES) o http://localhost:3000/en (EN).

## Build de producción

```bash
npm run build
npm run start
```

## Deployment

Ver [DEPLOYMENT.md](./DEPLOYMENT.md).

## Stack

- Next.js 14 (App Router)
- React 18, TypeScript 5
- Tailwind CSS 3.4
- GSAP para animaciones
- lucide-react para iconos

## Estructura

- `app/[locale]/` — rutas bilingües ES/EN
- `components/home/` — secciones del one-pager
- `components/layout/` — Header, Footer
- `lib/i18n/` — copy ES/EN
- `lib/cases.ts` — datos de casos de éxito (Hofmann, Barça, Cambra)
- `public/logos/` — logos de clientes (ver README dentro)
- `public/rise-education-logo.png` — logo de marca

## Pendiente antes de lanzar

- Reemplazar `public/logos/barca.jpg` (placeholder 1×1px) por el logo real de Barça Innovation Hub (ver `public/logos/README.md`).
- Verificar que `HUBSPOT_MEETING_URL` en `lib/cases.ts` apunta al meeting link correcto.
- Configurar el dominio `werise.education` en el proveedor de hosting (ver DEPLOYMENT.md).
