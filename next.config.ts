import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/portfolio", permanent: true },
      { source: "/work/:path*", destination: "/portfolio/:path*", permanent: true },
      { source: "/works", destination: "/portfolio", permanent: true },
      { source: "/works/:path*", destination: "/portfolio/:path*", permanent: true },
      { source: "/projects", destination: "/portfolio", permanent: true },
      { source: "/projects/:path*", destination: "/portfolio/:path*", permanent: true },
      { source: "/capabilities", destination: "/services", permanent: true },
      { source: "/capabilities/:path*", destination: "/services/:path*", permanent: true },
      { source: "/our-universe", destination: "/about-us", permanent: true },
      { source: "/our-universe/:path*", destination: "/about-us/:path*", permanent: true },
      { source: "/our-story", destination: "/about-us", permanent: true },
      { source: "/our-story/:path*", destination: "/about-us/:path*", permanent: true },
      { source: "/connect", destination: "/contact-us", permanent: true },
      { source: "/connect/:path*", destination: "/contact-us/:path*", permanent: true },
    ];
  },
  experimental: {
    optimizeCss: false,
    serverActions: { bodySizeLimit: "30mb" },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 828, 1080, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
  turbopack: {},
  webpack: (config) => {
    config.output.hashFunction = "sha256";
    return config;
  },
};

export default nextConfig;
