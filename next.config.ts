import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/faithonjoymountain',
  images: { unoptimized: true },
};

export default nextConfig;
