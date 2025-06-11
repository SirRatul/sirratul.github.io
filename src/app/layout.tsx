import type { Metadata } from 'next';
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth'>
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
