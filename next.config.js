/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// oaidalleapiprodscus.blob.core.windows.net

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["oaidalleapiprodscus.blob.core.windows.net"],
  },
};
