/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EXAMPLES_APP_URL: process.env.EXAMPLES_APP_URL,
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
