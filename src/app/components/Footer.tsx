'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

export default function Footer() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const quickLinks = [
        { href: '/#about', label: 'About' },
        { href: '/#skills', label: 'Skills' },
        { href: '/#projects', label: 'Projects' },
        { href: '/#contact', label: 'Contact' },
    ];

    return (
        <footer className='bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:glow-border'>
            <div className='container max-w-7xl mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                    {/* Column 1: Brand & Description */}
                    <div>
                        <Link href='/' className='text-3xl font-bold text-primary block mb-3'>
                            Samsul Islam
                        </Link>
                        <p className='text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                            Senior Frontend Developer
                        </p>
                        <p className='text-sm italic text-gray-600 dark:text-gray-400 mb-4 border-l-4 border-primary pl-3'>
                            Crafting digital experiences that make a difference
                        </p>
                        <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4'>
                            4+ years of experience specializing in React,
                            Next.js, Shopify, and modern web technologies. Creating beautiful, performant
                            applications.
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2'>
                            <HiLocationMarker className='text-primary' />
                            <span>Available for Remote Work</span>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                        <ul className='space-y-2'>
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className='text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm'
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Social & Contact */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Connect With Me</h3>
                        <div className='flex space-x-4 mb-6'>
                            <a
                                href='https://github.com/SirRatul'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-600 dark:text-gray-300 hover:text-primary transition-all hover:scale-110'
                                aria-label='Visit my GitHub profile'
                                title='GitHub'
                            >
                                <FaGithub className='h-6 w-6' />
                            </a>
                            <a
                                href='https://www.facebook.com/samsul.ratul'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-600 dark:text-gray-300 hover:text-primary transition-all hover:scale-110'
                                aria-label='Visit my Facebook profile'
                                title='Facebook'
                            >
                                <FaFacebook className='h-6 w-6' />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/samsulislam/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-600 dark:text-gray-300 hover:text-primary transition-all hover:scale-110'
                                aria-label='Visit my LinkedIn profile'
                                title='LinkedIn'
                            >
                                <FaLinkedin className='h-6 w-6' />
                            </a>
                        </div>
                        <div className='space-y-2'>
                            <Link
                                href='/#contact'
                                className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors'
                            >
                                <HiMail className='text-primary' />
                                <span>Get in Touch</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='pt-8 border-t border-gray-200 dark:border-gray-700'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        {year !== null && (
                            <p className='text-sm text-gray-600 dark:text-gray-300'>
                                © {year} Samsul Islam. All rights reserved.
                            </p>
                        )}
                        <p className='text-sm text-gray-600 dark:text-gray-300'>
                            Built with ❤️ using Next.js & TailwindCSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
