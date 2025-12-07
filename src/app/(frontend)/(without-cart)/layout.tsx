import React from 'react'
import './styles.css'

export default async function LayoutWithoutCart({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
