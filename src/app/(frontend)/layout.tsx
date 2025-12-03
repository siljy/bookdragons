import React from 'react'
import './styles.css'
import Cart from '@/components/Cart/Cart'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <header>
          <Cart></Cart>
        </header>
        <main>
          <h1>BookDragons</h1>
          {children}
        </main>
      </body>
    </html>
  )
}
