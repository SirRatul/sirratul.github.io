import type { Metadata } from 'next';
import Head from 'next/head';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import ClarityInit from './components/ClarityInit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
    title: 'Samsul Islam | Frontend Developer Portfolio',
    description:
        'Portfolio of Samsul Islam, a frontend developer skilled in React, NextJS, JavaScript, TypeScript, HTML, and CSS. Crafting responsive and modern user interfaces.',
    icons: {
        icon: '/favicon.ico',
    },
    metadataBase: new URL('https://sirratul.github.io'),
    openGraph: {
        title: 'Samsul Islam | Frontend Developer Portfolio',
        description:
            'Portfolio of Samsul Islam, a frontend developer skilled in React, NextJS, JavaScript, TypeScript, HTML, and CSS. Crafting responsive and modern user interfaces.',
        images: [
            {
                url: '/meta.jpg',
                alt: 'Samsul Islam Portfolio Image',
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Samsul Islam | Frontend Developer Portfolio',
        description:
            'Portfolio of Samsul Islam, a frontend developer skilled in React, NextJS, JavaScript, TypeScript, HTML, and CSS. Crafting responsive and modern user interfaces.',
        images: [
            {
                url: '/meta.jpg',
                alt: 'Samsul Islam Portfolio Image',
                width: 1200,
                height: 630,
            },
        ],
    },
};

type OpenGraphImage = {
    url?: string | URL;
    alt?: string;
    width?: number;
    height?: number;
};
type TwitterMetadata = {
    card?: string;
    title?: string;
    description?: string;
    images?: OpenGraphImage | OpenGraphImage[];
};

type Icons = {
    icon?: string;
};

function getFirstImageUrl(images?: OpenGraphImage | OpenGraphImage[]): string {
    if (!images) return '/meta.jpg';

    const array = Array.isArray(images) ? images : [images];
    const firstImage = array[0];

    if (!firstImage) return '/meta.jpg';

    if (typeof firstImage.url === 'string') return firstImage.url;
    if (firstImage.url instanceof URL) return firstImage.url.toString();

    return '/meta.jpg';
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Destructuring metadata and providing defaults
    const { title, description, metadataBase, icons, openGraph, twitter } = metadata;

    const ogTitle = (openGraph?.title ?? title) as string;
    const ogDescription = (openGraph?.description ?? description) as string;
    const ogImage = getFirstImageUrl(
        openGraph?.images as OpenGraphImage | OpenGraphImage[] | undefined,
    );
    const ogUrl = (metadataBase?.toString() ?? 'https://sirratul.github.io') as string;

    const twitterTyped = twitter as TwitterMetadata;
    const twitterCard = twitterTyped.card ?? 'summary_large_image';
    const twitterTitle = (twitter?.title ?? title) as string;
    const twitterDescription = (twitter?.description ?? description) as string;
    const twitterImage = getFirstImageUrl(
        twitter?.images as OpenGraphImage | OpenGraphImage[] | undefined,
    );

    const typedIcons = icons as Icons | undefined;
    const favicon = typedIcons?.icon ?? '/favicon.ico';

    const safeDescription: string = description as string;
    const safeTitle: string = title as string;

    return (
        <html lang='en' className='scroll-smooth'>
            <Head>
                {/* Meta Tags */}
                <meta name='description' content={safeDescription} />
                <meta property='og:title' content={ogTitle} />
                <meta property='og:description' content={ogDescription} />
                <meta property='og:image' content={ogImage} />
                <meta property='og:url' content={ogUrl} />
                <meta name='twitter:card' content={twitterCard} />
                <meta name='twitter:title' content={twitterTitle} />
                <meta name='twitter:description' content={twitterDescription} />
                <meta name='twitter:image' content={twitterImage} />
                <title>{safeTitle}</title>
                <link rel='icon' href={favicon} />
            </Head>
            <body
                className={`bg-white scroll-smooth transition-colors dark:bg-gray-900 dark:text-white ${GeistSans.variable} ${GeistMono.variable}`}
            >
                <ClarityInit />
                <ThemeProvider>
                    <Navbar />
                    <main className='min-h-screen pt-24'>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
