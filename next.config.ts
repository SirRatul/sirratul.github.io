import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        optimizePackageImports: ['react-icons'],
    },
};

export default withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})(nextConfig);
