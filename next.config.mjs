/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      { source: '/casos-de-exito', destination: '/#casos', permanent: true },
      { source: '/casos-de-exito/:path*', destination: '/#casos', permanent: true },
      { source: '/servicios', destination: '/#como-trabajamos', permanent: true },
      { source: '/servicios/:path*', destination: '/#como-trabajamos', permanent: true },
      { source: '/quienes-somos', destination: '/#por-que-nosotros', permanent: true },
      { source: '/quienes-somos/:path*', destination: '/#por-que-nosotros', permanent: true },
      { source: '/contacto', destination: '/#cta', permanent: true },
      { source: '/contacto/:path*', destination: '/#cta', permanent: true },
      { source: '/soluciones-tecnologicas', destination: '/#tecnologia', permanent: true },
      { source: '/soluciones-tecnologicas/:path*', destination: '/#tecnologia', permanent: true },
      { source: '/noticias', destination: '/', permanent: true },
      { source: '/noticias/:path*', destination: '/', permanent: true },
    ];
  },
};
export default nextConfig;
