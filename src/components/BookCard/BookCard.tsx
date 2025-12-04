'use client'

import styles from '.BookCard.module.css'
import Image from 'next/image'
import AddToCartButton from '../AddToCartButton/AddToCartButton'
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
    stock,
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
      <AddToCartButton book={book}></AddToCartButton>
    </>
  )
}
