import {StaticImageData} from 'next/image'
import amazon from '../../public/images/logos/amazon.webp'
import dockers from '../../public/images/logos/dockers.webp'
import exoscale from '../../public/images/logos/exoscale.webp'
import gruntworks from '../../public/images/logos/gruntworks.webp'
import medispend from '../../public/images/logos/medispend.webp'
import sml from '../../public/images/logos/sml.webp'
import swisscom from '../../public/images/logos/swisscom.webp'

export type Company = {
  name: string
  logo: StaticImageData
}

export const companies: Array<Company> = [
  {
    name: 'amazon',
    logo: amazon
  },
  {
    name: 'dockers',
    logo: dockers
  },
  {
    name: 'exoscale',
    logo: exoscale
  },
  {
    name: 'gruntworks',
    logo: gruntworks
  },
  {
    name: 'medispend',
    logo: medispend
  },
  {
    name: 'sml',
    logo: sml
  },
  {
    name: 'swisscom',
    logo: swisscom
  }
]
