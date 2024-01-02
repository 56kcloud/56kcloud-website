import {DateTime} from 'luxon'
import {NextResponse} from 'next/server'
import {revalidateTag} from 'next/cache'
import {slackBotURL} from '../../../../configs/server'

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    }
  )
}

type RequestPayload = {
  username: string,
}

async function postMessageOnSlack(data: RequestPayload) {
  const updatedAt = DateTime.now().toUTC().toLocaleString(DateTime.DATETIME_FULL)
  const user = data.username
  
  await fetch(slackBotURL, {
    method: 'POST',
    body: JSON.stringify({
      blocks: [
        {
          'type': 'header',
          'text': {
            'type': 'plain_text',
            'text': 'Revalidation triggered 🚀',
            'emoji': true
          }
        },
        {
          'type': 'section',
          'fields': [
            {
              'type': 'mrkdwn',
              'text': `*Revalidated at:*\n${updatedAt}`
            },
            {
              'type': 'mrkdwn',
              'text': `*Revalidated by:*\n${user}`
            }
          ]
        },
        {
          'type': 'section',
          'fields': [
            {
              'type': 'mrkdwn',
              'text': '<https://www.56k.cloud|Website>'
            },
            {
              'type': 'mrkdwn',
              'text': '<https://cms.56k.cloud|CMS>'
            }
          ]
        }
      ]
    })
  })
}

export async function POST(request: Request) {
  const data: RequestPayload = await request.json()
  await revalidateTag('strapi')
  await postMessageOnSlack(data)
  return new Response(
    'Strapi tag revalidated',
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    }
  )
}
