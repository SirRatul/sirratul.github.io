import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { Project } from '@/types';

interface Props {
  project: Project;
}

export default function ProjectDetailPage({ project }: Props) {
  const d = project.detail;
  const overview = d?.overview ?? project.description;
  const problem = d?.problem;
  const solution = d?.solution;
  const results = d?.results?.length ? d.results : (project.impactHighlights ?? []);
  const screenshots = d?.screenshots ?? [];
  const hasDemo = Boolean(project.demoLink);
  const hasGithub = Boolean(project.githubLink);

  return (
    <article className='relative overflow-hidden'>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-purple-50/80 dark:from-slate-950 dark:via-slate-900 dark:to-[#0c1428]' />
        <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-primary-strong/5 dark:bg-primary-strong/10 rounded-full blur-3xl' />
      </div>

      <div className='container max-w-3xl mx-auto px-4 pt-24 pb-16 md:pt-28 md:pb-24'>
        <nav className='text-sm text-gray-600 dark:text-slate-400 mb-8' aria-label='Breadcrumb'>
          <ol className='flex flex-wrap items-center gap-2'>
            <li>
              <Link href='/' className='hover:text-primary transition-colors'>
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href='/projects' className='hover:text-primary transition-colors'>
                Projects
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className='text-gray-900 dark:text-slate-200 font-medium truncate max-w-[min(100%,12rem)] sm:max-w-none'>
              {project.title}
            </li>
          </ol>
        </nav>

        <header className='mb-10'>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight'>
            {project.title}
          </h1>
          {project.impact && (
            <p className='mt-3 text-lg text-primary font-semibold leading-snug'>{project.impact}</p>
          )}
          {(project.role || project.category) && (
            <dl className='mt-6 flex flex-wrap gap-x-10 gap-y-4 border-y border-gray-200 dark:border-white/10 py-4'>
              {project.role && (
                <div>
                  <dt className='text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-slate-400'>
                    Role
                  </dt>
                  <dd className='mt-1 text-base font-semibold text-gray-900 dark:text-white'>
                    {project.role}
                  </dd>
                </div>
              )}
              {project.category && (
                <div>
                  <dt className='text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-slate-400'>
                    Category
                  </dt>
                  <dd className='mt-1 text-base font-semibold text-gray-900 dark:text-white'>
                    {project.category}
                  </dd>
                </div>
              )}
            </dl>
          )}
        </header>

        <div className='relative aspect-video w-full rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 shadow-lg bg-gray-100 dark:bg-slate-800/50 mb-12'>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 48rem'
            priority
          />
        </div>

        {(hasDemo || hasGithub) && (
          <div className='flex flex-col sm:flex-row flex-wrap gap-3 mb-14'>
            {hasDemo && (
              <a
                href={project.demoLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 rounded-xl bg-primary-strong text-white font-semibold px-5 py-3 shadow-lg shadow-primary-strong/20 hover:brightness-[1.03] transition-all'
              >
                Open live site
                <FaExternalLinkAlt className='h-3.5 w-3.5 opacity-90' />
              </a>
            )}
            {hasGithub && (
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 dark:border-white/15 font-semibold px-5 py-3 text-gray-800 dark:text-slate-100 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors'
              >
                <FaGithub className='h-4 w-4' />
                View source
              </a>
            )}
          </div>
        )}

        <section className='mb-12'>
          <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Overview</h2>
          <div className='prose-body text-gray-700 dark:text-slate-300 leading-relaxed whitespace-pre-line'>
            {overview}
          </div>
        </section>

        {(problem || solution) && (
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            {problem && (
              <section>
                <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Challenge</h2>
                <p className='prose-body text-gray-700 dark:text-slate-300 leading-relaxed whitespace-pre-line'>
                  {problem}
                </p>
              </section>
            )}
            {solution && (
              <section>
                <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Approach</h2>
                <p className='prose-body text-gray-700 dark:text-slate-300 leading-relaxed whitespace-pre-line'>
                  {solution}
                </p>
              </section>
            )}
          </div>
        )}

        {results.length > 0 && (
          <section className='mb-12'>
            <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
              Impact &amp; results
            </h2>
            <ul className='space-y-3'>
              {results.map((line, i) => (
                <li key={i} className='flex gap-3 text-gray-700 dark:text-slate-300'>
                  <span
                    className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-strong'
                    aria-hidden
                  />
                  <span className='leading-relaxed'>{line}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className='mb-12'>
          <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Tech stack</h2>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className='px-3 py-1.5 rounded-full text-sm font-medium bg-primary-strong/10 dark:bg-primary-strong/20 text-primary'
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {screenshots.length > 0 && (
          <section className='mb-12'>
            <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>Screenshots</h2>
            <div className='grid gap-6 sm:grid-cols-2'>
              {screenshots.map((src, i) => (
                <div
                  key={src + i}
                  className='relative aspect-video rounded-xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-gray-100 dark:bg-slate-800/50'
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className='object-cover'
                    sizes='(max-width: 640px) 100vw, 50vw'
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <div className='pt-8 border-t border-gray-200 dark:border-white/10'>
          <Link href='/projects' className='text-primary font-semibold hover:underline'>
            ← Back to all projects
          </Link>
        </div>
      </div>
    </article>
  );
}
