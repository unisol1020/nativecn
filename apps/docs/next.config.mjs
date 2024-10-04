/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    reactCompiler: true,
  },
  env: {
    EXAMPLES_APP_URL: process.env.EXAMPLES_APP_URL,
  },
};

export default nextConfig;
