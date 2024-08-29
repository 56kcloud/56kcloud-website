import {cn} from '@/utils/toolbox'

export type FloatingGradientProps = {
  className?: string
}

export default function FloatingGradientLeft({className}: FloatingGradientProps) {
  return (
    <svg
      className={cn(className, '-z-50 origin-center overflow-visible')}
      width='887'
      height='658'
      viewBox='0 0 887 658'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
    >
      <g filter='url(#filter0_f_1004_2)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M136 136L750.667 469.183L372 521.553L136 136Z'
          fill='url(#paint0_linear_1004_2)'
        ></path>
      </g>
      <defs>
        <filter
          id='filter0_f_1004_2'
          x='0.085907'
          y='0.085907'
          width='886.495'
          height='657.381'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood
            floodOpacity='0'
            result='BackgroundImageFix'
          ></feFlood>
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          ></feBlend>
          <feGaussianBlur
            stdDeviation='67.957'
            result='effect1_foregroundBlur_1004_2'
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id='paint0_linear_1004_2'
          x1='-6.10446'
          y1='250.66'
          x2='72.7636'
          y2='604.216'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0EA5E9'></stop>
          <stop
            offset='1'
            stopColor='#0F172A'
            stopOpacity='0.01'
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
