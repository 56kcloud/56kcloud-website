import 'dotenv/config'
import {Pool, QueryResult} from 'pg'

const size = 12
const pool = new Pool({
  user: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
  ssl: (process.env.DATABASE_USE_SSL ? JSON.parse(process.env.DATABASE_USE_SSL) : null) ?? true
    ? {rejectUnauthorized: false}
    : false
})

export const sampleQuery = async (query: string): Promise<QueryResult> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await pool.query(query) as Record<string, any>
    return result.rows
  } catch (error) {
    console.error('Error executing query', error)
  }
}

async function updateConfigs(size: number) {
  const configs = await sampleQuery('SELECT * FROM strapi_core_store_settings \
   WHERE key LIKE \'plugin_content_manager_configuration%\';')
  if (Array.isArray(configs) && configs.length > 0) {
    await Promise.all(configs.map(async (config) => {
      const value = JSON.parse(config.value)
      await Promise.all(value.layouts.edit.map(async (edit) => {
        const editKeys = Object.keys(edit)
        editKeys.forEach((key) => {
          edit[key].size = size
        })
        return edit
      }))
      await sampleQuery(`UPDATE strapi_core_store_settings SET value = '${JSON.stringify(value)}' \
      WHERE id = ${config.id};`)
    }))
    console.log(`${configs.length} config sizes have been updated to ${size}! 🎉`)
  } else {
    console.log('No configs found! 😢')
  }
}

(async () => {
  const client = await pool.connect()
  await updateConfigs(size)
  await client.release()
  await pool.end()
})()
