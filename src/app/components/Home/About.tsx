'use client';

import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown } from '@/utils/animations';

export default function About() {
    return (
        <section className='relative overflow-hidden bg-gray-50/50 dark:bg-transparent'>
            {/* Gradient Background */}
            <div className='absolute inset-0 -z-10'>
                <div className='absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/50 to-transparent dark:from-gray-900 dark:via-slate-900 dark:to-blue-950'></div>
                <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl'></div>
            </div>

            <div id='about' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
                <div className='section-head'>
                    <motion.h2 className='section-title' {...fadeInDown}>
                        About Me
                    </motion.h2>
                </div>

                {/* Bio Section */}
                <motion.section className='mb-16' {...fadeInUp}>
                    <p className='prose-body max-w-3xl mx-auto text-center'>
                        I&apos;m a Senior Frontend Developer with 4+ years of experience building
                        high-performance web applications using React.js, Next.js, JavaScript, and
                        TypeScript. I specialize in creating clean, responsive user interfaces and have
                        extensive expertise in Shopify development. With proven success in improving page
                        load speeds by up to 70% and mentoring junior developers, I excel at writing
                        maintainable code and delivering scalable solutions. I thrive in agile, remote
                        environments where collaboration and performance excellence matter.
                    </p>
                </motion.section>
            </div>
        </section>
    );
}
