'use client'
import {NextSeo} from 'next-seo'
import {ReactNode, useState} from 'react'
import {Translate} from 'next-translate'
import {hostname} from '../../../../config'
import ContactForm from '../contact-form'
import Footer from '../footer'
import Navbar from '../navbar'

type ChildrenProps = {
  toggleIsOpen: () => void,
}

type LayoutProps = {
  // eslint-disable-next-line no-unused-vars
  children: ((props: ChildrenProps) => ReactNode) | ReactNode
  t: Translate
  fullHeightHero?: boolean
  title?: string,
  description?: string,
  images?: Array<{
    url: string,
    alt: string
  }>
}

export default function Layout({
  children,
  t,
  fullHeightHero=false,
  title='',
  description='',
  images=[{
    url: `${hostname}/images/og/train.webp`,
    alt: '56k.cloud logo'
  }]
}: LayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsModalOpen(true)
  }

  return (
    <div>
      <NextSeo
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
      <ContactForm
        t={t}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
      <div className='bg-primary-50'>
        <header>
          <Navbar
            fullHeightHero={fullHeightHero}
            toggleIsModalOpen={toggleIsOpen}
            t={t}/>
        </header>
        <main>
          {typeof children === 'function' ? children({toggleIsOpen}) : children}
        </main>
        <Footer
          version='illustration'
          toggleIsModalOpen={toggleIsOpen}
        />
      </div>
    </div>
  )
}
