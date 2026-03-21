'use client';

import { useEffect, useState } from 'react';

export default function SignatureGradientLine() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className='signature-gradient-line' 
            style={{ 
                width: `${scrollProgress}%`,
                transition: 'width 0.1s ease-out'
            }}
        />
    );
}
