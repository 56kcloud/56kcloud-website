import {ButtonTypes, Link, PrimitiveButtonProps, PrimitiveButtonPropsImpl} from './button.model'
import {forwardRef} from 'react'

function PrimitiveButton<T extends keyof ButtonTypes | Link>(
  props: PrimitiveButtonPropsImpl<T>,
  ref: React.RefObject<HTMLElement>
) {
  const buttonProps = new PrimitiveButtonProps<T>(props)

  return (
    <buttonProps.as
      {...buttonProps.HTMLProps}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
      className={buttonProps.className}>
      {buttonProps.children}
    </buttonProps.as>
  )
}

export default forwardRef(PrimitiveButton)
