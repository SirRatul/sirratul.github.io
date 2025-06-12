import HashScroll from './components/Home/HashScroll';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Skills from './components/Home/Skills';
import Experience from './components/Home/Experience';
import Education from './components/Home/Education';
import Projects from './components/Home/Projects';
import Contact from './components/Home/Contact';

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
