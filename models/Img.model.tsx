export type ImgBase = {
  src: string
  alt: string
  className?: string
}

type ImgFill = ImgBase & {
  fill: true
}

type ImgDimensionValues = ImgBase & {
  fill: false
  width: number
  height: number
}

export type ImgPropsImpl = ImgDimensionValues | ImgFill
