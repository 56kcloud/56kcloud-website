import Img from './img'

export default function Card ({ icon, title, list }) {
  return (
    <div className='h-full bg-white pt-16 pr-[15%] pb-24 pl-12 z-10'>
      <div className='flex items-center justify-center w-12 h-12 p-3 mb-6 rounded-full md:mb-10 md:p-5 md:w-20 md:h-20 bg-blue-light'>
        <Img src={icon} alt={`${title} icon`} width={100} height={100} />
      </div>
      <h3 className='mb-6 md:mb-10 text-2xl md:text-[28px] title'>{title}</h3>
      <ul className='text-grey-medium'>
        {list?.map((item: string, idx: number) => (
          <li key={idx} className='flex mb-3 md:text-lg before:content-["•"] before:text-orange-medium before:inline-block before:text-2xl before:-mt-[0.2rem] before:pr-3'>{item}</li>
        ))}
      </ul>
    </div>
  )
}
