import {ChevronDownIcon} from '@heroicons/react/outline'
import {FieldValues, UseFormRegister, UseFormSetValue} from 'react-hook-form'
import {Fragment, useEffect, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {cn} from '@/utils/classes'
import Button from '@/components/atoms/button'

export type ListBoxProps = {
  data: Array<string>
  defaultValue: string
  register: UseFormRegister<FieldValues>
  name: string
  setValue: UseFormSetValue<FieldValues>
}

export default function ListBox({data = [], defaultValue = null, register, name, setValue}: ListBoxProps) {
  register(name)
  const [selected, setSelected] = useState(defaultValue)

  useEffect(() => {
    selected && setValue(name, selected)
  }, [selected])

  return (
    <Listbox
      value={selected}
      onChange={setSelected}
    >
      {({open}) => (
        <div className='relative'>
          <Button
            as={Listbox.Button}
            variant='ghost'
            className='w-full'
            trailing={
              <ChevronDownIcon
                className={cn(open ? 'rotate-180' : '', 'ease-in duration-100 w-5 h-5 ml-2')}
                aria-hidden='true'
              />
            }
          >
            {selected}
          </Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options
              className='absolute -left-[2px] w-full py-1 mt-3 xl:text-sm 2xl:text-base rounded-md ring-1
             ring-primary-500'>
              {data.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  className='flex items-center justify-center cursor-pointer h-9 hover:bg-primary-50'
                  value={option}
                >
                  {({selected}) => (
                    <div className={cn(selected ? 'font-medium' : 'font-normal')}>
                      {option}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}
