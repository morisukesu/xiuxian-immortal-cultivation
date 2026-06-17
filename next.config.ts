import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/adapter-libsql", "@libsql/client"],
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://8.154.20.187:3000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
