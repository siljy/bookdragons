import config from '@/payload.config'
import '../styles.css'
import { getPayload } from 'payload'
import Link from 'next/link'
import BookCard from '@/components/BookCard/BookCard'
import Button from '@/components/Button/Button'
import { hasThumbnail } from '@/utils/typeGuards'

type BooksPageProps = {
  params: Promise<{ goToPage: string }>
}

export default async function BooksPage({ params }: BooksPageProps) {
  const { goToPage } = await params
  const page = Number(goToPage || 1)

  const payload = await getPayload({ config })
  const queryResult = await payload.find({
    collection: 'books',
    page,
    limit: 9,
    depth: 2,
  })

  const { docs: books, totalPages } = queryResult

  return (
    <main>
      <h1>BookDragons bøker</h1>
      <section>
        {books.map((book) => {
          if (!hasThumbnail(book.cover)) {
            console.log('Bildet eksisterer ikke', book.title)
            return null
          }

          return (
            <div key={book.id}>
              <Link href={`${goToPage}/bok/${book.slug}`} key={book.id}>
                {/* Legg inn typeguard på author, sjanger og omslag siden det kommer som objekt fra
            Payload */}
                <BookCard
                  title={book.title}
                  alt={book.cover.alt}
                  cover={book.cover.sizes.thumbnail.url}
                  author={book.author.name}
                  genre={book.genre.name}
                ></BookCard>
              </Link>
              <Button
                type="button"
                variant={book.stock <= 0 ? 'disabled' : 'primary'}
                text={book.stock <= 0 ? 'Ikke på lager' : 'Legg i handlekurv'}
              ></Button>
            </div>
          )
        })}
      </section>

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
    </main>
  )
}
