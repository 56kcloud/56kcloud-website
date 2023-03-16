import BackgroundImage from '../atoms/background-image'
import Surtitle from '../atoms/surtitle'

type IntroPrps = {
  surtitle: string
  title: string
  text: string
}

export default function LargeTitleIntro ({surtitle, title, text}: IntroPrps) {
  return (
    <section className='px-8 pb-12 xl:px-36'>
      <div className='max-w-6xl mx-auto mt-12 sm:mt-0'>
        <div className='max-w-5xl mx-auto'>
          <BackgroundImage src='/images/people-group.png' alt='Group of people background' />
        </div>
        <div className='lg:-mt-12'>
          <Surtitle text={surtitle} />
          <h2 className='mb-8 font-semibold title xl-responsive-title'>{title}</h2>
          <div className='w-full'>
            <p className='xl:text-lg'>{text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
