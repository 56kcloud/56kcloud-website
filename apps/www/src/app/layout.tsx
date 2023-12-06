import '../styles/global.css'

export type RootLayoutProps = {
  children: React.ReactNode
}

export default function Root({children}: RootLayoutProps) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
