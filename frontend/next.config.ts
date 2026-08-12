import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/DocSmile",

  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;