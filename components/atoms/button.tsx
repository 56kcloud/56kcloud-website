import React from 'react'
import classNames from '../../utils/classes'
import Img from './img'

type ButtonProps = {
  src?: string
  alt?: string
  icon?: boolean
  style?: 'blueButton' | 'linkContact' | 'linkFooter'
  children: React.ReactNode
  setOpen?: (open: (open: boolean) => boolean) => void
}

export default function Button ({ children, src, alt, icon, style = 'blueButton', setOpen }: ButtonProps) {
  return (
    <button onClick={() => setOpen(open => !open)}
      className={classNames(style === 'blueButton'
        ? 'inline-flex items-center px-4 py-3 text-xs font-medium tracking-widest uppercase border border-transparent rounded-md shadow-sm 2xl:px-6 2xl:text-sm bg-blue-light'
        : style === 'linkContact' ? 'font-normal text-orange-medium' : 'text-blue-medium')}>
      <div className='flex items-center gap-x-4'>
        {children}
        {icon && <Img src={src} alt={alt} width={14} height={14} className='-translate-y-0.5' />}
      </div>
    </button>
  )
}
