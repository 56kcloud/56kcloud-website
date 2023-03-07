import classNames from '../../utils/classes'

type VerticalTitleProps = {
  text: string
  className?: string
}

export default function VerticalTitle ({ text, className }: VerticalTitleProps) {
  return (
    <div className='absolute flex items-center rotate-90 top-48 -right-8 gap-x-8'>
      <span className={classNames('text-sm font-medium tracking-[0.25rem] uppercase', className)}>
        {text}
      </span>
      <span className='flex items-center before:content-[""] before:h-[2px] before:w-40 before:bg-blue-medium
        after:text-blue-medium after:text-[10px] after:content-["▲"] after:-left-[3px] after:relative after:-top-[1px]
        after:rotate-90'>
      </span>
    </div>
  )
}
