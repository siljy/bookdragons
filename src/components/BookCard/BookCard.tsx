'use client'

import styles from '.BookCard.module.css'
import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link'

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

type bookInCart = {
  id: number
  title: string
  price: number
}

type id = {
  id: number
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
  const book = {
    id: id,
    title: title,
    price: price,
  }

  function saveToLocalStorage(book: bookInCart) {
    const cart = JSON.parse(localStorage.getItem('handlekurv') || '[]')

    const existingItem = cart.findIndex((item: id) => item.id === book.id)

    if (existingItem > -1) {
      cart[existingItem].quantity += 1
    } else {
      cart.push({ ...book, quantity: 1 })
    }
    localStorage.setItem('handlekurv', JSON.stringify(cart))
    console.log(`${book.title} lagt til i handlekurv`)
  }

  return (
    <>
      <Link href={bookUrl}>
        <h2>{title}</h2>
        <Image src={coverUrl} alt={coverAlt} width={coverWidth} height={coverHeight}></Image>
        <p>{author}</p>
        <p>{price}KR</p>
        <p>{genre}</p>
        <p>På lager: {stock}</p>
        <p>Anbefalt for: {age}</p>
      </Link>
      <Button
        onClick={() => saveToLocalStorage(book)}
        type="button"
        disabled={stock <= 0}
        variant={stock <= 0 ? 'disabled' : 'primary'}
        text={stock <= 0 ? 'Ikke på lager' : 'Legg i handlekurv'}
      ></Button>
    </>
  )
}
