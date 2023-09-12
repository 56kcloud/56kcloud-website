import {cn} from '@/utils/toolbox'

export type MediumTitleSectionProps = {
  title: string
  subtitle?: string
  textColLeft?: string
  textColRight?: string
  className?: string
}

export default function MediumTitleSection({title, subtitle, textColLeft, textColRight, className}
  : MediumTitleSectionProps) {
  return (
    <section className='w-full pb-16'>
      <div className='xl:mx-auto'>
        <h2 className={cn('mb-5 font-semibold title sm-responsive-title', className)}>{title}</h2>
        <h3 className='text-2xl font-light xl:mx-auto'>{subtitle}</h3>
        <div className='flex flex-col justify-between sm:flex-row'>
          <p className='w-full sm:w-[45%] xl:text-lg mb-4 sm:mb-0'>{textColLeft}</p>
          <p className='w-full sm:w-[45%] xl:text-lg'>{textColRight}</p>
        </div>
      </div>
    </section>
  )
}
