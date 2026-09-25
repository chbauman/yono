import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files.
  output: "export",
  // Static export has no server to run Next's image optimizer at request
  // time, so images are served as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
