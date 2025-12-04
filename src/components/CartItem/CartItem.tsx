import type { BookInCart } from '@/types/cart'
import DecreaseButton from '../DecreaseButton/DecreaseButton'
import IncreaseButton from '../IncreaseButton/IncreaseButton'

export default function CartItem({ id, title, quantity, price }: BookInCart) {
  return (
    <div key={id}>
      <p>{title}</p>
      <p>Antall: {quantity}</p>
      <p>Sum: {price * quantity} kr</p>
      <div>
        <DecreaseButton id={id}></DecreaseButton>
        <IncreaseButton id={id}></IncreaseButton>
      </div>
      <hr />
    </div>
  )
}
