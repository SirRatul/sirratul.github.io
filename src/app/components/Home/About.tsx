'use client';

import { motion } from 'framer-motion';
import { sectionReveal } from '@/utils/animations';

export default function About() {
  return (
    <section id='about' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
      <motion.div {...sectionReveal}>
        <div className='section-head'>
          <h2 className='section-title'>About Me</h2>
        </div>

        <div className='prose-body max-w-3xl mx-auto space-y-5'>
          <p>
            I&apos;m a software engineer at Credability Systems, where I work across the stack with
            React, Next.js, Node.js and TypeScript. Before that, I spent two and a half years at
            Segwitz building React and Next.js apps for clients. On the side, I&apos;ve built
            Shopify stores as a freelancer with Beyondesign.
          </p>
          <p>
            Most of my work is on the frontend, and I care a lot about how fast a page feels. At
            Segwitz I cut page load times on a client product by about 70%, and I mentored two
            junior developers along the way.
          </p>
          <p>
            I studied computer science at Ahsanullah University of Science and Technology and still
            keep a foot in research. I&apos;m a co-author on a paper about multilingual headline
            generation, published at ACL 2024.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
