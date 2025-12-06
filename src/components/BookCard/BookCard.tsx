'use client'

import styles from './BookCard.module.css'
import Image from 'next/image'
import AddToCartButton from '../AddToCartButton/AddToCartButton'
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
    id,
    title,
    price,
    stock,
  }
  return (
    <article className={styles.bookCard}>
      <Link href={bookUrl}>
        <Image src={coverUrl} alt={coverAlt} width={coverWidth} height={coverHeight}></Image>
        <div className={styles.cardText}>
          <h2>{title}</h2>
          <p className={styles.authorTag}>{author}</p>
          <p>{genre}</p>
          <p className={styles.priceTag}>{price}kr</p>
          <div className={styles.details}>
            <p>
              På lager: <b>{stock}</b>
            </p>
            <p>Anbefalt for: {age}</p>
          </div>
        </div>
      </Link>
      <AddToCartButton book={book}></AddToCartButton>
    </article>
  )
}
