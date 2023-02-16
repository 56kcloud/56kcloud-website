import { Disclosure } from '@headlessui/react'
import Image from 'next/image'

export default function NavButton ({ children, image, alt }) {
  return (
    <Disclosure.Button className='inline-flex items-center px-6 py-3 ml-8 text-sm font-medium tracking-widest uppercase border border-transparent rounded-md shadow-sm bg-blue-light font-graphik text-blue-dark'>
      <div className='flex items-center gap-x-4'>
        {children}
        <Image src={image} alt={alt} width={14} height={14} className='-translate-y-0.5' />
      </div>
    </Disclosure.Button>
  )
}
