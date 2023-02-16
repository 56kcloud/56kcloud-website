export type ImgPropsImpl = {
  src: string,
  alt: string,
  width: number,
  height: number,
}

export class ImgProps {
  src: string
  alt: string
  width: number
  height: number

  constructor (props: ImgPropsImpl) {
    this.src = props.src
    this.alt = props.alt
    this.width = props.width
    this.height = props.height
  }
}
