import { projects } from '@/contents/projects';
import type { Project } from '@/types';
import ProjectCard from '../ProjectCard';

const clientWork = projects.filter((p) => !p.academic);
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

export default function ProjectList() {
  return (
    <section className='section-bg-white py-32 min-h-screen'>
      <div className='container max-w-7xl mx-auto px-4'>
        <div className='section-head'>
          <h1 className='section-title'>Projects</h1>
          <p className='section-lead text-muted-on-dark'>
            Client work from my jobs, followed by projects from university.
          </p>
        </div>

        <ProjectGrid items={clientWork} />

        <div className='section-head mt-24'>
          <h2 className='section-title'>Earlier &amp; academic work</h2>
        </div>

        <ProjectGrid items={academicWork} />
      </div>
    </section>
  );
}
