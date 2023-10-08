/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fvgst-medgold.s3.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
