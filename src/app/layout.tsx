import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import ClarityInit from './components/ClarityInit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />

                <title>Samsul Islam | Frontend Developer Portfolio</title>
                <meta name='title' content='Samsul Islam | Frontend Developer Portfolio' />
                <meta
                    name='description'
                    content='Portfolio of Samsul Islam, a frontend developer skilled in React, NextJS, JavaScript, TypeScript, HTML, and CSS. Crafting responsive and modern user interfaces.'
                />

                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://sirratul.github.io/' />
                <meta property='og:title' content='Samsul Islam | Frontend Developer Portfolio' />
                <meta
                    property='og:description'
                    content='Portfolio of Samsul Islam, a frontend developer skilled in React, NextJS, JavaScript, TypeScript, HTML, and CSS. Crafting responsive and modern user interfaces.'
                />
                <meta property='og:image' content='https://sirratul.github.io/meta.jpg' />
                <meta property='og:site_name' content='sirratul.github.io' />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:url' content='https://sirratul.github.io/' />
                <meta name='twitter:title' content='Samsul Islam | Frontend Developer Portfolio' />
                <meta
                    name='twitter:description'
                    content='Portfolio of Samsul Islam, a frontend developer skilled in React, NextJS, JavaScript, TypeScript, HTML, and CSS. Crafting responsive and modern user interfaces.'
                />
                <meta name='twitter:image' content='https://sirratul.github.io/meta.jpg' />
            </head>
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
