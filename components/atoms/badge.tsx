export type BadgeProps = {
  children: string
}

export default function Badge({children}: BadgeProps) {
  return (
    <div className='flex items-center justify-center px-4 py-1 bg-gray-100 rounded-lg w-fit text-grey-dark'>
      <p className='text-xs font-medium'>{children}</p>
    </div>
  )
}
