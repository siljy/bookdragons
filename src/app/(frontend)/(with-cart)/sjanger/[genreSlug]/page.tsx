//Viser fram sjanger
import { getPayload } from 'payload'
import config from '@payload-config'
import PresentationArticle from '@/components/PresentationArticle/PresentationArticle'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import Link from 'next/link'

type GenrePageParams = {
  params: Promise<{ genreSlug: string }>
}

export default async function GenrePage({ params }: GenrePageParams) {
  const { genreSlug } = await params
  const payload = await getPayload({ config })

  const queryResultsGenres = await payload.find({
    collection: 'genres',
    where: {
      slug: {
        equals: genreSlug,
      },
    },
  })

  const genre = queryResultsGenres.docs[0]

  if (!genre) {
    return <ErrorMessage message="Denne sjangerens finnes ikke"></ErrorMessage>
  }

  const queryResultBooks = await payload.find({
    collection: 'books',
    where: {
      author: {
        equals: genre.id,
      },
    },
  })

  const books = queryResultBooks.docs

  return (
    <section>
      <nav>
        <Link className='link' href="/sjanger">Tilbake til alle sjangre</Link>
      </nav>
      <PresentationArticle
        name={genre.name}
        presentation={genre.presentation}
        books={books}
      ></PresentationArticle>
    </section>
  )
}
