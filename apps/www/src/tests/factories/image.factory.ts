import {ImageProps} from '@/models/image.model'
import {faker} from '@faker-js/faker'

type ImageFactoryProps = {
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
    url: faker.image.urlLoremFlickr(options),
    folderPath: faker.system.filePath(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.past().toISOString(),
    previewUrl: faker.image.urlLoremFlickr(options),
    provider: 'faker',
    providerMetadata: faker.lorem.words(3),
    placeholder: faker.image.urlLoremFlickr(options)
  }
}
