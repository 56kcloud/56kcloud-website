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
      <div className='flex items-center bg-white/80 w-full gap-x-2 px-4 justify-center py-2'>
        <p className='text-black text-sm line-clamp-1 flex-1 xl:flex-none'>{props.description}</p>
        <Button
            asChild
            size='small'
            variant='link'
            className='line-clamp-1'
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
