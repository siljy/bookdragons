import React from 'react'
import Cart from '@/components/Cart/Cart'

export default async function LayoutWithoutCart({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Cart></Cart>
      {children}
    </>
  )
}
