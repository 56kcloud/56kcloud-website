'use client'

import {BuildingOffice2Icon, CheckCircleIcon} from '@heroicons/react/24/outline'
import {Controller, FieldValues, RegisterOptions, useForm} from 'react-hook-form'
import {Dictionary} from '@/models/dictionary.model'
import {EmailRegex, createHsformsPayload} from '@/utils/toolbox'
import {LocationObject} from '@/models/location.model'
import {contactUsFormData} from '@/models/contact-us-form-data.model'
import {getInTouch} from '@/utils/hubspot'
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import Button from '@/components/ui/atoms/button'
import Checkbox, {CheckboxProps} from '@/components/ui/atoms/inputs/checkbox'
import ConfettiExplosion from 'react-confetti-explosion'
import Input, {InputProps} from '@/components/ui/atoms/inputs/input'
import TextArea, {TextAreaProps} from '@/components/ui/atoms/inputs/textarea'

export type ContactSplitWithPatternProps = {
  dictionary: Dictionary
  title: string
  subtitle: string
  locations: Array<LocationObject>
}

export default function ContactSplitWithPattern(props: ContactSplitWithPatternProps) {
  const Router = useRouter()
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm({
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
    error: errors.lastName?.message?.toString()
  }
  const firstNameInputRules: RegisterOptions<FieldValues, string> = {
    required: 'Your first name is required'
  }

  const lastNameInputName = 'lastName'
  const lastNameInputProps: InputProps = {
    id: lastNameInputName,
    label: props.dictionary.inputLastName,
    error: errors.lastName?.message?.toString()
  }
  const lastNameInputRules: RegisterOptions<FieldValues, string> = {
    required: 'Your last name is required'
  }

  const emailInputName = 'email'
  const emailInputProps: InputProps = {
    id: emailInputName,
    label: props.dictionary.inputEmail,
    error: errors.email?.message?.toString()
  }
  const emailInputRules: RegisterOptions<FieldValues, string> = {
    required: 'An email is required',
    pattern: {
      value: EmailRegex,
      message: 'Email is invalid'
    }
  }

  const messageInputName = 'message'
  const messageInputProps: TextAreaProps = {
    id: messageInputName,
    label: props.dictionary.inputMessage,
    error: errors.message?.message?.toString()
  }
  const messageInputRules: RegisterOptions<FieldValues, string> = {
    required: 'A message is required'
  }

  const legalConsentInputName = 'legalConsent'
  const legalConsentInputProps: CheckboxProps = {
    id: legalConsentInputName,
    label: props.dictionary.checkboxLegalConsent
  }

  async function onSubmit(data: contactUsFormData) {
    try {
      await getInTouch(createHsformsPayload(data))
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
    <div
      className='relative isolate py-20 lg:py-[104px]'
      id='contact-section'
    >
      <div className='relative mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 mx-6 lg:grid-cols-2 bg-slate-800 rounded-xl'>
          <div className='relative px-6 py-8 overflow-hidden lg:static lg:pl-12 lg:pr-0 lg:py-14'>
            <div className='max-w-full mr-auto lg:mx-0 lg:max-w-sm'>
              <h2 className='text-3xl font-medium text-white sm:text-3xl'>{props.title}</h2>
              <p className='text-[18px] leading-8 text-slate-400 font-light mt-2'>{props.subtitle}</p>
              <div className='mt-10 space-y-5 text-base leading-[26px] font-light text-slate-400'>
                {props.locations?.map((location) => (
                  <a
                    key={location.address}
                    href={location.gMap}
                    target='_blank'
                    className='flex gap-x-4'
                  >
                    <div className='flex-none'>
                      <span className='sr-only'>Address</span>
                      <BuildingOffice2Icon
                        className='w-6 h-6 translate-y-1 text-slate-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div>
                      {location.address}
                      <br />
                      {location.zipCode} {location.city}, {location.country}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='px-6 py-8 lg:pl-0 lg:pr-12 lg:py-14'>
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
              <form onSubmit={handleSubmit((data) => onSubmit(data as contactUsFormData))}>
                <div className='!max-w-full space-y-4'>
                  {serverError ? (
                    <div
                      className='p-2 sm:p-3 text-sm text-red-600 bg-red-500/10 border border-red-500/50 rounded-lg \
                         pl-7 sm:pl-7 mt-5 min-[1700px]:mt-6 sm:text-sm min-[1700px]:text-base'
                    >
                      {serverError}
                    </div>
                  ) : null}
                  <div className='grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2'>
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
                          className='sm:col-span-2'
                        />
                      )}
                    />
                  </div>
                  <div className='flex justify-end mt-8'>
                    <Button
                      type='submit'
                      shape='circle'
                      size='large'
                    >
                      {props.dictionary.sendMessage}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
