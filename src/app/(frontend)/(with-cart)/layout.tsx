import Cart from '@/components/Cart/Cart'
import './styles.css'

export default function LayoutWithCart({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Cart></Cart>
      {children}
    </>
  )
}
