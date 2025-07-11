'use client'

import {Feature} from '@/models/feature.model'
import { cn } from '@/utils/toolbox'
import Icon from '@/components/ui/atoms/icon'

export type FoundationsStepsProps = {
  title: string
  description: string
  steps: Array<Feature<'icon'>>
  cards: Array<Feature<'icon'>>
}

export default function FoundationsSteps(props: FoundationsStepsProps) {
  const firstStep = props.cards.slice(0, 3);
  const secondStep = props.cards.slice(3, 5);
  return (
    <div className='py-20 lg:py-[104px]'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='w-full mx-auto text-center mb-16'>
            <h2
              className='w-fit mx-auto text-center text-[44px] leading-[1.1875] font-extrabold tracking-tight text-transparent bg-clip-text \
              bg-text-gradient-gray'
            >
              {props.title}
            </h2>
          <p className='mt-2 text-[18px] leading-8 text-slate-400 font-light'>{props.description}</p>
        </div>

        <div className='max-w-4xl mx-auto mb-16'>
          <div className='mb-8'>
            <div className='relative mb-12'>
              <div className='absolute top-16 left-8 right-8 h-[1px] bg-blue-300 z-0'></div>

              <div className='flex justify-between items-start relative z-10'>
                {props.steps.map((step, index) => {
                  return (
                    <div
                      key={index}
                      className='relative group cursor-pointer flex-1 flex flex-col items-center'
                    >
                      <div
                        className={`
                          w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-sky-600
                          flex items-center justify-center text-white shadow-lg mb-4
                          transform transition-all duration-300 ease-out group
                        `}
                      >
                        <Icon
                          {...step.icon}
                          className='w-auto h-8'
                        />
                      </div>

                      <div className='text-center max-w-xs'>
                        <h3 className='text-lg font-bold text-slate-200 mb-2'>{step.title}</h3>
                        <div className='group-hover:block hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-white rounded-lg shadow-xl border z-20 w-80'>
                          <p className='text-sm text-gray-700'>{step.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 auto-rows-auto mb-4">
              {firstStep.map((step, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-32 border border-slate-800 rounded-3xl",
                    "bg-gradient-to-t from-slate-800 to-slate-900",
                    "transform transition-all duration-300 ease-out",
                  )}
                >
                  <div className='p-4 h-full flex flex-col justify-between text-white'>
                    <h3 className='text-lg font-bold'>{step.title}</h3>
                    <div className='flex items-end justify-between'>
                      <Icon
                        {...step.icon}
                        className="w-auto h-8 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 auto-rows-auto">
              {secondStep.map((step, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-32 border border-slate-800 rounded-3xl",
                    "bg-gradient-to-t from-slate-800 to-slate-900",
                    "transform transition-all duration-300 ease-out",
                  )}
                >
                  <div className='p-4 h-full flex flex-col justify-between text-white'>
                    <h3 className='text-lg font-bold'>{step.title}</h3>
                    <div className='flex items-end justify-between'>
                      <Icon
                        {...step.icon}
                        className="w-auto h-8 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
