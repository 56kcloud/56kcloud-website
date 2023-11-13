/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')
const nextConfig = {
  images: {
    domains: ['56k-strapi.s3.eu-central-1.amazonaws.com', 'localhost']
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'blog.56k.cloud',
          },
        ],
        destination: 'https://www.56k.cloud/blog',
        permanent: false
      },
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
  ...nextTranslate()
}

module.exports = nextConfig
