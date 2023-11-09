/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: './lib/loader.js'
  },
};

module.exports = nextConfig;
