import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.css'

export default function Cart() {
  return (
    <div className={styles.cart}>
      <h2>Handlekurv</h2>
      <CartItem></CartItem>
    </div>
  )
}
