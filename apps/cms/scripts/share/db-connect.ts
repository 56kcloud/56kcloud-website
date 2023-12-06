import {Pool, QueryResult} from 'pg'

export const pool = new Pool({
  user: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
  ssl: (process.env.DATABASE_USE_SSL ? JSON.parse(process.env.DATABASE_USE_SSL) : null) ?? true
    ? {rejectUnauthorized: false}
    : false
})

export const query = async (query, values?): Promise<QueryResult> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await pool.query(query, values) as Record<string, any>
    return result.rows
  } catch (error) {
    console.error('Error executing query', error)
  }
}
