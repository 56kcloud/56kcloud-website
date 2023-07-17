import {ReactNode} from 'react'

export async function generateStaticParams() {
  return [{lang: 'en'}, {lang: 'fr'}]
}

export default async function Layout({children}: {children: ReactNode, params: {lang: string}}) {

  return (
    <div>
      <div className='bg-primary-50'>
        {children}
      </div>
    </div>
  )
}
