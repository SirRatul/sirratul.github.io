'use client';

import dynamic from 'next/dynamic';

const ThemeProvider = dynamic(
    () => import('./ThemeContext').then((mod) => mod.ThemeProvider),
    { ssr: false }
);

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
