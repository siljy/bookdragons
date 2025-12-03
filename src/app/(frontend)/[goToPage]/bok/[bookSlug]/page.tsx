//Viser fram en bok

import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { hasAuthor, hasThumbnail } from '@/utils/typeGuards'

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
    return (
      <div>
        Denne boken har vi ikke tilgang til, dessverre!
        <Link href={'/1'}>Gå tilbake til alle bøker</Link>
      </div>
    )
  }
  if (!hasThumbnail(book.cover)) {
    console.log('Bildet eksisterer ikke', book.title)
    return null
  }

  if (!hasAuthor(book.author)) {
    console.log('Forfatter eksisterer ikke', book.title)
    return null
  }

  return (
    <main>
      {/* Her må det legges på typeguard */}
      <Image
        src={book.cover.sizes.thumbnail.url}
        width={book.cover.sizes.thumbnail.width}
        height={book.cover.sizes.thumbnail.height}
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
