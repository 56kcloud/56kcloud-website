'use client'

import {CheckCircleIcon} from '@heroicons/react/24/outline'
import {Controller, FieldValues, RegisterOptions, useForm} from 'react-hook-form'
import {Dictionary} from '@/models/dictionary.model'
import {EmailRegex, createHsformsPayload} from '@/utils/toolbox'
import {subscribeToNewsletter} from '@/utils/hubspot'
import {useState} from 'react'
import Button from '@/components/ui/atoms/button'
import Input, {InputProps} from '@/components/ui/atoms/inputs/input'

export default function NewsletterForm(props: {dictionary: Dictionary}) {
  const [showThanksMessage, setShowThanksMessage] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm({
    defaultValues: {
      email: ''
    }
  })

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

  async function onSubscribe(data: FieldValues) {
    try {
      await subscribeToNewsletter(createHsformsPayload(data))
      setShowThanksMessage(true)
      reset()
    } catch (e) {
      setServerError((e as Error).toString())
    }
  }

  return (
    <div className='mt-10 flex flex-col xl:flex-row xl:items-center xl:justify-between'>
      <div>
        <h3 className='text-sm font-semibold leading-6 text-white'>{props.dictionary.subscribeToNewsletter}</h3>
        <p className='mt-2 text-sm leading-6 text-slate-400'>{props.dictionary.subscribeToNewsletterSubtitle}</p>
      </div>
      {showThanksMessage ? (
        <div className='text-white flex space-x-1 items-center'>
          <CheckCircleIcon className='w-6 h-6' />
          <h3 className='text-sm font-semibold leading-6'>{props.dictionary.subscribeToNewsletterThanks}</h3>
        </div>
      ) : (
        <form
          className='mt-6 md:max-w-sm'
          onSubmit={handleSubmit((data) => onSubscribe(data))}
        >
          <div className='md:flex'>
            <Controller
              name={emailInputName}
              rules={emailInputRules}
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  {...emailInputProps}
                  label='Email'
                  labelSrOnly
                  className='md:w-full'
                  placeholder='Enter your email'
                />
              )}
            />
            <div className='mt-4 md:ml-4 md:mt-0 md:flex-shrink-0'>
              <Button
                tone='primary'
                type='submit'
                className='w-full md:w-auto'
              >
                {props.dictionary.subscribe}
              </Button>
            </div>
          </div>
          <div>
            {serverError ? (
              <div
                className='p-2 sm:p-3 text-sm text-red-600 bg-red-500/10 border border-red-500/50 rounded-lg \
                         pl-7 sm:pl-7 mt-5 min-[1700px]:mt-6 sm:text-sm min-[1700px]:text-base'
              >
                {serverError}
              </div>
            ) : null}
          </div>
        </form>
      )}
    </div>
  )
}
