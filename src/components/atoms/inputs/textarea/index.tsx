import {FieldValues, RegisterOptions, UseFormRegister} from 'react-hook-form'
import {cn} from '@/utils/classes'

export type TextAreaProps = {
  register: UseFormRegister<FieldValues>
  name: string
  options?: RegisterOptions<FieldValues>
  placeholder?: string
  className?: string
}

export function TextArea({register, name, options, placeholder, className}: TextAreaProps) {
  return (
    <textarea
      {...register(name, options)}
      placeholder={placeholder}
      className={cn('text-sm min-[1700px]:text-base block w-full p-2 min-[1700px]:p-3 mb-2 sm:mb-3 min-[1700px]:mb-4 \
       border border-gray-300 rounded-md sm:rounded-lg placeholder:text-blue-medium min-h-[5rem] sm:min-h-[6rem]',
      className)}
    />
  )
}
