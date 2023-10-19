import {Partner} from '@/models/partner'
import {motion} from 'framer-motion'
import Image from 'next/image'

type PartnerCardProps = {
  partner: Partner
}

export default function PartnerCard({partner}: PartnerCardProps) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.2}}
    >
      <li
        key={partner.name}
        className='flex items-center justify-center w-20 h-20 p-5 m-6 list-none bg-white rounded-full \
              lg:w-24 lg:h-24 relative group transition ease-in-out duration-500 hover:scale-110'>
        <Image
          width={partner.logo.width}
          height={partner.logo.height}
          src={partner.logo.src}
          alt={partner.name}
        />
        <a
          href={partner.url}
          target='_blank'
          className='absolute items-center justify-center w-full h-full capitalize backdrop-blur-sm bg-white-50/50 \
                font-medium hidden group-hover:flex overflow-hidden rounded-full backdrop-brightness-105'>
          <p className='text-sm duration-300 animate-in group-hover:zoom-in group-out-of-range:zoom-out'>
            {partner.name}
          </p>
        </a>
      </li>
    </motion.div>
  )
}
