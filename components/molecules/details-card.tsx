import Icon from '../atoms/icon'

export type DetailsCardProps = {
  icon: string
  title: string
  items: Array<string>
}

export default function DetailsCard ({icon, title, items}: DetailsCardProps) {
  return (
    <div className='h-full bg-white pt-16 pr-[15%] pb-24 pl-12 z-10'>
      <Icon src={icon} alt={title} className='w-12 h-12 p-3 mb-6 bg-blue-light md:mb-10 md:p-5 md:w-20 md:h-20' />
      <h3 className='mb-6 md:mb-10 text-[24px] md:text-[28px] title'>{title}</h3>
      <ul className='text-grey-medium'>
        {items.map((item: string, idx: number) => (
          <li key={idx} className='flex mb-3 md:text-lg before:content-["•"] before:text-orange-medium
            before:inline-block before:text-2xl before:-mt-[0.2rem] before:pr-3'>{item}</li>
        ))}
      </ul>
    </div>
  )
}
