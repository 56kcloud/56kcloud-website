import * as dotenv from 'dotenv'
dotenv.config()
export const notionKey = process.env.NOTION_KEY || ''
export const postsDbId = process.env.NOTION_POSTS_DB_ID || ''
export const authorsDbId = process.env.NOTION_AUTHORS_DB_ID || ''
export const teamsDbId = process.env.NOTION_TEAMS_DB_ID || ''
