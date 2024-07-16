import {cn} from '@/utils/toolbox'
import {forwardRef} from 'react'

export type CheckboxProps = {
  id: string
  label: string
  className?: string
  inputClassName?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps & Omit<JSX.IntrinsicElements['input'], 'type'>>(
  ({id, label, className, inputClassName, ...other}, ref) => {
    return (
      <div className={cn(className, 'flex items-center mb-4 sm:mb-9 text-xs min-[1700px]:text-sm gap-x-3')}>
        <input
          ref={ref}
          {...other}
          type='checkbox'
          id={id}
          className={cn(inputClassName, 'w-3 h-3 rounded-sm focus:ring-offset-0 focus:ring-1 bg-slate-900')}
        />
        <label
          htmlFor={id}
          className='text-xs font-light text-slate-400'
        >
          {label}
        </label>
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'

export default Checkbox
