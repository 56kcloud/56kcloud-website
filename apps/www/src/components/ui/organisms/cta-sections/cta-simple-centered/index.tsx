import {CTAProps} from '@/models/cta.model'
import Button from '@/components/ui/atoms/button'

export type CTASimpleCenteredProps = {
  title: string
  subtitle: string
  cta: CTAProps
}

export default function CTASimpleCentered(props: CTASimpleCenteredProps) {
  return (
    <div className='overflow-hidden pb-28 pt-14'>
      <div className='px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center flex flex-col items-center'>
          <h2 className='text-4xl font-bold tracking-tight text-white'>{props.title}</h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>{props.subtitle}</p>
          <div className='flex mt-10'>
            <Button
              asChild
              size='large'
              tone={props.cta.tone}
            >
              <a
                href={props.cta.link}
                target='_blank'
              >
                {props.cta.title}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
