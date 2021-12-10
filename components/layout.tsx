import Nav from './nav'

// eslint-disable-next-line no-undef
export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='min-h-screen'>
        <div className='relative overflow-hidden'>
          <header className='relative bg-blue-900'>
            <Nav />
          </header>
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}
