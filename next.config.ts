import type { NextConfig } from "next";

const isProd = true;

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? '/lyly-croitorie' : '',
  assetPrefix: isProd ? '/lyly-croitorie' : '',
  images: {
    unoptimized: true, // Disable default image optimization
  }
};

module.exports = nextConfig;

export default nextConfig;
