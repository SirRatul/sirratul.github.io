import dynamic from 'next/dynamic';
const ProjectList = dynamic(() => import('../components/Project/ProjectList'));

export default function Projects() {
    return (
        <main>
            <ProjectList />
        </main>
    );
}
