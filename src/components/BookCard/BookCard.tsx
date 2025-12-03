'use client'

import styles from '.BookCard.module.css'
import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

type BookCardProps = {
  bookUrl: string
  id: number
  title: string
  coverUrl: string
  coverAlt: string
  coverWidth: number
  coverHeight: number
  price: number
  author: string
  genre: string
  stock: number
  age: string
}

export default function BookCard({
  bookUrl,
  id,
  title,
  coverUrl,
  coverAlt,
  coverWidth,
  coverHeight,
  price,
  author,
  genre,
  stock,
  age,
}: BookCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)
  const book = {
    id,
    title,
    price,
  }
  return (
    <>
      <Link href={bookUrl}>
        <h2>{title}</h2>
        <Image src={coverUrl} alt={coverAlt} width={coverWidth} height={coverHeight}></Image>
        <p>{author}</p>
        <p>{price}kr</p>
        <p>{genre}</p>
        <p>På lager: {stock}</p>
        <p>Anbefalt for: {age}</p>
      </Link>
      <Button
        onClick={() => addToCart(book)}
        type="button"
        disabled={stock <= 0}
        variant={stock <= 0 ? 'disabled' : 'primary'}
        text={stock <= 0 ? 'Ikke på lager' : 'Legg i handlekurv'}
      ></Button>
    </>
  )
}
