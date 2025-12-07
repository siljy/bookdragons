import config from '@/payload.config'
import { getPayload } from 'payload'
import Link from 'next/link'

export default async function AuthorsPage() {
  const payload = await getPayload({ config })
  const queryResult = await payload.find({
    collection: 'authors',
  })

  const authors = queryResult.docs

  return (
    <section>
      <h1>Forfattere</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <Link href={`/forfatter/${author.slug}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
