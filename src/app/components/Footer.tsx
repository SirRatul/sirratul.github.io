'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className='bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800'>
            <div className='container max-w-7xl mx-auto px-4 py-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4 md:mb-0'>
                        <Link href='/' className='text-xl font-bold text-primary'>
                            Samsul Islam
                        </Link>
                        {year !== null && (
                            <p className='text-sm text-secondary mt-2'>
                                © {year} Samsul Islam. All rights reserved.
                            </p>
                        )}
                    </div>

                    <div className='flex space-x-6'>
                        <a
                            href='https://github.com/SirRatul'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-secondary hover:text-primary transition-colors'
                        >
                            <FaGithub className='h-6 w-6' />
                        </a>
                        <a
                            href='https://www.facebook.com/samsul.ratul'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-secondary hover:text-primary transition-colors'
                        >
                            <FaFacebook className='h-6 w-6' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/samsulislam/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-secondary hover:text-primary transition-colors'
                        >
                            <FaLinkedin className='h-6 w-6' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
