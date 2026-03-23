'use client';

import { FaCode, FaServer, FaTachometerAlt, FaToolbox } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, cardHoverSmall } from '@/utils/animations';

const GROUPS = [
    {
        title: 'Frontend',
        subtitle: 'Primary stack — product UI',
        Icon: FaCode,
        chips: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS', 'Shopify / Liquid'],
    },
    {
        title: 'Backend & APIs',
        subtitle: 'Data, services, integration',
        Icon: FaServer,
        chips: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'PostgreSQL', 'MongoDB'],
    },
    {
        title: 'Performance & SEO',
        subtitle: 'Speed, quality, discoverability',
        Icon: FaTachometerAlt,
        chips: ['Core Web Vitals', 'Lighthouse', 'Bundle & image optimization', 'Semantic HTML & SEO basics', 'Cross-browser QA'],
    },
    {
        title: 'Tools & workflow',
        subtitle: 'Ship, review, automate',
        Icon: FaToolbox,
        chips: ['Git & GitHub', 'Docker', 'CI/CD', 'Webpack / Vite', 'Postman', 'Agile delivery'],
    },
] as const;

export default function Skills() {
    return (
        <section className='relative overflow-hidden'>
            <div className='absolute inset-0 -z-10'>
                <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent dark:from-blue-950 dark:via-slate-900 dark:to-gray-900'></div>
                <div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl'></div>
            </div>

            <div id='skills' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
                <motion.section {...fadeIn} transition={{ delay: 0.2 }}>
                    <div className='section-head'>
                        <motion.h2 className='section-title section-header-glow' {...fadeInUp}>
                            Skills &amp; Expertise
                        </motion.h2>
                        <p className='section-lead text-muted-on-dark'>
                            Depth-first: strongest stack first, then delivery and performance—not a flat list of
                            tools.
                        </p>
                    </div>

                    <motion.div
                        className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 items-stretch'
                        variants={staggerContainer}
                        initial='initial'
                        animate='animate'
                    >
                        {GROUPS.map(({ title, subtitle, Icon, chips }) => (
                            <motion.div
                                key={title}
                                className='card-surface flex flex-col min-h-[260px] md:min-h-[280px]'
                                variants={fadeInUp}
                                {...cardHoverSmall}
                            >
                                <div className='flex items-start gap-4 mb-4 md:mb-5'>
                                    <Icon className='h-10 w-10 md:h-11 md:w-11 text-primary shrink-0' aria-hidden />
                                    <div className='min-w-0'>
                                        <h3 className='text-lg md:text-xl font-bold text-gray-900 dark:text-white tracking-tight'>
                                            {title}
                                        </h3>
                                        <p className='text-xs sm:text-sm font-medium text-gray-500 dark:text-slate-500 mt-0.5 leading-snug'>
                                            {subtitle}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-2 content-start flex-1'>
                                    {chips.map((chip) => (
                                        <span
                                            key={chip}
                                            className='chip-muted px-3 py-1.5 rounded-full text-xs font-medium'
                                        >
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>
            </div>
        </section>
    );
}
