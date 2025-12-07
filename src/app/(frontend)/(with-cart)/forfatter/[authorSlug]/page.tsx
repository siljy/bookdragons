//Viser fram forfatter
import { getPayload } from 'payload'
import config from '@payload-config'
import PresentationArticle from '@/components/PresentationArticle/PresentationArticle'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import Link from 'next/link'

type AuthorPageParams = {
  params: Promise<{ authorSlug: string }>
}

export default async function AuthorPage({ params }: AuthorPageParams) {
  const { authorSlug } = await params
  const payload = await getPayload({ config })

  const queryResultsAuthors = await payload.find({
    collection: 'authors',
    where: {
      slug: {
        equals: authorSlug,
      },
    },
  })

  const author = queryResultsAuthors.docs[0]

  if (!author) {
    return <ErrorMessage message="Denne forfatteren finnes ikke"></ErrorMessage>
  }

  const queryResultBooks = await payload.find({
    collection: 'books',
    where: {
      author: {
        equals: author.id,
      },
    },
    depth: 2,
  })

  const books = queryResultBooks.docs

  return (
    <section>
      <nav>
        <Link href="/forfatter">Se alle forfattere</Link>
      </nav>
      <PresentationArticle
        name={author.name}
        presentation={author.presentation}
        books={books}
      ></PresentationArticle>
    </section>
  )
}
