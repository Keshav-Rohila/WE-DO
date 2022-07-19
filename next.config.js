/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'avatarfiles.alphacoders.com',
      'lh3.googleusercontent.com'
    ],
  }
}

module.exports = nextConfig
