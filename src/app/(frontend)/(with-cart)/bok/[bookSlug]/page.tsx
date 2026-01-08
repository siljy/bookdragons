//Viser fram en bok
import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { hasAuthor, hasGenre, hasMobileSize } from '@/utils/typeGuards'
import AddToCartButton from '@/components/AddToCartButton/AddToCartButton'

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

  if (!hasMobileSize(book.cover)) {
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

  const { url, width, height } = book.cover.sizes.mobile
  const { alt } = book.cover
  const { name: authorName } = book.author
  const { name: genreName } = book.genre

  return (
    <section className="bookSection">
      <nav>
        <Link className="link" href="/">
          Tilbake til alle bøker
        </Link>
      </nav>
      <Image src={url} width={width} height={height} alt={alt}></Image>
      <h1>{book.title}</h1>
      <Link className="link" href={`/forfatter/${book.author.slug}`}>
        <h2>{authorName}</h2>
      </Link>
      <p>{book.description}</p>
      <Link className="link" href={`/sjanger/${book.genre.slug}`}>
        {genreName}
      </Link>
      <p>Aldersgruppe: {book.ages}</p>
      <p>På lager: {book.stock}</p>
      <AddToCartButton book={book}></AddToCartButton>
    </section>
  )
}
