export type DetailCardProps = {
  // eslint-disable-next-line no-unused-vars
  Icon: (props: any) => JSX.Element
  title: string
  items: Array<string>
}

export default function DetailCard({Icon, title, items}: DetailCardProps) {
  return (
    <div className='h-full bg-white p-8 md:pt-16 md:pr-[15%] md:pb-24 md:pl-12 z-10'>
      <div
        className='flex items-center justify-center p-3 mb-6 !text-white rounded-full bg-primary-200 \
       md:mb-10 md:p-5 w-12 h-12 md:w-20 md:h-20'>
        <Icon/>
      </div>
      <h3 className='mb-6 md:mb-10 text-[24px] md:text-[28px] title'>{title}</h3>
      <ul className='text-grey-500'>
        {items.map((item: string, idx: number) => (
          <li
            key={idx}
            className='flex mb-3 md:text-lg before:content-["•"] before:text-secondary-500
            before:inline-block before:text-2xl before:-mt-[0.2rem] before:pr-3'>{item}</li>
        ))}
      </ul>
    </div>
  )
}
