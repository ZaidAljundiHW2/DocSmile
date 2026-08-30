import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
    globalNotFound: true
  },
};

export default withPayload(nextConfig);