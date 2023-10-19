import {MoveDown} from 'lucide-react'
import {cn} from '@/utils/toolbox'

export type VerticalTitleProps = {
  styleCard: 'illustrationCard' | 'detailsCard'
  classNameText?: string
  title: string
  theme?: 'dark' | 'light'
}

export default function VerticalTitle({
  title,
  classNameText,
  styleCard = 'illustrationCard',
  theme
}: VerticalTitleProps) {
  return (
    <div
      className={cn(styleCard === 'illustrationCard' ? 'top-20' : 'top-[450px]',
        'absolute right-24 flex flex-col items-center space-y-10'
      )}
    >
      <div className={cn('text-sm font-medium tracking-[0.1rem] uppercase', classNameText)}>
        <span style={{writingMode: 'vertical-lr'}}>{title}</span>
      </div>
      <MoveDown
        className={
          cn('w-10 text-white stroke-1 h-14 ml-1', theme === 'dark' ? 'text-white' : 'text-primary-dark')
        }/>
    </div>
  )
}
