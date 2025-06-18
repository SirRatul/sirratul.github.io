'use client';

import { experiences } from '@/contents/experiences';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, cardHoverSmall } from '@/utils/animations';

export default function Experience() {
    return (
        <div id='experience' className='container max-w-7xl mx-auto py-12 scroll-mt-16'>
            {/* Experience Section */}
            <motion.section className='mb-16' {...fadeIn} transition={{ delay: 0.4 }}>
                <motion.h2 className='section-title' {...fadeInUp}>
                    Experience
                </motion.h2>
                <motion.div
                    className='max-w-3xl mx-auto space-y-8'
                    variants={staggerContainer}
                    initial='initial'
                    animate='animate'
                >
                    {experiences.map((exp) => (
                        <motion.div
                            key={`${exp.title}-${exp.company}`}
                            className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
                            variants={fadeInUp}
                            {...cardHoverSmall}
                        >
                            <h3 className='text-xl font-semibold mb-2'>{exp.title}</h3>
                            <p className='text-primary mb-2'>
                                {exp.company} • {exp.period}
                            </p>
                            <ul className='text-secondary list-disc list-inside space-y-2'>
                                {exp.responsibilities.map((item, i) => (
                                    <li key={`${exp.title}-resp-${i}`}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    );
}
