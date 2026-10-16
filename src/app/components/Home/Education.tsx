'use client';

import { educations } from '@/contents/educations';
import { publications } from '@/contents/publications';
import { motion } from 'framer-motion';
import { sectionReveal } from '@/utils/animations';
import { FaExternalLinkAlt } from 'react-icons/fa';

const PUBLICATION_TYPE_LABELS = {
  journal: 'Journal',
  conference: 'Conference',
  workshop: 'Workshop',
  preprint: 'Preprint',
} as const;

export default function Education() {
  return (
    <section id='education' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
      <motion.div {...sectionReveal}>
        <div className='section-head'>
          <h2 className='section-title'>Education &amp; Research</h2>
        </div>

        <div className='max-w-4xl mx-auto space-y-6'>
          {educations.map((edu) => (
            <div key={`${edu.degree}-${edu.institution}`} className='card-surface'>
              <h3 className='text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white'>
                {edu.degree}
              </h3>
              <div className='flex flex-wrap items-center gap-2 mb-3'>
                <p className='text-primary font-semibold text-base md:text-lg'>{edu.institution}</p>
                <span className='text-gray-500 dark:text-gray-400'>•</span>
                <p className='text-gray-600 dark:text-slate-400 font-medium text-sm md:text-base'>
                  {edu.period}
                </p>
              </div>
              <p className='text-gray-700 dark:text-slate-300 text-base leading-relaxed'>
                {edu.description}
              </p>
            </div>
          ))}

          <h3 className='pt-6 text-xl md:text-2xl font-bold text-gray-900 dark:text-white'>
            Publications
          </h3>

          {publications.map((pub) => (
            <div key={pub.link} className='card-surface'>
              <div className='flex flex-col sm:flex-row sm:items-start gap-3 mb-3'>
                <h4 className='text-lg md:text-xl font-bold text-gray-900 dark:text-white flex-1'>
                  {pub.title}
                </h4>
                <div className='flex gap-2 items-center flex-wrap'>
                  <span className='chip-muted'>{PUBLICATION_TYPE_LABELS[pub.type]}</span>
                  {pub.role && <span className='chip-muted'>{pub.role}</span>}
                </div>
              </div>

              <p className='text-sm text-gray-700 dark:text-gray-300 mb-2'>{pub.authors}</p>

              <p className='text-base text-gray-700 dark:text-gray-300 mb-3'>
                <span className='font-semibold'>{pub.venue}</span>, {pub.year}
              </p>

              <a
                href={pub.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm'
              >
                View publication
                <FaExternalLinkAlt className='text-xs' aria-hidden />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
