import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from '@/contents/projects';
import ProjectDetailPage from '@/app/components/Project/ProjectDetailPage';

type Props = { params: Promise<{ slug: string }> };

/**
 * With `output: 'export'`, unknown slugs must not be rendered on demand.
 * `false` returns 404 for slugs not returned from `generateStaticParams()` (no dev-server error).
 */
export const dynamicParams = false;

export function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) {
        return { title: 'Project | Samsul Islam' };
    }
    const raw = project.summary ?? project.description;
    const description = raw.length > 155 ? `${raw.slice(0, 152)}…` : raw;
    return {
        title: `${project.title} | Samsul Islam`,
        description,
        openGraph: {
            title: project.title,
            description: raw.slice(0, 200),
        },
    };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();
    return <ProjectDetailPage project={project} />;
}
