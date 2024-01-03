import {parse} from 'pg-connection-string'

export default ({env}) => {
  // If DATABASE_URL exists, use it to override other settings.
  const databaseConfig = env('DATABASE_URL')
    ? parse(env('DATABASE_URL'))
    : {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi')
      }

  return {
    connection: {
      client: 'postgres',
      connection: {
        ...databaseConfig,
        ssl: env.bool('DATABASE_USE_SSL', true) ? {rejectUnauthorized: false} : false
      },
      debug: false
    }
  }
}
