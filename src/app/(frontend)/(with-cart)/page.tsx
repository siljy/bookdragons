import config from '@/payload.config'
import { getPayload } from 'payload'
import BookCard from '@/components/BookCard/BookCard'
import { hasThumbnail, hasAuthor, hasGenre } from '@/utils/typeGuards'
import FilterSection from '@/components/FilterSection/FilterSection'
import { FilterOption } from '@/types/filter'

export default async function BooksPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const params = await searchParams

  const payload = await getPayload({ config })
  const queryResultBooks = await payload.find({
    collection: 'books',
    where: {
      ...(params.author && { 'author.slug': { equals: params.author } }),
      ...(params.genre && { 'genre.slug': { equals: params.genre } }),
    },
    depth: 2,
  })

  const { docs: books } = queryResultBooks

  const queryResultsAuthors = await payload.find({
    collection: 'authors',
    sort: 'name',
  })

  const queryResultsGenres = await payload.find({
    collection: 'genres',
    sort: 'name',
  })

  const authorsOptions: FilterOption[] = queryResultsAuthors.docs.map((author) => ({
    id: author.slug,
    name: author.name,
  }))

  const genresOptions: FilterOption[] = queryResultsGenres.docs.map((genre) => ({
    id: genre.slug,
    name: genre.name,
  }))

  return (
    <section>
      <h1 className='title'>BookDragons</h1>
      <FilterSection authors={authorsOptions} genres={genresOptions}></FilterSection>
      <div className="bookGrid">
        {books.map((book) => {
          if (!hasThumbnail(book.cover)) {
            console.log('Bildet eksisterer ikke', book.title)
            return null
          }

          if (!hasAuthor(book.author)) {
            console.log('Forfatter eksisterer ikke', book.title)
            return null
          }

          if (!hasGenre(book.genre)) {
            console.log('Sjanger eksisterer ikke', book.title)
            return null
          }

          const { url, width, height } = book.cover.sizes.thumbnail
          const { alt } = book.cover
          const { name: authorName } = book.author
          const { name: genreName } = book.genre

          return (
            <BookCard
              bookUrl={`/bok/${book.slug}`}
              id={book.id}
              key={book.id}
              title={book.title}
              coverUrl={url}
              coverAlt={alt}
              coverWidth={width}
              coverHeight={height}
              price={book.price}
              author={authorName}
              genre={genreName}
              stock={book.stock}
              age={book.ages}
            ></BookCard>
          )
        })}
      </div>
    </section>
  )
}
