import {ContentAlternatePositionWithImage} from '@/components/ui/organisms/content-sections/content-alternate-position-with-image-item/content-alternate-position-with-image.model'
import ContentAlternatePositionWithImageItem from '@/components/ui/organisms/content-sections/content-alternate-position-with-image-item'

export type ContentAlternatePositionWithImageListProps = {
  items: Array<ContentAlternatePositionWithImage>
}

export default function ContentAlternatePositionWithImageList(props: ContentAlternatePositionWithImageListProps) {
  return (
    <div className='py-20 lg:py-[104px]'>
      <div className='relative px-6 mx-auto max-w-7xl lg:px-8'>
        {props.items.map((item, index) => (
          <ContentAlternatePositionWithImageItem
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
