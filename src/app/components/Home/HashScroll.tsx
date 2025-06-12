'use client';

import { useEffect } from 'react';

export default function HashScroll() {
    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash;
            if (!hash) return;

            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'instant' });
            }
        };

        scrollToHash();
        window.addEventListener('hashchange', scrollToHash);

        return () => {
            window.removeEventListener('hashchange', scrollToHash);
        };
    }, []);

    return null;
}
