/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No remote image hosts are required: the hero/section backgrounds use
  // solid placeholder surfaces. When real studio photography is added, register
  // its host here and swap the placeholder <div>s for <Image />.
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
