import {ReactNode} from 'react'

export type RelatedListProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function RelatedList({title, subtitle, children}: RelatedListProps) {
  return (<div className='flex flex-col w-full my-20 space-y-5'>
    <div>
      <h1 className='mb-2 text-4xl text-center line-clamp-2 text-grey-dark title'>
        {title}
      </h1>
      {subtitle && <p className='mb-4 text-center text-grey-light'>{subtitle}</p>}
    </div>
    {children}
  </div>)
}
