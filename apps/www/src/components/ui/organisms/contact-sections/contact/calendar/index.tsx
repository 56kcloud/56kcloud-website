import Script from 'next/script'

export type CalendarOptions = 'sandro' | 'darragh' | 'jpgehrig' | 'kevin' | 'team'

export type CalendarProps = {
  className?: string
  calendar?: CalendarOptions
}

export default function Calendar(props: CalendarProps) {
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
    },
    team: {
      src: 'https://events.56k.cloud/meetings/56k/team?embed=true'
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
