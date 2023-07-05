export const backgroundOptions = ['cover', 'color'] as const
export type FooterProps = {
  background?: typeof backgroundOptions[number]
}
