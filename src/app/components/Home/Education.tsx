'use client';

import { educations } from '@/contents/educations';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, cardHoverSmall } from '@/utils/animations';

export default function Education() {
    return (
        <section className='relative py-16 md:py-20 overflow-hidden'>

            <div id='education' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
                {/* Education Section */}
                <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
                    <motion.h2 className='text-3xl md:text-4xl font-bold mb-12 text-center' {...fadeInUp}>
                        Education
                    </motion.h2>
                    <motion.div
                        className='max-w-4xl mx-auto space-y-6'
                        variants={staggerContainer}
                        initial='initial'
                        animate='animate'
                    >
                        {educations.map((edu) => (
                            <motion.div
                                key={`${edu.degree}-${edu.institution}`}
                                className='bg-[#FCFCFF] dark:bg-gray-800/50 p-6 md:p-8 rounded-xl card-shadow-light dark:card-shadow-dark transition-all duration-300'
                                variants={fadeInUp}
                                {...cardHoverSmall}
                            >
                                <h3 className='text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white'>{edu.degree}</h3>
                                <div className='flex flex-wrap items-center gap-2 mb-3'>
                                    <p className='text-primary font-semibold text-base md:text-lg'>{edu.institution}</p>
                                    <span className='text-gray-500 dark:text-gray-400'>•</span>
                                    <p className='text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base'>{edu.period}</p>
                                </div>
                                <p className='text-gray-700 dark:text-gray-300 text-base'>{edu.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>
            </div>
        </section>
    );
}
