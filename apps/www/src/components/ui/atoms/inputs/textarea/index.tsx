import {FieldValues, RegisterOptions, UseFormRegister} from 'react-hook-form'
import {cn} from '@/utils/toolbox'

export type TextAreaProps = {
  register: UseFormRegister<FieldValues>
  name: string
  options?: RegisterOptions<FieldValues>
  label: string
  className?: string
}

export function TextArea({register, name, options, label, className}: TextAreaProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className='block text-sm font-semibold leading-6 text-white'>
        {label}
      </label>
      <div className='mt-2.5'>
        <textarea
          {...register(name, options)}
          rows={4}
          className={cn(
            'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 \
        ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6',
            className)}
        />
      </div>
    </div>
  )
}
