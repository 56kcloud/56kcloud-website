export default {
  routes: [
    {
      method: 'GET',
      path: '/solutions-slugs',
      handler: 'solution.slugs'
    },
    {
      method: 'GET',
      path: '/solutions/:id/info',
      handler: 'solution.info'
    }
  ]
}
