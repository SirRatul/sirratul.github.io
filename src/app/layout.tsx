import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { ClientThemeProvider } from './context/ClientThemeProvider';

const Navbar = dynamic(() => import('./components/Navbar'), {
    loading: () => (
        <div className='flex justify-center items-center py-10'>
            <div className='w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
        </div>
    ),
});
const Footer = dynamic(() => import('./components/Footer'), {
    loading: () => (
        <div className='flex justify-center items-center py-10'>
            <div className='w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
        </div>
    ),
});
const SignatureGradientLine = dynamic(() => import('./components/SignatureGradientLine'));

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const descriptionText =
        'Samsul Islam - Senior Frontend Developer with 4+ years of experience specializing in React, Next.js, TypeScript, and Shopify development. Building high-performance, scalable web applications with modern UI/UX practices.';
    const titleText = 'Samsul Islam | Senior Frontend Developer | React & Next.js Specialist';
    const imageUrl = 'https://sirratul.github.io/meta.webp';
    const siteUrl = 'https://sirratul.github.io/';

    return (
        <html lang='en' className='scroll-smooth'>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />

                {/* Favicon */}
                <link rel='icon' href='/favicon.ico' />
                
                {/* Apple Touch Icon */}
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                
                {/* Android Chrome Icons */}
                <link rel='icon' type='image/png' sizes='192x192' href='/android-chrome-192x192.png' />
                <link rel='icon' type='image/png' sizes='512x512' href='/android-chrome-512x512.png' />
                
                {/* Web App Manifest */}
                <link rel='manifest' href='/site.webmanifest' />
                
                {/* Theme Color */}
                <meta name='theme-color' content='#ffffff' />

                <title>{titleText}</title>
                <meta name='title' content={titleText} />
                <meta name='description' content={descriptionText} />

                <meta property='og:type' content='website' />
                <meta property='og:url' content={siteUrl} />
                <meta property='og:title' content={titleText} />
                <meta property='og:description' content={descriptionText} />
                <meta property='og:image' content={imageUrl} />
                <meta property='og:site_name' content='sirratul.github.io' />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:url' content={siteUrl} />
                <meta name='twitter:title' content={titleText} />
                <meta name='twitter:description' content={descriptionText} />
                <meta name='twitter:image' content={imageUrl} />
            </head>
            <body
                className={`bg-white scroll-smooth transition-colors dark:bg-gray-900 dark:text-white ${inter.className}`}
            >
                <ClientThemeProvider>
                    <SignatureGradientLine />
                    <Navbar />
                    <main className='min-h-screen'>{children}</main>
                    <Footer />
                </ClientThemeProvider>
                {process.env.NODE_ENV === 'production' && (
                    <Script
                        strategy='lazyOnload'
                        id='clarity-script'
                        dangerouslySetInnerHTML={{
                            __html: `
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/${process.env.NEXT_PUBLIC_CLARITY_ID}";
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
                        `,
                        }}
                    />
                )}
            </body>
        </html>
    );
}
