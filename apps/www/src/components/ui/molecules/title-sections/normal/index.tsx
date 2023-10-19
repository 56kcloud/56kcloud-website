import Surtitle from '@/components/ui/atoms/surtitle'

export type TitleSectionProps = {
  surtitle: string
  title: string
}

export default function TitleSection({surtitle, title}: TitleSectionProps) {
  return (
    <section>
      <Surtitle text={surtitle}/>
      <h3 className='text-[24px] md:text-[30px] lg:text-[36px] xl:text-[42px] title'>
        {title}
      </h3>
    </section>
  )
}
