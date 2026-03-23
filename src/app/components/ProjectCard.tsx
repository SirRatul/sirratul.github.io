// components/ProjectCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { fadeInUp, cardHoverSmall } from '@/utils/animations';
import { Project } from '@/types';

interface Props {
    project: Project;
}

const CARD_STACK_MAX = 4;

function cardResultLine(project: Project): string {
    if (project.impact?.trim()) return project.impact.trim();
    const first = project.impactHighlights?.find(Boolean);
    return first?.trim() ?? '';
}

export default function ProjectCard({ project }: Props) {
    const detailHref = `/projects/${project.slug}`;
    const stack = project.technologies.slice(0, CARD_STACK_MAX);
    const resultLine = cardResultLine(project);
    const summary = project.summary ?? project.description;

    return (
        <motion.article
            className='group/card h-full flex flex-col rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-white dark:bg-slate-900/80 shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_14px_44px_rgba(0,0,0,0.45)]'
            variants={fadeInUp}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, margin: '-40px' }}
            {...cardHoverSmall}
        >
            <Link
                href={detailHref}
                className='relative block aspect-video w-full shrink-0 overflow-hidden bg-gray-100 dark:bg-slate-800/50 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900'
                aria-label={`View details — ${project.title}`}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.04]'
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
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 transition-opacity duration-300 group-hover/card:opacity-80' />
            </Link>

            <div className='flex flex-col flex-grow p-5 sm:p-6'>
                <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight leading-snug'>
                    <Link
                        href={detailHref}
                        className='hover:text-primary transition-colors focus-visible:outline-none focus-visible:text-primary'
                    >
                        {project.title}
                    </Link>
                </h3>

                <p className='mt-2.5 text-sm leading-relaxed text-gray-600 dark:text-slate-400 line-clamp-2'>
                    {summary}
                </p>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {stack.map((tech) => (
                        <span
                            key={tech}
                            className='px-2.5 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-xs font-medium'
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {resultLine && (
                    <p className='mt-4 text-sm font-semibold text-gray-900 dark:text-slate-100 leading-snug border-t border-gray-100 dark:border-white/10 pt-4'>
                        <span className='text-gray-500 dark:text-slate-500 font-medium'>Result: </span>
                        {resultLine}
                    </p>
                )}

                <div className='mt-5 pt-4 border-t border-gray-200/90 dark:border-white/10'>
                    <Link
                        href={detailHref}
                        className='inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary text-white text-sm font-semibold px-4 py-2.5 shadow-md hover:bg-primary/92 hover:shadow-lg hover:-translate-y-px transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900'
                    >
                        View details
                        <FaArrowRight className='h-3.5 w-3.5 opacity-90' aria-hidden />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}
