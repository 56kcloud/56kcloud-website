export type LargeTitleSectionProps = {
  title: string
  leftSubtitle: string
  rightSubtitle: string
}

export default function LargeTitleSection({title, leftSubtitle, rightSubtitle}: LargeTitleSectionProps) {
  return (
    <section
      className='bg-medium-title px-8 pt-56 bg-no-repeat bg-[length:100%] xl:px-36 bg-bottom \ 
    bg-white'>
      <div className='max-w-6xl xl:mx-auto'>
        <h2 className='mb-16 font-semibold title sm-responsive-title'>{title}</h2>
        <div className='flex flex-col justify-between sm:flex-row'>
          <p className='w-full sm:w-[45%] xl:text-lg mb-4 sm:mb-0'>{leftSubtitle}</p>
          <p className='w-full sm:w-[45%] xl:text-lg'>{rightSubtitle}</p>
        </div>
      </div>
    </section>
  )
}
