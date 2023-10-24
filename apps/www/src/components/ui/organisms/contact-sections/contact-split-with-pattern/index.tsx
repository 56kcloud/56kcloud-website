import {BuildingOffice2Icon, CheckCircleIcon} from '@heroicons/react/24/outline'
import {Checkbox, CheckboxProps} from '@/components/ui/atoms/inputs/checkbox'
import {Input, InputProps} from '@/components/ui/atoms/inputs/input'
import {LocationObject} from '@/models/location.model'
import {TextArea, TextAreaProps} from '@/components/ui/atoms/inputs/textarea'
import {contactUsFormData} from '@/models/contact-us-form-data.model'
import {createHsformsPayload} from '@/utils/toolbox'
import {sendEmail} from '@/utils/hubspot'
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import Button from '@/components/ui/atoms/button'
import ConfettiExplosion from 'react-confetti-explosion'
import Router from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export type ContactSplitWithPatternProps = {
  title: string
  subtitle: string
  locations: Array<LocationObject>
}

export default function ContactSplitWithPattern(props: ContactSplitWithPatternProps) {
  const {register, handleSubmit, reset, formState: {errors}} = useForm()
  const [serverError, setServerError] = useState<string | null>(null)
  const {t} = useTranslation('modal')
  const [isExploding, setIsExploding] = useState(false)
  const [showThanksMessage, setShowThanksMessage] = useState(false)

  const firstNameInput: InputProps = {
    register,
    name:'firstName',
    options: {
      required: 'Your first name is required'
    },

    label: t('contact:inputFirstName'),
    error: errors.firstName
  }
  const lastNameInput: InputProps = {
    register,
    name:'lastName',
    options: {
      required: 'Your last name is required'
    },
    label: t('contact:inputLastName'),
    error: errors.lastName
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
    label: t('contact:inputEmail'),
    error: errors.email
  }

  const messageInput: TextAreaProps = {
    register,
    name:'message',
    options: {
      required: 'A message is required'
    },
    label: t('contact:inputMessage'),
    error: errors.message
  }

  const legalConsentInput: CheckboxProps = {
    register,
    id: 'legalConsent',
    name:'legalConsent',
    label: t('contact:checkboxLegalConsent')
  }

  async function onSubmit(data: contactUsFormData){
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
  
  return (<div
    className='relative bg-gray-900 isolate'
    id='contact-section'
  >
    <div className='grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2'>
      <div className='relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48'>
        <div className='max-w-xl mx-auto lg:mx-0 lg:max-w-lg'>
          <div className='absolute inset-y-0 left-0 w-full overflow-hidden -z-10 ring-1 ring-white/5 lg:w-1/2'>
            <svg
              className='absolute inset-0 h-full w-full stroke-gray-700 \
                           [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2'
                  width={200}
                  height={200}
                  x='100%'
                  y={-1}
                  patternUnits='userSpaceOnUse'
                >
                  <path
                    d='M130 200V.5M.5 .5H200'
                    fill='none'/>
                </pattern>
              </defs>
              <svg
                x='100%'
                y={-1}
                className='overflow-visible fill-gray-800/20'>
                <path
                  d='M-470.5 0h201v201h-201Z'
                  strokeWidth={0}/>
              </svg>
              <rect
                width='100%'
                height='100%'
                strokeWidth={0}
                fill='url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)'/>
            </svg>
            <div
              className='absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl \
                           lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]'
              aria-hidden='true'
            >
              <div
                className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20'
                style={{
                  clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, \
                       60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% \
                       23.5%, 76.1% 2.6%, 74.1% 56.1%)'
                }}
              />
            </div>
          </div>
          <h2 className='text-3xl font-bold tracking-tight text-white'>{props.title}</h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            {props.subtitle}
          </p>
          <dl className='mt-10 space-y-4 text-base leading-7 text-gray-300'>
            {props.locations?.map((location) => (
              <a
                key={location.address}
                href={location.gMap}
                target='_blank'
                className='flex text-gray-400 gap-x-4'
              >
                <dt className='flex-none'>
                  <span className='sr-only'>Address</span>
                  <BuildingOffice2Icon
                    className='w-6 text-gray-400 h-7'
                    aria-hidden='true'/>
                </dt>
                <dd>
                  {location.address}
                  <br/>
                  {location.city} {location.zipCode}, {location.country}
                </dd>
              </a>
            ))}
          </dl>
        </div>
      </div>
      <div
        className='px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48 lg:h-[840px]'
      >
        {isExploding && <ConfettiExplosion
          force={0.8}
          duration={3000}
          width={1920}
        />}
        {showThanksMessage
          ? <div className='flex flex-col items-center justify-center'>
            <CheckCircleIcon className='mx-auto text-white w-14 h-14'/>
            <h3 className='mt-2 text-sm font-semibold text-white'>Message Sent</h3>
            <p className='max-w-xs text-sm text-center text-gray-300'>
              Thanks for your message we will get back to you as soon as possible
            </p>
          </div>
          : <form onSubmit={handleSubmit((data) => onSubmit(data as contactUsFormData))}>
            <div className='max-w-xl mx-auto space-y-4 lg:mr-0 lg:max-w-lg'>
              {serverError ? (
                <div
                  className='p-2 sm:p-3 text-sm text-red-600 bg-red-500/10 border border-red-500/50 rounded-lg \
                         pl-7 sm:pl-7 mt-5 min-[1700px]:mt-6 sm:text-sm min-[1700px]:text-base'
                >
                  {serverError}
                </div>
              ) : null}
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                <Input {...firstNameInput}/>
                <Input {...lastNameInput}/>
                <Input
                  {...emailInput}
                  className='sm:col-span-2'
                />
                <TextArea
                  {...messageInput}
                  className='sm:col-span-2'
                />
                <Checkbox
                  {...legalConsentInput}
                  className='sm:col-span-2'
                />
              </div>
              <div className='flex justify-end mt-8'>
                <Button type='submit'>
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        }
      </div>
      
    </div>
  </div>)
}
