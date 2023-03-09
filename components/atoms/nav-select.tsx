import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import classNames from '../../utils/classes'
import { useRouter } from 'next/router'

export default function NavSelect () {
  const router = useRouter()
  const [selected, setSelected] = useState(router.locale)

  useEffect(() => {
    setSelected(router.locale)
  }, [router])

  useEffect(() => {
    selected !== router.locale && router.push(`/${router.pathname}`, `/${router.pathname}`, { locale: selected })
  }, [selected])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative'>
        <Listbox.Button className='flex items-center justify-between w-12'>
          <span className='font-medium uppercase xl:text-sm 2xl:text-base'>{selected}</span>
          <ChevronDownIcon className='w-5 h-5 text-blue-medium' aria-hidden='true' />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute -left-[2px] w-full py-1 mt-3 xl:text-sm 2xl:text-base rounded-md ring-1
          ring-blue-medium'>
            {router.locales.map((language, idx) => (
              <Listbox.Option key={idx} className='flex items-center justify-center uppercase cursor-pointer h-9'
                value={language}
              >
                {({ selected }) => (
                  <>
                    <div className={classNames(selected ? 'font-medium' : 'font-normal')}>{language}</div>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
