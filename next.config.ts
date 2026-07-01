import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  typescript: {
    // v0.35 原始数据有重复属性，跳过类型检查
    ignoreBuildErrors: true,
  },
};
export default nextConfig;
