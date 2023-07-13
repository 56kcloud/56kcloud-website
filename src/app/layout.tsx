import './global.css'
import {ReactNode} from 'react'

export default async function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang='en'>
      <body> 
        {children}
      </body>
    </html>
  )
}
