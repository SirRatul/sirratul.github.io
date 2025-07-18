import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
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
    compiler: {
        removeConsole: true,
    },
};

export default withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})(nextConfig);
