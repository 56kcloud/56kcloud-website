import '@/styles/global.css'
import {Work_Sans} from 'next/font/google'
import type {AppProps} from 'next/app'

const work_sans = Work_Sans({
  weight: ['300', '400'],
  preload: false
})

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={work_sans.className}>
      <Component {...pageProps}/>
    </main>
  )
}
