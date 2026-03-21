// components/ProjectCard.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { fadeInUp } from '@/utils/animations';
import { Project } from '@/types';

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <motion.article
            className='h-full flex flex-col bg-[#FCFCFF] dark:bg-gray-800/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 card-shadow-light dark:card-shadow-dark hover:shadow-2xl dark:hover:shadow-primary/20'
            variants={fadeInUp}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
        >
            <div className='relative aspect-video overflow-hidden group'>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-[1.04]'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    loading='lazy'
                />
                {project.category && (
                    <div className='absolute top-3 right-3 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full backdrop-blur-sm shadow-lg'>
                        {project.category}
                    </div>
                )}
                {project.role && (
                    <motion.div 
                        className='absolute top-3 left-3 role-badge'
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {project.role}
                    </motion.div>
                )}
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300'></div>
            </div>
            
            <div className='p-6 flex flex-col flex-grow'>
                <motion.h3
                    className='text-xl font-semibold mb-2 text-gray-900 dark:text-white'
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    {project.title}
                </motion.h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3'>
                    {project.description}
                </p>
                <motion.div
                    className='flex flex-wrap gap-2 mb-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {project.technologies.slice(0, 4).map((tech, i) => (
                        <motion.span
                            key={`${project.title}-tech-${i}`}
                            className='px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-xs font-medium'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className='px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium'>
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </motion.div>
                {(project.githubLink || project.demoLink) && (
                    <motion.div
                        className='flex gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {project.githubLink && (
                            <motion.a
                                href={project.githubLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm font-medium'
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`View source code of ${project.title}`}
                                title={`${project.title} Code`}
                            >
                                <FaGithub className='h-5 w-5' />
                                <span>Code</span>
                            </motion.a>
                        )}
                        {project.demoLink && (
                            <motion.a
                                href={project.demoLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm font-medium'
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`View live demo of ${project.title}`}
                                title={`${project.title} Live Demo`}
                            >
                                <FaExternalLinkAlt className='h-4 w-4' />
                                <span>Live Demo</span>
                            </motion.a>
                        )}
                    </motion.div>
                )}
            </div>
        </motion.article>
    );
}
