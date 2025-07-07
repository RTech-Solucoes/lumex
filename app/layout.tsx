import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lúmex - Agência de Neuromarketing | Aumente suas Vendas Online',
  description: 'Na Lúmex, combinamos neurociência, marketing e estratégias personalizadas para atrair mais clientes e vender mais todos os dias. Agência especializada em neuromarketing.',
  keywords: 'neuromarketing, marketing digital, vendas online, presença digital, crescimento online, agência de marketing, neurociência, comportamento do consumidor',
  authors: [{ name: 'Lúmex Marketing Agency' }],
  creator: 'Lúmex Marketing Agency',
  publisher: 'Lúmex Marketing Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lumex.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lúmex - Agência de Neuromarketing | Aumente suas Vendas Online',
    description: 'Na Lúmex, combinamos neurociência, marketing e estratégias personalizadas para atrair mais clientes e vender mais todos os dias.',
    url: 'https://lumex.com.br',
    siteName: 'Lúmex Marketing Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lúmex Marketing Agency - Neuromarketing',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lúmex - Agência de Neuromarketing | Aumente suas Vendas Online',
    description: 'Na Lúmex, combinamos neurociência, marketing e estratégias personalizadas para atrair mais clientes e vender mais todos os dias.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-[#18191c] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}