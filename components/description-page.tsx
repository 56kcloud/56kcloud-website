import Img from './img'

export default function DescriptionPage ({ surtitle, text, data }) {
  return (
    <section className='px-8 pb-[72px] pt-6 xl:section-padding'>
      <div className='relative max-w-6xl mx-auto'>
        <div className='w-full mb-16 xl:w-3/5'>
          <span className='orange-surtitle'>{surtitle}</span>
          <p className='font-chap text-blue-dark text-[calc(20px+1vw)] font-medium leading-tight'>{text}</p>
        </div>
        <div className='w-full mb-16 lg:w-1/2'>
          <ul className='flex flex-col'>
            {data.map((item, id: number) => (
              <li key={id} className='flex gap-x-4 mb-7'>
                <span className='flex items-center justify-center w-8 h-8 p-2 bg-white rounded-full shadow-md'>
                  <Img src='/images/check.svg' alt='Check icon' width={100} height={100} />
                </span>
                <span className='text-lg font-light font-graphik text-blue-medium'>{item.description}</span>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </section>
  )
}
