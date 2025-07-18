'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

export default function Hero() {
    return (
        <section className='py-28'>
            <div className='container max-w-7xl mx-auto px-4'>
                <div className='max-w-3xl mx-auto text-center'>
                    <motion.div
                        className='flex justify-center items-center mb-4'
                        {...scaleIn}
                        transition={{ delay: 0.1 }}
                    >
                        <Image
                            src='/profile.webp'
                            alt='Profile'
                            width={128}
                            height={128}
                            priority
                            className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'
                        />
                    </motion.div>
                    <motion.h1
                        className='text-4xl md:text-6xl font-bold mb-6'
                        {...fadeInUp}
                        transition={{ delay: 0.15 }}
                    >
                        Hi, I&apos;m{' '}
                        <motion.span
                            className='text-primary'
                            {...fadeIn}
                            transition={{ delay: 0.3 }}
                        >
                            Samsul Islam
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'
                        {...fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        Frontend Developer | React & Next.js Expert | UI/UX Focused |
                        Performance-Driven Engineer
                    </motion.p>
                    <motion.div
                        className='flex justify-center space-x-4 mb-8'
                        {...fadeInUp}
                        transition={{ delay: 0.1 }}
                    >
                        <motion.a
                            href='https://github.com/SirRatul'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label='Visit my GitHub profile'
                            title='GitHub'
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href='https://www.linkedin.com/in/samsulislam/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label='Visit my LinkedIn profile'
                            title='LinkedIn'
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href='https://www.facebook.com/samsul.ratul'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label='Visit my Facebook profile'
                            title='Facebook'
                        >
                            <FaFacebook />
                        </motion.a>
                    </motion.div>
                    <motion.div
                        className='flex flex-col md:flex-row justify-center gap-4'
                        {...fadeInUp}
                        transition={{ delay: 0.1 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href='/#projects'
                                className='bg-primary inline-block w-full md:w-auto text-white text-base font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-sm'
                            >
                                View Projects
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href='/#contact'
                                className=' inline-block w-full bg-gray-500 md:w-auto text-white text-base font-semibold px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors shadow-sm'
                            >
                                Contact Me
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
