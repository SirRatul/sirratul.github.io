'use client';

import { FaCode, FaServer, FaTachometerAlt, FaToolbox } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sectionReveal } from '@/utils/animations';

const GROUPS = [
  {
    title: 'Frontend',
    subtitle: 'Main stack',
    Icon: FaCode,
    chips: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML & CSS',
      'Shopify / Liquid',
    ],
  },
  {
    title: 'Backend & APIs',
    subtitle: 'Servers and data',
    Icon: FaServer,
    chips: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Performance & SEO',
    subtitle: 'Speed and search',
    Icon: FaTachometerAlt,
    chips: [
      'Core Web Vitals',
      'Lighthouse',
      'Bundle & image optimization',
      'Semantic HTML & SEO basics',
      'Cross-browser QA',
    ],
  },
  {
    title: 'Tools & workflow',
    subtitle: 'How I ship',
    Icon: FaToolbox,
    chips: ['Git & GitHub', 'Docker', 'CI/CD', 'Webpack / Vite', 'Postman', 'Agile delivery'],
  },
] as const;

export default function Skills() {
  return (
    <section id='skills' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
      <motion.div {...sectionReveal}>
        <div className='section-head'>
          <h2 className='section-title'>Skills</h2>
          <p className='section-lead text-muted-on-dark'>The tools I use day to day.</p>
        </div>

        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 items-stretch'>
          {GROUPS.map(({ title, subtitle, Icon, chips }) => (
            <div key={title} className='card-surface flex flex-col'>
              <div className='flex items-start gap-4 mb-4 md:mb-5'>
                <Icon className='h-10 w-10 md:h-11 md:w-11 text-primary shrink-0' aria-hidden />
                <div className='min-w-0'>
                  <h3 className='text-lg md:text-xl font-bold text-gray-900 dark:text-white tracking-tight'>
                    {title}
                  </h3>
                  <p className='text-xs sm:text-sm font-medium text-gray-500 dark:text-slate-400 mt-0.5 leading-snug'>
                    {subtitle}
                  </p>
                </div>
              </div>
              <div className='flex flex-wrap gap-2 content-start flex-1'>
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className='chip-muted px-3 py-1.5 rounded-full text-xs font-medium'
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
