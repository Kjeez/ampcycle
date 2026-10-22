import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the project root; a stray lockfile higher up the tree would otherwise be picked.
  turbopack: { root: __dirname },
};

export default nextConfig;
