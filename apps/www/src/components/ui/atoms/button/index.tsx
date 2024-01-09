import {ButtonProps, ButtonPropsImpl} from './button.model'
import {Fragment, JSXElementConstructor, forwardRef, isValidElement} from 'react'
import {PropsWithChildren} from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cn} from '@/utils/toolbox'
import Spinner from '@/components/ui/svgs/icons/spinner'

function Button(props: ButtonPropsImpl, ref: React.ForwardedRef<HTMLButtonElement>) {
  const buttonProps = new ButtonProps(props)
  const Comp = buttonProps.asChild ? Slot : 'button'

  const buttonPropsChildren = buttonProps.children
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let ChildType: string | JSXElementConstructor<any> = Fragment
  let childProps
  let children = buttonPropsChildren

  if (isValidElement(buttonPropsChildren) && buttonProps.asChild) {
    ChildType = buttonPropsChildren.type
    childProps = buttonPropsChildren.props as PropsWithChildren<unknown>
    children = childProps.children
  }

  return (
    <Comp
      ref={ref}
      className={cn(buttonProps.buttonVariants(), buttonProps.className)}
      {...buttonProps.HTMLProps}
    >
      <ChildType {...childProps}>
        {buttonProps.loading ? (
          <div className='pr-2'>
            <Spinner />
          </div>
        ) : buttonProps.leading ? (
          <span className='pr-2'>{buttonProps.leading}</span>
        ) : null}
        <div className={buttonProps.alignmentClasses()}>{children}</div>
        {buttonProps.loading ? null : buttonProps.trailing ? (
          <span className='pl-2'>{buttonProps.trailing}</span>
        ) : null}
      </ChildType>
    </Comp>
  )
}

export default forwardRef(Button)
