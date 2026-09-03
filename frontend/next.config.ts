import { withPayload } from "@payloadcms/next/withPayload";
import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin(); // see #2 below for why the path is explicit

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
    globalNotFound: true,
  },
};

export default withPayload(withNextIntl(nextConfig));