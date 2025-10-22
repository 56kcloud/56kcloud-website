import Script from 'next/script'

export type CalendarOptions = 'sandro' | 'darragh' | 'jpgehrig' | 'kevin'

export default function Calendar(props: {className?: string; calendar?: CalendarOptions}) {
  const calendars = {
    darragh: {
      src: 'https://events.56k.cloud/meetings/56k/darragh?embed=true'
    },
    jpgehrig: {
      src: 'https://events.56k.cloud/meetings/jpgehrig/meet?embed=true'
    },
    kevin: {
      src: 'https://events.56k.cloud/meetings/kevin2454?embed=true'
    },
    sandro: {
      src: 'https://meetings.hubspot.com/sandro4?embed=true'
    }
  } as const

  return (
    <div className={props.className}>
      <div
        className='meetings-iframe-container h-full'
        data-src={calendars[props.calendar ?? 'darragh'].src}
      ></div>
      <Script
        type='text/javascript'
        src='https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
      />
    </div>
  )
}
