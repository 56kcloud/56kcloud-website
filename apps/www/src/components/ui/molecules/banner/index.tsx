import { CTAProps } from '@/models/cta.model'
import {Dictionary} from '@/models/dictionary.model'
import Button from '../../atoms/button'

export type BannerProps = {
  dictionary: Dictionary
  description: string
  cta: CTAProps
}

export default function Banner(props: BannerProps) {
  return (
    <div className='w-full flex justify-center z-20'>
      <div className='inline-flex items-center bg-white/80 w-full gap-x-2 justify-center py-2 px-4'>
        <p className='text-black text-sm line-clamp-1 w-fit'>{props.description}</p>
        <Button
            asChild
            size='small'
            variant='link'
            className='line-clamp-1 !w-44'
            tone={props.cta.tone}
        >
            <a
                href={props.cta.link}
                target='_blank'
            >
                {props.cta.title} <span aria-hidden='true'>&rarr;</span>
            </a>
        </Button>
      </div>
    </div>
  )
}
