'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaFolderOpen, FaHome } from 'react-icons/fa';

export type NotFoundVariant = 'global' | 'project';

interface Props {
    variant?: NotFoundVariant;
}

export default function NotFoundScreen({ variant = 'global' }: Props) {
    const isProject = variant === 'project';

    const title = isProject ? 'Project not found' : 'Page not found';
    const description = isProject
        ? "We couldn't find that project. It may have been moved, renamed, or the link is outdated."
        : "The page you're looking for isn't here. Double-check the URL, or use the links below to get back on track.";

    return (
        <section
            className='relative flex min-h-[calc(100dvh-6rem)] items-center justify-center overflow-hidden px-4 py-16 md:py-24'
            aria-labelledby='not-found-heading'
        >
            <div className='pointer-events-none absolute inset-0 -z-10'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-purple-50/70 dark:from-slate-950 dark:via-slate-900 dark:to-[#0c1428]' />
                <div className='absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15' />
                <div className='absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl dark:bg-indigo-500/10' />
                <div
                    className='absolute inset-0 opacity-[0.35] dark:opacity-[0.08]'
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 1px 1px, rgba(0,91,181,0.15) 1px, transparent 0)',
                        backgroundSize: '28px 28px',
                    }}
                    aria-hidden
                />
            </div>

            <motion.div
                className='relative mx-auto w-full max-w-lg text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
                <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
                    {isProject ? 'Missing project' : 'Error 404'}
                </p>

                <div
                    className='mx-auto mb-6 select-none text-[clamp(4.5rem,16vw,7.5rem)] font-black leading-none tracking-tighter text-transparent tabular-nums'
                    style={{
                        backgroundImage:
                            'linear-gradient(135deg, #005bb5 0%, #2563eb 45%, #7c3aed 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                    }}
                    aria-hidden
                >
                    404
                </div>

                <h1
                    id='not-found-heading'
                    className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl'
                >
                    {title}
                </h1>
                <p className='mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-gray-600 dark:text-slate-400'>
                    {description}
                </p>

                <div className='mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center'>
                    {isProject ? (
                        <>
                            <Link
                                href='/projects'
                                className='cta-primary inline-flex !px-8 !py-3.5 !text-base !font-bold'
                            >
                                <FaFolderOpen className='mr-2 h-4 w-4 opacity-95' aria-hidden />
                                All projects
                            </Link>
                            <Link
                                href='/'
                                className='cta-secondary inline-flex !px-8 !py-3.5 !text-base !font-semibold'
                            >
                                <FaHome className='mr-2 h-4 w-4 opacity-90' aria-hidden />
                                Home
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href='/'
                                className='cta-primary inline-flex !px-8 !py-3.5 !text-base !font-bold'
                            >
                                <FaHome className='mr-2 h-4 w-4 opacity-95' aria-hidden />
                                Back to home
                            </Link>
                            <Link
                                href='/projects'
                                className='cta-secondary inline-flex !px-8 !py-3.5 !text-base !font-semibold'
                            >
                                <FaFolderOpen className='mr-2 h-4 w-4 opacity-90' aria-hidden />
                                View projects
                            </Link>
                        </>
                    )}
                </div>

                <p className='mt-10 text-sm text-gray-500 dark:text-slate-500'>
                    <Link
                        href={isProject ? '/projects' : '/'}
                        className='inline-flex items-center gap-2 font-medium text-primary hover:underline'
                    >
                        <FaArrowLeft className='h-3.5 w-3.5' aria-hidden />
                        {isProject ? 'Back to project list' : 'Return to homepage'}
                    </Link>
                </p>
            </motion.div>
        </section>
    );
}
