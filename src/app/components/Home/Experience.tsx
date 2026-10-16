'use client';

import { experiences } from '@/contents/experiences';
import { motion } from 'framer-motion';
import { sectionReveal } from '@/utils/animations';

export default function Experience() {
  return (
    <section id='experience' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
      <motion.div {...sectionReveal}>
        <div className='section-head'>
          <h2 className='section-title'>Work Experience</h2>
        </div>
        <div className='max-w-4xl mx-auto space-y-8'>
          {experiences.map((exp, index) => (
            <div key={`${exp.title}-${exp.company}`} className='card-surface'>
              {/* Badge for current role */}
              {index === 0 && (
                <span className='inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-green-800 rounded-full dark:bg-green-900'>
                  Current Role
                </span>
              )}

              <h3 className='text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white'>
                {exp.title}
              </h3>
              <div className='mb-4'>
                <p className='text-primary font-semibold text-base md:text-lg'>{exp.company}</p>
                <p className='text-gray-600 dark:text-slate-400 font-medium text-sm md:text-base'>
                  {exp.period}
                </p>
              </div>
              <ul className='space-y-3'>
                {exp.responsibilities.map((item, i) => (
                  <li
                    key={`${exp.title}-resp-${i}`}
                    className='flex gap-3 text-gray-700 dark:text-slate-300 text-sm md:text-base leading-relaxed'
                  >
                    <span className='text-primary mt-1.5 flex-shrink-0'>▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
