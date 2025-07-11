"use client"

import {ArrowRightIcon, Check, TrendingUp} from 'lucide-react'
import {CTAProps} from '@/models/cta.model'
import { Dictionary } from '@/models/dictionary.model'
import { IconType } from '@/models/icon.model'
import { cn } from '@/utils/toolbox'
import {useState} from 'react'
import Button from '@/components/ui/atoms/button'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import Icon from '@/components/ui/atoms/icon'
import Link from 'next/link'

export type PainPointCardProps = {
  dictionary: Dictionary
  icon: IconType
  title: string
  description: string
  stats: string
  solution: string
  outcomeStats: string
}

export type FoundationsServicesBreakdownProps = {
  dictionary: Dictionary
  title: string
  subtitle: string
  points: Array<PainPointCardProps>
  cta: CTAProps
}

const PainPointCard = (props: PainPointCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <div className='relative h-[350px] perspective-1000'>
      <div
        className={cn('relative w-full h-full transition-transform duration-500',
          '[transform-style:preserve-3d]',
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={cn('p-6 rounded-3xl h-full absolute w-full bg-black/10 border border-slate-800',
            '[backface-visibility:hidden] hover:shadow-lg transition-all duration-300 cursor-pointer',
            !isFlipped ? 'z-10' : 'z-0'
          )}
        >
          <Icon
            {...props.icon}
            className='flex-none text-sky-300 w-7 h-7 mb-4'
            aria-hidden='true'
          />

          <h3
            className='text-lg leading-[1.1875] font-extrabold tracking-tight text-transparent \
            bg-clip-text bg-text-gradient-gray lg:text-xl lg:leading-[1.2] mb-2'
          >
            {props.title}
          </h3>

          <p className='text-slate-400 mb-4'>{props.description}</p>

          <div className='mt-auto pt-4 border-t border-slate-700'>
            <div className='text-red-500 font-semibold text-sm flex items-center'>
              <TrendingUp
                className='h-4 w-4 mr-1 rotate-180'
                strokeWidth={2.5}
              />
              {props.stats}
            </div>
            <p className='mt-2 text-sm text-gray-500'>{props.dictionary.seeSolution}</p>
          </div>
        </div>

        <div
          className={`p-6 rounded-3xl h-full absolute w-full bg-black/10 border border-slate-800 rotate-y-180 [transform:rotateY(180deg)] [backface-visibility:hidden] hover:shadow-lg transition-all duration-300 cursor-pointer`}
        >
          <Check
            className='flex-none text-green-300 w-7 h-7 mb-4'
            aria-hidden='true'
          />

          <h3
            className='text-lg leading-[1.1875] font-extrabold tracking-tight text-transparent \
            bg-clip-text bg-text-gradient-gray lg:text-xl lg:leading-[1.2] mb-2'
          >
            {props.dictionary.ourSolution}
          </h3>

          <p className='text-slate-400 mb-4'>{props.solution}</p>

          <div className='mt-auto pt-4 border-t border-slate-700'>
            <div className='text-green-500 font-semibold text-sm flex items-center'>
              <TrendingUp
                className='h-4 w-4 mr-1'
                strokeWidth={2.5}
              />
              {props.outcomeStats}
            </div>
            <p className='mt-2 text-sm text-gray-500'>{props.dictionary.seeChallenge}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FoundationsServiceBreakdown(props: FoundationsServicesBreakdownProps) {
  return (
    <ComponentLayout gradientVariant='floatingGradient'>
      <div className='py-16 w-full'>
        <div className='container mx-auto px-4'>
          <div className='w-full mx-auto text-center mb-16'>
            <h2
              className='w-fit text-[44px] leading-[1.1875] font-extrabold tracking-tight text-transparent bg-clip-text \
              bg-text-gradient-gray'
            >
              {props.title}
            </h2>
            <p className='mt-2 text-[18px] leading-8 text-slate-400 font-light'>{props.subtitle}</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16'>
            {props.points.map((point, index) => (
              <PainPointCard
                key={index}
                dictionary={props.dictionary}
                icon={point.icon}
                title={point.title}
                description={point.description}
                stats={point.stats}
                solution={point.solution}
                outcomeStats={point.outcomeStats}
              />
            ))}
          </div>

          <div className='mt-24 mx-auto w-fit'>
            <Button
              asChild
              size='large'
              tone={props.cta.tone}
              shape='circle'
              className='text-slate-950 bg-gradient-to-tl from-slate-50/85 via-slate-50 to-slate-50/85 \
                  from-10% to-90% px-6 hover:bg-current hover:text-current'
              trailing={
                <ArrowRightIcon
                  className='w-4 h-4 text-sky-500'
                  strokeWidth={2}
                />
              }
            >
              <Link
                href={props.cta.link}
                target='_blank'
              >
                {props.cta.title}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}
