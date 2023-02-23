import React from 'react'

import Nav from '../molecules/nav'
import Footer from '../molecules/footer'

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-blue-lighter'>
      <header className='overflow-hidden'>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
