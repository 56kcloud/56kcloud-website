type MediumTitleIntroProps = {
  title: string
  textColLeft?: string
  textColRight?: string
}

export default function MediumTitleIntro ({ title, textColLeft, textColRight }: MediumTitleIntroProps) {
  return (
    <section className=
      "bg-[url('/images/cloud-background.png')] px-8 pt-56 bg-no-repeat bg-[length:100%] xl:px-36 bg-bottom bg-white">
      <div className='max-w-6xl xl:mx-auto'>
        <h2 className='mb-16 font-semibold leading-[1.1] title sm-responsive-title'>{title}</h2>
        <div className='flex justify-between'>
          <p className='w-[45%] xl:text-lg'>{textColLeft}</p>
          <p className='w-[45%] xl:text-lg'>{textColRight}</p>
        </div>
      </div>
    </section>
  )
}
