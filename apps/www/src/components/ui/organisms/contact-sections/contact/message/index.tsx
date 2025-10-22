import Script from 'next/script'

export default function Message(props: {className?: string}) {
  return (
    <div className={props.className}>
      <Script
        src='https://js.hsforms.net/forms/embed/7685644.js'
        defer
      />
      <div
        className='hs-form-frame'
        data-region='na1'
        data-form-id='dae441f1-1a90-49d9-8381-d09982785614'
        data-portal-id='7685644'
      ></div>
    </div>
  )
}
