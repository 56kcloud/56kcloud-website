export type SmallTitleSectionProps = {
  subtitle: string
  title: string
}

export default function SmallTitleSection({subtitle, title}: SmallTitleSectionProps) {
  return (
    <section className='section-padding bg-primary-900'>
      <div className='flex flex-col mx-auto max-w-7xl md:flex-row'>
        <p className='mr-auto mb-8 text-white md:w-5/12 md:max-w-[240px] lg:max-w-xs xl:text-lg'>{subtitle}</p>
        <h2 className='title text-[36px] text-white md:w-7/12 xl:text-[52px]'>{title}</h2>
      </div>
    </section>
  )
}
