import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import Image from 'next/image'
import plusWhite from '../../../../../public/images/icons/plus-white.webp'

type ModalProps = {
  isOpen: boolean
  closeModal: () => void
  header: React.ReactNode
  title: string
  children: React.ReactNode
}

export default function Modal({isOpen, closeModal, header, title, children}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-white bg-opacity-90' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div
            className='flex items-center justify-center min-h-full px-8 text-center -translate-y-6 \
            sm:-translate-y-0  sm:px-0'
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel
                className='relative w-full sm:max-w-xl px-6 py-7 sm:py-10 sm:p-8 text-left top-7 
                align-middle sm:pt-20 min-[1700px]:pt-40 transition-all transform bg-white shadow-xl rounded-2xl'
              >
                <div>
                  <button
                    onClick={closeModal}
                    className='absolute -top-[72px] sm:-top-20 translate-x-[50%] right-0 translate-y-[100%]
                     focus:outline-primary-900 focus:outline-offset-2
                     rounded-full z-50'
                  >
                    <Image src={plusWhite} alt={'altButton'} className='w-12 sm:w-14' />
                  </button>
                  {header}
                </div>
                <Dialog.Title
                  as='h3'
                  className='text-3xl font-semibold text-center sm:text-3xl min-[1700px]:text-4xl 
                  text-blue-medium title'
                >
                  {title}
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
