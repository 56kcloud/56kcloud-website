import {FieldError, FieldErrorsImpl, FieldValues, Merge, RegisterOptions, UseFormRegister} from 'react-hook-form'
import {HTMLInputTypeAttribute} from 'react'
import {cn} from '@/utils/toolbox'

export type InputProps = {
  register: UseFormRegister<FieldValues>
  name: string
  options?: RegisterOptions<FieldValues>
  label: string
  className?: string
  type?: HTMLInputTypeAttribute
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

export function Input({register, name, options, label, className, type = 'text', error}: InputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className='block text-base font-normal leading-6 text-white'>
        {label}
      </label>
      <div className='mt-2.5'>
        <input
          type={type}
          {...register(name, options)}
          id={name}
          className={cn(
            'block w-full rounded-md border-0 bg-slate-900 px-3.5 py-2 text-slate-400 font-light shadow-sm ring-1 \
            ring-inset ring-slate-700/60 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6',
            error && 'text-red-900 ring-red-500 focus:ring-red-500'
          )}
        />
        {error 
          ? <p
            className='mt-2 text-sm text-red-600'
            id='email-error'>
            {error.message?.toString()}
          </p>
          : null
        }
      </div>
    </div>
  )
}
