import React, { useState } from 'react'
import Modal from '../molecules/modal'
import Nav from '../molecules/nav'
import Footer from '../molecules/footer'

type LayoutProps = {
  toggleIsOpen: () => void
  children: React.ReactNode
}

export default function Layout ({ children }: LayoutProps) {
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
        <main>{children({ toggleIsOpen })}</main>
        <footer>
          <Footer version='illustration' toggleIsModalOpen={toggleIsOpen} />
        </footer>
      </div>
    </div>
  )
}
