import { NextConfig } from "next";

const repoName = 'video-player'; // 👈 Replace this

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
