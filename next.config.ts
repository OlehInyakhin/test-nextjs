import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['page.tsx', 'page.ts'],
  experimental: {
    turbo: {
      rules: {
        '*.inline.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.tsx',
        },
      }
    },
  },
};

export default nextConfig;
