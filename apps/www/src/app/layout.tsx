import '../styles/global.css'

export type RootLayoutProps = {
  children: React.ReactNode
}

export default function Root({children}: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
