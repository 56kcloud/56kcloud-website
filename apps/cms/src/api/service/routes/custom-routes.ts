export default {
  routes: [
    {
      method: 'GET',
      path: '/services-slugs',
      handler: 'service.slugs'
    },
    {
      method: 'GET',
      path: '/services/:id/info',
      handler: 'service.info'
    }
  ]
}
