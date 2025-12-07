import type { BookInCart } from '@/types/cart'
import styles from './CartItem.module.css'
import DecreaseButton from '../DecreaseButton/DecreaseButton'
import IncreaseButton from '../IncreaseButton/IncreaseButton'
import RemoveFromCartButton from '../RemoveFromCartButton/RemoveFromCartButton'

import { useCartStore } from '@/store/cartStore'

export default function CartItem({ id, title, quantity, price }: BookInCart) {
  return (
    <div key={id} className={styles.cartItem}>
      <div className={styles.textContent}>
        <p className={styles.bookTitle}>{title}</p>
        <p>Antall: {quantity}</p>
        <p>Sum: {price * quantity} kr</p>
      </div>
      <div className={styles.quantityButtons}>
        <DecreaseButton id={id}></DecreaseButton>
        <IncreaseButton id={id}></IncreaseButton>
        <RemoveFromCartButton id={id}></RemoveFromCartButton>
      </div>
    </div>
  )
}
