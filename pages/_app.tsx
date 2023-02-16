import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Head from 'next/head'

export const siteTitle = 'Edeltech'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content="We're a team of passionate engineers ready to develop your next web, mobile or desktop applications."
        />
        <meta name='og:title' content={siteTitle} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
