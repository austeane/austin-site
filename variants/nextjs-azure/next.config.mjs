/** @type {import('next').NextConfig} */
const isVercel = !!process.env.VERCEL;
const basePath = "/azure/next";

const nextConfig = {
  basePath,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_DATA_ORIGIN: process.env.NEXT_DATA_ORIGIN || "https://d2li8p8xclq49l.cloudfront.net",
  },
  async rewrites() {
    const origin = process.env.NEXT_DATA_ORIGIN || "https://www.austinwallace.ca";
    // Ensure data requests under basePath are forwarded to the router origin
    return origin ? [{ source: `${basePath}/data/:path*`, destination: `${origin}/data/:path*` }] : [];
  },
  async redirects() {
    return [
      { source: '/', destination: '/resume', permanent: false },
    ];
  },
  ...(isVercel ? {} : { output: "standalone" }),
};

export default nextConfig;
