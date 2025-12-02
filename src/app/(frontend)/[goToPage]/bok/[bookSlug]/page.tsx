//Viser fram en bok

import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'

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
      {/* Her må det legges på typeguard */}
      <Image
        src={book.cover.sizes.thumbnail.url}
        width={200}
        height={300}
        alt={book.cover.alt}
      ></Image>
      <h1>{book.title}</h1>
      <h2>{book.author.name}</h2>
      <p>{book.description}</p>
      <p>Aldersgruppe: {book.ages}</p>
      <p>På lager: {book.stock}</p>
    </main>
  )
}
