export default [
  {
    method: 'GET',
    path: '/config',
    handler: 'revalidate-website.config',
    config: {
      policies: ['admin::isAuthenticatedAdmin']
    }
  }
]
