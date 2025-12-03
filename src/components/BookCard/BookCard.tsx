'use client'

import styles from '.BookCard.module.css'
import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link'

type BookCardProps = {
  bookUrl: string
  title: string
  coverUrl: string
  coverAlt: string
  coverWidth: number
  coverHeight: number
  author: string
  genre: string
  stock: number
  age: string
}

export default function BookCard({
  bookUrl,
  title,
  coverUrl,
  coverAlt,
  coverWidth,
  coverHeight,
  author,
  genre,
  stock,
  age,
}: BookCardProps) {
  return (
    <>
      <Link href={bookUrl}>
        <h2>{title}</h2>
        <Image src={coverUrl} alt={coverAlt} width={coverWidth} height={coverHeight}></Image>
        <p>{author}</p>
        <p>{genre}</p>
        <p>På lager: {stock}</p>
        <p>Anbefalt for: {age}</p>
      </Link>
      <Button
        onClick={() => console.log('hei')}
        type="button"
        disabled={stock <= 0}
        variant={stock <= 0 ? 'disabled' : 'primary'}
        text={stock <= 0 ? 'Ikke på lager' : 'Legg i handlekurv'}
      ></Button>
    </>
  )
}
