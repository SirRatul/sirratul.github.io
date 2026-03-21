'use client';

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, cardHover } from '@/utils/animations';

export default function Skills() {
    return (
        <section className='relative py-16 md:py-20 overflow-hidden'>
            {/* Gradient Background */}
            <div className='absolute inset-0 -z-10'>
                <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent dark:from-blue-950 dark:via-slate-900 dark:to-gray-900'></div>
                <div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl'></div>
            </div>

            <div id='skills' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
                {/* Skills Section */}
                <motion.section className='mb-16' {...fadeIn} transition={{ delay: 0.2 }}>
                    <motion.h2 className='text-3xl md:text-4xl font-bold mb-12 text-center section-header-glow' {...fadeInUp}>
                        Skills &amp; Expertise
                    </motion.h2>
                    <motion.div
                        className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
                        variants={staggerContainer}
                        initial='initial'
                        animate='animate'
                    >
                        <motion.div
                            className='bg-[#FCFCFF] dark:bg-gray-800/50 p-6 md:p-8 rounded-xl card-shadow-light dark:card-shadow-dark transition-all duration-300'
                            variants={fadeInUp}
                            {...cardHover}
                        >
                            <FaCode className='h-10 w-10 md:h-12 md:w-12 text-primary mb-4' />
                            <h3 className='text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white'>Frontend</h3>
                            <ul className='text-gray-700 dark:text-gray-300 space-y-2 text-base'>
                                <li>React / Next.js</li>
                                <li>JavaScript / TypeScript</li>
                                <li>Tailwind CSS / Bootstrap</li>
                                <li>HTML5 / CSS3</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className='bg-[#FCFCFF] dark:bg-gray-800/50 p-6 md:p-8 rounded-xl card-shadow-light dark:card-shadow-dark transition-all duration-300'
                            variants={fadeInUp}
                            {...cardHover}
                        >
                            <FaLaptopCode className='h-10 w-10 md:h-12 md:w-12 text-primary mb-4' />
                            <h3 className='text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white'>Backend</h3>
                            <ul className='text-gray-700 dark:text-gray-300 space-y-2 text-base'>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>PostgreSQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className='bg-[#FCFCFF] dark:bg-gray-800/50 p-6 md:p-8 rounded-xl card-shadow-light dark:card-shadow-dark transition-all duration-300'
                            variants={fadeInUp}
                            {...cardHover}
                        >
                            <FaGraduationCap className='h-10 w-10 md:h-12 md:w-12 text-primary mb-4' />
                            <h3 className='text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white'>Tools & Others</h3>
                            <ul className='text-gray-700 dark:text-gray-300 space-y-2 text-base'>
                                <li>Git / GitHub</li>
                                <li>Docker</li>
                                <li>CI/CD</li>
                                <li>Postman</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </motion.section>
            </div>
        </section>
    );
}
