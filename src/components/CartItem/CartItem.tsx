import type { BookInCart } from '@/store/cartStore'

export default function CartItem({ id, title, quantity, price }: BookInCart) {
  return (
    <div key={id}>
      <p>{title}</p>
      <p>Antall: {quantity}</p>
      <p>Sum: {price * quantity} kr</p>
      <hr />
    </div>
  )
}
