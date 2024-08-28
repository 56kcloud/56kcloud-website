import {CTAProps} from '@/models/cta.model'
import {buttonTones} from '@/components/ui/atoms/button/button.model'
import {faker} from '@faker-js/faker'

export type CtaFactoryProps = {
  tone?: (typeof buttonTones)[number]
  link?: string
  title?: string
}

export function ctaFactory(props?: CtaFactoryProps): CTAProps {
  return {
    tone: props?.tone || faker.helpers.arrayElement(buttonTones),
    link: props?.link || '/',
    title: props?.title || faker.lorem.words(2)
  }
}
