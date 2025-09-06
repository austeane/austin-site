/** @type {import('next').NextConfig} */
const isVercel = !!process.env.VERCEL;

const nextConfig = {
  // Make Next generate links/assets under /azure/next
  basePath: "/azure/next",

  // Ensure static exports work properly with the base path
  images: {
    unoptimized: true,
  },

  // For Azure App Service zip/container deploys use standalone output.
  // Keep default on Vercel.
  ...(isVercel ? {} : { output: "standalone" }),
};

export default nextConfig;
