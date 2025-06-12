'use client';

import { educations } from '@/contents/educations';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, cardHoverSmall } from '@/utils/animations';

export default function Education() {
    return (
        <div id='education' className='container max-w-7xl mx-auto py-12 scroll-mt-16'>
            {/* Education Section */}
            <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
                <motion.h2 className='section-title' {...fadeInUp}>
                    Education
                </motion.h2>
                <motion.div
                    className='max-w-3xl mx-auto'
                    variants={staggerContainer}
                    initial='initial'
                    animate='animate'
                >
                    {educations.map((edu, index) => (
                        <motion.div
                            key={index}
                            className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
                            variants={fadeInUp}
                            {...cardHoverSmall}
                        >
                            <h3 className='text-xl font-semibold mb-2'>{edu.degree}</h3>
                            <p className='text-primary mb-2'>
                                {edu.institution} • {edu.period}
                            </p>
                            <p className='text-secondary'>{edu.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    );
}
