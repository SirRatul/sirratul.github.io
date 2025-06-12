// components/ProjectCard.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { fadeInUp, cardHoverSmall } from '@/utils/animations';
import { Project } from '@/types';

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <motion.article
            className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6'
            variants={fadeInUp}
            {...cardHoverSmall}
        >
            <div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </div>
            <motion.h3
                className='text-xl font-semibold mb-2'
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {project.title}
            </motion.h3>
            <motion.p
                className='text-gray-600 dark:text-gray-300 mb-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {project.description}
            </motion.p>
            <motion.div
                className='flex flex-wrap gap-2 mb-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {project.technologies.map((tech) => (
                    <motion.span
                        key={tech}
                        className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {tech}
                    </motion.span>
                ))}
            </motion.div>
            <motion.div
                className='flex gap-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <motion.a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-secondary hover:text-primary transition-colors'
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View source code of ${project.title}`}
                    title={`${project.title} Code`}
                >
                    <FaGithub className='h-5 w-5' />
                    <span>Code</span>
                </motion.a>
                <motion.a
                    href={project.demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-secondary hover:text-primary transition-colors'
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View live demo of ${project.title}`}
                    title={`${project.title} Live Demo`}
                >
                    <FaExternalLinkAlt className='h-5 w-5' />
                    <span>Live Demo</span>
                </motion.a>
            </motion.div>
        </motion.article>
    );
}
