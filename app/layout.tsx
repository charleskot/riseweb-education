import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rise Education',
  description: 'Vertical educación de WeRise',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
