import {ButtonProps, ButtonPropsImpl, ButtonTypes, Link} from './button.model'
import {forwardRef} from 'react'

function Button<T extends keyof ButtonTypes | Link>(
  props: ButtonPropsImpl<T>,
  ref: React.RefObject<HTMLElement>
) {
  const buttonProps = new ButtonProps(props)

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

export default forwardRef(Button)
