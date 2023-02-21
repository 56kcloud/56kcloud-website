import React from 'react'

import Nav from '../molecules/nav'

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-blue-lighter'>
      <header className='overflow-hidden'>
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  )
}
