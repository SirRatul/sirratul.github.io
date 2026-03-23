import dynamic from 'next/dynamic';
import HashScroll from './components/Home/HashScroll';
import Hero from './components/Home/Hero';

const About = dynamic(() => import('./components/Home/About'), {
    loading: () => (
        <div className='flex min-h-[12rem] justify-center items-center py-10' aria-hidden>
            <div className='h-6 w-6 border-4 border-primary border-t-transparent rounded-full animate-spin' />
        </div>
    ),
});
const Skills = dynamic(() => import('./components/Home/Skills'), {
    loading: () => (
        <div className='flex min-h-[14rem] justify-center items-center py-10' aria-hidden>
            <div className='h-6 w-6 border-4 border-primary border-t-transparent rounded-full animate-spin' />
        </div>
    ),
});
const Experience = dynamic(() => import('./components/Home/Experience'), {
    loading: () => (
        <div className='flex justify-center items-center py-10'>
            <div className='w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
        </div>
    ),
});
const Education = dynamic(() => import('./components/Home/Education'), {
    loading: () => (
        <div className='flex justify-center items-center py-10'>
            <div className='w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
        </div>
    ),
});
const Publications = dynamic(() => import('./components/Home/Publications'), {
    loading: () => (
        <div className='flex justify-center items-center py-10'>
            <div className='w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
        </div>
    ),
});
const Projects = dynamic(() => import('./components/Home/Projects'), {
    loading: () => (
        <div className='flex justify-center items-center py-10'>
            <div className='w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
        </div>
    ),
});
const Contact = dynamic(() => import('./components/Home/Contact'), {
    loading: () => (
        <div className='flex justify-center items-center py-10'>
            <div className='w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
        </div>
    ),
});

export default function Home() {
    return (
        <main>
            <HashScroll />
            {/* Hero - No background wrapper needed, has its own */}
            <Hero />
            
            {/* About & Skills */}
            <div className='section-bg-white section-py'>
                <About />
                <div className='section-divider-gradient'></div>
                <Skills />
            </div>

            <div className='section-bg-light section-py'>
                <Experience />
            </div>

            <div className='section-bg-light section-py'>
                <Education />
            </div>

            <div className='section-bg-light section-py'>
                <Publications />
            </div>

            <div className='section-bg-white section-py'>
                <Projects />
            </div>

            <div className='section-bg-light section-py'>
                <Contact />
            </div>
        </main>
    );
}
