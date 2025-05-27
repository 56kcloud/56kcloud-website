import {CTAProps} from '@/models/cta.model'
import {Dictionary} from '@/models/dictionary.model'
import Button from '../../atoms/button'

export type BannerProps = {
  dictionary: Dictionary
  description: string
  cta: CTAProps
}

export default function Banner(props: BannerProps) {
  return (
    <div className='w-full flex justify-center z-20 pt-2 px-4'>
      <div className='inline-flex items-center w-full gap-x-4 justify-center py-2 px-4 max-w-[1232px] bg-primary-300/20 h-12 rounded-lg border border-primary-300/20 shadow-lg'>
        <span className='relative flex h-3 w-3'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-300 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-3 w-3 bg-primary-300'></span>
        </span>
        <p className='text-primary-100 text-sm line-clamp-1 flex-1 text-left'>{props.description}</p>
        <Button
          asChild
          size='small'
          variant='link'
          tone={props.cta.tone}
        >
          <a href={props.cta.link}>{props.cta.title}</a>
        </Button>
      </div>
    </div>
  )
}
