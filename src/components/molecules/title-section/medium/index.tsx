import {cn} from '@/utils/classes'

export type MediumTitleSectionProps = {
  title: string
  subTitle?: string
  textColLeft?: string
  textColRight?: string
  className?: string
}

export default function MediumTitleSection({title, subTitle, textColLeft, textColRight, className}
  : MediumTitleSectionProps) {
  return (
    <section
      className='bg-medium-title px-8 pt-56 bg-no-repeat bg-[length:100%] xl:px-36 bg-bottom \ 
    bg-white'>
      <div className='max-w-6xl xl:mx-auto'>
        <h2 className={cn('mb-16 font-semibold title sm-responsive-title', className)}>{title}</h2>
        <h3 className='max-w-6xl text-2xl font-light xl:mx-auto'>{subTitle}</h3>
        <div className='flex flex-col justify-between sm:flex-row'>
          <p className='w-full sm:w-[45%] xl:text-lg mb-4 sm:mb-0'>{textColLeft}</p>
          <p className='w-full sm:w-[45%] xl:text-lg'>{textColRight}</p>
        </div>
      </div>
    </section>
  )
}
