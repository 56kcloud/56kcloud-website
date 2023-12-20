export default {
  default: {},
  validator(config) {
    if (config.websiteUrl) {
      return
    } else {
      throw new Error('websiteUrl is required')
    }
  }
}
