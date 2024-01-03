import {Value} from '@/models/value.model'

export type ValueTwoColumnProps = {
  title: string
  subtitle: string
  values: Value[]
}

export default function ValueTwoColumn(props: ValueTwoColumnProps) {
  return (
    <div className='px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8'>
      <div className='max-w-2xl mx-auto lg:mx-0'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>{props.title}</h2>
        <p className='mt-6 text-lg leading-8 text-gray-300'>{props.subtitle}</p>
      </div>
      <dl
        className='grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 text-base leading-7 text-gray-300 sm:grid-cols-2 \
                   lg:mx-0 lg:max-w-none lg:gap-x-16'
      >
        {props.values.map((value) => (
          <div key={value.name} className='relative'>
            <dt className='inline font-semibold text-white'>{value.name}</dt>{' '}
            <dd className='inline'>{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
