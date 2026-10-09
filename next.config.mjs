
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/fizz-scroll-animation",
  assetPrefix: "/fizz-scroll-animation/",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;