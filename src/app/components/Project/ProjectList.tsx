import Link from 'next/link';
import { projects } from '@/contents/projects';
import type { Project } from '@/types';
import ProjectCard from '../ProjectCard';

const clientWork = projects.filter((p) => !p.academic && p.image);
// No real screenshot to show, so these are listed as text
const otherClientWork = projects.filter((p) => !p.academic && !p.image);
const academicWork = projects.filter((p) => p.academic);

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className='flex flex-wrap justify-center gap-8 items-stretch'>
      {items.map((project) => (
        <div
          key={project.slug}
          className='w-full md:w-[calc((100%-32px)/2)] lg:w-[calc((100%-32px*2)/3)]'
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

function ProjectTextList({ items }: { items: Project[] }) {
  return (
    <ul className='max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-white/10 border-y border-gray-200 dark:border-white/10'>
      {items.map((project) => (
        <li key={project.slug} className='py-5'>
          <Link
            href={`/projects/${project.slug}`}
            className='text-lg font-bold text-gray-900 dark:text-white hover:text-primary transition-colors'
          >
            {project.title}
          </Link>
          <p className='mt-1 text-sm leading-relaxed text-gray-600 dark:text-slate-400'>
            {project.description}
          </p>
          <p className='mt-2 text-xs font-medium text-gray-500 dark:text-slate-400'>
            {project.technologies.join(' · ')}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectList() {
  return (
    <section className='section-bg-white py-32 min-h-screen'>
      <div className='container max-w-7xl mx-auto px-4'>
        <div className='section-head'>
          <h1 className='section-title'>Projects</h1>
          <p className='section-lead text-muted-on-dark'>
            Client and freelance work, followed by projects from university.
          </p>
        </div>

        <ProjectGrid items={clientWork} />

        {otherClientWork.length > 0 && (
          <>
            <div className='section-head mt-24'>
              <h2 className='section-title'>Other client work</h2>
            </div>
            <ProjectTextList items={otherClientWork} />
          </>
        )}

        <div className='section-head mt-24'>
          <h2 className='section-title'>Earlier &amp; academic work</h2>
        </div>

        <ProjectTextList items={academicWork} />
      </div>
    </section>
  );
}
