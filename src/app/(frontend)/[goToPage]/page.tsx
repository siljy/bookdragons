import config from '@/payload.config'
import '../styles.css'
import { getPayload } from 'payload'
import Link from 'next/link'

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
  })

  const { docs: books, totalPages } = queryResult

  return (
    <main>
      <h1>BookDragons bøker</h1>

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
