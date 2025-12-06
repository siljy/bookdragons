import React from 'react'
import './styles.css'
import NavBar from '@/components/NavBar/NavBar'

export const metadata = {
  description: 'BookDragons nettbutikk',
  title: 'BookDragons: Brukte bøker av høy kvalitet til rimelig pris',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <header>
          <NavBar></NavBar>
        </header>
        <main>
          {children}</main>
      </body>
    </html>
  )
}
