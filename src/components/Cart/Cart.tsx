'use client'

import { useCartStore } from '@/store/cartStore'
import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.css'
import Button from '../Button/Button'

export default function Cart() {
  const cart = useCartStore((state) => state.cart)

  let total = 0

  cart.forEach((item) => {
    total += item.price * item.quantity
  })

  return (
    <section className={styles.cart}>
      <h2>Handlekurv</h2>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          stock={item.stock}
        ></CartItem>
      ))}
      <h3>Sum: {total} kr</h3>
      {/* Legg til onClick her for å gå videre til bestillingsskjema */}
      <Button type="button" variant="primary" text="Bestill" disabled={false}></Button>
    </section>
  )
}
