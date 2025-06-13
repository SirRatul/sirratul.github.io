'use client';

import { projects } from '@/contents/projects';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/animations';
import ProjectCard from '../ProjectCard';

export default function ProjectList() {
    return (
        <div className='container max-w-7xl mx-auto py-12'>
            <motion.h1
                className='text-4xl font-bold mb-4 text-center'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Projects
            </motion.h1>
            <motion.p
                className='text-lg text-secondary mb-24 text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Here are some of my recent projects. Click on the links to view the code or live
                demo.
            </motion.p>

            <motion.div
                className='flex flex-wrap justify-center gap-8 items-stretch'
                variants={staggerContainer}
                initial='initial'
                animate='animate'
            >
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className='w-full md:w-[calc((100%-32px)/2)] lg:w-[calc((100%-32px*2)/3)]'
                    >
                        <div className='h-full flex flex-col'>
                            <ProjectCard project={project} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
