# Deployment

Este sitio reemplaza el WordPress que actualmente sirve `werise.education`. Hay dos rutas viables:

## Opción A — Vercel (recomendado, ~10 minutos)

Cero configuración, Next.js es nativo en Vercel y hereda todas las features (SSG, ISR, Edge functions para opengraph-image).

1. Ve a https://vercel.com/new y conecta este repo (`charleskot/riseweb-education`).
2. Vercel detecta automáticamente Next.js — acepta los defaults.
3. Hace build y despliega en una URL temporal `riseweb-education-xxx.vercel.app`.
4. En Settings → Domains, añade `werise.education` y `www.werise.education`.
5. Vercel te da los registros DNS (un A para apex y CNAME para www) — actualízalos en el registrador del dominio.
6. Cuando los DNS propaguen (~5-30 min), el sitio está vivo en `werise.education`.
7. Apaga el WordPress en el servidor Google. Mantén un backup de la base de datos por 30 días.

**Coste:** Plan Hobby gratis cubre este sitio (one-pager, tráfico bajo). Si crece y necesita Edge functions ilimitadas, plan Pro ~$20/mes.

## Opción B — Mismo servidor Google que werise.es

Solo si werise.es está en una VM o Cloud Run (no Vercel). Pasos genéricos:

### Si werise.es corre en una VM con PM2 + nginx

1. SSH al servidor.
2. Clona el repo: `git clone https://github.com/charleskot/riseweb-education.git`.
3. `cd riseweb-education && npm install && npm run build`.
4. Arranca con PM2: `pm2 start npm --name riseweb-education -- start`. Por defecto escucha en `:3000`. Si werise.es ya usa `:3000`, ajusta con `-p 3001`.
5. Configura nginx para que `werise.education` haga `proxy_pass` al puerto local del paso anterior. Vhost ejemplo:

```nginx
server {
  listen 443 ssl http2;
  server_name werise.education www.werise.education;
  ssl_certificate /etc/letsencrypt/live/werise.education/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/werise.education/privkey.pem;
  location / {
    proxy_pass http://127.0.0.1:3001;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

6. Renueva certificado SSL si es la primera vez: `certbot --nginx -d werise.education -d www.werise.education`.
7. `nginx -t && systemctl reload nginx`.
8. DNS: el dominio ya debería apuntar al servidor (mismo que werise.es).

### Si werise.es corre en Cloud Run

1. Crea un Dockerfile (no incluido por defecto). Necesitas uno como:

```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

(Requiere añadir `output: 'standalone'` a `next.config.mjs`.)

2. `gcloud run deploy riseweb-education --source . --region <region> --allow-unauthenticated`.
3. Mapea el dominio en la consola: Cloud Run → Manage custom domains → Add `werise.education`.
4. Apunta DNS (Cloud Run te da los registros).

## Pre-launch checklist (cualquier opción)

- [ ] Build de producción pasa (`npm run build`).
- [ ] `HUBSPOT_MEETING_URL` en `lib/cases.ts` apunta al meeting link real (no placeholder).
- [ ] Logo de Barça reemplazado en `public/logos/barca.jpg` (no es el placeholder 1×1).
- [ ] Email `hello@werise.education` está activo (recibe correo).
- [ ] LinkedIn URL en `components/layout/Footer.tsx` es la correcta.
- [ ] Lighthouse en producción ≥ 95 perf, 100 a11y, 100 SEO.
- [ ] 301 redirects funcionan: `/casos-de-exito`, `/servicios`, `/contacto`, etc. → anclas correctas.
- [ ] Submit `https://werise.education/sitemap.xml` en Google Search Console.
- [ ] WordPress original apagado tras 24h-48h de verificación del nuevo sitio.

## Después de lanzar

- Tag release: `git tag v1.0.0 && git push --tags`.
- Mantén backup de la BD WordPress por 30 días.
- Monitorea Search Console por 2 semanas para detectar caídas en tráfico orgánico.
