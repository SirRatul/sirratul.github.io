import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClientThemeProvider } from './context/ClientThemeProvider';
import { themeInitScript } from './context/ThemeContext';
import ClarityLoader from './components/ClarityLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignatureGradientLine from './components/SignatureGradientLine';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const descriptionText =
  'Samsul Islam is a frontend-focused software engineer in Dhaka, building web apps and Shopify stores with React, Next.js and TypeScript.';
const titleText = 'Samsul Islam · Software Engineer (Frontend)';

// Pages override `title` / `description`; everything else is inherited.
export const metadata: Metadata = {
  metadataBase: new URL('https://sirratul.github.io'),
  title: titleText,
  description: descriptionText,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: '/',
    title: titleText,
    description: descriptionText,
    images: ['/meta.webp'],
    siteName: 'sirratul.github.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: titleText,
    description: descriptionText,
    images: ['/meta.webp'],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* LCP (home hero): start fetch before CSS/layout paint — helps GTmetrix/Lighthouse chain */}
        <link rel='preload' href='/profile.webp' as='image' type='image/webp' />
      </head>
      <body
        className={`bg-white scroll-smooth transition-colors dark:bg-gray-900 dark:text-white ${inter.className}`}
      >
        <ClientThemeProvider>
          <SignatureGradientLine />
          <Navbar />
          <main className='min-h-screen w-full'>{children}</main>
          <Footer />
        </ClientThemeProvider>
        {process.env.NODE_ENV === 'production' && <ClarityLoader />}
      </body>
    </html>
  );
}
