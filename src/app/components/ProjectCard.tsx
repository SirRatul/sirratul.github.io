// components/ProjectCard.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { fadeInUp, cardHoverSmall } from '@/utils/animations';
import { Project } from '@/types';

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    const hasDemo = Boolean(project.demoLink);
    const hasGithub = Boolean(project.githubLink);
    const primaryHref = hasDemo ? project.demoLink : project.githubLink;
    const primaryLabel = hasDemo ? 'View project' : 'View code';
    const showGithubSecondary = hasDemo && hasGithub;
    const showFooterLinks = Boolean(primaryHref) || showGithubSecondary;

    return (
        <motion.article
            className='group/card h-full flex flex-col rounded-2xl overflow-hidden border border-gray-200/90 dark:border-white/10 bg-[#FCFCFF] dark:bg-slate-900/80 shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]'
            variants={fadeInUp}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, margin: '-40px' }}
            {...cardHoverSmall}
        >
            <div className='relative aspect-video overflow-hidden'>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-500 group-hover/card:scale-[1.03]'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    loading='lazy'
                />
                {project.category && (
                    <div className='absolute top-3 right-3 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full backdrop-blur-sm shadow-lg'>
                        {project.category}
                    </div>
                )}
                {project.role && (
                    <div className='absolute top-3 left-3 role-badge'>{project.role}</div>
                )}
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover/card:opacity-70' />
            </div>

            <div className='p-5 sm:p-6 flex flex-col flex-grow gap-3'>
                <div>
                    <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight'>
                        {project.title}
                    </h3>
                    <p className='mt-2 text-sm sm:text-[15px] leading-relaxed text-gray-600 dark:text-slate-400 line-clamp-3'>
                        {project.description}
                    </p>
                    {project.impact && (
                        <p className='mt-3 text-xs sm:text-sm font-medium text-gray-800 dark:text-slate-300 border-l-2 border-primary pl-3 leading-snug'>
                            <span className='text-primary font-semibold'>Impact: </span>
                            {project.impact}
                        </p>
                    )}
                </div>

                <div className='flex flex-wrap gap-2'>
                    {project.technologies.slice(0, 5).map((tech, i) => (
                        <span
                            key={`${project.title}-tech-${i}`}
                            className='px-2.5 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-xs font-medium'
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 5 && (
                        <span className='px-2.5 py-1 chip-muted rounded-full text-xs font-medium'>
                            +{project.technologies.length - 5}
                        </span>
                    )}
                </div>

                {showFooterLinks && (
                    <div className='mt-auto pt-4 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                        {primaryHref && (
                            <a
                                href={primaryHref}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-white text-sm font-semibold px-4 py-2.5 shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900'
                                aria-label={`${primaryLabel} — ${project.title}`}
                            >
                                {primaryLabel}
                                <FaArrowRight className='h-3.5 w-3.5 opacity-90' aria-hidden />
                            </a>
                        )}
                        {showGithubSecondary && (
                            <a
                                href={project.githubLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-primary transition-colors sm:ml-auto'
                                aria-label={`Source code — ${project.title}`}
                            >
                                <FaGithub className='h-4 w-4' aria-hidden />
                                Code
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.article>
    );
}
