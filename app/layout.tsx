import './globals.css';
import type { Metadata } from 'next';

import localFont from 'next/font/local'

const degular = localFont({
  src: [
    {
      path: '../fonts/DegularDisplay-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/DegularDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/DegularDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/DegularDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/DegularDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/DegularDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/DegularDisplay-Black.otf',
      weight: '900',
      style: 'normal',
    },
    // Italic variants
    {
      path: '../fonts/DegularDisplay-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/DegularDisplay-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/DegularDisplay-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/DegularDisplay-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/DegularDisplay-SemiboldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/DegularDisplay-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/DegularDisplay-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-degular',
})

export const metadata: Metadata = {
  title: 'Lúmex',
  description: 'Na Lúmex, combinamos neurociência, marketing e estratégias personalizadas para atrair mais clientes e vender mais todos os dias. Agência especializada em neuromarketing.',
  keywords: 'neuromarketing, marketing digital, vendas online, presença digital, crescimento online, agência de marketing, neurociência, comportamento do consumidor',
  authors: [{ name: 'Lúmex Agência de Marketing' }],
  creator: 'Lúmex Agência de Marketing',
  publisher: 'Lúmex Agência de Marketing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://agencialumex.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lúmex',
    description: 'Na Lúmex, combinamos neurociência, marketing e estratégias personalizadas para atrair mais clientes e vender mais todos os dias.',
    url: 'https://agencialumex.com.br',
    siteName: 'Lúmex Agência de Marketing',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Lúmex Agência de Marketing - Neuromarketing',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lúmex',
    description: 'Na Lúmex, combinamos neurociência, marketing e estratégias personalizadas para atrair mais clientes e vender mais todos os dias.',
    images: ['/logo.png'],
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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${degular.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}