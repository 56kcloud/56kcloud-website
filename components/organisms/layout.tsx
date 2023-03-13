import Footer from '../molecules/footer'
import Modal from '../molecules/modal'
import Nav from '../molecules/nav'
import React, {ReactNode, useState} from 'react'

type ChildrenProps = {
  toggleIsOpen: () => void
}

type LayoutProps = {
  // eslint-disable-next-line no-unused-vars
  children: ((props: ChildrenProps) => ReactNode) | ReactNode
}

export default function Layout ({children}: LayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsModalOpen(true)
  }

  return (
    <div>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
      <div className='bg-blue-lighter'>
        <header className='overflow-hidden'>
          <Nav toggleIsModalOpen={toggleIsOpen}/>
        </header>
        <main>{typeof children === 'function' ? children({toggleIsOpen}) : children}</main>
        <footer>
          <Footer version='illustration' toggleIsModalOpen={toggleIsOpen} />
        </footer>
      </div>
    </div>
  )
}
