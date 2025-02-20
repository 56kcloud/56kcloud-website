import {ImageProps} from '@/models/image.model'
import {cn} from '@/utils/toolbox'
import {useState} from 'react'
import Image from 'next/image'

export type CaseStudyProps = {
  title: string
  content: string
  image: ImageProps
}

export default function CaseStudy({title, content, image}: CaseStudyProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <Image
        src={image.url}
        alt={image.alternateText || image.name}
        onLoad={() => {
          setIsLoaded(true)
        }}
        fill
        className={cn('object-cover w-full', isLoaded && 'bg-white')}
      />
    </div>
  )
}
