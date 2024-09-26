'use client'

import {BuildingOffice2Icon} from '@heroicons/react/24/outline'
import {LocationObject} from '@/models/location.model'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import Map from '@/components/ui/svgs/map/index'
import MapGradient from '@/components/ui/svgs/gradients/map-gradient'

export type MapWithTitleProps = {
  title?: string
  subtitle?: string
  locations: LocationObject[]
}

export function MapLocationCard({location}: {location: LocationObject}) {
  return (
    <div
      className='w-full rounded-xl border border-slate-800 bg-gradient-to-t from-slate-800 \
        to-slate-900 sm:block sm:w-80 sm:h-24 sm:fixed'
    >
      <div className='w-full h-full flex flex-row gap-x-4 px-7 py-5'>
        <div className='flex justify-center items-center'>
          <BuildingOffice2Icon
            className='w-14 h-14 text-sky-500'
            strokeWidth={1.25}
          />
        </div>
        <div className='w-full h-full flex flex-col gap-y-1'>
          <h3 className='text-2xl leading-7 font-semibold w-fit text-transparent bg-clip-text bg-text-gradient-blue'>
            {location.city}
          </h3>
          <p className='text-base text-slate-50 font-light'>{location.address}</p>
        </div>
      </div>
    </div>
  )
}

export default function MapWithTitle(props: MapWithTitleProps) {
  function getLocationByCity(locations: LocationObject[], city: string) {
    const index = locations.map((location) => location.city).indexOf(city)
    return locations[index] || null
  }

  const sionLocation = getLocationByCity(props.locations, 'Sion')
  const winterthurLocation = getLocationByCity(props.locations, 'Winterthur')

  return (
    <ComponentLayout>
      <div className='pb-20 pt-9 lg:pb-[104px] lg:pt-[120px]'>
        <div className='mx-auto text-center space-y-4 max-w-4xl'>
          <h2
            className='w-fit text-[44px] leading-[1.1875] font-extrabold tracking-tight text-transparent bg-clip-text \
            bg-text-gradient-gray lg:mx-auto'
          >
            {props.title}
          </h2>
          <p className='text-base leading-7 text-slate-400 font-light text-left lg:text-center'>{props.subtitle}</p>
        </div>
        <div className='flex flex-col gap-y-4 mt-10 sm:hidden'>
          <MapLocationCard location={winterthurLocation} />
          <MapLocationCard location={sionLocation} />
        </div>
        <div className='relative w-full h-full'>
          <div className='w-full h-full flex justify-center'>
            <Map
              sionLocation={sionLocation}
              winterthurLocation={winterthurLocation}
            />
          </div>
          <div className='absolute inset-0 flex justify-center items-center -z-50'>
            <MapGradient />
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}
