import {cn} from '@/utils/classes'

export type BadgeProps = {
  children: string
  color?: 'default' | 'red' | 'green' | 'blue' | 'yellow' | 'brown' | 'orange' | 'purple' | 'pink' | 'gray'
  className?: string
}

export default function Badge({children, color='default', className=''}: BadgeProps) {

  const colors = {
    default: 'bg-gray-50 text-gray-600 ring-gray-500/10',
    red: 'bg-red-50 text-red-700 ring-red-600/10',
    green: 'bg-green-50 text-green-700 ring-green-600/20',
    blue: 'bg-blue-50 text-blue-700 ring-blue-700/10',
    yellow: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
    brown: 'bg-stone-50 text-stone-700 ring-stone-600/10',
    orange: 'bg-orange-50 text-orange-700 ring-orange-600/10',
    purple: 'bg-purple-50 text-purple-700 ring-purple-700/10',
    pink: 'bg-pink-50 text-pink-700 ring-pink-700/10',
    gray: 'bg-gray-50 text-gray-600 ring-gray-500/10'
  }
  
  return (
    <div
      className={cn('inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ring-1',
        colors[color],
        className)}>
      <p className='text-xs font-medium whitespace-nowrap'>{children}</p>
    </div>
  )
}
