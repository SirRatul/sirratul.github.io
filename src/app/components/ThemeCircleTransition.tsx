'use client';

import { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

type Theme = 'light' | 'dark';

type Props = {
    x: number;
    y: number;
    /** Theme we are leaving (full-screen overlay); new theme is already applied underneath. */
    from: Theme;
    onComplete: () => void;
};

function coverRadiusPx(cx: number, cy: number): number {
    if (typeof window === 'undefined') return 2400;
    const w = window.innerWidth;
    const h = window.innerHeight;
    return Math.ceil(Math.hypot(Math.max(cx, w - cx), Math.max(cy, h - cy)) + 32);
}

const FROM_BG: Record<Theme, string> = {
    light: '#ffffff',
    dark: '#0f172a',
};

/** Full-viewport radial reveal — ~1s reads “normal”; shorter values feel rushed. */
const TRANSITION_DURATION_S = 1;
/** Smooth ease-out so the end doesn’t snap. */
const TRANSITION_EASE: [number, number, number, number] = [0.22, 1, 0.45, 1];

/** Black = show overlay; transparent = hole (new theme shows through). Hole radius grows with r. */
function buildMask(r: number, x: number, y: number): string {
    const radius = Math.max(r, 0.5);
    return `radial-gradient(circle ${radius}px at ${x}px ${y}px, rgba(0,0,0,0) ${radius}px, rgba(0,0,0,1) ${radius}px)`;
}

/**
 * Full-screen layer in the *previous* theme color. A transparent circle grows from (x,y),
 * revealing the new themed page already applied below.
 */
export default function ThemeCircleTransition({ x, y, from, onComplete }: Props) {
    const finished = useRef(false);
    const r = useMotionValue(0);

    const maxR = useMemo(() => coverRadiusPx(x, y), [x, y]);

    const mask = useTransform(r, (v) => buildMask(v, x, y));

    const onCompleteRef = useRef(onComplete);
    onCompleteRef.current = onComplete;

    useEffect(() => {
        const controls = animate(r, maxR, {
            duration: TRANSITION_DURATION_S,
            ease: TRANSITION_EASE,
            onComplete: () => {
                if (finished.current) return;
                finished.current = true;
                onCompleteRef.current();
            },
        });
        return () => controls.stop();
    }, [maxR, r]);

    if (typeof document === 'undefined') {
        return null;
    }

    const bg = FROM_BG[from];

    const node = (
        <div
            role='presentation'
            aria-hidden
            className='pointer-events-auto fixed inset-0 z-[99999] touch-none'
        >
            <motion.div
                className='will-change-[mask-image]'
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: bg,
                    maskImage: mask,
                    WebkitMaskImage: mask,
                    maskSize: '100% 100%',
                    WebkitMaskSize: '100% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: '0 0',
                    WebkitMaskPosition: '0 0',
                }}
            />
        </div>
    );

    return createPortal(node, document.body);
}
