import styles from './MinimalBookCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export type MinimalBookCardProps = {
  title: string
  author: string
  slug: string
  id: number
  coverUrl: string
  coverAlt: string
  coverWidth: number
  coverHeight: number
}

export default function MinimalBookCard({
  coverUrl,
  coverAlt,
  coverWidth,
  coverHeight,
  title,
  author,
  slug,
}: MinimalBookCardProps) {
  return (
    <Link href={`/bok/${slug}`}>
      <div className={styles.minimalBookCard}>
        <h3>{title}</h3>
        <p>{author}</p>
        <Image src={coverUrl} alt={coverAlt} width={coverWidth} height={coverHeight}></Image>
      </div>
    </Link>
  )
}
