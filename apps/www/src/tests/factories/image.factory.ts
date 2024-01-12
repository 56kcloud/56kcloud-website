import {ImageProps} from '@/models/image.model'
import {faker} from '@faker-js/faker'

export type ImageFactoryProps = {
  width?: number
  height?: number
  category?: string
}

export function imageFactory(props?: ImageFactoryProps): ImageProps {
  const width = props?.width || 500
  const height = props?.height || 1000
  const options = {
    width,
    height,
    category: props?.category || 'nature'
  }
  const url =
    props?.category === 'logo'
      ? 'https://56k-strapi.s3.eu-central-1.amazonaws.com/56k_cloud_logo_mark_white_7d3c136095.svg'
      : faker.image.urlLoremFlickr(options)
  return {
    id: faker.number.int(),
    name: faker.system.fileName(),
    hash: faker.string.uuid(),
    ext: 'heic',
    mime: faker.system.mimeType(),
    size: faker.number.int(),
    alternateText: faker.lorem.words(3),
    caption: faker.lorem.words(3),
    height,
    width,
    url,
    folderPath: faker.system.filePath(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.past().toISOString(),
    previewUrl: faker.image.urlLoremFlickr(options),
    provider: 'faker',
    providerMetadata: faker.lorem.words(3),
    placeholder: 'empty'
  }
}
