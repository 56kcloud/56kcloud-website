import './global.css'
// import {Metadata} from 'next'
// import {NextSeo} from 'next-seo'
import {ReactNode, useState} from 'react'
// import ContactForm from '@/components/organisms/contact-form'
import Footer from '@/components/organisms/footer'
import Navbar from '@/components/organisms/navbar'
// import useTranslation from 'next-translate/useTranslation'
 
// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to Next.js'
// }

export default function RootLayout({children}: {children: ReactNode}) {
  // const {t} = useTranslation()

  // const [isModalOpen, setIsModalOpen] = useState(false)

  // const toggleIsOpen = () => {
  //   setIsModalOpen(true)
  // }

  return (
    <html lang='en'>
      <body> 
        <div>
          {/* <NextSeo
            title={title}
            description={description}
            openGraph={{
              url: hostname,
              title: title,
              description: description,
              images: images,
              siteName: '56k.cloud'
            }}
            twitter={{
              handle: '@56k.cloud',
              site: '@56k.cloud',
              cardType: 'summary_large_image'
            }}
          />
           */}
          {/* <ContactForm
            t={t}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
          />  */}
          <div className='bg-primary-50'>
            <header>
              <Navbar/>
            </header>
            <main>
              {children}
            </main>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
