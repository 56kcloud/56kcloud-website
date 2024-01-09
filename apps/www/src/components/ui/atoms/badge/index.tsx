import {ReactNode} from 'react'
import {cn} from '@/utils/toolbox'

export const badgeColors = ['default', 'red', 'green', 'blue', 'yellow', 'brown', 'orange', 'purple', 'pink'] as const

export type BadgeProps = {
  children: ReactNode
  color?: (typeof badgeColors)[number]
  className?: string
}

export default function Badge({children, color = 'default', className = ''}: BadgeProps) {
  const colors = {
    default: 'bg-gray-400/10 text-gray-400 ring-gray-500/10 hover:bg-gray-400 hover:text-gray-600',
    red: 'bg-red-400/10 text-red-400 ring-red-600/10 hover:bg-red-400 hover:text-red-600',
    green: 'bg-green-400/10 text-green-400 ring-green-600/20 hover:bg-green-400 hover:text-green-600',
    blue: 'bg-blue-400/10 text-blue-400 ring-blue-400/10 hover:bg-blue-400 hover:text-blue-600',
    yellow: 'bg-yellow-400/10 text-yellow-800 ring-yellow-600/20 hover:bg-yellow-400 hover:text-yellow-600',
    brown: 'bg-stone-400/10 text-stone-400 ring-stone-600/10 hover:bg-stone-400 hover:text-stone-600',
    orange: 'bg-orange-400/10 text-orange-400 ring-orange-600/10 hover:bg-orange-400 hover:text-orange-600',
    purple: 'bg-purple-400/10 text-purple-400 ring-purple-400/10 hover:bg-purple-400 hover:text-purple-600',
    pink: 'bg-pink-400/10 text-pink-400 ring-pink-400/10 hover:bg-pink-400 hover:text-pink-600'
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ring-1 ring-inset \
                     hover:opacity-100',
        colors[color] || colors.default,
        className
      )}
    >
      <p className='text-xs font-medium whitespace-nowrap'>{children}</p>
    </span>
  )
}
