'use client';

import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown } from '@/utils/animations';

export default function About() {
    return (
        <div id='about' className='container max-w-7xl mx-auto py-12 scroll-mt-16'>
            <motion.h1 className='text-4xl font-bold mb-8 text-center' {...fadeInDown}>
                About Me
            </motion.h1>

            {/* Bio Section */}
            <motion.section className='mb-16' {...fadeInUp}>
                <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>
                    I&apos;m a dedicated Frontend Developer with 4+ years of experience building
                    high-performance web applications using React.js, Next.js, JavaScript and
                    TypeScript. I specialize in creating clean, responsive user interfaces and
                    integrating scalable backend services with Node.js and Express. With a strong
                    eye for UI/UX and a passion for writing clean, maintainable code, I thrive in
                    agile, remote environments where collaboration and performance matter.
                </p>
            </motion.section>
        </div>
    );
}
