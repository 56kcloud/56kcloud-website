import {ImageProps} from '@/models/image.model'
import Image from 'next/image'

export type InfiniteSliderLogosProps = {
  logos: Array<ImageProps>
}

export default function InfiniteSliderLogos(props: InfiniteSliderLogosProps) {
  const logosLength = props.logos.length
  const pixelsPerSecond = 100
  const animationSpeed = (500 * logosLength) / 2 / pixelsPerSecond

  return (
    <div
      className='relative mt-12 mx-12 overflow-hidden whitespace-nowrap /
      [mask-image:_linear-gradient(to_right,_transparent_0,_white_96px,white_calc(100%-96px),_transparent_100%)]'
    >
      <div
        className='flex'
        style={{
          width: `calc(500px * ${logosLength})`,
          animationName: `infiniteSliderAnimationFor${logosLength}`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDuration: `${animationSpeed}s`
        }}
      >
        {props.logos.map((logo, index) => (
          <div
            key={props.logos.length + index}
            className='flex items-center justify-center mx-4 w-[234px] p-7 sm:p-8 lg:p-10 bg-[#151E31] rounded-2xl \
            border border-slate-800'
          >
            <Image
              className='max-h-6 sm:max-h-8 lg:max-h-10'
              src={logo.url}
              alt={logo.alternateText || logo.name}
              width={logo.width}
              height={logo.height}
            />
          </div>
        ))}
        {props.logos.map((logo, index) => (
          <div
            key={props.logos.length + index}
            className='flex items-center justify-center mx-4 w-[234px] p-7 sm:p-8 lg:p-10 bg-[#151E31] rounded-2xl \
            border border-slate-800'
          >
            <Image
              className='max-h-6 sm:max-h-8 lg:max-h-10'
              src={logo.url}
              alt={logo.alternateText || logo.name}
              width={logo.width}
              height={logo.height}
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes infiniteSliderAnimationFor${logosLength} {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-500px * ${logosLength / 2}));
          }
        }
      `}</style>
    </div>
  )
}
