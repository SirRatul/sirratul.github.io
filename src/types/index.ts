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

/** Long-form case study fields (detail page). Omitted sections fall back to description / impact. */
export interface ProjectDetail {
    overview?: string;
    problem?: string;
    solution?: string;
    /** Extra result lines for the detail page; defaults to impactHighlights */
    results?: string[];
    /** Optional gallery beyond the hero image */
    screenshots?: string[];
}

export interface Project {
    /** URL segment: /projects/[slug] */
    slug: string;
    title: string;
    /** Full description / case study intro (detail page). */
    description: string;
    /** One line for cards; falls back to description with line clamp. */
    summary?: string;
    /** Headline outcome / business impact (card “result” line + detail). */
    impact?: string;
    /** Short bullets: metrics, scale, or delivery wins (no fake percentages). */
    impactHighlights?: string[];
    technologies: string[];
    githubLink: string;
    demoLink: string;
    image: string;
    featured?: boolean;
    category?: string;
    role?: string; // e.g., "Frontend Lead", "Full-Stack Developer", "Shopify Developer"
    detail?: ProjectDetail;
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
