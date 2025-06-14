'use client';

import { useEffect } from 'react';

export default function ClarityInit() {
    useEffect(() => {
        const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

        if (
            typeof window !== 'undefined' &&
            process.env.NODE_ENV === 'production' &&
            typeof clarityId === 'string' &&
            clarityId.trim() !== ''
        ) {
            import('@microsoft/clarity').then((clarity) => {
                clarity.default.init(clarityId);
            });
        }
    }, []);

    return null;
}
