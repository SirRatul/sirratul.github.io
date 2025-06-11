export interface Experience {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    description: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink: string;
    image: string;
    featured?: boolean;
}
