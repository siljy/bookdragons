'use client'

import { useCartStore } from '@/store/cartStore'
import Button from '../Button/Button'

type AddToCartButtonProps = {
  book: {
    id: number
    title: string
    price: number
    stock: number
  }
}

export default function AddToCartButton({ book }: AddToCartButtonProps) {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <Button
      onClick={() => addToCart(book)}
      type="button"
      disabled={book.stock <= 0}
      variant={book.stock <= 0 ? 'disabled' : 'primary'}
      text={book.stock <= 0 ? 'Ikke på lager' : 'Legg i handlekurv'}
    ></Button>
  )
}
