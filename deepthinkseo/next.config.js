/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['deepthinkseo.online'],
    unoptimized: true
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/blog/:slug',
        destination: '/blog/:slug'
      }
    ]
  }
}

module.exports = nextConfig
