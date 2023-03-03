// const isProd = process.env.NODE_ENV === 'production'
const nextTranslate = require('next-translate-plugin')

module.exports = {
  ...nextTranslate()
}
