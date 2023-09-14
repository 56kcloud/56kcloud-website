import {Solution} from '@/models/solution.model'
import {motion} from 'framer-motion'
import CardCover from '../cover'
import Link from 'next/link'

type SolutionCardProps = {
  solution: Solution
}

export default function SolutionCard({solution}: SolutionCardProps) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.2}}
    >
      <Link
        href={`/solution/${solution.slug}`}
        className='relative flex flex-col overflow-hidden duration-200 bg-white rounded-lg shadow-lg cursor-pointer \
      hover:shadow-2xl hover:scale-105'>
        <CardCover image={solution.image}/>
        <div
          className='flex flex-col py-6 pl-6 bg-white'>
          <div className='pr-6'>
            <h1
              className='text-2xl line-clamp-2 text-grey-dark title'>
              {solution.title}
            </h1>
            <p 
              className='mt-2 text-base text-grey-light line-clamp-3'>
              {solution.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
