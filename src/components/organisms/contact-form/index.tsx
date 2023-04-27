import {contactUsFormData} from '@/models/contact-us-form-data.model'
import {createHsformsPayload} from '@/utils/toolbox'
import {sendEmail} from '@/utils/engine-api'
import {useForm} from 'react-hook-form'
import Button from '@/components/atoms/button'
import Image from 'next/image'
import Modal from '@/components/molecules/modal'
import groupOfPeople from '../../../../public/images/illustrations/group-of-people.webp'

export default function ContactForm({isOpen, setIsOpen, t}) {
  const {register, handleSubmit, reset, formState: {errors}} = useForm()
  
  const firstNameOptions = {
    required: 'Your first name is required'
  }

  const lastNameOptions = {
    required: 'Your last name is required'
  }

  const emailOptions = {
    required: 'An email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email is invalid'
    }
  }

  const messageOptions = {
    required: 'A message is required'
  }

  function closeModal() {
    setIsOpen(false)
    setTimeout(reset, 1000)
  }

  const onSubmit = async(data: contactUsFormData) => {
    try {
      await sendEmail(createHsformsPayload(data))
      closeModal()
    } catch {
      // FIND A GREAT WAY TO HANDLE ERROR
    }
  }

  return (
    <Modal
      t={t}
      isOpen={isOpen}
      title={'Contact Us'} 
      closeModal={closeModal}
      header={
        <Image
          src={groupOfPeople}
          alt={t('altImage')}
          className='hidden sm:block sm:absolute sm:w-[250px] min-[1700px]:w-[400px] sm:left-1/2 sm:-translate-x-[47%]
           sm:-top-20 min-[1700px]:-top-24'/>
      }
    >
      <div className='mt-1'>
        <p
          className='text-base font-normal text-center sm:text-base min-[1700px]:text-lg font-graphik text-blue-medium'>
          {t('modal:text')}
        </p>
      </div>
      {errors.firstName || errors.lastName || errors.email || errors.text ? (
        <div
          className='p-2 sm:p-3 text-sm text-red-600 bg-red-100 rounded-lg pl-7 sm:pl-7 mt-5 
                    min-[1700px]:mt-6 font-graphik sm:text-sm min-[1700px]:text-base'>
          <ul className='list-disc marker:text-xs sm:marker:text-base'>
            {errors.firstName?.message && (<li>{errors.firstName?.message}</li>)}
            {errors.lastName?.message && (<li>{errors.lastName?.message}</li>)}
            {errors.email?.message && (<li>{errors.email?.message}</li>)}
            {errors.message?.message && (<li>{errors.message?.message}</li>)}
          </ul>
        </div>
      ) : null}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-6 text-sm min-[1700px]:text-base sm:mt-7 min-[1700px]:mt-8 
                    placeholder:text-base font-graphik '>
        <input
          {...register('firstName', firstNameOptions)}
          placeholder={t('modal:inputFirstName')}
          className='block w-full p-2 min-[1700px]:p-3 mb-2 sm:mb-3 min-[1700px]:mb-4 border 
                      border-gray-300 rounded-md sm:rounded-lg placeholder:text-blue-medium'/>
        <input
          {...register('lastName', lastNameOptions)}
          placeholder={t('modal:inputLastName')}
          className='block w-full p-2 min-[1700px]:p-3 mb-2 sm:mb-3 min-[1700px]:mb-4 border 
                      border-gray-300 rounded-md sm:rounded-lg placeholder:text-blue-medium'/>
        <input
          {...register('email', emailOptions)}
          placeholder={t('modal:inputEmail')}
          className='block w-full p-2 min-[1700px]:p-3 mb-2 sm:mb-3 min-[1700px]:mb-4 border 
                      border-gray-300 rounded-md sm:rounded-lg placeholder:text-blue-medium'/>
        <textarea
          {...register('message', messageOptions)}
          placeholder={t('modal:inputMessage')}
          className='text-sm min-[1700px]:text-base block w-full p-2 min-[1700px]:p-3 mb-2 
                      sm:mb-3 min-[1700px]:mb-4 border border-gray-300 rounded-md sm:rounded-lg 
                      placeholder:text-blue-medium min-h-[5rem] sm:min-h-[6rem]'/>
        <div>
          <div className='flex items-start mb-4 sm:mb-5 text-xs min-[1700px]:text-sm gap-x-3'>
            <input
              {...register('legalConsent')}
              type='checkbox'
              id='legalConsent' 
              className='translate-y-[3px] rounded-sm h-3 w-3 focus:ring-offset-0 focus:ring-1'/>
            <label htmlFor='legalConsent'>
              {t('modal:checkboxLegalConsent')}
            </label>
          </div>
          <div className='relative text-[10px] leading-tight min-[1700px]:text-xs'>
            <div className='h-[56px] overflow-y-scroll sm:h-20'>
              <p>{t('modal:textLegalConsent1')}
                <br/>
                {t('modal:textLegalConsent2')}
                <br/><br/><br/>
              </p>
            </div>
            <div className='absolute -bottom-[1px] w-full h-10 bg-gradient-to-b from-transparent to-white'>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-7 min-[1700px]:mt-9'>
          <Button
            type='submit'
            size='small'>{t('modal:button')}</Button>
        </div>
      </form>
    </Modal>
  )
}
