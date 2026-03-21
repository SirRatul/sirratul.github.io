'use client';

import { publications } from '@/contents/publications';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, cardHoverSmall } from '@/utils/animations';
import { FaExternalLinkAlt, FaBook, FaFileAlt, FaUser } from 'react-icons/fa';

const getPublicationIcon = (type: string) => {
    switch (type) {
        case 'journal':
            return <FaBook className='text-primary' />;
        case 'conference':
            return <FaFileAlt className='text-primary' />;
        case 'workshop':
            return <FaFileAlt className='text-primary' />;
        case 'preprint':
            return <FaFileAlt className='text-primary' />;
        default:
            return <FaFileAlt className='text-primary' />;
    }
};

const getPublicationBadge = (type: string) => {
    const badges = {
        journal: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', label: 'Journal' },
        conference: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-300', label: 'Conference' },
        workshop: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-700 dark:text-purple-300', label: 'Workshop' },
        preprint: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-300', label: 'Preprint' },
    };
    const badge = badges[type as keyof typeof badges] || badges.preprint;
    return (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text}`}>
            {badge.label}
        </span>
    );
};

export default function Publications() {
    return (
        <section className='relative py-16 md:py-20 overflow-hidden bg-gray-50/50 dark:bg-transparent'>
            {/* Gradient Background */}
            <div className='absolute inset-0 -z-10'>
                <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent dark:from-blue-950 dark:via-slate-900 dark:to-gray-900'></div>
                <div className='absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl'></div>
            </div>

            <div id='publications' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
                <motion.section {...fadeIn} transition={{ delay: 0.2 }}>
                    <div className='section-head'>
                        <motion.h2 className='section-title section-header-glow' {...fadeInUp}>
                            Publications
                        </motion.h2>
                    </div>

                    <motion.div
                        className='max-w-5xl mx-auto space-y-6'
                        variants={staggerContainer}
                        initial='initial'
                        animate='animate'
                    >
                        {publications.map((pub, index) => (
                            <motion.div
                                key={`${pub.title}-${index}`}
                                className='card-surface'
                                variants={fadeInUp}
                                {...cardHoverSmall}
                            >
                                <div className='flex flex-col md:flex-row md:items-start gap-4'>
                                    {/* Icon */}
                                    <div className='hidden md:flex items-start pt-1'>
                                        <div className='text-2xl'>
                                            {getPublicationIcon(pub.type)}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className='flex-1'>
                                        {/* Title and Badge */}
                                        <div className='flex flex-col sm:flex-row sm:flex-wrap sm:items-start gap-3 mb-3'>
                                            <h3 className='text-lg md:text-xl font-bold text-gray-900 dark:text-white flex-1'>
                                                {pub.title}
                                            </h3>
                                            <div className='flex gap-2 items-center flex-wrap'>
                                                {getPublicationBadge(pub.type)}
                                                {pub.role && (
                                                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary/20 to-blue-600/20 text-primary dark:text-blue-300 border border-primary/30'>
                                                        {pub.role}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Authors */}
                                        <div className='flex items-center gap-2 mb-2'>
                                            <FaUser className='text-gray-500 dark:text-gray-400 text-sm' />
                                            <p className='text-sm text-gray-700 dark:text-gray-300'>
                                                {pub.authors}
                                            </p>
                                        </div>

                                        {/* Venue and Year */}
                                        <p className='text-base text-gray-700 dark:text-gray-300 mb-3'>
                                            <span className='font-semibold'>{pub.venue}</span>, {pub.year}
                                        </p>

                                        {/* Link */}
                                        <a
                                            href={pub.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm'
                                        >
                                            View Publication
                                            <FaExternalLinkAlt className='text-xs' />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>
            </div>
        </section>
    );
}
