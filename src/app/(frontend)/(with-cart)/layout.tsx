import React from 'react'
import './styles.css'
import Cart from '@/components/Cart/Cart'

export default async function LayoutWithoutCart({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Cart></Cart>
      {children}
    </>
  )
}
