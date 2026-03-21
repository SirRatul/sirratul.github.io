'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/** Avoid Node's experimental/broken global `localStorage` when `--localstorage-file` is invalid. */
function getBrowserStorage(): Storage | null {
    if (typeof window === 'undefined') return null;
    try {
        const ls = window.localStorage;
        if (
            ls &&
            typeof ls.getItem === 'function' &&
            typeof ls.setItem === 'function'
        ) {
            return ls;
        }
    } catch {
        /* private mode / quota */
    }
    return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('light');
    const [mounted, setMounted] = useState(false);

    // Update theme
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        const storage = getBrowserStorage();
        if (storage) {
            storage.setItem('theme', newTheme);
        }
        if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark', newTheme === 'dark');
        }
    };

    // Toggle theme
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Initialize theme
    useEffect(() => {
        const storage = getBrowserStorage();
        if (!storage) {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
            setThemeState(systemTheme);
            document.documentElement.classList.toggle('dark', systemTheme === 'dark');
            setMounted(true);
            return;
        }
        const savedTheme = storage.getItem('theme') as Theme | null;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
        const initialTheme = savedTheme || systemTheme;

        setThemeState(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
        setMounted(true);
    }, []);

    // Prevent flash of wrong theme
    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
