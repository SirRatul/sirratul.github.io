export const fadeInUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const cardHover = {
    whileHover: { scale: 1.05 },
    transition: { type: 'spring', stiffness: 300 },
};

export const cardHoverSmall = {
    whileHover: { scale: 1.02 },
    transition: { type: 'spring', stiffness: 300 },
};

export const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
};

export const slideInLeft = {
    initial: { x: -60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
};

export const slideInRight = {
    initial: { x: 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
};

export const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
};

type Preset = {
    initial: Record<string, number>;
    animate: Record<string, number>;
    transition?: Record<string, unknown>;
};

// Plays a preset once when the element scrolls into view instead of on page load.
export const inView = (preset: Preset) => ({
    initial: preset.initial,
    whileInView: preset.animate,
    viewport: { once: true, amount: 0.2 },
    transition: preset.transition,
});

// For containers whose children use `variants`: children animate when the container is in view.
export const inViewContainer = {
    initial: 'initial',
    whileInView: 'animate',
    viewport: { once: true, amount: 0.1 },
};
