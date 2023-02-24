import Surtitle from '../atoms/surtitle'

type IntroPrps = {
  surtitle: string
  title: string
  text: string
}

export default function LargeTitleIntro ({ surtitle, title, text }: IntroPrps) {
  return (
    <div className='lg:-mt-12'>
      <Surtitle text={surtitle} />
      <h2 className='font-semibold mb-8 leading-[1.1] title xl-responsive-title'>{title}</h2>
      <div className='w-full'>
        <p className='xl:text-lg'>{text}</p>
      </div>
    </div>
  )
}
