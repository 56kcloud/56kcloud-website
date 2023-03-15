import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import {sendEmail} from '../../utils/engine-api'
import {useForm} from 'react-hook-form'
import Button from '../atoms/button'
import Img from '../atoms/img'
import useTranslation from 'next-translate/useTranslation'

export default function Modal ({isOpen, setIsOpen}) {
  const {t} = useTranslation('modal')
  const {register, handleSubmit, formState: {errors}} = useForm<{name: string, email: string, text: string }>()

  const emailOptions = {
    required: 'An email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Email is invalid'
    }
  }

  console.log(errors)

  function closeModal () {
    setIsOpen(false)
  }

  const onSubmit = async (data: any) => {
    try {
      await sendEmail(data.name, data.email, data.text)
    } catch {

    }
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
                {errors.name || errors.email || errors.text ? (
                  <div className='p-3 text-sm text-red-600 bg-red-100 rounded-lg pl-7 mt-7 font-graphik sm:text-base'>
                    <ul className='list-disc'>
                      {errors.name?.message && (<li>{errors.name?.message}</li>)}
                      {errors.email?.message && (<li>{errors.email?.message}</li>)}
                      {errors.text?.message && (<li>{errors.text?.message}</li>)}
                    </ul>
                  </div>
                ) : null}
                <form onSubmit={handleSubmit(onSubmit)}
                  className='mt-6 text-sm sm:text-base sm:mt-9 placeholder:text-base font-graphik '>
                  <input {...register('name', {required: 'Your name is required'})} placeholder={t('inputName')}
                    className='block w-full p-3 mb-4 border border-gray-300 rounded-lg placeholder:text-blue-medium' />
                  <input {...register('email', emailOptions)} placeholder={t('inputEmail')}
                    className='block w-full p-3 mb-4 border border-gray-300 rounded-lg placeholder:text-blue-medium' />
                  <textarea {...register('text', {required: 'A message is required'})} placeholder={t('inputMessage')}
                    className='block w-full p-3 mb-4 border border-gray-300 rounded-lg placeholder:text-blue-medium \
                    min-h-[7rem]' />
                  <div className='flex justify-center mt-6'>
                    <Button type='submit'>{t('button')}</Button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
