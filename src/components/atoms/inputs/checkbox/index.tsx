import {FieldValues, RegisterOptions, UseFormRegister} from 'react-hook-form'

export type CheckboxProps = {
  register: UseFormRegister<FieldValues>
  id: string
  name: string
  label: string
  options?: RegisterOptions<FieldValues>
}

export function Checkbox({register, id, name, label, options}: CheckboxProps) {
  return (
    <div className='flex items-center mb-4 sm:mb-5 text-xs min-[1700px]:text-sm gap-x-3'>
      <input
        {...register(name, options)}
        type='checkbox'
        id={id} 
        className='w-3 h-3 rounded-sm focus:ring-offset-0 focus:ring-1'/>
      <label htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
