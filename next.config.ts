import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 自訂網域設定 - 移除路徑前綴
};

export default nextConfig;
