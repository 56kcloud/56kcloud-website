import {FieldValues, RegisterOptions, UseFormRegister} from 'react-hook-form'
import {HTMLInputTypeAttribute} from 'react'
import {cn} from '@/utils/toolbox'

export type InputProps = {
  register: UseFormRegister<FieldValues>
  name: string
  options?: RegisterOptions<FieldValues>
  placeholder?: string
  className?: string
  type?: HTMLInputTypeAttribute
}

export function Input({register, name, options, placeholder, className, type = 'text'}: InputProps) {
  return (
    <input
      type={type}
      {...register(name, options)}
      placeholder={placeholder}
      className={cn('block w-full p-2 min-[1700px]:p-3 mb-2 sm:mb-3 min-[1700px]:mb-4 border border-gray-300 \
       rounded-md sm:rounded-lg placeholder:text-blue-medium', className)}
    />
  )
}
