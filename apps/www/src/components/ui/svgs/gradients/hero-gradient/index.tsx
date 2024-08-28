import {cn} from '@/utils/toolbox'

export type HeroGradientProps = {
  className?: string
}

export default function HeroGradient({className}: HeroGradientProps) {
  return (
    <svg
      className={cn(className, 'w-full')}
      width='1920'
      height='640'
      viewBox='0 0 1920 640'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
    >
      <rect
        width='1920'
        height='658'
        fill='url(#paint0_radial_302_170)'
      ></rect>
      <mask
        id='mask0_302_170'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='1920'
        height='658'
      >
        <rect
          width='1920'
          height='658'
          fill='white'
        ></rect>
      </mask>
      <g mask='url(#mask0_302_170)'>
        <g filter='url(#filter0_f_302_170)'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M1547.41 -107.698L1091.36 445.473L1090.14 62.3922L1547.41 -107.698Z'
            fill='url(#paint1_linear_302_170)'
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id='filter0_f_302_170'
          x='954.223'
          y='-243.612'
          width='729.097'
          height='824.999'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood
            flood-opacity='0'
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
            result='effect1_foregroundBlur_302_170'
          ></feGaussianBlur>
        </filter>
        <radialGradient
          id='paint0_radial_302_170'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(932.167) rotate(90) scale(688.45 2102.29)'
        >
          <stop
            stop-color='#38BDF8'
            stop-opacity='0.72'
          ></stop>
          <stop
            offset='0.223497'
            stop-color='#0EA5E9'
            stop-opacity='0.4'
          ></stop>
          <stop
            offset='1'
            stop-color='#0F172A'
            stop-opacity='0.01'
          ></stop>
        </radialGradient>
        <linearGradient
          id='paint1_linear_302_170'
          x1='1255.18'
          y1='-9.93911'
          x2='559.316'
          y2='92.2741'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#0F172A'></stop>
          <stop
            offset='1'
            stop-color='#0EA5E9'
            stop-opacity='0.01'
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
