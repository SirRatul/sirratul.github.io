'use client';

import Link from 'next/link';
import { projects } from '@/contents/projects';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import ProjectCard from '../ProjectCard';

export default function Projects() {
    return (
        <section className='relative overflow-hidden'>
            {/* Gradient Background */}
            <div className='absolute inset-0 -z-10'>
                <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent dark:from-gray-900 dark:via-slate-900 dark:to-blue-950'></div>
                <div className='absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl'></div>
            </div>

            <div id='projects' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
                <div className='section-head'>
                    <motion.h2 className='section-title section-header-glow' {...fadeInUp}>
                        Featured Projects
                    </motion.h2>
                    <p className='section-lead text-muted-on-dark'>
                        Selected work with clear outcomes—live sites and products shipped to real users.
                    </p>
                </div>

                <motion.div
                    className='flex flex-wrap justify-center gap-6 md:gap-8 items-stretch'
                    variants={staggerContainer}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: 0.12, margin: '0px 0px -60px 0px' }}
                >
                    {projects
                        .filter((project) => project.featured)
                        .map((project) => (
                            <div
                                key={project.slug}
                                className='w-full md:w-[calc((100%-32px)/2)] lg:w-[calc((100%-32px*2)/3)]'
                            >
                                <div className='h-full flex flex-col'>
                                    <ProjectCard project={project} />
                                </div>
                            </div>
                        ))}
                </motion.div>

                <motion.div
                    className='flex justify-center mt-12'
                    {...fadeInUp}
                    transition={{ delay: 0.6 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95}}>
                        <Link
                            href='/projects'
                            className='cta-primary'
                        >
                            View All Projects
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
