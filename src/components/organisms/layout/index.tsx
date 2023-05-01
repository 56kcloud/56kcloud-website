'use client'
import {ReactNode, useState} from 'react'
import {Translate} from 'next-translate'
import ContactForm from '../contact-form'
import Footer from '../footer'
import Navbar from '../navbar'

type ChildrenProps = {
  toggleIsOpen: () => void
}

type LayoutProps = {
  // eslint-disable-next-line no-unused-vars
  children: ((props: ChildrenProps) => ReactNode) | ReactNode
  t: Translate
  fullHeightHero?: boolean
}

export default function Layout({children, t, fullHeightHero=false}: LayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsModalOpen(true)
  }

  return (
    <div>
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
