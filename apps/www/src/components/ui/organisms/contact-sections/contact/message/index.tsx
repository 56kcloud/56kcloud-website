import {ArrowRightIcon, CheckCircleIcon} from '@heroicons/react/24/outline'
import {Controller, RegisterOptions, useForm} from 'react-hook-form'
import {Dictionary} from '@/models/dictionary.model'
import {contactUsFormData} from '@/models/contact-us-form-data.model'
import {createHsformsPayload} from '@/utils/toolbox'
import {sendEmail} from '@/utils/hubspot'
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import Button from '@/components/ui/atoms/button'
import Checkbox, {CheckboxProps} from '@/components/ui/atoms/inputs/checkbox'
import ConfettiExplosion from 'react-confetti-explosion'
import Input, {InputProps} from '@/components/ui/atoms/inputs/input'
import TextArea, {TextAreaProps} from '@/components/ui/atoms/inputs/textarea'

export default function Message(props: {dictionary: Dictionary}) {
  const Router = useRouter()
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<contactUsFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      legalConsent: false
    }
  })
  const [serverError, setServerError] = useState<string | null>(null)
  const [isExploding, setIsExploding] = useState(false)
  const [showThanksMessage, setShowThanksMessage] = useState(false)

  const firstNameInputName = 'firstName'
  const firstNameInputProps: InputProps = {
    id: firstNameInputName,
    label: props.dictionary.inputFirstName,
    error: errors.firstName?.message?.toString()
  }
  const firstNameInputRules: RegisterOptions<contactUsFormData, 'firstName'> = {
    required: 'Your first name is required'
  }

  const lastNameInputName = 'lastName'
  const lastNameInputProps: InputProps = {
    id: lastNameInputName,
    label: props.dictionary.inputLastName,
    error: errors.lastName?.message?.toString()
  }
  const lastNameInputRules: RegisterOptions<contactUsFormData, 'lastName'> = {
    required: 'Your last name is required'
  }

  const emailInputName = 'email'
  const emailInputProps: InputProps = {
    id: emailInputName,
    label: props.dictionary.inputEmail,
    error: errors.email?.message?.toString()
  }
  const emailInputRules: RegisterOptions<contactUsFormData, 'email'> = {
    required: 'An email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email is invalid'
    }
  }

  const messageInputName = 'message'
  const messageInputProps: TextAreaProps = {
    id: messageInputName,
    label: props.dictionary.inputMessage,
    error: errors.message?.message?.toString()
  }
  const messageInputRules: RegisterOptions<contactUsFormData, 'message'> = {
    required: 'A message is required'
  }

  const legalConsentInputName = 'legalConsent'
  const legalConsentInputProps: CheckboxProps = {
    id: legalConsentInputName,
    label: props.dictionary.checkboxLegalConsent
  }

  async function onSubmit(data: contactUsFormData) {
    try {
      await sendEmail(createHsformsPayload(data))
      Router.push('#contact-section')
      setIsExploding(true)
      setShowThanksMessage(true)
      reset()
    } catch (e) {
      setServerError((e as Error).toString())
      setIsExploding(false)
    }
  }

  return (
    <div className='px-2 pt-10 pb-4 h-full'>
      {isExploding && (
        <ConfettiExplosion
          force={0.8}
          duration={3000}
          width={1920}
        />
      )}
      {showThanksMessage ? (
        <div className='flex flex-col items-center justify-center h-full'>
          <CheckCircleIcon className='mx-auto text-white w-14 h-14' />
          <h3 className='mt-2 text-sm font-semibold text-white'>{props.dictionary.messageSent}</h3>
          <p className='max-w-xs text-sm text-center text-gray-300'>{props.dictionary.messageSentThanks}</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit((data) => onSubmit(data as contactUsFormData))}
          className='!max-w-full space-y-4 lg:space-y-2'
        >
          {serverError ? (
            <div
              className='p-2 sm:p-3 text-sm text-red-600 bg-red-500/10 border border-red-500/50 rounded-lg \
                        pl-7 sm:pl-7 mt-5 min-[1700px]:mt-6 sm:text-sm min-[1700px]:text-base'
            >
              {serverError}
            </div>
          ) : null}
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
            <Controller
              name={firstNameInputName}
              rules={firstNameInputRules}
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  {...firstNameInputProps}
                />
              )}
            />
            <Controller
              name={lastNameInputName}
              rules={lastNameInputRules}
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  {...lastNameInputProps}
                />
              )}
            />
            <Controller
              name={emailInputName}
              rules={emailInputRules}
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  {...emailInputProps}
                  className='sm:col-span-2'
                />
              )}
            />
            <Controller
              name={messageInputName}
              rules={messageInputRules}
              control={control}
              render={({field}) => (
                <TextArea
                  {...field}
                  {...messageInputProps}
                  className='sm:col-span-2'
                />
              )}
            />
            <Controller
              name={legalConsentInputName}
              control={control}
              render={({field: {value, ...other}}) => (
                <Checkbox
                  checked={value}
                  {...other}
                  {...legalConsentInputProps}
                  className='sm:col-span-2 mx-auto mt-2'
                  inputClassName='mt-[2px] lg:mb-auto'
                />
              )}
            />
          </div>
          <div className='flex justify-center'>
            <Button
              type='submit'
              size='large'
              shape='circle'
              className='text-slate-950 bg-gradient-to-tl from-slate-50/85 via-slate-50 to-slate-50/85 \
                    from-10% to-90% px-6 hover:bg-current hover:text-current'
              trailing={
                <ArrowRightIcon
                  className='w-4 h-4 text-sky-500'
                  strokeWidth={2}
                />
              }
            >
              {props.dictionary.sendMessage}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
