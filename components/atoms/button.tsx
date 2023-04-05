import Img from './img'
import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import classNames from '../../utils/classes'

type ButtonProps = {
  src?: string
  alt?: string
  icon?: boolean
  style?: 'blueButton' | 'linkContact' | 'linkFooter' | 'sliderButton'
  children: React.ReactNode
  type?: string
  onClick?: () => void
  className?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button ({children, src, alt, icon, style = 'blueButton', type, onClick, className}
  : ButtonProps) {
  return (
    <button type={type} onClick={onClick}
      className={classNames(style === 'blueButton'
        ? 'inline-flex items-center px-4 py-3 text-xs font-medium tracking-widest uppercase border border-transparent \
         rounded-md shadow-sm 2xl:px-6 2xl:text-sm bg-blue-light'
        : style === 'linkContact' ? 'font-normal text-orange-medium' 
          : style === 'linkFooter' ? 'text-blue-medium flex items-start'
            : className)}>
      <div className='flex items-center gap-x-4'>
        {children}
        {icon && <Img src={src} alt={alt} className='-translate-y-0.5 w-[14px]' />}
      </div>
    </button>
  )
}
