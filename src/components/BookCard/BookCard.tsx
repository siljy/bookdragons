import styles from '.BookCard.module.css'
import Image from 'next/image'

type BookCardProps = {
  title: string
  alt: string
  author: string
  cover: string
  genre: string
}

export default function BookCard({ title,alt, cover, author, genre }: BookCardProps) {
  //Legge til sjanger og omslag, pluss pris når det er lagt inn i innholdssamling
  //Senere: refaktorere props fra page.tsx eller legge til en bildetype for å hente ut bredde/høyde
  return (
    <div>
      <h2>{title}</h2>
      <Image src={cover} alt={alt} width={200} height={300}></Image>
      <p>{author}</p>
      <p>{genre}</p>
    </div>
  )
}
