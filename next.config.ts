import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: './',
  assetPrefix: './',
  images: {
    unoptimized: true, // Disable default image optimization
  },
};

export default nextConfig;
