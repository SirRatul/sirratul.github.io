import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
const ProjectList = dynamic(() => import('../components/Project/ProjectList'));

export const metadata: Metadata = {
    title: 'Projects | Samsul Islam',
    description:
        'Web, Shopify, mobile and machine learning projects built by Samsul Islam, with case studies and results.',
};

export default function Projects() {
    return (
        <div>
            <ProjectList />
        </div>
    );
}
