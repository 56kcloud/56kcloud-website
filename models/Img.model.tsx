export type ImgBase = {
  src: string
  alt: string
  className?: string
}

type ImgFill = ImgBase & {
  fill: true
}

type ImgDimensionValues = ImgBase & {
  fill?: false
  width: number
  height: number
}

export type ImgPropsImpl = ImgDimensionValues | ImgFill

export class ImgProps {
  src: string
  alt: string
  className?: string
  specificHTMLProps?: Record<string, string>

  constructor (props: ImgPropsImpl) {
    this.src = props.src
    this.alt = props.alt
    this.className = props.className
    this.specificHTMLProps = this.specificHTMLPropsIntegration(props)
  }

  specificHTMLPropsIntegration (props: ImgPropsImpl) {
    const HTMLProps = {}
    const HTMLPropsKeys = Object.keys(props).filter(prop => !Object.keys(this).includes(prop))
    HTMLPropsKeys.forEach(specificProp => {
      const value = props[specificProp as keyof ImgPropsImpl]
      Object.assign(HTMLProps, {[specificProp]: value})
    })
    return HTMLProps
  }
}
