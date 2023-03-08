import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Img from '../atoms/img'
import NavButton from '../atoms/nav-button'

export default function Modal ({ isOpen, setIsOpen }) {
  function closeModal () {
    setIsOpen(false)
  }

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
          <div className='fixed inset-0 bg-white bg-opacity-50' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-full text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-md p-8 text-left top-10 align-middle pt-52 \
                transition-all transform bg-white shadow-xl rounded-2xl'>
                <div>
                  <Img src='/images/modal.png' alt='Group of people' width={1920} height={0}
                    className='absolute -top-20' />
                </div>
                <Dialog.Title
                  as='h3'
                  className='text-4xl font-semibold text-center text-blue-medium title'
                >
                    Let's talk
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-lg font-normal text-center font-graphik text-blue-medium'>
                    Find out how 56K.Cloud can benefit you!
                  </p>
                </div>
                <form className='text-base mt-9 placeholder:text-base font-graphik '>
                  <input type='text' className='block w-full p-3 mb-4 border border-gray-300 rounded-lg \
                   placeholder:text-blue-medium' placeholder='Your Name' />
                  <input type='email' className='block w-full p-3 mb-4 border border-gray-300 rounded-lg \
                   placeholder:text-blue-medium' placeholder='Your Email' />
                  <input className='block w-full p-3 mb-4 border border-gray-300 rounded-lg \
                   placeholder:text-blue-medium min-h-[7rem]' placeholder='Your Message...' />
                </form>
                <div className='flex justify-center mt-6'>
                  <NavButton onClick={closeModal}>Let's talk</NavButton>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
