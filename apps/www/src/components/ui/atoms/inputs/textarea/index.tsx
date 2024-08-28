import {InputProps} from '../input'
import {cn} from '@/utils/toolbox'
import {forwardRef} from 'react'

export type TextAreaProps = InputProps

const TextArea = forwardRef<HTMLTextAreaElement, InputProps & JSX.IntrinsicElements['textarea']>(
  ({id, label, className, error, ...other}, ref) => {
    return (
      <div className={className}>
        <label
          htmlFor={id}
          className='block text-sm leading-[22px] font-normal text-slate-50'
        >
          {label}
        </label>
        <div className='mt-2.5'>
          <textarea
            id={id}
            ref={ref}
            {...other}
            rows={4}
            className={cn(
              'block w-full rounded-md border-0 bg-slate-900 px-3.5 py-2 text-slate-400 font-light shadow-sm ring-1 \
              ring-inset ring-slate-800 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6',
              className,
              error && 'text-red-900 ring-red-500 focus:ring-red-500'
            )}
          />
          {error ? (
            <p
              className='mt-2 text-sm text-red-600'
              id={`${id}-error`}
            >
              {error}
            </p>
          ) : null}
        </div>
      </div>
    )
  }
)
TextArea.displayName = 'TextArea'

export default TextArea
