import Nav from './nav'

// eslint-disable-next-line no-undef
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
