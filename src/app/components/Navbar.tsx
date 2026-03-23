'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import { HiOutlineSun } from 'react-icons/hi2';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const SECTION_IDS = [
    'about',
    'skills',
    'experience',
    'education',
    'publications',
    'projects',
    'contact',
] as const;

/** Anchor under the fixed nav (~h-16 + buffer). */
const NAV_BAR_OFFSET_PX = 72;
/**
 * Extra distance down the viewport for the “reading line” so sections highlight
 * a bit before their top meets the navbar (earlier switch while scrolling).
 */
const ACTIVATION_LEAD_FIXED_PX = 56;
/** Scales with screen height so desktop/laptop feel consistent without over-shifting on small phones. */
const ACTIVATION_LEAD_VH_RATIO = 0.12;

function activationLineY(): number {
    const vhLead = Math.round(window.innerHeight * ACTIVATION_LEAD_VH_RATIO);
    return window.scrollY + NAV_BAR_OFFSET_PX + ACTIVATION_LEAD_FIXED_PX + vhLead;
}

/**
 * Single active section from scroll position (no IntersectionObserver).
 * - `null` = hero / before #about
 * - Otherwise last section in order whose top is at or above the activation line
 */
function computeActiveSectionIdFromScroll(): string | null {
    if (typeof document === 'undefined') return null;

    const aboutEl = document.getElementById('about');
    if (!aboutEl) return null;

    const line = activationLineY();
    const scrollBottom = window.scrollY + window.innerHeight;
    const docH = document.documentElement.scrollHeight;

    // At page bottom, pin to the last real section (avoids gaps before footer)
    if (scrollBottom >= docH - 6) {
        for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
            const id = SECTION_IDS[i];
            if (document.getElementById(id)) return id;
        }
        return null;
    }

    const aboutTop = aboutEl.getBoundingClientRect().top + window.scrollY;
    if (line < aboutTop) {
        return null;
    }

    let active: string = SECTION_IDS[0];
    for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= line) {
            active = id;
        }
    }
    return active;
}

export default function Navbar() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/#about', label: 'About' },
        { href: '/#skills', label: 'Skills' },
        { href: '/#experience', label: 'Experience' },
        { href: '/#education', label: 'Education' },
        { href: '/#publications', label: 'Publications' },
        { href: '/#projects', label: 'Projects' },
        { href: '/#contact', label: 'Contact' },
    ];

    useEffect(() => {
        let rafId = 0;
        const onScrollOrResize = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                rafId = 0;
                const y = window.scrollY;
                setScrolled(y > 10);
                if (pathname === '/') {
                    setActiveSectionId(computeActiveSectionIdFromScroll());
                } else {
                    setActiveSectionId(null);
                }
            });
        };

        onScrollOrResize();
        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize);
        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
        };
    }, [pathname]);

    const isHomePath = pathname === '/';

    /** Home vs sections share one `activeSectionId` from scroll-spy (`null` = hero). */
    const linkIsActive = useCallback(
        (href: string) => {
            if (!isHomePath) return false;
            if (href === '/') return activeSectionId === null;
            const id = href.replace('/#', '');
            return activeSectionId === id;
        },
        [isHomePath, activeSectionId],
    );

    const mobileLinkClass = (href: string) => {
        const active = linkIsActive(href);
        const base =
            'block py-2.5 rounded-md px-1 -mx-1 transition-colors font-medium border-l-2 ';
        if (active) {
            return `${base} text-primary border-primary bg-primary/5 dark:bg-primary/10 pl-3 -ml-px`;
        }
        return `${base} border-transparent text-gray-800 dark:text-gray-200 hover:text-primary hover:bg-gray-50/80 dark:hover:bg-white/5`;
    };

    const desktopLinkClass = (href: string) => {
        const active = linkIsActive(href);
        if (active) {
            return 'text-primary font-semibold relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full';
        }
        return 'hover-underline hover:text-primary transition-colors text-sm font-medium text-gray-700 dark:text-gray-300';
    };

    return (
        <nav
            className={`fixed w-full z-50 top-0 ${scrolled ? 'nav-shell nav-shell-scrolled' : 'nav-shell'}`}
        >
            <div className='container max-w-7xl mx-auto px-4'>
                <div className='flex items-center justify-between h-16'>
                    <Link href='/' className='text-xl font-bold text-primary'>
                        Samsul Islam
                    </Link>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={desktopLinkClass(item.href)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <motion.button
                            type='button'
                            onClick={(e) => toggleTheme(e)}
                            className='p-2 rounded-lg hover:bg-gray-100/80 dark:hover:bg-white/10 transition-colors'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={
                                theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
                            }
                        >
                            {theme === 'dark' ? (
                                <HiOutlineSun className='h-5 w-5' />
                            ) : (
                                <HiOutlineMoon className='h-5 w-5' />
                            )}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className='md:hidden p-2 rounded-lg hover:bg-gray-100/80 dark:hover:bg-white/10 transition-colors'
                        onClick={toggleMobileMenu}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? (
                            <HiX className='h-6 w-6' />
                        ) : (
                            <HiMenuAlt3 className='h-6 w-6' />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className='md:hidden overflow-hidden'
                        >
                            <div className='py-3 pb-5 space-y-0.5 border-t border-gray-200/60 dark:border-white/10'>
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={mobileLinkClass(item.href)}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: menuItems.length * 0.05 }}
                                >
                                    <button
                                        type='button'
                                        onClick={(e) => {
                                            toggleTheme(e);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className='flex w-full items-center py-2.5 px-1 rounded-md font-medium text-gray-800 dark:text-gray-200 hover:text-primary hover:bg-gray-50/80 dark:hover:bg-white/5 transition-colors'
                                    >
                                        {theme === 'dark' ? (
                                            <>
                                                <HiOutlineSun className='h-5 w-5 mr-2' />
                                                Light mode
                                            </>
                                        ) : (
                                            <>
                                                <HiOutlineMoon className='h-5 w-5 mr-2' />
                                                Dark mode
                                            </>
                                        )}
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
