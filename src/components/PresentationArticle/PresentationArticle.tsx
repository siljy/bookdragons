import MinimalBookCard from '../MinimalBookCard/MinimalBookCard'
import type { Book } from '@/payload-types'
import { hasThumbnail } from '@/utils/typeGuards'

type PresentationArticleProps = {
  name: string
  presentation: string
  books: Book[]
}

export default function PresentationArticle({
  name,
  presentation,
  books,
}: PresentationArticleProps) {
  return (
    <article>
      <h1>{name}</h1>
      <p>{presentation}</p>
      <h2>Bøker:</h2>
      <section>
        {books.map((book) => {
          if(!hasThumbnail(book.cover)){
            console.log("Boken har ikke et bilde")
            return null
          }


        const { url, width, height } = book.cover.sizes.thumbnail
        const { alt } = book.cover

          return (
            <MinimalBookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={name}
              slug={book.slug}
              coverUrl={url}
              coverAlt={alt}
              coverWidth={width}
              coverHeight={height}
            ></MinimalBookCard>
          )
        })}
      </section>
    </article>
  )
}
