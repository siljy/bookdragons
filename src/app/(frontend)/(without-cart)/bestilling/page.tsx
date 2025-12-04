'use client'

import OrderForm from '@/components/OrderForm/OrderForm'
import { useCartStore } from '@/store/cartStore'

export default function OrderPage() {
  const cart = useCartStore((state) => state.cart)
  let total = 0

  cart.forEach((item) => {
    total += item.price * item.quantity
  })
  return (
    <section>
      <h1>Legg inn din bestilling</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Antall: {item.quantity}</p>
          <p>Sum: {item.price * item.quantity} kr</p>
        </div>
      ))}
      <h3>Til sammen: {total} kr</h3>
      <OrderForm></OrderForm>
    </section>
  )
}
