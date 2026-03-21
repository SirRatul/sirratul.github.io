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
    /** One line: problem solved, outcome, or business impact (shown on featured cards). */
    impact?: string;
    technologies: string[];
    githubLink: string;
    demoLink: string;
    image: string;
    featured?: boolean;
    category?: string;
    role?: string; // e.g., "Frontend Lead", "Full-Stack Developer", "Shopify Developer"
}

export interface Publication {
    title: string;
    authors: string;
    venue: string;
    year: number;
    link: string;
    type: 'journal' | 'conference' | 'workshop' | 'preprint';
    citations?: number;
    peerReviewed?: boolean;
    role?: string; // e.g., "First Author", "Co-author", "Contributor"
}
