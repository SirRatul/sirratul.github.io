'use client';

import { useState } from 'react';
import { projects } from '@/contents/projects';
import { motion,AnimatePresence } from 'framer-motion';
import { staggerContainer } from '@/utils/animations';
import ProjectCard from '../ProjectCard';

export default function ProjectList() {
    const [activeCategory, setActiveCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];

    // Filter projects based on active category
    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section className='relative py-32 overflow-hidden min-h-screen'>
            {/* Gradient Background */}
            <div className='absolute inset-0 -z-10'>
                <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent dark:from-gray-900 dark:via-slate-900 dark:to-blue-950'></div>
                <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl'></div>
                <div className='absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl'></div>
            </div>

            <div className='container max-w-7xl mx-auto px-4'>
            <div className='section-head'>
                <motion.h1
                    className='section-title'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My Projects
                </motion.h1>
                <motion.p
                    className='section-lead text-secondary'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Explore my portfolio of {projects.length}+ projects across web development, Shopify
                    stores, machine learning, and more. Filter by category to find what interests you.
                </motion.p>
            </div>

            {/* Tab Navigation */}
            <motion.div
                className='flex flex-wrap justify-center gap-3 mb-12'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {categories.map((category) => (
                    <motion.button
                        key={category || 'uncategorized'}
                        onClick={() => setActiveCategory(category || 'All')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                            activeCategory === category
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                        <span className='ml-2 text-xs opacity-75'>
                            (
                            {category === 'All'
                                ? projects.length
                                : projects.filter((p) => p.category === category).length}
                            )
                        </span>
                    </motion.button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={activeCategory}
                    className='flex flex-wrap justify-center gap-8 items-stretch'
                    variants={staggerContainer}
                    initial='initial'
                    animate='animate'
                    exit={{ opacity: 0, y: 20 }}
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.slug}
                            className='w-full md:w-[calc((100%-32px)/2)] lg:w-[calc((100%-32px*2)/3)]'
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='h-full flex flex-col'>
                                <ProjectCard project={project} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            {filteredProjects.length === 0 && (
                <motion.div
                    className='text-center py-20'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <p className='text-gray-500 dark:text-gray-400 text-lg'>
                        No projects found in this category.
                    </p>
                </motion.div>
            )}
            </div>
        </section>
    );
}
