import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '', // No basePath needed for root-level GitHub Pages site
  assetPrefix: '/', // Ensure static assets load correctly
  trailingSlash: true, // Optional, helps with static export consistency
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;