import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Configure Turbopack
  turbopack: {
    root: path.resolve(__dirname),
    resolveAlias: {
      // Add any needed aliases here
    },
    debugIds: process.env.NODE_ENV === 'development',
  },
  // Type-safe configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable React Strict Mode
  reactStrictMode: true,
  // Production browser source maps
  productionBrowserSourceMaps: true,
};

export default nextConfig;
