import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
