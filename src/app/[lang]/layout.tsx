// import {Metadata} from 'next'
// import {NextSeo} from 'next-seo'
import {ReactNode, useState} from 'react'
// import ContactForm from '@/components/organisms/contact-form'
import {getSingleTypeProps} from '@/utils/api/single-type'
import Footer from '@/components/organisms/footer'
import Navbar from '@/components/organisms/navbar'
// import useTranslation from 'next-translate/useTranslation'
 
// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to Next.js'
// }

export default async function Layout({children, params}: {children: ReactNode, params: {lang: string}}) {
  const headerProps = await getSingleTypeProps('header', params.lang)

  return (
    <div>
      <div className='bg-primary-50'>
        <header>
          <Navbar {...headerProps}/>
        </header>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}
