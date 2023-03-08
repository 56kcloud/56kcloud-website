import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Img from '../atoms/img'
import useTranslation from 'next-translate/useTranslation'
import Button from '../atoms/button'

export default function Modal ({ isOpen, setIsOpen }) {
  const { t } = useTranslation('modal')

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
          <div className='fixed inset-0 bg-white bg-opacity-80' />
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
              <Dialog.Panel className='relative w-full max-w-xs sm:max-w-md p-6 sm:p-8 text-left top-10 align-middle \
                 pt-40 sm:pt-52 transition-all transform bg-white shadow-xl rounded-2xl'>
                <div>
                  <button onClick={closeModal}
                    className='absolute -top-20 translate-x-[50%] right-0 translate-y-[100%]'>
                    <Img src='/images/plus-white.png' alt='' width={50} height={50} />
                  </button>
                  <Img src='/images/modal.png' alt={t('altImage')} width={1920} height={0}
                    className='absolute -top-14 sm:-top-20 left-2' />
                </div>
                <Dialog.Title
                  as='h3'
                  className='text-3xl font-semibold text-center sm:text-4xl text-blue-medium title'
                >
                  {t('title')}
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-base font-normal text-center sm:text-lg font-graphik text-blue-medium'>
                    {t('text')}
                  </p>
                </div>
                <form className='mt-6 text-sm sm:text-base sm:mt-9 placeholder:text-base font-graphik '>
                  <input type='text' className='block w-full p-3 mb-4 border border-gray-300 rounded-lg \
                   placeholder:text-blue-medium' placeholder={t('inputName')} />
                  <input type='email' className='block w-full p-3 mb-4 border border-gray-300 rounded-lg \
                   placeholder:text-blue-medium' placeholder={t('inputEmail')} />
                  <input className='block w-full p-3 mb-4 border border-gray-300 rounded-lg \
                   placeholder:text-blue-medium min-h-[7rem]' placeholder={t('inputMessage')} />
                </form>
                <div className='flex justify-center mt-6'>
                  <Button setOpen={closeModal}>{t('button')}</Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
