//Viser fram en bok

import { getPayload } from 'payload'
import config from '@payload-config'

type BookPageParams = {
  params: Promise<{ bookSlug: string }>
}

export default async function BookPage({ params }: BookPageParams) {
  const { bookSlug } = await params
  const payload = await getPayload({ config })

  const queryResults = await payload.find({
    collection: 'books',
    where: {
      slug: {
        equals: bookSlug,
      },
    },
  })

  const book = queryResults.docs[0]

  if (!book) {
    return <div>Denne boken har vi ikke tilgang til, dessverre!</div>
  }

  return (
    <main>
      <h1>{book.title}</h1>

    </main>
  )
}
