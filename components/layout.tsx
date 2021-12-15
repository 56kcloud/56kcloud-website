import Head from 'next/head'
import Nav from './nav'

const Layout = ({ children, title = 'Edeltech', header = (<></>) }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <div className='min-h-screen bg-blue-900'>
          <div className='relative overflow-hidden'>
            <header className='bg-blue-900'>
              <Nav />
              {header}
            </header>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
