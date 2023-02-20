import React from 'react'
import Nav from './nav'

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-blue-lighter'>
      <header className='overflow-hidden'>
        <Nav position='absolute' />
      </header>
      <main>{children}</main>
    </div>
  )
}
