'use client';

import Link from 'next/link';
import { projects } from '@/contents/projects';
import { motion } from 'framer-motion';
import { sectionReveal } from '@/utils/animations';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  return (
    <section id='projects' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
      <motion.div {...sectionReveal}>
        <div className='section-head'>
          <h2 className='section-title'>Projects</h2>
          <p className='section-lead text-muted-on-dark'>
            A few things I&apos;ve built recently. Most are live, so you can click through.
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-6 md:gap-8 items-stretch'>
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <div
                key={project.slug}
                className='w-full md:w-[calc((100%-32px)/2)] lg:w-[calc((100%-32px*2)/3)]'
              >
                <ProjectCard project={project} />
              </div>
            ))}
        </div>

        <div className='flex justify-center mt-12'>
          <Link href='/projects' className='cta-primary'>
            See all projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
