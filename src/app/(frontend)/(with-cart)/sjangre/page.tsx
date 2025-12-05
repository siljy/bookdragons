import config from '@/payload.config'
import { getPayload } from 'payload'
import Link from 'next/link'

export default async function GenresPage() {
  const payload = await getPayload({ config })
  const queryResult = await payload.find({
    collection: 'genres',
  })

  const genres = queryResult.docs

  return (
    <main>
      <h1>Sjangre</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <Link href={`/sjangre/sjanger/${genre.slug}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
