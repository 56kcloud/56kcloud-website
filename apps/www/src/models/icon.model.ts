import {z} from 'zod'

export type IconProps = {
  className?: string
}

export const iconSchema = z.object({
  name: z.string()
})

export type Icon = z.infer<typeof iconSchema>
