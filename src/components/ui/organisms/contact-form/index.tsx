import {Checkbox, CheckboxProps} from '../../atoms/inputs/checkbox'
import {Dispatch, SetStateAction, useState} from 'react'
import {Input, InputProps} from '../../atoms/inputs/input'
import {ModalProps} from '@/models/modal.model'
import {TextArea, TextAreaProps} from '../../atoms/inputs/textarea'
import {contactUsFormData} from '@/models/contact-us-form-data.model'
import {createHsformsPayload} from '@/utils/toolbox'
import {sendEmail} from '@/utils/hubspot'
import {useForm} from 'react-hook-form'
import Button from '../../atoms/button'
import Image from 'next/image'
import Modal from '../../molecules/modal'
import useTranslation from 'next-translate/useTranslation'

type ContactFormProps = ModalProps & {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function ContactForm({isOpen, setIsOpen, ...props}: ContactFormProps) {
  const {register, handleSubmit, reset, formState: {errors}} = useForm()
  const [serverError, setServerError] = useState<string | null>(null)
  const hasAnyError = errors.firstName || errors.lastName || errors.email || errors.text || serverError
  const {t} = useTranslation('modal')

  const firstNameInput: InputProps = {
    register,
    name:'firstName',
    options: {
      required: 'Your first name is required'
    },
    placeholder: t('inputFirstName')
  }
  const lastNameInput: InputProps = {
    register,
    name:'lastName',
    options: {
      required: 'Your last name is required'
    },
    placeholder: t('inputLastName')
  }
  const emailInput: InputProps = {
    register,
    name:'email',
    options: {
      required: 'An email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Email is invalid'
      }
    },
    placeholder: t('inputEmail')
  }

  const messageInput: TextAreaProps = {
    register,
    name:'message',
    options: {
      required: 'A message is required'
    },
    placeholder: t('inputMessage')
  }

  const legalConsentInput: CheckboxProps = {
    register,
    id: 'legalConsent',
    name:'legalConsent',
    label: t('checkboxLegalConsent')
  }

  function closeModal() {
    setIsOpen(false)
    setTimeout(reset, 1000)
  }

  async function onSubmit(data: contactUsFormData){
    try {
      await sendEmail(createHsformsPayload(data))
      closeModal()
    } catch (e) {
      setServerError((e as Error).toString())
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      title={'Contact Us'}
      closeModal={closeModal}
      header={
        <Image
          {...props.image}
          alt='contact-us-illustration'
          className='hidden sm:block sm:absolute sm:w-[250px] min-[1700px]:w-[400px] sm:left-1/2 sm:-translate-x-[47%]
           sm:-top-20 min-[1700px]:-top-24'/>
      }
    >
      <div className='mt-1'>
        <p
          className='text-base font-normal text-center sm:text-base min-[1700px]:text-lg font-graphik text-blue-medium'>
          {props.subtitle}
        </p>
      </div>
      {hasAnyError ? (
        <div
          className='p-2 sm:p-3 text-sm text-red-600 bg-red-100 rounded-lg pl-7 sm:pl-7 mt-5 
                    min-[1700px]:mt-6 font-graphik sm:text-sm min-[1700px]:text-base'>
          <ul className='list-disc marker:text-xs sm:marker:text-base'>
            {errors.firstName?.message && (<li>{errors.firstName.message.toString()}</li>)}
            {errors.lastName?.message && (<li>{errors.lastName.message.toString()}</li>)}
            {errors.email?.message && (<li>{errors.email.message.toString()}</li>)}
            {errors.message?.message && (<li>{errors.message.message.toString()}</li>)}
            {serverError && (<li>{serverError}</li>)}
          </ul>
        </div>
      ) : null}
      <form
        onSubmit={handleSubmit((data) => onSubmit(data as contactUsFormData))}
        className='mt-6 text-sm min-[1700px]:text-base sm:mt-7 min-[1700px]:mt-8 
                    placeholder:text-base font-graphik '>
        <Input {...firstNameInput}/>
        <Input {...lastNameInput}/>
        <Input {...emailInput}/>
        <TextArea {...messageInput}/>
        <div>
          <Checkbox {...legalConsentInput}/>
          <div className='relative text-[10px] leading-tight min-[1700px]:text-xs'>
            <div className='h-[56px] overflow-y-scroll sm:h-20'>
              <p>{t('textLegalConsent1')}
                <br/>
                {t('textLegalConsent2')}
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
            size='small'>
            {props.submitButtonTitle}
          </Button>
        </div>
      </form>
    </Modal>
  )
}
