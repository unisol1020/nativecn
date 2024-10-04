/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    EXAMPLES_APP_URL: process.env.EXAMPLES_APP_URL,
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
