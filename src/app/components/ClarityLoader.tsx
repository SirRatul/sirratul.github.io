'use client';

import { useEffect } from 'react';

/**
 * Loads Microsoft Clarity after idle so it doesn't compete with LCP/FCP.
 */
export default function ClarityLoader() {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') return;
        const id = process.env.NEXT_PUBLIC_CLARITY_ID;
        if (!id) return;

        const inject = () => {
            const s = document.createElement('script');
            s.async = true;
            s.src = `https://www.clarity.ms/tag/${id}`;
            document.head.appendChild(s);
        };

        const ric = window.requestIdleCallback;
        if (typeof ric === 'function') {
            ric(() => inject(), { timeout: 5000 });
        } else {
            window.setTimeout(inject, 2500);
        }
    }, []);

    return null;
}
