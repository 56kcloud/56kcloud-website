import {cn} from '@/utils/toolbox'

export type VerticalTitleProps = {
  styleCard: 'illustrationCard' | 'detailsCard'
  title: string
  classNameText?: string
}

export default function VerticalTitle({title, styleCard = 'illustrationCard', classNameText}: VerticalTitleProps) {
  return (
    <div
      className={cn(styleCard === 'illustrationCard' ? 'top-48' : 'top-[450px]',
        'absolute items-center translate-x-[50%] translate-y-[100%] rotate-90 gap-x-8 hidden xl:flex right-24')}>
      <span className={cn('text-sm font-medium tracking-[0.25rem] uppercase', classNameText)}>{title}</span>
      <span
        className={cn('flex items-center justify-center w-40 before:bg-blue-medium text-[10px] -left-[3px] relative \
         rotate-90', classNameText)}>
        ▲
      </span>
    </div>
  )
}
