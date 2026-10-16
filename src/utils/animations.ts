const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
};

// One fade-in per section. Triggers on the section's top edge, so tall sections don't wait for 20% to be visible.
export const sectionReveal = {
  initial: fadeInUp.initial,
  whileInView: fadeInUp.animate,
  viewport: { once: true, margin: '0px 0px -10% 0px' },
  transition: fadeInUp.transition,
};
