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
    <div>
      <HashScroll />
      <Hero />

      <div className='section-bg-white section-py'>
        <About />
        <div className='h-16 md:h-24' aria-hidden />
        <Skills />
      </div>

      <div className='section-bg-light section-py'>
        <Experience />
      </div>

      <div className='section-bg-white section-py'>
        <Education />
      </div>

      <div className='section-bg-light section-py'>
        <Projects />
      </div>

      <div className='section-bg-white section-py'>
        <Contact />
      </div>
    </div>
  );
}
