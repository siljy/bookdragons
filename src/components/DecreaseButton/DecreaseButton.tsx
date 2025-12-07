import { useCartStore } from '@/store/cartStore'
import { CartButtonProps } from '@/types/cart'

export default function DecreaseButton({ id }: CartButtonProps) {
  const decreaseCart = useCartStore((state) => state.decreaseCart)
  return <button onClick={() => decreaseCart(id)}>-</button>
}
