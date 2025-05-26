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
    <div className='w-full flex justify-center z-20 bg-white/80'>
      <div className='inline-flex items-center w-full gap-x-4 justify-center py-2 px-4 max-w-7xl'>
        <p className='text-black text-sm line-clamp-1 flex-1 text-center'>{props.description}</p>
        <Button
            asChild
            size='small'
            variant='link'
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
