import React from 'react'
import Modal from '../molecules/modal'
import Nav from '../molecules/nav'
import Footer from '../molecules/footer'

type LayoutProps = {
  toggleIsOpen: () => void
  children: React.ReactNode
}

export default function Layout ({ children }: LayoutProps) {
  const toggleIsOpen = () => {
    alert('ahasijhfgas')
  }
  return (
    <div>
      {/* <Modal toggleIsOpen={toggleIsOpen} /> */}
      <div className='bg-blue-lighter'>
        <header className='overflow-hidden'>
          <Nav toggleIsModalOpen={toggleIsOpen}/>
        </header>
        <main>{children}</main>
        <footer>
          <Footer version='illustration' />
        </footer>
      </div>
    </div>
  )
}
