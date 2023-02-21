import Img from './img'

export default function CardPage ({ icon, title, list }) {
  return (
    <div className='h-full bg-white pt-16 pr-[15%] pb-24 pl-12'>
      <div className='flex items-center justify-center w-20 h-20 p-5 mb-10 rounded-full bg-blue-light'>
        <Img src={icon} alt={`${title} icon`} width={100} height={100} />
      </div>
      <h3 className='mb-10 text-[28px] font-medium font-chap text-blue-medium'>{title}</h3>
      <ul className='text-grey-medium'>
        {list?.map((item: string, idx: number) => (
          <li key={idx} className='flex mb-3 text-lg leading-normal font-light font-graphik before:content-["•"] before:text-orange-medium before:inline-block before:text-2xl before:-mt-[0.2rem] before:pr-3'>{item}</li>
        ))}
      </ul>
    </div>
  )
}
