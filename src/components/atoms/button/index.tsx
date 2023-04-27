import {ButtonProps, ButtonPropsImpl} from './button.model'
import {ButtonTypes, Link} from './primitive/button/button.model'
import {Spinner} from '../../svgs/icons/spinner'
import {cn} from '@/utils/classes'
import {forwardRef} from 'react'
import BTN from './primitive/button'

function Button<T extends keyof ButtonTypes | Link>(
  props: ButtonPropsImpl<T>,
  ref: React.RefObject<HTMLElement>
) {
  const buttonProps = new ButtonProps<T>(props)

  return (
    <BTN
      {...buttonProps}
      ref={ref}
      className={cn(buttonProps.buttonVariants(), buttonProps.className)}>
      {buttonProps.loading 
        ? <div className='pr-2'><Spinner classNames='text-white w-5 h-5'/></div> 
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
    </BTN>
  )
}

export default forwardRef(Button)
