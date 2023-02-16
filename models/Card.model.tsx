export type CardPropsImpl = {
  number: string,
  image: string,
  icon: string,
  title: string,
  description: string,
  alignment: string,
  theme?: string
}

export class CardProps {
  number: string
  image: string
  icon: string
  title: string
  description: string
  alignment: string
  theme?: string

  constructor (props: CardPropsImpl) {
    this.number = props.number
    this.image = props.image
    this.icon = props.icon
    this.title = props.title
    this.description = props.description
    this.alignment = props.alignment || 'left'
    this.theme = props.theme || 'dark'
  }
}
