import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export (GitHub Pages) has no server to run Next's image
  // optimizer at request time, so images are served as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
