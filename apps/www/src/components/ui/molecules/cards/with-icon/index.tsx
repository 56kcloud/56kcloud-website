import {CardWithIconProps} from '@/models/card.model'
import Icon from '@/components/ui/atoms/icon'

export default function CardWithIcon({title, icon, description}: CardWithIconProps) {
  return (
    <div>
      <div className='flex flex-row items-center gap-x-3'>
        <Icon
          {...icon}
          className='flex-none text-sky-300 w-7 h-7'
          aria-hidden='true'
        />
        <h3 className='font-medium text-[18px] leading-10 w-fit text-transparent bg-clip-text bg-text-gradient-blue'>
          {title}
        </h3>
      </div>
      <p className='text-base font-light leading-7 text-slate-400'>{description}</p>
    </div>
  )
}
