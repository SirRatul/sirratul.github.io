'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const quickLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/SirRatul', label: 'GitHub', Icon: FaGithub, external: true },
  {
    href: 'https://www.linkedin.com/in/samsulislam/',
    label: 'LinkedIn',
    Icon: FaLinkedin,
    external: true,
  },
  { href: 'mailto:samsulratul98@gmail.com', label: 'Email', Icon: HiMail, external: false },
];

export default function Footer() {
  return (
    <footer className='bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-white/10'>
      <div className='container max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <Link href='/' className='text-2xl font-bold text-primary block mb-2'>
              Samsul Islam
            </Link>
            <p className='text-sm text-gray-600 dark:text-gray-300'>
              Software Engineer (Frontend) · Dhaka, Bangladesh
            </p>
          </div>

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

          <div>
            <h3 className='text-lg font-semibold mb-4'>Elsewhere</h3>
            <ul className='space-y-2'>
              {socialLinks.map(({ href, label, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className='inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors'
                  >
                    <Icon className='h-4 w-4' aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='pt-8 border-t border-gray-200 dark:border-gray-700'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            {/* Static HTML holds the build year; the browser may render a newer one */}
            <p className='text-sm text-gray-600 dark:text-gray-300' suppressHydrationWarning>
              © {new Date().getFullYear()} Samsul Islam
            </p>
            <p className='text-sm text-gray-600 dark:text-gray-300'>
              Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
