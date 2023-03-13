import Img from './img'
import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import classNames from '../../utils/classes'

type ButtonProps = {
  src?: string
  alt?: string
  icon?: boolean
  style?: 'blueButton' | 'linkContact' | 'linkFooter'
  children: React.ReactNode
  onClick: () => void
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button ({children, src, alt, icon, style = 'blueButton', onClick}: ButtonProps) {
  return (
    <button onClick={onClick}
      className={classNames(style === 'blueButton'
        ? 'inline-flex items-center px-4 py-3 text-xs font-medium tracking-widest uppercase border border-transparent \
         rounded-md shadow-sm 2xl:px-6 2xl:text-sm bg-blue-light'
        : style === 'linkContact' ? 'font-normal text-orange-medium' : 'text-blue-medium')}>
      <div className='flex items-center gap-x-4'>
        {children}
        {icon && <Img src={src} alt={alt} width={14} height={14} className='-translate-y-0.5' />}
      </div>
    </button>
  )
}
