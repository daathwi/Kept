import type { NextConfig } from "next";

/**
 * True static export , HTML/CSS/JS only, deployable to any static host.
 * Disables Server Actions, dynamic API routes, and on-demand ISR.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Static export cannot run the Image Optimization API.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
