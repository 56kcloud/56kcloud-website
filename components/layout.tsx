import React from 'react'
import Nav from './nav'

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className='overflow-hidden'>
        <Nav />
      </header>
      <main>{children}</main>
    </>
  )
}
