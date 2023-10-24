import {CardWithIcon} from '@/models/card.model'
import {ImageProps} from '@/models/image.model'
import Image from 'next/image'

export type HeaderWithCardsProps = {
  title: string
  subtitle: string
  image: ImageProps
  cards: Array<CardWithIcon>
}

export default function HeaderWithCards(props: HeaderWithCardsProps) {  
  return (
    <div className='relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32'>
      <Image
        {...props.image}
        alt={props.title}
        className='absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center brightness-75 \
                   grayscale'
        aria-hidden='true'
      />
      <div className='absolute inset-0 object-cover w-full h-full -z-10 bg-primary-500/40'></div>
      <div
        className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu \
                   sm:blur-3xl'>
        <div
          className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary-500 to-primary-200 opacity-20'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, \
               52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% \
               97.7%, 74.1% 44.1%)'
          }}
        />
      </div>
      <div
        className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 \
                   sm:translate-x-0 sm:transform-gpu'>
        <div
          className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary-500 to-primary-200 opacity-20'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% \
               68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% \
               44.1%)'
          }}
        />
      </div>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>{props.title}</h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>{props.subtitle}</p>
        </div>
        <div
          className='grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 \
                     lg:gap-8'>
          {props.cards.map((card) => (
            <div
              key={card.title}
              className='flex p-6 gap-x-4 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10'>
              <Image
                {...card.icon}
                alt={card.title}
                className='flex-none w-5 h-5 text-indigo-400'
                aria-hidden='true'
              />
              <div className='text-base leading-7'>
                <h3 className='font-semibold text-white'>{card.title}</h3>
                <p className='mt-2 text-gray-300'>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
