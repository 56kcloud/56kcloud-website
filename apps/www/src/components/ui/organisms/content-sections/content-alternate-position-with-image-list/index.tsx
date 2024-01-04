import {ContentAlternatePositionWithImage} from '@/models/content-alternate-position-with-image'
import ContentAlternatePositionWithImageItem from '@/components/ui/organisms/content-sections/content-alternate-position-with-image-item'

export type ContentAlternatePositionWithImageListProps = {
  items: Array<ContentAlternatePositionWithImage>
}

export default function ContentAlternatePositionWithImageList(props: ContentAlternatePositionWithImageListProps) {
  const items = props.items.map((item) => {
    return {
      image: item.image,
      title: item.title,
      description: item.description,
      imagePosition: item.imagePosition,
      slug: item.slug
    }
  })

  return <ContentAlternatePositionWithImageItem items={items} />
}
