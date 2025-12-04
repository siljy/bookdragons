import type { CartButtonProps } from '@/types/cart'
import { useCartStore } from '@/store/cartStore'

export default function RemoveFromCartButton({ id }: CartButtonProps) {
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  return <button onClick={() => removeFromCart(id)}>Fjern</button>
}
