import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
