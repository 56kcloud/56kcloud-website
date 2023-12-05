import '../../styles/global.css'
import {Metadata} from 'next'
import {hostname} from '../../../configs/server'
import {locales} from '../../../configs/shared'

export const metadata: Metadata = {
  metadataBase: new URL(hostname)
}

export async function generateStaticParams() {
  return locales.map((locale) => ({locale}))
}

export type RootLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function Root({children, params}: RootLayoutProps) {
  return (
    <html lang={params.locale}>
      <head>
        <link
          rel='icon'
          href='/favicon.ico'
          sizes='any'
        />
        <link
          rel='apple-touch-icon'
          href='/apple-icon?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
        <meta
          content='@56kCloud'
          name='twitter:site'
        />
        <meta
          content='summary'
          name='twitter:card'
        />
      </head>
      <body className='relative bg-background isolate'>
        {children}
      </body>
    </html>
  )
}
