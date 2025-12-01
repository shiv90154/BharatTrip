/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Next.js 16 experimental settings
  typedRoutes: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },

  // ❗ Remove unsupported keys (eslint + typescript)
  // Next 16 handles both automatically. DO NOT ADD THESE FIELDS.

  turbopack: {
    root: __dirname,
  },

  devIndicators: {
    buildActivity: true,
  },
};

export default nextConfig;
