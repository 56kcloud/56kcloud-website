import {cn} from '@/utils/toolbox'

type ArrowProps = {
  theme?: 'dark' | 'light'
  className?: string
}

export default function Arrow({className='', theme='dark'}: ArrowProps) {
  return (
    <div className={cn('-mt-1 w-1.5 h-24', className)}>
      <div className={cn('w-px h-full', theme === 'dark' ? 'bg-white' : 'bg-primary-dark')}/>
      <div
        className={cn(
          'text-[10px] rotate-180 -mt-3',
          theme === 'dark' ? 'text-white' : 'text-primary-dark'
        )}
      >
        ▲
      </div>
    </div>
  )
}
