export type ContentTwoColumnProps = {
  contentLeft: string
  contentRight: string
}

export default function ContentTwoColumn(props: ContentTwoColumnProps) {  
  return (
    <div className='px-6 mx-auto mt-20 max-w-7xl lg:px-8'>
      <div className='max-w-2xl mx-auto lg:mx-0 lg:max-w-none'>
        <div className='grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2'>
          <div>
            <p>{props.contentLeft}</p>
          </div>
          <div>
            <p>{props.contentRight}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
