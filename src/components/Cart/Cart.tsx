'use client'

import { useCartStore } from '@/store/cartStore'
import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.css'
import Button from '../Button/Button'
import Link from 'next/link'

export default function Cart() {
  const cart = useCartStore((state) => state.cart)

  let total = 0

  // if (cart.length === 0) {
  //   return <p>Handlekurven er tom</p>
  // }

  cart.forEach((item) => {
    total += item.price * item.quantity
  })

  return (
    <section className={styles.cart}>
      <h2>Handlekurv</h2>

      {cart.length === 0 ? (
        <p>Handlekurven er tom</p>
      ) : (
        <div>
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
          <Link href="/bestilling">
            <Button type="button" variant="primary" text="Bestill" disabled={false}></Button>
          </Link>
        </div>
      )}
    </section>
  )
}
