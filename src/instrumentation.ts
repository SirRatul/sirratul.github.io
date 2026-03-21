/**
 * Node can expose a global `localStorage` when `--localstorage-file` is set with an invalid path.
 * That object is not a real Storage implementation (`getItem` is not a function), which breaks
 * Next.js devtools, @emailjs/browser, and other code that checks `typeof localStorage !== 'undefined'`.
 */
function patchBrokenNodeLocalStorage(): void {
    try {
        const g = globalThis as unknown as { localStorage?: unknown };
        const ls = g.localStorage;
        if (ls == null) return;
        if (typeof (ls as Storage).getItem === 'function') return;

        const store = new Map<string, string>();
        const memory: Storage = {
            get length() {
                return store.size;
            },
            clear() {
                store.clear();
            },
            getItem(key: string) {
                return store.has(key) ? store.get(key)! : null;
            },
            key(index: number) {
                return Array.from(store.keys())[index] ?? null;
            },
            removeItem(key: string) {
                store.delete(key);
            },
            setItem(key: string, value: string) {
                store.set(key, String(value));
            },
        };
        g.localStorage = memory;
    } catch {
        /* ignore */
    }
}

patchBrokenNodeLocalStorage();

export async function register() {
    patchBrokenNodeLocalStorage();
}
