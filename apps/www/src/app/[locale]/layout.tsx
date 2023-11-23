import '../../styles/global.css'

export default function Root({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className='relative bg-background isolate'>
        {children}
      </body>
    </html>
  )
}
