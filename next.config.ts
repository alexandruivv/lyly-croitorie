import type { NextConfig } from "next";

const isProd = false;

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? '/lyly-croitorie' : '',
  assetPrefix: isProd ? '/lyly-croitorie' : '',
  images: {
    unoptimized: true, // Disable default image optimization
  }
};

export default nextConfig;
