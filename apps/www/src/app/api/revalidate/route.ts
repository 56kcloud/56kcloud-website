import {DateTime} from 'luxon'
import {headers} from '@/utils/api/headers'
import {options} from '@/utils/api/options'
import {protectedAPI} from '@/utils/api/protected-api'
import {revalidateTag} from 'next/cache'
import {slackBotURL} from '../../../../configs/server'

export async function OPTIONS() {
  return options()
}

type RequestPayload = {
  username: string
}

async function postMessageOnSlack(data: RequestPayload) {
  const updatedAt = DateTime.now().toUTC().toLocaleString(DateTime.DATETIME_FULL)
  const user = data.username

  await fetch(slackBotURL, {
    method: 'POST',
    body: JSON.stringify({
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: 'Revalidation triggered 🚀',
            emoji: true
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Revalidated at:*\n${updatedAt}`
            },
            {
              type: 'mrkdwn',
              text: `*Revalidated by:*\n${user}`
            }
          ]
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: '<https://www.56k.cloud|Website>'
            },
            {
              type: 'mrkdwn',
              text: '<https://cms.56k.cloud|CMS>'
            }
          ]
        }
      ]
    })
  })
}

export async function POST(request: Request) {
  return protectedAPI(request, async () => {
    const data: RequestPayload = await request.json()
    await revalidateTag('strapi')
    await postMessageOnSlack(data)
    return new Response(
      JSON.stringify({
        message: 'Strapi tag revalidated'
      }),
      {
        status: 200,
        headers: headers({methods: 'POST'})
      }
    )
  })
}
