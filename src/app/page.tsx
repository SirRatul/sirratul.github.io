'use client';

import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace('#', '');
                const el = document.getElementById(id);
                if (el) {
                    setTimeout(() => {
                        el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            }
        }
    }, []);

    return (
        <main>
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
