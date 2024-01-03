import 'dotenv/config'
import {pool, query} from './share/db-connect'

const size = 12

async function updateConfigs(size: number) {
  const configs = await query(
    "SELECT * FROM strapi_core_store_settings \
   WHERE key LIKE 'plugin_content_manager_configuration%';"
  )
  if (Array.isArray(configs) && configs.length > 0) {
    await Promise.all(
      configs.map(async (config) => {
        const value = JSON.parse(config.value)
        await Promise.all(
          value.layouts.edit.map(async (edit) => {
            const editKeys = Object.keys(edit)
            editKeys.forEach((key) => {
              edit[key].size = size
            })
            return edit
          })
        )
        await query(`UPDATE strapi_core_store_settings SET value = '${JSON.stringify(value)}' \
      WHERE id = ${config.id};`)
      })
    )
    console.log(`${configs.length} config sizes have been updated to ${size}! 🎉`)
  } else {
    console.log('No configs found! 😢')
  }
}

;(async () => {
  const client = await pool.connect()
  await updateConfigs(size)
  await client.release()
  await pool.end()
})()
