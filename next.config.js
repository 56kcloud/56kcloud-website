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
        destination: '/blog/:slug',
        permanent: false
      }
    ]
  },
  ...nextTranslate()
}

module.exports = nextConfig
