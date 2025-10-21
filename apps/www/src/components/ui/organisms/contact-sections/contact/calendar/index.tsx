import Script from 'next/script'

export default function Calendar() {
  return (
    <>
      <div
        className='meetings-iframe-container h-full'
        data-src='https://meetings.hubspot.com/sandro4?embed=true'
      ></div>
      <Script
        type='text/javascript'
        src='https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
        strategy='lazyOnload'
      />
    </>
  )
}
