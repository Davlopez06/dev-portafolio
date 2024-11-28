import { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com', 'i.pinimg.com'],
  },
};

export default bundleAnalyzer(nextConfig);
