/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    "react-icons/fa": {
      transform: "@react-icons/all-files/fa/{{ member }}",
    },
    "react-icons/bs": {
      transform: "@react-icons/all-files/bs/{{ member }}",
    },
    "react-icons/ai": {
      transform: "@react-icons/all-files/ai/{{ member }}",
    },
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ["react-icons"],
  },
  env: {
    EXAMPLES_APP_URL: process.env.EXAMPLES_APP_URL,
  },
};

export default nextConfig;
