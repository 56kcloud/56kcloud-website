/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')
const nextConfig = {
  images: {
    domains: ['s3.us-west-2.amazonaws.com']
  },
  reactStrictMode: true,
  ...nextTranslate()
}

module.exports = nextConfig
