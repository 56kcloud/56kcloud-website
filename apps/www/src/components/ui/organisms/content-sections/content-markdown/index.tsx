import MarkdownViewer from '@/components/ui/molecules/markdown'

export type ContentMarkdownProps = {
  content: string
}

export default function ContentMarkdown(props: ContentMarkdownProps) {
  return (
    <div className='px-6 mx-auto mt-20 max-w-7xl lg:px-8'>
      <MarkdownViewer
        content={props.content}
        className='px-0'
      />
    </div>
  )
}
