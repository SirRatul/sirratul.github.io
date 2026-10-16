import type { Metadata } from 'next';
import ProjectList from '../components/Project/ProjectList';

export const metadata: Metadata = {
  title: 'Projects | Samsul Islam',
  description:
    'Web apps and Shopify stores built by Samsul Islam, plus earlier university projects.',
};

export default function Projects() {
  return (
    <div>
      <ProjectList />
    </div>
  );
}
