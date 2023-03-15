import '../styles/global.css'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export const siteTitle = '56k.Cloud'

export default function App ({Component, pageProps}) {
  const {t} = useTranslation('about')

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='title'
          content="Let's Start your Cloud Journey"
        />
        <meta
          name='description'
          content='56K.Cloud is a team of Site Reliability Engineers focusing on Automation, Containers, and your \ 
            Journey to the Cloud.'
        />
        <meta name='og:title' content={siteTitle} />
      </Head>
      <Component {...pageProps} t={t} />
    </>
  )
}
