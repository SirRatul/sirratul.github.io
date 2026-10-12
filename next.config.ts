import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages: export only for `next build` (NODE_ENV=production). Omit during `next dev`
  // so dynamic routes like /projects/[slug] don't throw "missing param in generateStaticParams"
  // when visiting an unknown slug—static hosting still has no HTML for bad paths (host 404).
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' as const } : {}),
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
    /** Requires `critters` — inlines critical CSS to reduce render-blocking (see Lighthouse). */
    optimizeCss: true,
  },
  compiler: {
    // Keep console.error so misconfiguration (e.g. missing EmailJS keys) is still visible
    removeConsole: { exclude: ['error'] },
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
