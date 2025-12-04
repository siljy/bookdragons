import Cart from '@/components/Cart/Cart'
import "./styles.css"

export default function LayoutWithCart({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Cart></Cart>
      </header>
      {children}
    </>
  )
}
