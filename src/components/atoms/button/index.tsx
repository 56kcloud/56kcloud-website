import {ButtonProps, ButtonPropsImpl} from './button.model'
import {ButtonTypes, Link} from './primitive/button/button.model'
import {Spinner} from '../../svgs/icons/spinner'
import {cn} from '@/utils/classes'
import {forwardRef} from 'react'
import PrimitiveButton from './primitive/button'

function Button<T extends keyof ButtonTypes | Link>(
  props: ButtonPropsImpl<T>,
  ref: React.RefObject<HTMLElement>
) {
  const buttonProps = new ButtonProps<T>(props)

  return (
    <PrimitiveButton
      {...buttonProps}
      ref={ref}
      className={cn(buttonProps.buttonVariants(), buttonProps.className)}>
      {buttonProps.loading 
        ? <div className='pr-2'><Spinner className='w-5 h-5 text-white'/></div> 
        : buttonProps.leading 
          ? <span>{buttonProps.leading}</span> 
          : null
      }
      <span className={buttonProps.alignmentClasses()}>{buttonProps.children}</span>
      {!buttonProps.loading 
        ? buttonProps.trailing 
          ? <span>{buttonProps.trailing}</span> 
          : null 
        : null
      }
    </PrimitiveButton>
  )
}

export default forwardRef(Button)
