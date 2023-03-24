import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import {contactUsFormData} from '../../models/contact-us-form-data.model'
import {createHsformsPayload} from '../../utils/toolbox'
import {sendEmail} from '../../utils/engine-api'
import {useForm} from 'react-hook-form'
import Button from '../atoms/button'
import Img from '../atoms/img'
import useTranslation from 'next-translate/useTranslation'

export default function Modal ({isOpen, setIsOpen}) {
  const {t} = useTranslation('modal')
  const {register, handleSubmit, reset, formState: {errors}} = useForm()
  
  const nameOptions = {
    required: 'Your name is required'
  }

  const emailOptions = {
    required: 'An email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email is invalid'
    }
  }

  const textOptions = {
    required: 'A message is required'
  }

  function closeModal () {
    setIsOpen(false)
    setTimeout(reset, 1000)
  }

  const onSubmit = async (data: contactUsFormData) => {
    try {
      await sendEmail(createHsformsPayload(data))
      closeModal()
    } catch {
      // FIND A GREAT WAY TO HANDLE ERROR
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
          <div className='fixed inset-0 bg-white bg-opacity-90' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-full px-8 text-center sm:px-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full sm:max-w-xl px-6 py-10 sm:p-8 text-left top-10 align-middle \ 
                sm:pt-44 transition-all transform bg-white shadow-xl rounded-2xl'>
                <div>
                  <button onClick={closeModal}
                    className='absolute -top-[72px] sm:-top-20 translate-x-[50%] right-0 translate-y-[100%]'>
                    <Img src='/images/plus-white.png' alt={t('altButton')} className='w-12 sm:w-14' />
                  </button>
                  <Img src='/images/modal.png' alt={t('altImage')} className='hidden sm:block sm:absolute \ 
                    sm:w-[400px] sm:left-1/2 sm:-translate-x-[47%] sm:-top-24' />
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
                  <input {...register('name', nameOptions)} placeholder={t('inputName')}
                    className='block w-full p-3 mb-4 border border-gray-300 rounded-lg placeholder:text-blue-medium' />
                  <input {...register('email', emailOptions)} placeholder={t('inputEmail')}
                    className='block w-full p-3 mb-4 border border-gray-300 rounded-lg placeholder:text-blue-medium' />
                  <textarea {...register('text', textOptions)} placeholder={t('inputMessage')}
                    className='block w-full p-3 mb-4 border border-gray-300 rounded-lg placeholder:text-blue-medium \
                    min-h-[7rem]' />
                  <div className='text-xs'>
                    <div className='flex items-start mb-5 text-sm gap-x-3'>
                      <input {...register('legalConsent')} type='checkbox' id='legalConsent' 
                        className='translate-y-[3px] rounded-sm h-3 w-3 focus:ring-offset-0 focus:ring-1' />
                      <label htmlFor='legalConsent'>
                        {t('checkboxLegalConsent')}
                      </label>
                    </div>
                    <div className='relative'>
                      <div className='h-20 overflow-y-scroll'>
                        <p>{t('textLegalConsent1')}
                          <br />
                          {t('textLegalConsent2')}
                          <br /><br /><br />
                        </p>
                      </div>
                      <div className='absolute -bottom-[1px] w-full h-10 bg-gradient-to-b from-transparent \ 
                      to-white'></div>
                    </div>
                  </div>
                  <div className='flex justify-center mt-9'>
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
