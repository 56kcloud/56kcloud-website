export type BadgeProps = {
  children: string
}

export default function Badge({children}: BadgeProps) {
  return (
    <div className='absolute flex items-center justify-center px-4 py-1 bg-white rounded-lg left-6 top-6 w-fit \ 
      text-grey-dark'>
      <p className='text-sm font-medium'>{children}</p>
    </div>
  )
}
