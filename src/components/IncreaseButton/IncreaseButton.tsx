import { useCartStore } from '@/store/cartStore'
import { CartButtonProps } from '@/types/cart'

export default function IncreaseButton({ id }: CartButtonProps) {
  const increaseCart = useCartStore((state) => state.increaseCart)

  return <button onClick={() => increaseCart(id)}>+</button>
}
