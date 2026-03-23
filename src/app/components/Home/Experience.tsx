'use client';

import { experiences } from '@/contents/experiences';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, cardHoverSmall } from '@/utils/animations';

// Helper function to highlight metrics in text
const highlightMetrics = (text: string) => {
    // Regex to match metrics like: +70%, 100k+, 1,000+, 30%, CI/CD, etc.
    const metricPattern = /(\+?\d+(?:,\d+)*(?:k|K)?\+?%?|CI\/CD|RBAC|SSLCommerz|bKash|GitHub Actions)/g;
    
    const parts = text.split(metricPattern);
    const matches = text.match(metricPattern) || [];
    
    let matchIndex = 0;
    return parts.map((part, index) => {
        if (index % 2 === 1) {
            // This is a match
            const metric = matches[matchIndex++];
            return (
                <span key={index} className='metric-badge mx-1'>
                    {metric}
                </span>
            );
        }
        return part;
    });
};

export default function Experience() {
    return (
        <section className='relative overflow-hidden bg-gray-50/50 dark:bg-transparent'>
            {/* Gradient Background */}
            <div className='absolute inset-0 -z-10'>
                <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent dark:from-blue-950 dark:via-slate-900 dark:to-gray-900'></div>
                <div className='absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl'></div>
            </div>

            <div id='experience' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
                {/* Experience Section */}
                <motion.section className='mb-16' {...fadeIn} transition={{ delay: 0.4 }}>
                    <div className='section-head'>
                        <motion.h2 className='section-title section-header-glow' {...fadeInUp}>
                            Work Experience
                        </motion.h2>
                    </div>
                    <motion.div
                        className='max-w-4xl mx-auto space-y-8 relative'
                        variants={staggerContainer}
                        initial='initial'
                        animate='animate'
                    >
                        {/* Timeline line for dark mode - hidden on mobile */}
                        <div className='hidden md:dark:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-blue-600 to-transparent'></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={`${exp.title}-${exp.company}`}
                                className='relative'
                                variants={fadeInUp}
                            >
                                {/* Timeline dot for dark mode - hidden on mobile */}
                                <div className='hidden md:dark:flex absolute left-6 top-6 w-5 h-5 rounded-full bg-primary ring-4 ring-gray-900 timeline-dot-glow z-10 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-primary/50 cursor-pointer'></div>

                                <motion.div
                                    className='card-surface md:dark:ml-16'
                                    {...cardHoverSmall}
                                >
                                    {/* Badge for current role */}
                                    {index === 0 && (
                                        <span className='inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-green-500 rounded-full'>
                                            Current Role
                                        </span>
                                    )}

                                    <h3 className='text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white'>
                                        {exp.title}
                                    </h3>
                                    <div className='flex flex-wrap items-center gap-2 md:gap-3 mb-4'>
                                        <p className='text-primary font-semibold text-base md:text-lg'>{exp.company}</p>
                                        <span className='text-gray-500 dark:text-gray-400'>•</span>
                                        <p className='text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base'>{exp.period}</p>
                                    </div>
                                    <ul className='space-y-3'>
                                        {exp.responsibilities.map((item, i) => (
                                            <motion.li
                                                key={`${exp.title}-resp-${i}`}
                                                className='flex gap-3 text-gray-800 dark:text-gray-200 text-sm md:text-base'
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * i }}
                                            >
                                                <span className='text-primary mt-1.5 flex-shrink-0'>▹</span>
                                                <span>{highlightMetrics(item)}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>
            </div>
        </section>
    );
}
