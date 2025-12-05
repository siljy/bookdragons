//Viser fram forfatter
import { getPayload } from 'payload'
import config from '@payload-config'
import PresentationArticle from '@/components/PresentationArticle/PresentationArticle'

type AuthorPageParams = {
  params: Promise<{ authorSlug: string }>
}

export default async function AuthorPage({ params }: AuthorPageParams) {
  const { authorSlug } = await params
  const payload = await getPayload({ config })

  const queryResults = await payload.find({
    collection: 'authors',
    where: {
      slug: {
        equals: authorSlug,
      },
    },
  })

  const author = queryResults.docs[0]

  if (!author) {
    return (
      <div>
        Denne forfatteren finnes ikke
        {/* <Link href={'/1'}>Gå tilbake til alle bøker</Link> */}
      </div>
    )
  }

  return (
    <main>
      <PresentationArticle
        name={author.name}
        presentation={author.presentation}
        books={[]}
      ></PresentationArticle>
    </main>
  )
}
