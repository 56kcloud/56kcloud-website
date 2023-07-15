import {HeaderProps} from '@/components/organisms/header/header'
import {ReactNode} from 'react'
import {getSingleTypeProps} from '@/utils/api/single-type'
import Navbar from '@/components/organisms/header/header'

// export async function generateStaticParams() {
//   return [{lang: 'en'}, {lang: 'fr'}]
// }

export default async function Layout({children}: {children: ReactNode, params: {lang: string}}) {

  return (
    <div>
      <div className='bg-primary-50'>
        <header>
          {/* <Navbar {...headerProps}/> */}
        </header>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}
