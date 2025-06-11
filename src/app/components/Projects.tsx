'use client';

import Link from 'next/link';
import { projects } from '@/contents/projects';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
        <section id='projects' className='py-20 scroll-mt-16'>
            <div className='container max-w-7xl mx-auto px-4'>
                <motion.h2 className='text-3xl font-bold mb-12 text-center' {...fadeInUp}>
                    Featured Projects
                </motion.h2>

                <motion.div
                    className='grid grid-cols-1 md:grid-cols-3 gap-8'
                    variants={staggerContainer}
                    initial='initial'
                    animate='animate'
                >
                    {projects
                        .filter((project) => project.featured)
                        .map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                </motion.div>

                <motion.div
                    className='flex justify-center mt-10'
                    {...fadeInUp}
                    transition={{ delay: 0.6 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href='/projects'
                            className='bg-primary inline-block px-8 py-3 text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors'
                        >
                            View All Projects
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
