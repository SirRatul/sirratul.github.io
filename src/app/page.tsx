import dynamic from 'next/dynamic';
import HashScroll from './components/Home/HashScroll';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Skills from './components/Home/Skills';
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
            
            {/* About & Skills - White/Default background */}
            <div className='section-bg-white'>
                <About />
                <div className='section-divider-gradient'></div>
                <Skills />
            </div>
            
            {/* Experience - Light background for contrast */}
            <div className='section-bg-light'>
                <Experience />
            </div>
            
            {/* Education - Light background */}
            <div className='section-bg-light'>
                <Education />
            </div>
            
            {/* Publications - Light background */}
            <div className='section-bg-light'>
                <Publications />
            </div>
            
            {/* Projects - White background */}
            <div className='section-bg-white'>
                <Projects />
            </div>
            
            {/* Contact - Light background */}
            <div className='section-bg-light'>
                <Contact />
            </div>
        </main>
    );
}
