import {cn} from '@/utils/toolbox'

export type BadgeProps = {
  children: string
  color?: 'default' | 'red' | 'green' | 'blue' | 'yellow' | 'brown' | 'orange' | 'purple' | 'pink'
  className?: string
}

export default function Badge({children, color='default', className=''}: BadgeProps) {

  const colors = {
    default: 'bg-gray-50 text-gray-600 ring-gray-500/10 hover:bg-gray-100 hover:text-gray-600',
    red: 'bg-red-50 text-red-700 ring-red-600/10 hover:bg-red-100 hover:text-red-600',
    green: 'bg-green-50 text-green-700 ring-green-600/20 hover:bg-green-100 hover:text-green-600',
    blue: 'bg-blue-50 text-blue-700 ring-blue-700/10 hover:bg-blue-100 hover:text-blue-600',
    yellow: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20 hover:bg-yellow-100 hover:text-yellow-600',
    brown: 'bg-stone-50 text-stone-700 ring-stone-600/10 hover:bg-stone-100 hover:text-stone-600',
    orange: 'bg-orange-50 text-orange-700 ring-orange-600/10 hover:bg-orange-100 hover:text-orange-600',
    purple: 'bg-purple-50 text-purple-700 ring-purple-700/10 hover:bg-purple-100 hover:text-purple-600',
    pink: 'bg-pink-50 text-pink-700 ring-pink-700/10 hover:bg-pink-100 hover:text-pink-600'
  }
  
  return (
    <div
      className={cn('inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ring-1 hover:opacity-100',
        colors[color] || colors.default,
        className)}>
      <p className='text-xs font-medium whitespace-nowrap'>{children}</p>
    </div>
  )
}
