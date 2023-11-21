import 'dotenv/config'
import {Pool, QueryResult} from 'pg'

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sampleQuery = async (query: any): Promise<QueryResult> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await pool.query(query) as Record<string, any>
    return result.rows
  } catch (error) {
    console.error('Error executing query', error.message)
  }
}

async function updateFilesHostname() {
  const files = await sampleQuery('SELECT * FROM files;')
  if (Array.isArray(files) && files.length > 0) {
    await Promise.all(files.map(async (file) => {
      const url = new URL(file.url)
      url.hostname = `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`
      if (file.formats) {
        Object.keys(file.formats).forEach((key) => {
          file.formats[key].url = new URL(file.formats[key].url)
          file.formats[key].url.hostname = url.hostname
          file.formats[key].url = file.formats[key].url.toString()
        })
      }
      await sampleQuery(`UPDATE files SET url = '${url}', formats = '${JSON.stringify(file.formats)}' \
      WHERE id = ${file.id};`)
    }))
    console.log(`${files.length} hostnames have been updated! 🎉`)
  } else {
    console.log('No files found! 😢')
  }
}

async function updateArticlesImagesHostname(hostname='56k-strapi.s3.eu-central-1.amazonaws.com') {
  const articles = await sampleQuery('SELECT * FROM articles;')
  if (Array.isArray(articles) && articles.length > 0) {
    await Promise.all(articles.map(async (article) => {
      const newHostname = `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`
      const content = article.content.replaceAll(hostname, newHostname)
      await sampleQuery({
        text: 'UPDATE articles SET content = $1 WHERE id = $2;',
        values: [content, article.id]
      })
    }))
    console.log(`${articles.length} hostnames have been updated! 🎉`)
  } else {
    console.log('No articles found! 😢')
  }
}

(async () => {
  const client = await pool.connect()
  await updateFilesHostname()
  await updateArticlesImagesHostname()
  await client.release()
  await pool.end()
})()
