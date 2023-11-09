/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: './lib/loader.js'
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
