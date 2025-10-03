import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // 自訂網域設定 - 移除路徑前綴
};

export default nextConfig;
