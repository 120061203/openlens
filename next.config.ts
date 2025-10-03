import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages 設定
  basePath: process.env.NODE_ENV === 'production' ? '/openlens' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/openlens/' : '',
};

export default nextConfig;
