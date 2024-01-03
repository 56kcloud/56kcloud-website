/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '56k-strapi.s3.eu-central-1.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: '56kcloud-cms-assets.s3.us-east-1.amazonaws.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'blog.56k.cloud'
          }
        ],
        destination: 'https://www.56k.cloud/blog',
        permanent: true
      },
      {
        source: '/blog',
        has: [
          {
            type: 'host',
            value: 'blog.56k.cloud'
          }
        ],
        destination: 'https://www.56k.cloud/blog',
        permanent: true
      },
      {
        source: '/blog/:slug',
        has: [
          {
            type: 'host',
            value: 'blog.56k.cloud'
          }
        ],
        destination: 'https://www.56k.cloud/blog/:slug',
        permanent: true
      },
      {
        source: '/:slug',
        has: [
          {
            type: 'host',
            value: 'blog.56k.cloud'
          }
        ],
        destination: 'https://www.56k.cloud/blog/:slug',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
