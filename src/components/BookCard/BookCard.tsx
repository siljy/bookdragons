import styles from '.BookCard.module.css'
import Image from 'next/image'

type BookCardProps = {
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
      <h2>{title}</h2>
      <Image src={coverUrl} alt={coverAlt} width={coverWidth} height={coverHeight}></Image>
      <p>{author}</p>
      <p>{genre}</p>
      <p>På lager: {stock}</p>
      <p>Anbefalt for: {age}</p>
    </>
  )
}
