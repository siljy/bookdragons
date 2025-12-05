import config from '@/payload.config'
import { getPayload } from 'payload'
import Link from 'next/link'
import BookCard from '@/components/BookCard/BookCard'
import { hasThumbnail, hasAuthor, hasGenre } from '@/utils/typeGuards'
import FilterSection from '@/components/FilterSection/FilterSection'
import { FilterOption } from '@/types/filter'

export default async function BooksPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const payload = await getPayload({ config })
  const queryResultBooks = await payload.find({
    collection: 'books',
    where: {
      ...(searchParams.author && { 'author.slug': { equals: searchParams.author } }),
      ...(searchParams.genre && { 'genre.slug': { equals: searchParams.genre } }),
    },
    limit: 9,
    depth: 2,
  })

  const queryResultsAuthors = await payload.find({
    collection: 'authors',
  })

  const queryResultsGenres = await payload.find({
    collection: 'genres',
  })

  const { docs: books, totalPages } = queryResultBooks
  const authors = queryResultsAuthors.docs
  const genres = queryResultsGenres.docs

  const authorsOptions: FilterOption[] = authors.map((author) => ({
    id: author.slug,
    name: author.name,
  }))

  const genresOptions: FilterOption[] = genres.map((genre) => ({
    id: genre.slug,
    name: genre.name,
  }))

  if (books.length === 0) {
    return (
      <section>
        <FilterSection authors={authorsOptions} genres={genresOptions}></FilterSection>
        <p>Vi har ingen bøker som matcher filteret ditt, dessverre</p>
      </section>
    )
  }

  return (
    <section>
      <FilterSection authors={authorsOptions} genres={genresOptions}></FilterSection>

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
          <div key={book.id}>
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
          </div>
        )
      })}

      {/* Framgangsmåte for paginering er hentet fra MinGA under Julesanger med paginering/Redirect og URL-parametre: 
      https://lms.gokstadakademiet.no/course/view.php?id=349#module-16273 */}
      {Array.from({ length: totalPages }, (_, i) => {
        const pageNum = i + 1
        const isActive = pageNum === pageNum
        return (
          <Link key={pageNum} href={`/${pageNum}`}>
            {pageNum}
          </Link>
        )
      })}
    </section>
  )
}
