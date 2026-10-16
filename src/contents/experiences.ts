import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Credability Systems',
    period: 'Jul 2025 – Present',
    responsibilities: [
      'Build features end to end in React, Next.js and Node.js with TypeScript',
      'Own frontend work on new features, planning releases with product and design',
      'Write tests and maintain the CI/CD pipelines that releases go through',
    ],
  },
  {
    title: 'React Developer',
    company: 'Segwitz',
    period: 'Dec 2022 – Jun 2025',
    responsibilities: [
      'Built React and Next.js interfaces for client products, and cut page load time on one of them by about 70%',
      'Moved repeated UI into shared TypeScript components, cutting duplicated frontend code by 35%',
      'Set up Google Analytics on 3 products so clients could see how people used them',
      'Mentored 2 junior developers through code reviews and pair programming',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Tech Join Bridge',
    period: 'Apr 2022 – Nov 2022',
    responsibilities: [
      'Built MERN applications used by more than 1,000 people a day',
      'Wrote REST APIs in Node.js and Express and improved response times by about 30%',
      'Added role-based access control and protected routes to production apps',
      'Automated deployments with GitHub Actions, which cut failed deploys by around 40%',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Teresa',
    period: 'Jul 2019 – Sep 2020',
    responsibilities: [
      'Built interactive dashboards in React and Tailwind CSS',
      'Integrated SSLCommerz and bKash so customers could pay online',
      'Refactored the legacy backend to make it more stable and easier to maintain',
      'Built logistics and SMS modules for real-time delivery tracking across 3 services',
    ],
  },
];
