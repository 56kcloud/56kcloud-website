'use strict'

module.exports = ({strapi}) => ({
  async config(ctx) {
    const config = await strapi.config.get('plugin.revalidate-website', {})
    ctx.send({config})
  }
})
