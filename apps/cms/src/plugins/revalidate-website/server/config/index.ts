export default {
  default: {},
  validator(config) {
    if (config.revalidateEndpoint) {
      return
    } else {
      throw new Error('revalidateEndpoint is required')
    }
  }
}
