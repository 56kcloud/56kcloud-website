import {Check} from 'lucide-react'
import {Feature} from '@/models/feature.model'
import CardWithIcon from '@/components/ui/molecules/cards/with-icon'
import ComponentLayout from '@/components/ui/atoms/component-layout'

export type Process = {
  title: string
  description?: string
  badge: string
  items?: {text: string}[]
}

export type FoundationsProcessProps = {
  title: string
  subtitle: string
  process: Array<Process>
  benefits: Array<Feature<'icon'>>
}

const ProcessStep = ({number, title, description, badge, items}: Process & {number: number}) => {
  return (
    <div
      className="relative flex flex-col border border-slate-800 rounded-3xl w-full h-full
        p-6 pt-8 bg-gradient-to-t from-slate-800 to-slate-900 sm:p-8'"
    >
      <div className='absolute -top-8 rounded-full w-12 h-12 flex items-center justify-center bg-sky-500 text-white text-xl font-bold'>
        {number}
      </div>

      <div className='inline-block self-start rounded-full px-4 py-1 text-white font-medium mb-4 border'>{badge}</div>

      <h3
        className='w-fit text-2xl leading-[1.1875] font-extrabold tracking-tight text-transparent bg-clip-text \
        bg-text-gradient-gray'
      >
        {title}
      </h3>

      {description && <p className='text-slate-300 mb-4'>{description}</p>}

      {items && (
        <ul className='space-y-2 mt-2'>
          {items.map((item, index) => (
            <li
              key={index}
              className='flex items-start'
            >
              <Check className='h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5' />
              <span className='text-slate-300'>{item.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function FoundationsProcess(props: FoundationsProcessProps) {
  return (
    <ComponentLayout gradientVariant='floatingGradient'>
      <div className='py-20 lg:py-[104px]'>
        <div className='px-6 mx-auto max-w-7xl lg:px-8'>
          <div className='w-full mx-auto text-center mb-16'>
            <h2
              className='w-fit mx-auto text-center text-[44px] leading-[1.1875] font-extrabold tracking-tight text-transparent bg-clip-text \
              bg-text-gradient-gray'
            >
              {props.title}
            </h2>
            <p className='mt-2 text-[18px] leading-8 text-slate-400 font-light'>{props.subtitle}</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative'>
            {props.process.map((pro, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                {...pro}
              />
            ))}
          </div>

          <div className='mt-20 space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8'>
            {props.benefits.map((feature, index) => (
              <CardWithIcon
                key={index}
                {...feature}
              />
            ))}
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}
