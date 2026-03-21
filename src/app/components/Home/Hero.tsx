'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className='relative py-32 overflow-hidden'>
            {/* Gradient Background with enhanced contrast */}
            <div className='absolute inset-0 -z-10'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-100/80 via-white to-purple-100/80 dark:from-gray-900 dark:via-slate-900 dark:to-blue-950'></div>
                <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl'></div>
                <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl'></div>
                {/* Enhanced animated noise texture */}
                <div className='absolute inset-0 opacity-[0.02] dark:opacity-[0.03]' style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")', animation: 'noiseTexture 8s steps(10) infinite' }}></div>
            </div>

            <div className='container max-w-7xl mx-auto px-4'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        className='flex justify-center items-center mb-8'
                        {...scaleIn}
                        transition={{ delay: 0.2 }}
                    >
                        <div className='relative hero-glow'>
                            <Image
                                src='/profile.webp'
                                alt='Profile'
                                width={160}
                                height={160}
                                priority
                                className='rounded-full w-40 h-40 object-cover ring-4 ring-primary shadow-2xl shadow-primary/30 relative z-10'
                            />
                            <div className='absolute inset-0 rounded-full ring-4 ring-primary/20 animate-pulse z-10'></div>
                        </div>
                    </motion.div>

                    <motion.h1
                        className='text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6'
                        style={{ fontWeight: 800, lineHeight: 1.05 }}
                        {...fadeInUp}
                        transition={{ delay: 0.3 }}
                    >
                        Hi, I&apos;m{' '}
                        <motion.span
                            className='text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'
                            {...fadeIn}
                            transition={{ delay: 0.8 }}
                        >
                            Samsul Islam
                        </motion.span>
                    </motion.h1>

                    {mounted ? (
                        <motion.div
                            className='mb-8'
                            {...fadeInUp}
                            transition={{ duration: 0.6 }}
                        >
                            <p className='text-xl md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6'>
                                Senior Frontend Developer | 4+ Years of Excellence
                            </p>
                            <p className='text-base md:text-lg text-gray-500 dark:text-gray-400 mb-4'>
                                React & Next.js Specialist | Shopify Expert | Performance Optimizer
                            </p>
                            <p className='text-base md:text-lg text-gray-700 dark:text-gray-200 font-medium max-w-2xl mx-auto'>
                                I build scalable, performance-focused web applications used by thousands.
                            </p>
                            
                            {/* Availability Badge */}
                            <motion.div
                                className='inline-flex items-center gap-2 mt-6 px-4 py-2 bg-green-50 dark:bg-green-900/20 border-2 border-green-500/30 rounded-full'
                                {...fadeIn}
                                transition={{ delay: 0.6 }}
                            >
                                <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                                <span className='text-sm font-semibold text-green-700 dark:text-green-300'>
                                    Available for Remote Roles
                                </span>
                            </motion.div>

                            {/* Social Icons Inline */}
                            <motion.div
                                className='flex justify-center space-x-6 mt-8'
                                {...fadeInUp}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.a
                                    href='https://github.com/SirRatul'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-3xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary icon-transition'
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
                                    className='text-3xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary icon-transition'
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
                                    className='text-3xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary icon-transition'
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label='Visit my Facebook profile'
                                    title='Facebook'
                                >
                                    <FaFacebook />
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <div className='mb-8'>
                            <p className='text-xl md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6'>
                                Senior Frontend Developer | 4+ Years of Excellence
                            </p>
                            <p className='text-base md:text-lg text-gray-500 dark:text-gray-400 mb-4'>
                                React & Next.js Specialist | Shopify Expert | Performance Optimizer
                            </p>
                            <p className='text-base md:text-lg text-gray-700 dark:text-gray-200 font-medium max-w-2xl mx-auto'>
                                I build scalable, performance-focused web applications used by thousands.
                            </p>
                        </div>
                    )}

                    <motion.div
                        className='flex flex-col md:flex-row justify-center gap-6 mt-10'
                        {...fadeInUp}
                        transition={{ delay: 0.7 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href='/#projects'
                                className='cta-primary inline-block w-full md:w-auto'
                            >
                                View Projects
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                href='/#contact'
                                className='cta-secondary inline-block w-full md:w-auto'
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
