import {ArrowRightIcon} from '@heroicons/react/24/solid'
import {CaseStudy} from '@/models/case-study.model'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import Image from 'next/image'
import Link from 'next/link'

export type CaseStudiesThreeColumnWithImageProps = {
  title: string
  subtitle: string
  caseStudies: Array<CaseStudy>
}

export default function CaseStudiesThreeColumnWithImage(props: CaseStudiesThreeColumnWithImageProps) {
  return (
    <ComponentLayout gradientVariant='floatingGradient'>
      <div className='py-20 pt-6 lg:py-[104px]'>
        <div className='mx-auto max-w-7xl space-y-10 lg:space-y-20 flex flex-col items-center'>
          <div className='space-y-4 max-w-4xl'>
            <h2 className='w-fit text-[44px] leading-[1.1875] font-extrabold tracking-tight text-transparent bg-clip-text bg-text-gradient-gray text-center'>
              {props.title}
            </h2>
            <p className='text-base leading-7 text-slate-400 font-light text-center'>{props.subtitle}</p>
          </div>
          <div className='mt-11'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
              {props.caseStudies?.map((caseStudy, index) => (
                <Link
                  key={index}
                  href={`/case-studies/${caseStudy.slug}`}
                >
                  <div className='relative border border-slate-800 rounded-3xl w-full h-full overflow-hidden flex flex-col'>
                    <div className='relative w-full aspect-[1/1]'>
                      <Image
                        className='rounded-t-xl object-cover h-full'
                        src={caseStudy.image.url}
                        width={caseStudy.image.width}
                        height={caseStudy.image.height}
                        alt={caseStudy.image.alternateText || caseStudy.image.name}
                      />
                    </div>
                    <div className='flex flex-col p-6 pt-0 sm:p-8 flex-1 justify-between'>
                      <div className='space-y-4'>
                        <h3 className='text-2xl leading-7 font-semibold w-fit text-transparent bg-clip-text bg-text-gradient-blue'>
                          {caseStudy.title}
                        </h3>
                        <p className='text-sm leading-6 text-slate-400 font-light line-clamp-4'>
                          {caseStudy.description}
                        </p>
                      </div>
                      <div className='flex flex-row items-center gap-2 mt-4 ml-auto'>
                        <p className='text-sm font-normal text-slate-50'>{caseStudy.cta}</p>
                        <ArrowRightIcon
                          className='w-4 h-4 text-sky-500'
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}
