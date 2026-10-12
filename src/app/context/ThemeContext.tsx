'use client';

import {
    createContext,
    useCallback,
    useContext,
    useState,
    useSyncExternalStore,
} from 'react';
import type { MouseEvent } from 'react';
import ThemeCircleTransition from '../components/ThemeCircleTransition';

type Theme = 'light' | 'dark';

type TransitionPayload = {
    x: number;
    y: number;
    to: Theme;
    /** Theme before toggle — overlay uses this color while shrinking away. */
    from: Theme;
};

interface ThemeContextType {
    theme: Theme;
    /** Pass the click event from the toggle control for a circular reveal; omit for instant switch. */
    toggleTheme: (event?: MouseEvent<HTMLElement>) => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Inlined in <head> so the saved/system theme is on <html> before first paint.
 * Lets the whole page render on the server without a flash of the wrong theme.
 */
export const themeInitScript = `(function(){try{var t=null;try{t=localStorage.getItem('theme')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})();`;

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

function prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * The `dark` class on <html> is the single source of truth (set first by themeInitScript).
 * Subscribing to it keeps React in sync and lets hydration start from the server value.
 */
function subscribeToHtmlClass(onChange: () => void) {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
}
const getHtmlTheme = (): Theme =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light';
const getServerTheme = (): Theme => 'light';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const theme = useSyncExternalStore(subscribeToHtmlClass, getHtmlTheme, getServerTheme);
    const [transition, setTransition] = useState<TransitionPayload | null>(
        null,
    );

    const setTheme = useCallback((newTheme: Theme) => {
        const storage = getBrowserStorage();
        if (storage) {
            storage.setItem('theme', newTheme);
        }
        if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark', newTheme === 'dark');
        }
    }, []);

    const endThemeTransition = useCallback(() => {
        setTransition(null);
    }, []);

    const toggleTheme = useCallback(
        (event?: MouseEvent<HTMLElement>) => {
            if (transition) return;

            const fromTheme = theme;
            const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';

            if (!event || prefersReducedMotion()) {
                setTheme(nextTheme);
                return;
            }

            const target = event.currentTarget;
            const rect = target.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            /* New theme applies immediately so real UI is under the overlay; overlay shrinks away. */
            setTheme(nextTheme);
            setTransition({ x, y, to: nextTheme, from: fromTheme });
        },
        [theme, setTheme, transition],
    );

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
            {transition && (
                <ThemeCircleTransition
                    key={`${transition.x}-${transition.y}-${transition.from}-${transition.to}`}
                    x={transition.x}
                    y={transition.y}
                    from={transition.from}
                    onComplete={endThemeTransition}
                />
            )}
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
