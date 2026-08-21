import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://faithonjoymountain.com/'),
  title: 'Faith on Joy Mountain',
  description: 'Bible teaching, worship, and truth-filled resources illuminating the Word of God.',
  openGraph: {
    title: 'Faith on Joy Mountain',
    description: 'Illuminating the Word of God through Bible teaching, worship, and truth-filled resources.',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Faith on Joy Mountain at sunrise' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faith on Joy Mountain',
    description: 'Illuminating the Word of God through Bible teaching, worship, and truth-filled resources.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
