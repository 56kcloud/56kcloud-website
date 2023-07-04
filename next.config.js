/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')
const nextConfig = {
  images: {
    domains: ['s3.us-west-2.amazonaws.com']
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:slug',
        has: [
          {
            type: 'host',
            value: 'blog.56k.cloud',
          },
        ],
        destination: 'https://www.56k.cloud/blog/:slug',
        permanent: false
      }
    ]
  },
  experimental: { appDir: true }, // until next translate is fixed
  ...nextTranslate()
}

module.exports = nextConfig
