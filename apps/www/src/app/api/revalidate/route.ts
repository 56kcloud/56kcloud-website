import {DateTime} from 'luxon'
import {NextResponse} from 'next/server'
import {capitalizeFirstLetter} from '@/utils/toolbox'
import {revalidateTag} from 'next/cache'
import {slackBotURL, strapiFetcher} from '../../../../configs/server'

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://cms.56k.cloud',
        'Access-Control-Allow-Methods': 'OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    }
  )
}

type RequestPayload = {
  model: string,
  event: string,
  entry: {
    id: string
  },
  tag: string
}

async function postMessageOnSlack(data: RequestPayload) {
  const info = await strapiFetcher.call({
    path: `/api/${data.model}/${data.entry.id}/info`}
  )
  let event = capitalizeFirstLetter(data.event.split('.')[1])
  event = `${event === 'Publish' ? '🙂' : '🫥'} - ${event}` 
  const updatedAt = DateTime.fromISO(info.updatedAt as string).toUTC().toLocaleString(DateTime.DATETIME_FULL)
  const user = info.updatedBy.firstname + ' ' + info.updatedBy.lastname
  const localesMap = {
    'en': '🇬🇧',
    'fr': '🇫🇷',
    'de': '🇩🇪'
  }
  const locale = localesMap[info.locale as keyof typeof localesMap]
  const availableLocales = info.localizations.map(
    (localization: {locale: string, publishedAt: string|null}) => {
      return localization.publishedAt ? localesMap[localization.locale as keyof typeof localesMap] : null
    }).join(' ')
  
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
              'text': `*Model:*\n\`${data.model}\``
            },
            {
              'type': 'mrkdwn',
              'text': `*Event:*\n${event}`
            }
          ]
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
              'text': `*Locale:*\n${locale}`
            },
            {
              'type': 'mrkdwn',
              'text': `*Also available in:*\n${availableLocales}`
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
  await revalidateTag(data.tag)
  await postMessageOnSlack(data)
  return new Response(
    'Strapi tag revalidated',
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://cms.56k.cloud',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    }
  )
}
