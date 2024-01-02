export default {
  routes: [
    {
      method: 'GET',
      path: '/articles-slugs',
      handler: 'article.slugs'
    },
    {
      method: 'GET',
      path: '/articles/:id/info',
      handler: 'article.info'
    }
  ]
}
