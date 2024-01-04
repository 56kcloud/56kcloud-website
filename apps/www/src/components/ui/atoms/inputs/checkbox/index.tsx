import {cn} from '@/utils/toolbox'
import {forwardRef} from 'react'

export type CheckboxProps = {
  id: string
  label: string
  className?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps & Omit<JSX.IntrinsicElements['input'], 'type'>>(
  ({id, label, className, ...other}, ref) => {
    return (
      <div className={cn(className, 'flex mb-4 sm:mb-5 text-xs min-[1700px]:text-sm gap-x-3')}>
        <input
          ref={ref}
          {...other}
          type='checkbox'
          id={id}
          className='w-3 h-3 mt-1 rounded-sm focus:ring-offset-0 focus:ring-1 bg-slate-900'
        />
        <label
          htmlFor={id}
          className='text-sm font-light text-slate-400'
        >
          {label}
        </label>
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'

export default Checkbox
