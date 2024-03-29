import {IconProps} from '../../../../../models/icon.model'

export default function Linkedin(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='27.69'
      height='29.13'
      viewBox='0 0 27.69 29.13'
      fill='currentColor'
      {...props}
    >
      <defs>
        <filter
          id='filter'
          x='1725.31'
          y='8517.34'
          width='27.69'
          height='29.13'
          filterUnits='userSpaceOnUse'
        >
          <feFlood result='flood' />
          <feComposite
            result='composite'
            operator='in'
            in2='SourceGraphic'
          />
          <feBlend
            result='blend'
            in2='SourceGraphic'
          />
        </filter>
      </defs>
      <path
        id='In'
        className='cls-1'
        // eslint-disable-next-line max-len
        d='M1731.51,8546.48h-5.74v-19.46h5.74v19.46Zm-2.87-22.12a3.515,3.515,0,1,1,3.33-3.51A3.422,3.422,0,0,1,1728.64,8524.36Zm24.35,22.12h-5.73v-9.47c0-2.26-.04-5.16-2.98-5.16-2.98,0-3.44,2.46-3.44,5v9.63h-5.73v-19.46h5.5v2.65h0.08a5.976,5.976,0,0,1,5.42-3.14c5.81,0,6.88,4.03,6.88,9.27v10.68Z'
        transform='translate(-1725.31 -8517.34)'
      />
    </svg>
  )
}
