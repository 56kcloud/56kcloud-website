const isProd = process.env.NODE_ENV === 'production'
const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  assetPrefix: isProd ? 'https://www.edeltech.ch/' : '',
  trailingSlash: true
})
