import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/video-player',
  assetPrefix: '/video-player/',
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
