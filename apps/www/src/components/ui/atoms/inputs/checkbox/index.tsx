import {FieldValues, RegisterOptions, UseFormRegister} from 'react-hook-form'
import {cn} from '@/utils/toolbox'

export type CheckboxProps = {
  register: UseFormRegister<FieldValues>
  id: string
  name: string
  label: string
  options?: RegisterOptions<FieldValues>
  className?: string
}

export function Checkbox({register, id, name, label, options, className}: CheckboxProps) {
  return (
    <div className={cn(className, 'flex mb-4 sm:mb-5 text-xs min-[1700px]:text-sm gap-x-3')}>
      <input
        {...register(name, options)}
        type='checkbox'
        id={id}
        className='w-3 h-3 mt-1 rounded-sm focus:ring-offset-0 focus:ring-1 bg-slate-900'
      />
      <label htmlFor={id} className='text-sm font-light text-slate-400'>
        {label}
      </label>
    </div>
  )
}
