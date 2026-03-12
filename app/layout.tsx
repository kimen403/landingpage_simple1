import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'UMKM Naik Kelas Indonesia',
  description:
    'Platform pendamping UMKM Indonesia untuk jualan online, promosi digital, dan akses pembinaan bisnis dalam satu tempat.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}