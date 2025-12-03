'use client'

import { useCartStore } from '@/store/cartStore'

export default function CartItem() {
  const cart = useCartStore((state) => state.cart)

  return (
    <section>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Antall: {item.quantity}</p>
          <p>Sum: {item.price * item.quantity} kr</p>
          <hr />
        </div>
      ))}
    </section>
  )
}
