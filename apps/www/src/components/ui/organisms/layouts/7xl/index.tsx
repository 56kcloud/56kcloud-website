
export type CenteredLayoutProps = {
  children: Array<React.ReactNode>
}

export default function CenteredLayout({children}: CenteredLayoutProps) {
  const header = children[0]
  const footer = children[children.length - 1]
  const body = children.slice(1, children.length - 1)
  return (
    <div className='flex flex-col items-center w-full'>
      {header}
      <div className='flex flex-col items-center justify-center w-full px-4 mb-10 space-y-10 max-w-7xl'>
        {body}
      </div>
      {footer}
    </div>
  )
}
