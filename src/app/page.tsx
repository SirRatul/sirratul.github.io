import type { Metadata } from 'next';
import HashScroll from './components/Home/HashScroll';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Skills from './components/Home/Skills';
import Experience from './components/Home/Experience';
import Education from './components/Home/Education';
import Projects from './components/Home/Projects';
import Contact from './components/Home/Contact';

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

export default function Home() {
    return (
        <main>
            <HashScroll />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Contact />
        </main>
    );
}
