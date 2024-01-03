import '../../styles/global.css'
import {Metadata} from 'next'
import {Work_Sans} from 'next/font/google'
import {cn} from '@/utils/toolbox'
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

const workSans = Work_Sans({
  weight: ['300', '400'],
  preload: false
})

export default function Root({children, params}: RootLayoutProps) {
  return (
    <html lang={params.locale}>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='apple-touch-icon' href='/apple-icon?<generated>' type='image/<generated>' sizes='<generated>' />
        <meta content='@56kCloud' name='twitter:site' />
        <meta content='summary' name='twitter:card' />
      </head>
      <body className={cn('relative bg-background isolate', workSans.className)}>{children}</body>
    </html>
  )
}
